import React from "react";
import { storiesOf } from "@storybook/react";
import { withStorySource } from "@storybook/addon-storysource";

const source = `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 6</h5>
<h6>Heading 6</h6>
<p>
  Paragraph Text with <strong>strong</strong> and <em>em styling</em>
</p>
<p className="magnify">
  You can even use the magnify class to provide a better reading experience.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero deleniti
  dignissimos debitis laudantium earum assumenda odit rem ratione error
  quisquam, sit esse corporis deserunt aliquid?
</p>
`;

storiesOf("Typography", module)
  .addDecorator(withStorySource(source))
  .add("usage", () => (
    <div>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 6</h5>
      <h6>Heading 6</h6>
      <p>
        Paragraph Text with <strong>strong</strong> and <em>em styling</em>
      </p>
      <p className="magnify">
        You can even use the magnify class to provide a better reading
        experience. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Vero deleniti dignissimos debitis laudantium earum assumenda odit rem
        ratione error quisquam, sit esse corporis deserunt aliquid?
      </p>
    </div>
  ));
