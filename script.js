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
