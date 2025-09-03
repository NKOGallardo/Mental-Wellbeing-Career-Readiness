
        // Theme toggle functionality
        function toggleTheme() {
            const body = document.body;
            const themeIcon = document.getElementById('theme-icon');
            const themeText = document.getElementById('theme-text');
            
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                themeIcon.textContent = '🌙';
                themeText.textContent = 'Dark Mode';
                localStorage.setItem('theme', 'light');
            } else {
                body.setAttribute('data-theme', 'dark');
                themeIcon.textContent = '☀️';
                themeText.textContent = 'Light Mode';
                localStorage.setItem('theme', 'dark');
            }
        }

        // Load saved theme
        document.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                document.body.setAttribute('data-theme', 'dark');
                document.getElementById('theme-icon').textContent = '☀️';
                document.getElementById('theme-text').textContent = 'Light Mode';
            }
        });

        // Enhanced interactive hover effects
        const impactCards = document.querySelectorAll('.impact-card');
        
        impactCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-15px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Animate the connection visual
        const wellnessCircle = document.querySelector('.wellness-circle');
        const careerCircle = document.querySelector('.career-circle');
        
        setInterval(() => {
            wellnessCircle.style.transform = 'scale(1.1)';
            setTimeout(() => {
                wellnessCircle.style.transform = 'scale(1)';
                careerCircle.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    careerCircle.style.transform = 'scale(1)';
                }, 300);
            }, 300);
        }, 4000);

        // Add scroll-based animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -30px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, observerOptions);

        // Apply initial styles and observe elements
        document.querySelectorAll('.impact-card, .area-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // Touch-friendly interactions for mobile
        if ('ontouchstart' in window) {
            impactCards.forEach(card => {
                card.addEventListener('touchstart', () => {
                    card.style.transform = 'translateY(-10px) scale(1.02)';
                });
                
                card.addEventListener('touchend', () => {
                    setTimeout(() => {
                        card.style.transform = 'translateY(0) scale(1)';
                    }, 150);
                });
            });
        }
