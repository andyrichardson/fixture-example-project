import React from "react";
import { Button } from "./Button";
import { Main } from "./Main";

const fixture = {
  primary: (
    <Main>
      <Button>Primary button</Button>
    </Main>
  ),
  secondary: (
    <Main>
      <Button kind="secondary">Secondary button</Button>
    </Main>
  ),
  alternate: (
    <Main>
      <Button kind="alternate">Alternate button</Button>
    </Main>
  )
};

export default fixture;
