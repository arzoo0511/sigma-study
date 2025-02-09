
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const leftNav = document.querySelector('.leftnav');
const rightNav = document.querySelector('.rightnav');
const form = document.querySelector('.form');
const darkModeToggle = document.createElement('button');

burger.addEventListener('click', () => {
    leftNav.classList.toggle('v-class-resp');
    rightNav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-class-resp');
});


document.querySelectorAll('.leftnav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.querySelector("input[type='email']").value.trim();
    const phone = document.querySelector("input[type='Phone']").value.trim();
    const message = document.getElementById('text').value.trim();

    if (name === '' || email === '' || phone === '' || message === '') {
        alert('Please fill in all fields!');
        return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email address!');
        return;
    }
    
    if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number!');
        return;
    }

    alert('Your request has been submitted successfully!');
    form.reset();
});


darkModeToggle.textContent = '🌙 Dark Mode';
darkModeToggle.classList.add('dark-mode-btn');
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️ Light Mode';
    } else {
        darkModeToggle.textContent = '🌙 Dark Mode';
    }
});
