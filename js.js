
        // Add some interactive hover effects
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
        }, 3000);

        // Add scroll-based animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
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