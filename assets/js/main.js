/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*menu show*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*menu hidden*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TYPED JS ===============*/
const homeTypedEl = document.getElementById('home-typed')
if (homeTypedEl) {
    new Typed('#home-typed', {
        strings: ['Project Manager', 'Quality Assurance Engineer', 'Software Engineer','Content Writer'],
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 2000,
        loop: true,
        cursorChar: '|',
    })
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    if (!header) return
    window.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== CONTACT EMAIL JS ===============*/ 
const contactForm = document.getElementById('contact-form'),
        contactmessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

            /*The code for sending emails is a sample test.

        Create your account at https://www.emailjs.com/ 
        and follow the instructions in the video and images 
        to send emails with your account.
        */

        // serviceID - templateID - #form - publicKey

        emailjs.sendForm('service_xwc9kjl', 'template_o2w18pc', '#contact-form', {publicKey: 'UuSSpY5DCkw2ibQH0'})
    .then(() =>{
        //show sent message
    contactmessage.textContent = 'Message sent successfully ✅'

    //remove message after 5 seconds
    setTimeout(() =>{
        contactmessage.textContent = ''
    }, 5000)

    //clear input fields
    contactForm.reset()
    }, () =>{
        //show error message
    contactmessage.textContent = 'Message not sent (service error) ❌'
    })
}
if (contactForm) {
    contactForm.addEventListener('submit', sendEmail)
}


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    if (!scrollUp) return
    window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')
        const sectionclass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (!sectionclass) return

        if(scrollDown >= sectionTop && scrollDown < sectionTop + sectionHeight){
            sectionclass.classList.add('active-link')
        }else{
            sectionclass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration:2000,
   // reset: true,
})

sr.reveal('.home__content, .resume__content:nth-child(1), .footer__container')
sr.reveal('.home__data, .resume__content:nth-child(2)', {delay: 300, origin: 'bottom'})

sr.reveal('.about__content, .contact__content', {origin: 'bottom'})
sr.reveal('.about__image, .contact__form', {delay:300})

sr.reveal('.projects__card', {interval: 100})

/*=============== PROJECT DETAIL PAGE ===============*/
if (document.querySelector('.project-detail')) {
    sr.reveal('.project-detail__section', {origin: 'bottom', interval: 120})
    sr.reveal('.project-detail__back', {origin: 'top', distance: '30px'})
}

/*=============== RESUME TABS ===============*/
const resumeTabs = document.querySelectorAll(".resume__tab");
const resumePanels = document.querySelectorAll(".resume__panel");

if (resumeTabs.length && resumePanels.length) {
    resumeTabs.forEach(tab => {
        tab.addEventListener("click", () => {

            resumeTabs.forEach(t => t.classList.remove("active-tab"));
            tab.classList.add("active-tab");

            resumePanels.forEach(panel => panel.classList.remove("active-panel"));

            const target = document.getElementById("panel-" + tab.dataset.target);
            if (target) {
                target.classList.add("active-panel");
            }
        });
    });
}
/*=============== SKILL BAR ANIMATION ===============*/
const skills = document.querySelectorAll(".skill__fill");

function animateSkills() {
  skills.forEach(skill => {
    skill.style.width = skill.dataset.width + "%";
  });
}

window.addEventListener("load", animateSkills);