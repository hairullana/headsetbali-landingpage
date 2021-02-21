var slide = 1;

function showSlide(indexslide) {
  const slides = document.getElementsByClassName('carousel');
  if (indexslide > slides.length) { slide = 1 }
  if (indexslide < 1) { slide = slides.length }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[slide - 1].style.display = 'flex'
}


function nextSlide() {
  showSlide(slide += 1);
}

function show(slide) {
  if (slide == 1){
    location.href = '#akg'
  }else if (slide == 2){
    location.href = '#cas-xiaomi'
  }else if (slide == 3){
    location = href = "#jbl"
  }else if (slide == 4){
    location.href = "#piston"
  }else if (slide == 5){
    location.href = "#realme"
  }else if (slide == 6){
    location.href = "#samsung"
  }else if (slide == 7){
    location.href = "#sport"
  }else if (slide == 8){
    location.href = "#usb"
  }
  // document.getElementById('keterangan').innerHTML = html;
}

window.onload = function () {
  showSlide(slide);
  document.getElementById('detil').addEventListener('click', function () {
    show(slide);
  })
  document.getElementById('next').addEventListener('click', function () {
    nextSlide();
  })
}