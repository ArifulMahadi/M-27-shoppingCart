function updateProductNumber(product, price , isincreasing){
    const ProductInput = document.getElementById( product + '-number')
    let productNumber = ProductInput.value;
    
    if(isincreasing){
        productNumber= parseInt (productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt (productNumber) - 1;  
    }
    ProductInput.value = productNumber
    // update total
    const productTotal = document.getElementById(product + '-total')
    productTotal.innerText = productNumber * price;
    calculateTotal()
}

function getInputValue (product){
    const productInput = document.getElementById(product + '-number')
    const productNumber = parseInt(productInput.value)
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219 ;
    const caseTotal = getInputValue('case') * 59 ;
    const subtotal = phoneTotal + caseTotal;
    const tax = subtotal / 10 ;
    const totalPrice = subtotal + tax;
    // updateonhtml
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

//    hanle case increase decrise

document.getElementById("case-plus").addEventListener('click', function(){
    
    updateProductNumber('case', 59,true);
});

document.getElementById('case-minus').addEventListener('click', function(){
   
   updateProductNumber('case',59, false)
    
});


// phone number and price

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone',1219, false)
})

document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone',1219, true)
})