

let images = [{
    url: "img/pic-1.png",
    title: "Rostov-on-Don, Admiral"
}, {
    url: "img/pic-2.png",
    title: "Sochi Thieves"
}, {
    url: "img/pic-3.png",
    title: "Rostov-on-Don Patriotic"
}]; 

function initSlider(options) {
    if (!images || !images.length) return;
    
    options = options || {
      dots: true,
      titles: true,
    };
    
    let sliderImages = document.querySelector(".slider__images");
    let sliderArrows = document.querySelector(".slider__arrows");
    let sliderDots = document.querySelector(".slider__dots");
    let sliderTitle = document.querySelector(".projects-list");

   

    
    
    initImages();
    initArrows(); 

    if (options.dots) {
        initDots();
      }
    if (options.titles) {
        initTitle();
    }

    
        
    function initImages() {
      images.forEach((image, index) => {
        let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
        sliderImages.innerHTML += imageDiv;
      });
    }
    
    function initArrows() {
      sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
        arrow.addEventListener("click", function() {
          let curNumber = +sliderImages.querySelector(".active").dataset.index;
          let nextNumber;
          if (arrow.classList.contains("left")) {
            nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
          } else {
            nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
          }
          moveSlider(nextNumber);
        });
      });
    }
    
    function initDots() {
      images.forEach((image, index) => {
        let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
        sliderDots.innerHTML += dot;
      });
      sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
        dot.addEventListener("click", function() {
          moveSlider(this.dataset.index);
        })
      })
    }    

    function initTitle() {
        images.forEach((image, index) => {
            let title = `<div class="projects-item n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].title}</div>`;
            sliderTitle.innerHTML += title;
          });
          sliderTitle.querySelectorAll(".projects-item").forEach(title => {
            title.addEventListener("click", function() {
              moveSlider(this.dataset.index);
            })
          })
    }
    
    
    function moveSlider(num) {
      sliderImages.querySelector(".active").classList.remove("active");
      sliderImages.querySelector(".n" + num).classList.add("active");
      if (options.dots) {
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");
      }   
      if (options.titles) {
        sliderTitle.querySelector(".active").classList.remove("active");
        sliderTitle.querySelector(".n" + num).classList.add("active");
      }     
    }
             
 }  
 let sliderOptions = {
    dots: true,
    titles: true,
  };
  
  
  document.addEventListener("DOMContentLoaded", function() {
    initSlider(sliderOptions);
  });