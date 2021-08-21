let mode = 'desktop';

window.onload = checkDevice;
window.onresize = checkDevice;

function checkDevice() {
  if (mode === 'desktop') {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      mode = 'mobile';
      return document.getElementById("css").href = "css/mobile.css";
    } else if (window.innerHeight >= window.innerWidth) {
      mode = 'mobile';
      return document.getElementById("css").href = "css/mobile.css";
    };
  } else {
    if (window.innerHeight <= window.innerWidth) {
      mode = 'desktop';
      return document.getElementById("css").href = "css/style.css";
    };
  };
}

var line = true;
var terminal = setInterval(function() {
  if (line) {
    document.getElementById("terminalLine").innerHTML = "i code things&nbsp;";
    line = false;
  } else {
    document.getElementById("terminalLine").innerHTML = "i code things_";
    line = true;
  }
}, 500);
