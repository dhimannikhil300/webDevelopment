const countValue = document.querySelector('#counter');

const increment = () =>{
    // get value
    let value = parseInt(countValue.innerText);
    //update the value
    value = value + 1;
    //set the value
    countValue.innerHTML = value;
};

const decrement = () =>{
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerHTML = value;
};