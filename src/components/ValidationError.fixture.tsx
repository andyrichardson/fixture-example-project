import React from "react";
import { ValidationError } from "./ValidationError";
import { Main } from "./Main";

export default {
  basic: (
    <Main>
      <ValidationError>Something went wrong</ValidationError>
    </Main>
  )
};
