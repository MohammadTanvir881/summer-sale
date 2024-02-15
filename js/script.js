let countName = 1;
let totalPrice = 0;

const cards =  document.querySelectorAll('.card');
for (const card of cards){
    
card.addEventListener('click', function(){
    const elementName = card.querySelector('h3').innerText;
    const price = card.querySelector('h4').innerText;
    // console.log(price)
    // console.log(elementName)
    
    const nameContainer = document.getElementById('name-container');
    const p = document.createElement('p');
    p.innerText = countName + ' . ' +elementName;
    nameContainer.appendChild(p)
    countName++

    // total price determine
    const originalPrice = price.split(' ')[0];
    const mainPrice = parseFloat(originalPrice) 
    // console.log(mainPrice)
    totalPrice = totalPrice + mainPrice;
    // console.log(totalPrice)

    const displayPrice = document.getElementById('total-price');
    displayPrice.innerText = totalPrice;   
    
})

}

 function code(){
    const inputValue = document.getElementById('input-text').value.split(' ').join('').toUpperCase();
    if (totalPrice >= 200){
        if (inputValue === 'SELL200'){
            const discountPrice = totalPrice * 0.2;
            const total = totalPrice - discountPrice;
            console.log(total)
            const displayDiscountPrice = document.getElementById('discount-price');
            displayDiscountPrice.innerText = discountPrice;

            const displaymainPrice = document.getElementById('display-total-price');
            displaymainPrice.innerText = total;
            document.getElementById('input-text').value = '';
        }
        else {
            alert('Invalid Code')
            document.getElementById('input-text').value = '';
        }
    }
    else {
        alert('please must spend 200taka')
        document.getElementById('input-text').value = '';
    }
}


