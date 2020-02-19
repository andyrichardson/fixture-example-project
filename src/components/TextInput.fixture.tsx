import React from "react";
import { TextInput } from "./TextInput";
import { Main } from "./Main";

export default {
  text: (
    <Main>
      <TextInput type="text" placeholder="Enter name" />
    </Main>
  ),
  password: (
    <Main>
      <TextInput type="password" value="pass" />
    </Main>
  ),
  invalid: (
    <Main>
      <TextInput aria-invalid value="invalid value" />
    </Main>
  )
};
