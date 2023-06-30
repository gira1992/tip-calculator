
let displayTip = document.querySelector('#tip-amount');
let displayTotal = document.querySelector('#total-people')
let totalInput = document.querySelector('#total-cost');
let numOfPeople = document.querySelector('#num-of-people');

//buttons
const resetButton = document.querySelector('#reset')
let buttons = document.querySelectorAll('button')



let totalCost;
let totalPeople;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        switch (buttons[i].innerHTML) {
            case '5%':
                if (numOfPeople.value === '0') {
                    numOfPeople.style.borderColor = 'red'
                    document.querySelector('h3 span').style.display = 'inline-block'
                } else {
                    totalCost = Number(totalInput.value)
                    totalPeople = Number(numOfPeople.value)
                    displayTip.innerHTML = ((totalCost * 0.05) / totalPeople).toFixed(2)
                    displayTotal.innerHTML = ((totalCost / totalPeople) + (totalCost * 0.05)).toFixed(2)
                }
                break;
            case '10%':
                if (numOfPeople.value === '0') {
                    numOfPeople.style.borderColor = 'red'
                    document.querySelector('h3 span').style.display = 'inline-block'
                } else {
                    totalCost = Number(totalInput.value)
                    totalPeople = Number(numOfPeople.value)
                    displayTip.innerHTML = ((totalCost * 0.1) / totalPeople).toFixed(2)
                    displayTotal.innerHTML = ((totalCost / totalPeople) + (totalCost * 0.1)).toFixed(2)
                }
                break;
            case '15%':
                if (numOfPeople.value === '0') {
                    numOfPeople.style.borderColor = 'red'
                    document.querySelector('h3 span').style.display = 'inline-block'
                } else {
                    totalCost = Number(totalInput.value)
                    totalPeople = Number(numOfPeople.value)
                    displayTip.innerHTML = ((totalCost * 0.15) / totalPeople).toFixed(2)
                    displayTotal.innerHTML = ((totalCost / totalPeople) + (totalCost * 0.15) / totalPeople).toFixed(2)
                }
                break;
            case '25%':
                if (numOfPeople.value === '0') {
                    numOfPeople.style.borderColor = 'red'
                    document.querySelector('h3 span').style.display = 'inline-block'
                } else {
                    totalCost = Number(totalInput.value)
                    totalPeople = Number(numOfPeople.value)
                    displayTip.innerHTML = ((totalCost * 0.25) / totalPeople).toFixed(2)
                    displayTotal.innerHTML = ((totalCost / totalPeople) + (totalCost * 0.25) / totalPeople).toFixed(2)
                }
                break;
            case '50%':
                if (numOfPeople.value === '0') {
                    numOfPeople.style.borderColor = 'red'
                    document.querySelector('h3 span').style.display = 'inline-block'
                } else {
                    totalCost = Number(totalInput.value)
                    totalPeople = Number(numOfPeople.value)
                    displayTip.innerHTML = ((totalCost * 0.5) / totalPeople).toFixed(2)
                    displayTotal.innerHTML = ((totalCost / totalPeople) + (totalCost * 0.5) / totalPeople).toFixed(2)
                }
                break;
        }
    }
}

const customInput = document.querySelector('#custom')

customInput.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter'){
            console.log('Enter has been pressed')
            totalCost = Number(totalInput.value)
            totalPeople = Number(numOfPeople.value)
            displayTip.innerHTML = ((totalCost * (customInput.value/100)) / totalPeople).toFixed(2)
            displayTotal.innerHTML = ((totalCost / totalPeople) + (totalCost * (customInput.value/100))).toFixed(2)
        }
})

resetButton.addEventListener('click', () => {
    displayTip.innerHTML = '$0.00'
    displayTotal.innerHTML = '$0.00'
    numOfPeople.value = ''
    totalInput.value = ''
    customInput.value = ''
})