const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  
  // Add a click event listener to the links you want to scroll smoothly
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        lenis.scrollTo(targetElement.offsetTop);
      }
    });
  });
  
  requestAnimationFrame(raf);
   
// Select the parent div and child div
const parentDiv = document.querySelector('.quote-btn a');
const childDiv = document.querySelector('.buzz');

// Add event listener for click on the parent div
parentDiv.addEventListener('click', () => {
    // Add the 'shake' class to the child div
    childDiv.classList.add('shake');
    
    // Remove the 'shake' class after the animation ends
    setTimeout(() => {
        childDiv.classList.remove('shake');
    }, 500); // 500ms corresponds to the duration of the animation
});



  const splitTypes = document.querySelectorAll('.about-text h4')

  splitTypes.forEach((char,i) => {
  
      const bg = char.dataset.bgColor
      const fg = char.dataset.fgColor
  
      const text = new SplitType(char, { types: 'chars, words'})
  
      gsap.fromTo(text.chars, 
          {
              color: bg,
          },
          {
              color: fg,
              stagger: .1,
              scrollTrigger: {
                  trigger: '#about-section',
                  start: 'top 90%',
                  end: 'bottom center',
                  scrub: true,
                  toggleActions: 'play play reverse reverse'
              }
      })
  });


  document.querySelectorAll(".toggle").forEach(toggle => {
    toggle.onclick = () => {
  
        const content = toggle.nextElementSibling;
        const isExpanded = content.classList.contains("expanded");
  
        document.querySelectorAll(".content").forEach(c => c.classList.remove("expanded"));
  
        if (!isExpanded) {
            content.classList.add("expanded");
        }
    };
  });