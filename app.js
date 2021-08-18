function updateProductNumber (product, price, isIncreasing){
    const productInput = document.getElementById(product +'-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate price
    calculateTotalPrice();
}

// calculate total price function
function getInputValue (product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotalPrice(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue ('case') * 59;
    const subTotal= phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    // update total
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}



// handale phone incrase decrease event
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
})




// handale case incrase decrease event
document.getElementById('case-plus-button').addEventListener('click', function(){
    
    updateProductNumber('case', 59, true);
});


document.getElementById('case-minas-button').addEventListener('click', function(){
    updateProductNumber('case',59, false);
    
});