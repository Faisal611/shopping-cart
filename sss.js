    function getPriceFunction( product , isAdd) {

        const getInputField =  document.getElementById( product  +'-input');
        let getAllValue = getInputField.value;

        if (isAdd === true) {
            getAllValue = parseFloat(getAllValue) + 1;

        }else if ( getAllValue > 0 ) {
            getAllValue = parseFloat(getAllValue) - 1;
        }
        getInputField.value = getAllValue

        // Phone Total Price
        const phoneTotalPrice  = document.getElementById(product +'-price');
        phoneTotalPrice.innerText = getAllValue * 100;


    }



    // 1. Phone Price Plus
    document.getElementById('phone-plus').addEventListener('click', function () {
        getPriceFunction('phone', true)
    })
    // 2. Phone Price minus
    document.getElementById('phone-minus').addEventListener('click' , function () {
        getPriceFunction('phone',false)
    })



    // 1. case  Price Plus
    document.getElementById('case-plus').addEventListener('click' , function (){
        getPriceFunction ('case',true)
    })

    // 2. case price minus
    document.getElementById('case-minus').addEventListener('click' , function (){
        getPriceFunction ('case',false)
    });