document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const panes = document.querySelectorAll('.tab-pane');
    const indicator = document.querySelector('.tab-indicator');

    const updateIndicator = (tab) => {
        if (indicator) {
            indicator.style.width = `${tab.offsetWidth}px`;
            indicator.style.transform = `translateX(${tab.offsetLeft}px)`;
        }
    };

    // Initial indicator position
    const activeTabInit = document.querySelector('.tab-btn.active');
    if (activeTabInit) updateIndicator(activeTabInit);

    window.addEventListener('resize', () => {
        const activeTab = document.querySelector('.tab-btn.active');
        if (activeTab) updateIndicator(activeTab);
    });

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            // Update active state for buttons
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Move the tab indicator
            updateIndicator(tab);

            // Update active state for panes
            const targetId = tab.getAttribute('data-target');
            panes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === targetId) {
                    pane.classList.add('active');
                }
            });
        });
    });

    // Add 3D tilt effect to glass cards in the social grid (only on non-touch devices)
    const isHoverableDevice = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (isHoverableDevice) {
        const cards = document.querySelectorAll('.social-btn');
        cards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
            });
        });
    }
});
