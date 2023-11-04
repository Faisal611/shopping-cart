    function getPriceFunction( product , prices ,isAdd) {

        const getInputField =  document.getElementById( product  +'-input');
        let getAllValue = getInputField.value;

        if (isAdd === true) {
            getAllValue = parseFloat(getAllValue) + 1;

        }else if ( getAllValue > 0 ) {
            getAllValue = parseFloat(getAllValue) - 1;
        }
        getInputField.value = getAllValue

        // Phone Total Price
        const phoneTotalPrice  = document.getElementById(product + '-price');
        phoneTotalPrice.innerText = getAllValue * prices;

        // calculation Amount
        calculationTotal ()

    }

    // calculation Total Amount
    function calculationTotalInput (product) {
        const productInput = document.getElementById(product + '-input');
        const productTotalValue = parseFloat(productInput.value);
        return productTotalValue;

    }
    function calculationTotal () {
        const phoneTotalPrices = calculationTotalInput('phone') * 100;
        const casePrices = calculationTotalInput('case') * 59;

        const calculationTotalPrice = phoneTotalPrices + casePrices;
        const PriceTax = phoneTotalPrices / 10;
        const totalPriceAmount = calculationTotalPrice + PriceTax;

        const calculationText =  document.getElementById('sub-Total');
        const calculationTax =  document.getElementById('tax-price');
        const calculationTotalAmount =  document.getElementById('total-price');


        calculationText.innerText = calculationTotalPrice;
        calculationTax.innerText = PriceTax;
        calculationTotalAmount.innerText = totalPriceAmount;

    }




    // 1. Phone Price Plus
    document.getElementById('phone-plus').addEventListener('click', function () {
        getPriceFunction('phone', 100,true)
    })
    // 2. Phone Price minus
    document.getElementById('phone-minus').addEventListener('click' , function () {
        getPriceFunction('phone',100,false)
    })



    // 1. case  Price Plus
    document.getElementById('case-plus').addEventListener('click' , function (){
        getPriceFunction ('case',59, true)
    })

    // 2. case price minus
    document.getElementById('case-minus').addEventListener('click' , function (){
        getPriceFunction ('case', 59,false)
    });