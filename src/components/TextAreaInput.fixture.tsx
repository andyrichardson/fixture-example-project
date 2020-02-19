import React from "react";
import { TextAreaInput } from "./TextAreaInput";
import { Main } from "./Main";
import { ValidationError } from "./ValidationError";

export default {
  text: (
    <Main>
      <TextAreaInput placeholder="Enter name" />
    </Main>
  ),
  invalid: (
    <Main>
      <TextAreaInput aria-invalid value="invalid value" />
      <ValidationError>Field is not valid</ValidationError>
    </Main>
  )
};
