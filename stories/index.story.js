import React from "react";
import { storiesOf } from "@storybook/react";
import { withStorySource } from "@storybook/addon-storysource";

const source = `<button class="button-primary">Primary</button>
<button class="button-success">Success</button>
<button class="button-danger">Danger</button>
<button class="button-warning">Warning</button>
<button class="button-info">Information</button>
`;

storiesOf("Button", module)
  .addDecorator(withStorySource(source))
  .add("primary", () => <button className="button-primary">Primary</button>)
  .add("success", () => <button className="button-success">Success</button>)
  .add("info", () => <button className="button-info">Info</button>)
  .add("warning", () => <button className="button-warning">Warning</button>)
  .add("danger", () => <button className="button-danger">Danger</button>);
