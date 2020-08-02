function spin() {
  var image = document.getElementById("seba");
  
  if (image.innerHTML === '<img src = "img/seba.png" width = "150px" alt = "seba"') {
    image.innerHTML = '<img src = "img/seba_spin.gif" width = "200px" alt = "seba">'
  } else {
    image.innerHTML = '<img src = "img/seba.png" width = "150px" alt = "seba">';
  }
}