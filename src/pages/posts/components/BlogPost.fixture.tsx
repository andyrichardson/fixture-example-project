import React from "react";
import { BlogPost } from "./BlogPost";
import { Main } from "../../../components";

export default {
  basic: (
    <Main>
      <BlogPost id={2} title="Post title" content="Hello world" />
    </Main>
  )
};
