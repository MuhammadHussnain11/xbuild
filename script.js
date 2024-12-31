// let lastScrollTop = 0;
// const header = document.querySelector('.header');

// // Function to hide the header when scrolling down, and show when scrolling 25% down the screen
// window.addEventListener('scroll', function() {
//   const scrollTop = window.scrollY || document.documentElement.scrollTop;
//   const scrollTriggerHeight = window.innerHeight * 0.25;

//   // Hide the header when scrolling down
//   if (scrollTop > lastScrollTop) {
//     header.classList.add('hidden');
//   } 
//   // Show the header again after scrolling 25% down the page
//   else if (scrollTop >= scrollTriggerHeight) {
//     header.classList.remove('hidden');
//   }

//   lastScrollTop = scrollTop;
// });



// Back-to-top Button

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 50) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


// Sticky Header 
var stickyheader = $('.stickyheader');

$(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    stickyheader.addClass('showstickyheader');
  } else {
    stickyheader.removeClass('showstickyheader');
  }
});


// Search-Bar

function opensearch() {
    const searchbar = document.querySelector('.search-container')
    searchbar.style.display = 'block'
}
function closesearch() {
    const searchbar = document.querySelector('.search-container')
    searchbar.style.display = 'none'
}


// SideBar

function opensidebar() {
    const mnavbar = document.querySelector('.sidebar-bg')
    mnavbar.style.display = 'block'

    const sidebar = document.querySelector('.sidebar-container')
    // sidebar.style.display = ''
    sidebar.style.transform= 'translateX(0)'

}
function closesidebar() {
    const mnavbar = document.querySelector('.sidebar-bg')
    mnavbar.style.display = 'none'

    const sidebar = document.querySelector('.sidebar-container')
    sidebar.style.transform = 'translateX(100%)'
}



// slider
$(document).ready(function(){
    // $('.s7_slider').slick({
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //   });

    $('.s7_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 2000,
        autoplay:true,
        autoplaySpeed: 1600,
        lazyLoad: 'ondemand',
        nextArrow:'<span class="array-prev active"><i class="fa-solid fa-arrow-left-long"></i></span>',
        prevArrow:'<span class="array-next"><i class="fa-solid fa-arrow-right-long"></i></span>',
        responsive: [
          {
            breakpoint: 1900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                speed: 2000,
                autoplay:true,
                autoplaySpeed: 1600,
                lazyLoad: 'ondemand',
                nextArrow:'false',
                prevArrow:'false',
            }
          },
          {
            breakpoint: 992,
            settings: {
                mobileFirst: 'true',
                // vertical: 'true',
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 3000,
                autoplay:true,
                autoplaySpeed: 1600,
                lazyLoad: 'ondemand',
                nextArrow:'false',
                prevArrow:'false',
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
  });

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



function bigImg(x) {
    x.style.width = "370px";
  }
  
  function normalImg(x) {
    x.style.height = "310px";
    x.style.width = "170px";
  }
  