// js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    // Add to existing main.js

// FAQ functionality
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // FAQ Toggle
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
        });
    });
    
    // YouTube channel ID - replace with actual channel ID
    const channelId = '@DiasBatistaAdvogados'; // You'll need to get this from your YouTube channel
    
    // Could add functionality to fetch latest videos here
});
    // Services data
    const servicesData = [
        {
            title: 'Direito Civil',
            description: 'Atuação em ações indenizatórias, contratos, responsabilidade civil e direito do consumidor.',
            icon: '⚖️'
        },
        {
            title: 'Direito Trabalhista',
            description: 'Defesa dos direitos trabalhistas, rescisões, acordos e ações na Justiça do Trabalho.',
            icon: '👨‍💼'
        },
        {
            title: 'Direito Empresarial',
            description: 'Assessoria jurídica para empresas, contratos societários, recuperação judicial e falência.',
            icon: '🏢'
        },
        {
            title: 'Direito de Família',
            description: 'Divórcios, inventários, guarda de filhos, pensão alimentícia e adoções.',
            icon: '👨‍👩‍👧‍👦'
        },
        {
            title: 'Direito Imobiliário',
            description: 'Regularização de imóveis, contratos de compra e venda, usucapião e ações possessórias.',
            icon: '🏠'
        },
        {
            title: 'Direito Previdenciário',
            description: 'Aposentadorias, auxílio-doença, pensão por morte e revisão de benefícios.',
            icon: '📄'
        }
    ];
    
    // Populate services
    const servicesGrid = document.querySelector('.services-grid');
    if (servicesGrid) {
        servicesData.forEach((service, index) => {
            const serviceCard = document.createElement('div');
            serviceCard.className = 'service-card fade-in hover-lift';
            serviceCard.style.animationDelay = `${index * 0.1}s`;
            serviceCard.innerHTML = `
                <div class="service-icon">${service.icon}</div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            `;
            servicesGrid.appendChild(serviceCard);
        });
    }
    
    // Animate stats counter
    const animateStats = () => {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    stat.textContent = target + (stat.getAttribute('data-count') === '99' ? '%' : '+');
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + (stat.getAttribute('data-count') === '99' ? '%' : '+');
                }
            }, 16);
        });
    };
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const inputs = this.querySelectorAll('input, textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '#cbd5e0';
                }
            });
            
            if (isValid) {
                // In a real application, you would send the form data to a server here
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                this.reset();
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }
    
    // Initialize animations after DOM is loaded
    setTimeout(() => {
        // Trigger stats animation when about section is in view
        const aboutSection = document.querySelector('.about');
        if (aboutSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateStats();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(aboutSection);
        }
    }, 500);
});