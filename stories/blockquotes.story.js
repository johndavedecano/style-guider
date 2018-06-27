import React from "react";
import { storiesOf } from "@storybook/react";
import { withStorySource } from "@storybook/addon-storysource";

const source = `<blockquote>
<p>
  <em>Blockquotes create emphasis on a topic or idea.</em>
</p>
</blockquote>
`;

storiesOf("Blockquotes", module)
  .addDecorator(withStorySource(source))
  .add("usage", () => (
    <blockquote>
      <p>
        <em>Blockquotes create emphasis on a topic or idea.</em>
      </p>
    </blockquote>
  ));
