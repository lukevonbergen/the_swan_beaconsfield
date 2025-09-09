document.addEventListener('DOMContentLoaded', function() {
    // Only apply smooth scrolling to anchor links (links that start with #)
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for anchor links (starting with #)
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
            // For all other links (.html files), let them navigate normally
        });
    });
    
    // Add active class to navigation links based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Form submission handler
    const bookingForm = document.querySelector('.booking-form form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your booking request! We will contact you shortly to confirm your reservation.');
        });
    }
    
    // Image lazy loading effect
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                img.onload = function() {
                    this.style.opacity = '1';
                };
                
                // If image is already loaded
                if (img.complete) {
                    img.style.opacity = '1';
                }
                
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
    
    // Add parallax effect to hero image
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (scrolled <= window.innerHeight) {
                heroImage.style.transform = `translateY(${rate}px)`;
            }
        });
    }
    
    // Mobile menu toggle (for future enhancement)
    function initMobileMenu() {
        const nav = document.querySelector('.nav-menu');
        const navContainer = document.querySelector('.nav-container');
        
        // Add mobile menu button for smaller screens
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-btn')) {
                const mobileMenuBtn = document.createElement('button');
                mobileMenuBtn.classList.add('mobile-menu-btn');
                mobileMenuBtn.innerHTML = '☰';
                mobileMenuBtn.style.cssText = `
                    background: none;
                    border: none;
                    font-size: 24px;
                    color: #6b4423;
                    cursor: pointer;
                    display: block;
                `;
                
                navContainer.appendChild(mobileMenuBtn);
                
                mobileMenuBtn.addEventListener('click', function() {
                    nav.classList.toggle('mobile-active');
                });
            }
        }
    }
    
    window.addEventListener('resize', initMobileMenu);
    initMobileMenu();
});