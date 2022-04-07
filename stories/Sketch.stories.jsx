import React, { useEffect, createRef } from "react"
import p5 from "p5"

export const Sketch = (args) => {
  const sketchRef = createRef()

  const sketch = (p) => {
      const { offsetWidth, offsetHeight } = sketchRef.current
      let location = p.createVector(0, 0, 0)
      let velocity = p.createVector(3, 3, 0)
      let size = 40

      p.setup = () => {
          p.createCanvas(offsetWidth, offsetHeight, p.WEBGL)
          p.background(50)
      }

      p.draw = () => {
          p.background(50)

          location.add(velocity)

          if (
              (location.x > (offsetWidth/4)) ||
              (location.x < -(offsetWidth/4))
          ) {
              velocity.x = velocity.x * -1
          }
          
          if (
              (location.y > (offsetHeight/4) - size) ||
              (location.y < -(offsetHeight/4) + size)
          ) {
              velocity.y = velocity.y * -1
          }
          
          // if (location.z > 0 || location.z < -500) {
          //     velocity.z = velocity.z * -1
          // }

          p.push()
              p.rotateY(100)
              p.rotateX(50)
              p.noFill()
              p.box(offsetWidth > offsetHeight ? offsetWidth/4 : offsetHeight/4)
          p.pop()

          p.push()
              p.translate(location)
              p.sphere(size)
          p.pop()
      }
  }

  useEffect(() => {
      new p5(sketch, sketchRef.current)
  })

  return <div ref={sketchRef} style={args.style}></div>
}

// How story renders
export default {
  title: 'Sketches/Sketch',
  component: Sketch
};

// Controls for story
Sketch.args = {
  style: {
      width: "100%",
      height: "100%"
  }
};