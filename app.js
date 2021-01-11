let p1Score = document.querySelector('#p1Score');
let p2Score = document.querySelector('#p2Score');

const p1Btn = document.querySelector('#p1');
const p2Btn = document.querySelector('#p2');
const resetBtn = document.querySelector('#reset');
const select = document.querySelector('select');

resetBtn.addEventListener('click', function() {
    p1Score.textContent = "0";
    p2Score.textContent = "0";
    p1Btn.disabled = false;
    p2Btn.disabled = false;
    p1Score.classList.remove('has-text-success');
    p2Score.classList.remove('has-text-danger');
    p2Score.classList.remove('has-text-success');
    p1Score.classList.remove('has-text-danger');
})

p1Btn.addEventListener('click', function () {
    let newP1Score = parseInt(p1Score.textContent);
        newP1Score +=1;
        p1Score.textContent = `${newP1Score}`;

    if (p1Score.textContent === select.value) {  
        p1Btn.disabled = true;
        p2Btn.disabled = true;
        p1Score.classList.add('has-text-success');
        p2Score.classList.add('has-text-danger');
    }        

})

p2Btn.addEventListener('click', function() {
    let newP2Score = parseInt(p2Score.textContent);
    newP2Score +=1;
    p2Score.textContent = `${newP2Score}`;

    if (p2Score.textContent === select.value) {  
        p1Btn.disabled = true;
        p2Btn.disabled = true;
        p2Score.classList.add('has-text-success');
        p1Score.classList.add('has-text-danger');     
        
    }
    
})



