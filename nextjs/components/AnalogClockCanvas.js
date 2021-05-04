import React, { useEffect } from 'react'

export default function AnalogClockCanvas({props }) {
  const loadWASM = async () => {
    const script = document.createElement("script");
    script.src = "qtloader.js";
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      var spinner = document.querySelector('#qtspinner');
      var canvas = document.querySelector('#qtcanvas');
      var status = document.querySelector('#qtstatus')
      var qtLoader = QtLoader({
        canvasElements : [canvas],
        showLoader: function(loaderStatus) {
            spinner.style.display = 'block';
            canvas.style.display = 'none';
            status.innerHTML = loaderStatus + "...";
        },
        showError: function(errorText) {
            status.innerHTML = errorText;
            spinner.style.display = 'block';
            canvas.style.display = 'none';
        },
        showExit: function() {
            status.innerHTML = "Application exit";
            if (qtLoader.exitCode !== undefined)
                status.innerHTML += " with code " + qtLoader.exitCode;
            if (qtLoader.exitText !== undefined)
                status.innerHTML += " (" + qtLoader.exitText + ")";
            spinner.style.display = 'block';
            canvas.style.display = 'none';
        },
        showCanvas: function() {
            spinner.style.display = 'none';
            canvas.style.display = 'block';
        },
    });
    qtLoader.loadEmscriptenModule("analogclock");
    }
 }

  useEffect(() => {
    loadWASM();
}, []);

  return (
    <div>
      <figure style={{"overflow": "visible"}} id="qtspinner">
        <center style={{"marginTop" : "1.5em", "lineHeight": "150%"}}>
          <img src="qtlogo.svg" width="320" height="200" style={{"display": "block"}}></img>
          <strong>Qt for WebAssembly: analogclock</strong>
          <div id="qtstatus"></div>
          <noscript>JavaScript is disabled. Please enable JavaScript to use this application.</noscript>
        </center>
      </figure>
      <canvas
        id="qtcanvas"
        contentEditable="true"
        onContextMenu={(e) => e.preventDefault()}
        style={{width: "100vw", height: "100vh"}}
        {...props}>
      </canvas>
    </div>
  )
}
