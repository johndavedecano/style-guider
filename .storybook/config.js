import { configure } from "@storybook/react";

import "./../src/main.scss";

function loadStories() {
  require("../stories/index.story.js");
  require("../stories/blockquotes.story.js");
  require("../stories/typography.story.js");
  // You can require as many stories as you need.
}

configure(loadStories, module);
