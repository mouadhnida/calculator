const result = document.getElementById("result");



const takeNumber = (number) => { 
        if(number ==='.' && result.innerText.includes('.')) {
                return }
        if(result.innerText.length > 20) {
                return;
        }
        result.innerText += number;
}

const takeOperation = (operation) => { 
        if((operation == '*' || operation == '/' || operation === '-' || operation === '+') && result.innerText.includes('*' || '+' || '-' || '/' )) {
                return} 
        result.innerText += operation;
}

const deleteAll = (C) => {
                result.innerText = '';
}

const equalFunc = () => {
        result.innerText = eval(result.innerText)
}
