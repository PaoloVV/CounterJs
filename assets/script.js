const body = document.querySelector(".body")
const divContainer = document.createElement("div")
    divContainer.classList.add("div-container")


//TITLE
    const title = document.createElement("h1")
    const subTitle = document.createElement("h3")

    title.innerText = "Counter Js"
    subTitle.innerText = "di Viviani Paolo"

    divContainer.appendChild(title)
    divContainer.appendChild(subTitle)
    body.appendChild(divContainer)

//DISPLAY COUNTER
    const divDisplay = document.createElement("div")
        divDisplay.classList.add("display")
    const number = document.createElement("p")
        number.classList.add("number")
    let count = 0

    number.innerText = count    
    divDisplay.appendChild(number)
    divContainer.appendChild(divDisplay)

//NEGATIVE CHECKBOX   
    const negativeNumbersDiv = document.createElement("div")
        negativeNumbersDiv.classList.add("negative-check-div")
    const negativeNumbers = document.createElement("input")
        negativeNumbers.type = "checkbox"
        negativeNumbers.classList.add("check")
    const negativeLabel = document.createElement("label")
        negativeLabel.innerText = "NEGATIVE NUMBERS"
        negativeLabel.classList.add("negative-label")
    
    negativeNumbersDiv.appendChild(negativeNumbers)
    negativeNumbersDiv.appendChild(negativeLabel)
    divContainer.appendChild(negativeNumbersDiv)
    negativeNumbers.addEventListener("click", hideAlert)

//ALERT
    const alertDiv = document.createElement("div")
    alertDiv.classList.add("alert-div")
    divContainer.appendChild(alertDiv)

//DIV OPERATION
    const divOperation = document.createElement("div")
        divOperation.classList.add("div-operation-container")
    const btnMinus = document.createElement("button")
        btnMinus.innerText = "-"
        btnMinus.classList.add("btn")
        btnMinus.addEventListener("click", sottrazione)
    const btnPlus = document.createElement("button")
        btnPlus.innerText = "+"
        btnPlus.classList.add("btn")
        btnPlus.addEventListener("click", addizione)
    const btnPlus10 = document.createElement("button")
        btnPlus10.innerText = "+ 10"
        btnPlus10.classList.add("btn")
        btnPlus10.style.display = "none"
        btnPlus10.style.fontSize = "3rem"
        btnPlus10.addEventListener("click", addizione10)

    divOperation.appendChild(btnMinus)
    divOperation.appendChild(btnPlus)
    divOperation.appendChild(btnPlus10)
    
    divContainer.appendChild(divOperation)

//X10
    const check10 = document.createElement("input")
        check10.type = "checkbox"
        check10.classList.add("check")
    const check10Label = document.createElement("label")
        check10Label.innerText = "X 10"
        check10Label.classList.add("check10-label")
    const divCheck10 = document.createElement("div")
        divCheck10.classList.add("div-check10")
    
    divCheck10.appendChild(check10)
    divCheck10.appendChild(check10Label)
    divContainer.appendChild(divCheck10)

    check10.addEventListener("click", cambiaBtn);

//RESET
    const divReset = document.createElement("div")
        divReset.classList.add("div-reset")
    const btnReset = document.createElement("button")
        btnReset.innerText = "Reset"
        btnReset.classList.add("btn-reset")

    divReset.appendChild(btnReset)
    divContainer.appendChild(divReset)
    btnReset.addEventListener("click", resetPage)



    

//FUNCTIONS
    function addizione(){
        count ++;
        number.innerText = count 
    }
    function addizione10(){
        count += 10;
        number.innerText = count
    }

    function sottrazione(){
        if(negativeNumbers.checked == false){
            count --;
            if(count < 0){
                alertDiv.style.display = "inline"
                alertDiv.innerText = "Ops! If you want to count negatively click on the checkbox above"
                count ++;
            } else {
                number.innerText = count
            }
        } else {
            count --;
            number.innerText = count
        }
    }

    function cambiaBtn(){
        if(check10.checked == false){
            btnPlus.style.display = "inline";
            btnPlus10.style.display = "none"
        } else {
            btnPlus.style.display = "none"
            btnPlus10.style.display = "inline"
        }
    }

    function resetPage(){
        console.log("reset")
        count = 0;
        number.innerText = count;
        negativeNumbers.checked = false;
        check10.checked = false
        cambiaBtn()
        alertDiv.style.display = "none"
    }

    function hideAlert(){
        alertDiv.style.display = "none"
    }
    
    

    


    
    
    


