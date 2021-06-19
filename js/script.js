if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  document.getElementById("css").href = "css/mobile.css";
};

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