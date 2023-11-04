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