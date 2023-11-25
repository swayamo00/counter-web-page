const countValue = document.querySelector('#counter');

const increment = () => {
    
    let value = parseInt(countValue.innerText); //getting value
    value= value + 1; //updating the value
    countValue.innerText= value; 

};

const decrement= () => {

    let value = parseInt(countValue.innerText); //getting value parseint used to convert string into number
    value= value - 1; //updating the value
    countValue.innerText= value; 

};