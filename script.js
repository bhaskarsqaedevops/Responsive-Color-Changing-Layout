document.addEventListener('DOMContentLoaded', () => {
    
    const colorButtons = document.querySelectorAll('.color-btn');
    colorButtons.forEach(button => {
        button.addEventListener('click', () => { 
            const color = button.getAttribute('data-color'); 
            const section = button.closest('.feature-benefit, .feature-description'); 
            section.style.backgroundColor = color;
        });
    });
});