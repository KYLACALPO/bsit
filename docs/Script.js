// Smooth Scrolling for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Back-to-Top Button
const backToTop = document.createElement('button');
backToTop.innerText = "↑";
backToTop.style.position = 'fixed';
backToTop.style.bottom = '20px';
backToTop.style.right = '20px';
backToTop.style.padding = '10px 15px';
backToTop.style.border = 'none';
backToTop.style.borderRadius = '50%';
backToTop.style.background = 'rgb(36, 32, 30)';
backToTop.style.color = '#fff';
backToTop.style.cursor = 'pointer';
backToTop.style.display = 'none';
document.body.appendChild(backToTop);

// Show/Hide Back-to-Top Button
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// Scroll to Top Functionality
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form Validation
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();

        if (!name || !email || !message) {
            e.preventDefault();
            alert("Please fill in all fields.");
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            e.preventDefault();
            alert("Please enter a valid email address.");
        } else {
            alert("Thank you for your message!");
        }
    });
}