document.addEventListener('DOMContentLoaded', () => {

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    
    const colorChangeButtons = document.querySelectorAll('.color-change-btn');
    const companyLogos = document.querySelectorAll('.company-logo');

  
    colorChangeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
           
            const section = btn.closest('.feature-benefit, .feature-description');
            
           
            section.style.backgroundColor = getRandomColor();
            
           
            btn.style.backgroundColor = getRandomColor();
        });
    });

   
    companyLogos.forEach(logo => {
        logo.addEventListener('click', () => {
           
            logo.style.backgroundColor = getRandomColor();
        });
    });
});