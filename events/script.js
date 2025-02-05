// Add parallax effect to grid background
// noinspection DuplicatedCode,JSUnusedLocalSymbols

document.addEventListener('mousemove', (e) => {
    const grid = document.querySelector('.grid-bg');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    grid.style.transform = `rotate(-45deg) translate(${x * 20}px, ${y * 20}px)`;
});

// Add glitch effect on hover
document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const title = card.querySelector('h3');
        title.style.animation = 'glitch 500ms infinite';
    });
    card.addEventListener('mouseleave', () => {
        const title = card.querySelector('h3');
        title.style.animation = 'none';
    });
});

// Highlight active section in navbar
const sections = document.querySelectorAll('.content, .hero');
const navLinks = document.querySelectorAll('.nav-link');

// Function to update active link
const updateActiveLink = () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--neon-blue)';
        } else {
            link.style.color = 'white';
        }
    });
};

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default jump behavior

        window.location.href = this.getAttribute('href'); // Redirect to external URL
    });
});

// // Add scroll event listener
// window.addEventListener('scroll', updateActiveLink);
//
// // Add click event listeners for smooth scrolling
// navLinks.forEach(link => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         const targetId = link.getAttribute('href');
//         document.querySelector(targetId).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// Event card expansion
document.querySelectorAll('.event-card').forEach(card => {
    // Expansion toggle
    card.addEventListener('click', (e) => {
        // Don't toggle if clicking register button
        if (e.target.classList.contains('register-btn')) return;
        // Toggle expanded class
        card.classList.toggle('expanded');
        // Update icon
        const icon = card.querySelector('.expand-icon');
        icon.textContent = card.classList.contains('expanded') ? '×' : '+';
        // Add glitch effect on toggle
        const title = card.querySelector('h3');
        title.style.animation = 'glitch 500ms';
        setTimeout(() => {
            title.style.animation = 'none';
        }, 500);
    });
    // Keyboard accessibility
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
    // Make cards focusable
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');

    // Hover effects for title
    const title = card.querySelector('h3');
    card.addEventListener('mouseenter', () => {
        title.style.textShadow = `0 0 10px var(--neon-blue)`;
    });
    card.addEventListener('mouseleave', () => {
        title.style.textShadow = 'none';
    });
});

// Optional: Close other cards when one is opened
document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.classList.contains('register-btn')) return;
        document.querySelectorAll('.event-card').forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('expanded');
                otherCard.querySelector('.expand-icon').textContent = '+';
            }
        });
    });
});


// Scroll Indicator
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    scrollProgress.style.width = `${(scrollPx / winHeightPx) * 100}%`;
});

document.querySelectorAll('.register-btn').forEach(card => {
    card.addEventListener('click', (e) => {
        location.href = "../../oops";
    })
})

// Add countdown timer functionality
function updateCountdown() {
    const eventDate = new Date('2025-02-20T09:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

// legacy register form redirect
//
// document.getElementById("reg-btn").onclick = function () {
//     location.href = "https://yukti.bastamasta.dev/forms";
// };
// document.getElementById("reg-btn1").onclick = function () {
//     location.href = "https://yukti.bastamasta.dev/forms";
// };
// document.getElementById("reg-btn2").onclick = function () {
//     location.href = "https://yukti.bastamasta.dev/forms";
// };
// document.getElementById("reg-btn").onclick = function () {
//     location.href = "https://yukti.bastamasta.dev/forms";
// };
// document.getElementById("reg-btn3").onclick = function () {
//     location.href = "https://yukti.bastamasta.dev/forms";
// };
// document.getElementById("reg-btn4").onclick = function () {
//     location.href = "https://yukti.bastamasta.dev/forms";
// };
// document.getElementById("reg-btn5").onclick = function () {
//     location.href = "https://yukti.bastamasta.dev/forms";
// };
// document.getElementById("reg-btn6").onclick = function () {
//     location.href = "https://yukti.bastamasta.dev/forms";
// };

// Back to top button functionality
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});