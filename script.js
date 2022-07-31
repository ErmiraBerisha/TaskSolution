const container = document.querySelector('.container');


container.addEventListener('mouseenter', () => {
    if(!container.classList.contains('hover')){
        container.classList.add('hover');

    }
});

container.addEventListener('mouseleave', () => {
    if(container.classList.contains('hover')){
        container.classList.remove('hover');

    }
});
 

  function toggleMenu() {
    let menuBox = document.getElementById('menu-box');    
    if(menuBox.style.display == "block") { 
      menuBox.style.display = "none";
    }
    else { 
      menuBox.style.display = "block";
    }
  }


let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
