// header scroll effect
window.addEventListener('scroll', function scrollHeader(){
    const header = document.querySelector('.header')
    if(this.scrollY >= 50){
        header.classList.add('scroll-header')
    }else{
        header.classList.remove('scroll-header')
    }
})

// display the page from the top on referesh action
window.onload = () => {
  window.scrollTo(0, 0)
}

// Swiper navigation
var swiper = new Swiper(".popular-container", {
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      resize: function () {
        if (window.innerWidth < 570 ) {
          this.params.slidesPerView = 1; 
        } 
        else if (window.innerWidth < 776 ) {
          this.params.slidesPerView = 2; 
        } 
        else {
          this.params.slidesPerView = 3; 
        }
        this.update(); 
      },
    },
  })

// accordion effect
const accordidonItems = document.querySelectorAll('.value__accordion-item');
accordidonItems.forEach((item) => {
  const header = item.querySelector('#header')
  const arrow = item.querySelector("#arrow")
  const description = item.querySelector('.value__acordion-description')
  header.addEventListener('click', function(){
    description.classList.toggle('value__acordion-description-extended')
    item.classList.toggle('accordion-open')
    arrow.classList.toggle('arrow-up')
  })
})


// Scroll active link
const sections = document.querySelectorAll('section[id]')
const scrollActive = () =>{
  const scrollDown = window.scrollY

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight // section height
		const sectionTop = current.offsetTop - 50// distance between top of the page and begining of the section
		const sectionId = current.getAttribute('id')
		const sectionsClass = document.querySelector('.nav-item a[href*=' + sectionId + ']')
    const navText = document.querySelector('.nav-item a[href="' + '#' + sectionId + '"] .'+sectionId+'-span')

    if(window.innerWidth < 1024){
      if(scrollDown >= sectionTop && scrollDown <= sectionHeight + sectionTop){
        sectionsClass.classList.add('active-link')
      }
      else{
        sectionsClass.classList.remove('active-link')
      }  
    }
    else{
      if(scrollDown >= sectionTop && scrollDown <= sectionHeight + sectionTop){
        navText.classList.add('active-link2')
      }
      else{
        navText.classList.remove('active-link2')
      } 
    }
	})
}
window.addEventListener('scroll', scrollActive)

// scroll-up button
const scrollUpButton = document.querySelector('.scroll-up')
window.addEventListener('scroll', function toggleButton(){
  if(this.scrollY < 600){
    scrollUpButton.classList.add('scroll-up-disappear')
  }
  else{
    scrollUpButton.classList.remove('scroll-up-disappear')
  }
})

// dark mode 
const modesButton = document.querySelector('#modes-button');
const body = document.body;
body.classList.add('dark-theme')

const toggleTheme = () => {
  modesButton.classList.toggle('bx-sun')
  body.classList.toggle('dark-theme')

  // Save the theme state to local storage
  const isDarkTheme = body.classList.contains('dark-theme')
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light')
}

modesButton.addEventListener('click', toggleTheme)

const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'light'){
  toggleTheme()
}

// scroll reveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

scrollReveal.reveal('.home-title')
scrollReveal.reveal('.popular-container')
scrollReveal.reveal('.home-description', {delay: 500})
scrollReveal.reveal('.home-search', {delay: 600})
scrollReveal.reveal('.home-value', {delay: 700})
scrollReveal.reveal('.home-images', {origin: 'bottom'})
scrollReveal.reveal('.logos-box')
scrollReveal.reveal('.test', {origin: 'left'})
scrollReveal.reveal('.test-info2', {origin: 'left'})
scrollReveal.reveal('.test2', {origin: 'right'})
scrollReveal.reveal('.test-info', {origin: 'right'})
scrollReveal.reveal('.subscribe', {origin: 'top'})





