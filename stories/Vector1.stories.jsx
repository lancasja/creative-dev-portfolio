import React, { useEffect, createRef } from "react"
import p5 from "p5"

export const Vector1 = (args) => {
  const sketchRef = createRef()

  const sketch = (p) => {
      const { offsetWidth, offsetHeight } = sketchRef.current
      let m

      class Mover {
        constructor() {
          this.location = p.createVector(p.random(offsetWidth), p.random(offsetHeight))
          this.velocity = p.createVector(p.random(-2, 2), p.random(-2, 2))
        }

        update() {
          this.location.add(this.velocity)
        }

        display() {
          p.stroke(255)
          p.fill(200)
          p.ellipse(this.location.x, this.location.y, 100, 100)
        }

        checkEdges() {
          if (this.location.x > offsetWidth) {
            this.location.x = 0
          } else if (this.location.x < 0) {
            this.location.x = offsetWidth
          }
          
          if (this.location.y > offsetHeight) {
            this.location.y = 0
          } else if (this.location.y < 0) {
            this.location.y = offsetHeight
          }
        }
      }

      p.setup = () => {
          p.createCanvas(offsetWidth, offsetHeight)
          p.background(50)
          p.noCursor()
          p.rectMode(p.CENTER)
          m = new Mover()
      }

      p.draw = () => {
          p.background(50)
          m.update()
          m.checkEdges()
          m.display()
      }
  }

  useEffect(() => {
      new p5(sketch, sketchRef.current)
  })

  return (
    <div ref={sketchRef} style={{ ...args.style }}></div>
  )
}

// How story renders
export default {
  title: 'Sketches/Vector 1',
  component: Vector1
};

// Controls for story
Vector1.args = {
  style: {
    width: "100%", height: "100%"
  }
}
