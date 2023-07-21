const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");

const legthDisplay = document.querySelector("[data-lengthNumber]");
const inputLength = document.querySelector("[data-lengthSlider]");

const upperCaseCheck = document.querySelector("#upperCase");
const lowerCaseCheck = document.querySelector("#lowerCase");
const numberCheck = document.querySelector("#number");
const symbolscheck = document.querySelector("#symbols");

const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");

const allCheck = document.querySelectorAll("input[type=checkbox]");

const symbols = '~`!@#$%^&*()_+-=][{};:",./<>?';

//function for update value of slider
const handlerSlider = () =>{
    inputLength.value = passwordLength;
    legthDisplay.textContent = passwordLength;

    const min = inputLength.min;
    const max = inputLength.max;
    inputLength.style.backgroundSize = ( (passwordLength-min)*100/(max-min)) + "% 100%"
}

//indicator color
const setIndicator = (color)=>{ 
    console.log(color)  
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`
}
setIndicator("#fff");

//generate random number between a and b
const getRndInteger = (a, b) =>{
    return Math.floor((Math.random()*(b-a)) + a);
}

//random alphabet a to z
const getLowerCase = ()=>{
    return String.fromCharCode(getRndInteger(97, 123));
}

//random alphabet A to Z
const getUpperCase = ()=>{
    return String.fromCharCode(getRndInteger(65, 91));
}

//random number
const getNumber = ()=>{
    return getRndInteger(0, 9);
}

//random Symbol
const getSymbols = ()=>{
    return symbols.charAt(getRndInteger(0, symbols.length));
}

//strenght measure
const calcStrength = ()=>{
    let hasUpper = upperCaseCheck.checked;
    let hasLower = lowerCaseCheck.checked;
    let hasNum = numberCheck.checked;
    let hasSym = symbolscheck.checked;

    
    if(hasUpper && hasLower && (hasNum || hasSym ) && passwordLength >= 8){
        setIndicator("#0f0");
    }
    else if((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >6){
        setIndicator("#ff0");
    }
    else{
        setIndicator("#f00");
    }
}

//copy Button and tooltip
async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay);
        copyMsg.textContent = "copied";
    }
    catch(e){
        copyMsg.textContent = "failed";
    }
    copyMsg.classList.add("active");
    setTimeout(()=>{
        copyMsg.classList.remove("active");
    }, 2000);;
}

//shuffled Password in random way
const shuffledPassword = (password) =>{
    for(let i=0; i<password.length; i++){
        const j = getRndInteger(i, password.length);
        const temp = password[i];
        password[i] = password[j];
        password[j] = temp;
    }

    return password;
}

//count check box at present time
const handleCheckBoxChange = ()=>{
    checkCount = 0;
    allCheck.forEach((checkbox)=>{
        if(checkbox.checked){
            checkCount++;
        }
    });
    
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handlerSlider();
    }
}

//event listner for check box
allCheck.forEach( (checkbox)=>{
    checkbox.addEventListener('change', handleCheckBoxChange);
})

//event listner for slider
inputLength.addEventListener('input', (e)=>{
    passwordLength = e.target.value;
    handlerSlider();
})

//event listner for copy button
copyBtn.addEventListener('click', ()=>{
    if(passwordDisplay.value){
        copyContent();
    }
})

//generate button with event listner
generateBtn.addEventListener('click', ()=>{
    if(checkCount==0){
        return;
    }
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handlerSlider();
    }
    let genPasSeq = [];
    let password = "";
    if(upperCaseCheck.checked){
        genPasSeq.push(getUpperCase);
    }
    if(lowerCaseCheck.checked){
        genPasSeq.push(getLowerCase);
    }
    if(numberCheck.checked){
        genPasSeq.push(getNumber);
    }
    if(symbolscheck.checked){
        genPasSeq.push(getSymbols);
    }
    
    for(let i=0; i<genPasSeq.length; i++){
        password+=genPasSeq[i]();
    }
    
    for(let i=0; i<passwordLength - genPasSeq.length; i++){
        password +=genPasSeq[getRndInteger(0,genPasSeq.length)]();
    }
    
    password = shuffledPassword(password);
    // console.log(password);

    passwordDisplay.value = password;
    calcStrength();
})

//initilize the value of all parameters
let password = "";
let passwordLength = 10;
let checkCount = 0;

handlerSlider();
