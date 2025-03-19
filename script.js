document.addEventListener('DOMContentLoaded', function() {
   
    const originalColors = {
        boxColor: '#61b3fa',
        btnColor: '#4caf50',
        hoverColor: '#45a049'
    };
    
    const boxColorInput = document.getElementById('boxColor');
    const btnColorInput = document.getElementById('btnColor');
    const hoverColorInput = document.getElementById('hoverColor');
    
    const applyBoxColorBtn = document.getElementById('applyBoxColor');
    const applyBtnColorBtn = document.getElementById('applyBtnColor');
    const applyHoverColorBtn = document.getElementById('applyHoverColor');
    const resetColorsBtn = document.getElementById('resetColors');
    
   
    applyBoxColorBtn.addEventListener('click', function() {
        const boxColor = boxColorInput.value;
        const featureBoxes = document.querySelectorAll('.feature-box');
        
        featureBoxes.forEach(box => {
            box.style.backgroundColor = boxColor;
        });
  
        document.documentElement.style.setProperty('--box-color', boxColor);
    });
    
  
    applyBtnColorBtn.addEventListener('click', function() {
        const btnColor = btnColorInput.value;
        const buttons = document.querySelectorAll('.feature-btn');
        
        buttons.forEach(btn => {
            btn.style.backgroundColor = btnColor;
        });
        
        document.documentElement.style.setProperty('--btn-color', btnColor);
    });
    
    
    applyHoverColorBtn.addEventListener('click', function() {
        const hoverColor = hoverColorInput.value;
        
        let styleElement = document.getElementById('hover-style');
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = 'hover-style';
            document.head.appendChild(styleElement);
        }
        
        styleElement.textContent = `.feature-btn:hover { background-color: ${hoverColor} !important; }`;
        
        document.documentElement.style.setProperty('--hover-color', hoverColor);
    });
    
    
    resetColorsBtn.addEventListener('click', function() {
      
        const featureBoxes = document.querySelectorAll('.feature-box');
        featureBoxes.forEach(box => {
            box.style.backgroundColor = originalColors.boxColor;
        });
        
       
        const buttons = document.querySelectorAll('.feature-btn');
        buttons.forEach(btn => {
            btn.style.backgroundColor = originalColors.btnColor;
        });
        
       
        let styleElement = document.getElementById('hover-style');
        if (styleElement) {
            styleElement.textContent = `.feature-btn:hover { background-color: ${originalColors.hoverColor} !important; }`;
        }
        
      
        boxColorInput.value = originalColors.boxColor;
        btnColorInput.value = originalColors.btnColor;
        hoverColorInput.value = originalColors.hoverColor;
    });

    const featureButtons = document.querySelectorAll('.feature-btn');
    featureButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const boxId = this.getAttribute('data-box-id');
            alert(`You clicked ${this.textContent} (${boxId}). You can add custom functionality here!`);
        });
    });
});