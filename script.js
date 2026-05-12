// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = 80;
            const targetPosition = target.offsetTop - navHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
        // Close mobile nav if open
        document.getElementById('nav-links').classList.remove('open');
    });
});

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('open');
    });
    // Close nav when clicking outside
    document.addEventListener('click', function (e) {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('open');
        }
    });
}

// Scroll-triggered fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Stagger siblings slightly
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 80);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-ready').forEach(el => {
    observer.observe(el);
});

// Demo Request Form
(function () {
    var WEBHOOK_URL = 'https://abython.app.n8n.cloud/webhook/e4df1cc2-8d07-4e72-a86a-df1a13b10f2c';
    var form = document.getElementById('demo-form');
    if (!form) return;

    function showError(inputId, errorId, message) {
        var input = document.getElementById(inputId);
        var err = document.getElementById(errorId);
        if (input) input.classList.add('input-error');
        if (err) err.textContent = message;
    }

    function clearErrors() {
        ['demo-first-name', 'demo-last-name', 'demo-email', 'demo-phone'].forEach(function (id) {
            var input = document.getElementById(id);
            if (input) input.classList.remove('input-error');
        });
        ['error-firstName', 'error-lastName', 'error-email', 'error-phone'].forEach(function (id) {
            var el = document.getElementById(id);
            if (el) el.textContent = '';
        });
    }

    function validate(firstName, lastName, email, phone) {
        var valid = true;
        if (!firstName.trim()) { showError('demo-first-name', 'error-firstName', 'First name is required.'); valid = false; }
        if (!lastName.trim()) { showError('demo-last-name', 'error-lastName', 'Last name is required.'); valid = false; }
        if (!email.trim()) { showError('demo-email', 'error-email', 'Email is required.'); valid = false; }
        var digits = phone.replace(/\D/g, '');
        if (!digits) { showError('demo-phone', 'error-phone', 'Phone number is required.'); valid = false; }
        else if (digits.length !== 10) { showError('demo-phone', 'error-phone', 'Please enter a 10-digit phone number.'); valid = false; }
        return valid;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        clearErrors();

        var firstName = document.getElementById('demo-first-name').value;
        var lastName  = document.getElementById('demo-last-name').value;
        var email     = document.getElementById('demo-email').value;
        var phone     = document.getElementById('demo-phone').value;

        if (!validate(firstName, lastName, email, phone)) return;

        var btn = document.getElementById('demo-submit');
        btn.disabled = true;
        btn.textContent = 'Sending\u2026';

        fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer abython_xK9#mP2$vQ7nL4wR',
            },
            body: JSON.stringify({
                firstName:  firstName.trim(),
                lastName:   lastName.trim(),
                email:      email.trim(),
                phone:      phone.replace(/\D/g, ''),
                smsConsent: document.getElementById('sms-consent').checked,
            }),
        })
        .then(function (response) {
            if (!response.ok) throw new Error('Server error: ' + response.status);
            form.hidden = true;
            document.getElementById('demo-success').hidden = false;
        })
        .catch(function () {
            btn.disabled = false;
            btn.textContent = 'Request My Demo Call';
            var err = document.getElementById('error-phone');
            if (err) err.textContent = 'Something went wrong. Please try again.';
        });
    });
})();
