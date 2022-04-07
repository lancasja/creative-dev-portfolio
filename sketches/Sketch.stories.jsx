import React from 'react';

import { Sketch } from './Sketch';

export default {
  title: 'Example/Sketch',
  component: Sketch,
};

const Template = (args) => <Sketch {...args} />;

export const Main = Template.bind({});
Main.args = {
  style: {
      width: "100%",
      height: "100%"
  }
};

