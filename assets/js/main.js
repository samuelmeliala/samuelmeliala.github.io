/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img, .work__subtitle',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .project, .contact__input, .contact__subtitle',{interval: 200}); 


/*===== TYPEWRITTER EFFECT =====*/
document.addEventListener("DOMContentLoaded", function () {
    const texts = ["Mobile", "Front-End"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 50;
    const delayAfterTyping = 1500;

    function type() {
        currentText = texts[count % texts.length];

        if (isDeleting) {
            // Delete characters
            letter = currentText.slice(0, --index);
        } else {
            // Add characters
            letter = currentText.slice(0, ++index);
        }

        document.querySelector(".typewriter").textContent = letter;

        if (!isDeleting && letter.length === currentText.length) {
            // Pause at the end of the full text before deleting
            setTimeout(() => {
                isDeleting = true;
                setTimeout(type, deletingSpeed); // Restart typing after delay
            }, delayAfterTyping);
            return;
        } else if (isDeleting && letter.length === 0) {
            // Move to the next text and start typing again
            isDeleting = false;
            count++;
        }

        // Continue typing/deleting
        const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(type, currentSpeed);
    }

    // Start typing on page load
    setTimeout(type, typingSpeed);
});
