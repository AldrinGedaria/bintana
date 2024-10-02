const Hamburger = document.querySelector('.nav_list-mobile');
    const navMenu = document.querySelector('.mobile_nav_wrapper');
    
    Hamburger.addEventListener('click', () => {
        Hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    document.querySelectorAll('.list').forEach(n => n.addEventListener('click', () => {
        Hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
    
    window.addEventListener('scroll', () => {
        Hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });



    function updateClock() {
      var now = new Date();
    
      var optionsFullYear = { year: 'numeric' };
      var fullYear = now.toLocaleDateString('en-PH', optionsFullYear);
      document.getElementById('year').textContent = fullYear;
    }
    setInterval(updateClock, 1000);
    
    updateClock();


    const slides = document.querySelector('.testimonial-item-wrapper');
    const slidesArray = gsap.utils.toArray('.testimonial-item');
    const slideCount = slidesArray.length;
    let currentIndex = 0;

const gapInRem = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--grid-gap--main'));
const gap = gapInRem * parseFloat(getComputedStyle(document.documentElement).fontSize);

function slideTo(index) {
  const totalWidth = (100 + (gap / slidesArray[0].offsetWidth) * 100) * index; 
  gsap.to(slides, { xPercent: -totalWidth, duration: 0.75, ease: 'power1.inOut' });
}

document.getElementById('PrevSlide').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    slideTo(currentIndex);
  }
});

document.getElementById('NextSlide').addEventListener('click', () => {
  if (currentIndex < slideCount - 1) {
    currentIndex++;
    slideTo(currentIndex);
  }
});

    