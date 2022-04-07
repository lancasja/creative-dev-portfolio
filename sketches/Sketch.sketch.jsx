import React from 'react';

import { Sketch as SketchComponent } from './Sketch';

export default {
  title: 'Sketches/Sketch',
  component: SketchComponent
};

export const Sketch = (args) => <SketchComponent {...args} />;

Sketch.args = {
  style: {
      width: "100%",
      height: "100%"
  }
};