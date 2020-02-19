import React, {
  FC,
  useMemo,
  useCallback,
  ComponentProps,
  useEffect
} from "react";
import { useForm, FielderProvider, useField, useFormContext } from "fielder";
import {
  Card,
  TextInput,
  Button,
  Modal,
  ValidationError,
  TextAreaInput
} from "../../../components";
import styled from "styled-components";
import gql from "graphql-tag";
import { useMutation } from "urql";

type FormProps = ComponentProps<typeof Modal>;

export const CreatePostForm: FC<FormProps> = modalProps => {
  const formState = useForm();

  return (
    <FielderProvider value={formState}>
      <FormContent {...modalProps} />
    </FielderProvider>
  );
};

export const FormContent: FC<FormProps> = modalProps => {
  const formState = useFormContext();
  const [createPostState, createPost] = useMutation(gql`
    mutation CreatePost($title: String!, $content: String!) {
      createPost(title: $title, content: $content) {
        id
        title
        content
      }
    }
  `);

  useEffect(() => {
    if (createPostState.data && modalProps.onClose) {
      modalProps.onClose();
    }
  }, [createPostState.data, modalProps.onClose]);

  const [titleProps, titleMeta] = useField({
    name: "title",
    validate: validateTitle
  });
  const [contentProps, contentMeta] = useField({
    name: "content",
    validate: validateContent
  });

  const titleError = useMemo(() => titleMeta.hasBlurred && titleMeta.error, [
    titleMeta
  ]);
  const contentError = useMemo(
    () => contentMeta.hasBlurred && contentMeta.error,
    [contentMeta]
  );

  const handleSubmit = useCallback(() => {
    if (!formState.isValid) {
      return;
    }

    const variables = Object.entries(formState.fields).reduce(
      (p, [key, field]) => ({
        ...p,
        [key]: field.value
      }),
      {}
    );

    createPost(variables);
  }, [formState, createPost]);

  return (
    <WideModal {...modalProps}>
      <h1>Create post</h1>

      <TextInput
        type="text"
        placeholder="Title"
        aria-invalid={Boolean(titleError)}
        {...titleProps}
      />
      <ValidationError>{titleError}</ValidationError>

      <TextAreaInput
        placeholder="Content"
        aria-invalid={Boolean(contentError)}
        {...contentProps}
      />
      <ValidationError>{contentError}</ValidationError>

      <ButtonRow>
        <Button kind="alternate" onClick={modalProps.onClose}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Create</Button>
      </ButtonRow>
    </WideModal>
  );
};

const WideModal = styled(Modal)`
  width: 400px;
`;

const ButtonRow = styled.div`
  display: flex;
  margin-left: auto;
`;
const SubmitButton = styled(Button)`
  margin-top: 20px;
  margin-left: auto;
`;

const validateTitle = (value?: string) => {
  if (!value) {
    throw Error("Title is required!");
  }

  if (value.length < 4) {
    throw Error("Title must be at least 4 characters long!");
  }
};

const validateContent = (value?: string) => {
  if (!value) {
    throw Error("Content is required!");
  }

  if (value.length < 10) {
    throw Error("Content must be at least 10 characters long!");
  }
};
