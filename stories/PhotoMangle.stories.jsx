import React, { useEffect, createRef, useState } from "react"
import p5 from "p5"
import imgSoloJam from './assets/solo-jam.png'
import imgNordMacro from './assets/nord-macro.png'

export const PhotoMangle = (args) => {
  const sketchRef = createRef()

  const sketch = (p) => {
      const { offsetWidth, offsetHeight } = sketchRef.current

      let img

      p.preload = () => {
        img = p.loadImage(imgSoloJam)
        // img = p.loadImage(imgNordMacro)
      }

      p.setup = () => {
        p.createCanvas(offsetWidth, offsetHeight)
        p.background(250)

        p.translate(offsetWidth/2 - img.width/2, offsetHeight/2 - img.height/2)
        p.stroke(22)
        p.strokeWeight(20)
        const pad = 200

        for(let col = 0; col < img.width; col += 4) {
          for (let row = 0; row < img.height; row += 4) {
            const c = img.get(col, row)

            p.push()
              p.translate(col, row)
              p.rotate(p.radians(p.random(360)))
              p.noFill()
              
              p.stroke(c)
              p.strokeWeight(p.random(3))
              p.curve(
                /* x1 */ col,
                /* y2 */ row,
                /* x2 */ p.sin(col) * p.random(60),
                /* y2 */ p.cos(col) * p.sin(col) * p.random(90),
                /* x3 */ p.random(10),
                /* y3 */ p.random(80),
                /* x4 */ p.cos(row) * p.sin(row) * p.random(140),
                /* y4 */ p.cos(col) * p.sin(col) * 50
              );

              p.stroke(
                [
                  ...(c.slice(0, 3).reverse()),
                  p.random(100, 255)
                ]
              )
              p.strokeWeight(p.random(3))
              p.rect(
                p.random(pad/2),
                p.random(pad/2),
                p.random(8),
                p.random(8)
              )
            p.pop()
          }
        }
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
  title: 'Sketches/Photo Mangle',
  component: PhotoMangle
};

// Controls for story
PhotoMangle.args = {
  style: {
    width: "100%", height: "100%"
  }
}
