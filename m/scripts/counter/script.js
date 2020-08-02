function count() {
  var startCount = document.getElementById('countdown').innerHTML;
  startCount++;
  document.getElementById('countdown').innerHTML = startCount;
};

function reset() {
  document.getElementById('countdown').innerHTML = '0';
}
