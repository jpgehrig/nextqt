import React, { useRef, useEffect } from 'react'
import AnalogClock from './AnalogClock'
import AnalogClockWASM from './AnalogClock.wasm'

export default function QtApp({ props }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    AnalogClock({
      qtCanvasElements: [canvasRef.current],
      locateFile: () => {
        return AnalogClockWASM
      },
    }).then((instance) => {
      console.log('AnalogClock loaded')
    })
  })

  return (
    <canvas
      id="qtcanvas"
      contentEditable="true"
      onContextMenu={(e) => e.preventDefault()}
      style={{ background: 'blue' }}
      width="500"
      height="500"
      ref={canvasRef}
      {...props}
    ></canvas>
  )
}
