const changeTheme = () => {
    let rootArray = [
        { name: '--permanent-color', color1: '#fa5260', color2: '#fa5260' },
        { name: '--round-color', color1: '#f8e2e3', color2: '#5f605e' },
        { name: '--light-round-color', color1: '#efd6d9', color2: '#5f605e' },
        { name: '--dark-shadow-color', color1: '#efd6d9', color2: '#3b3b3b' },
        { name: '--body-color', color1: 'white', color2: '#303030' },
        { name: '--input-area-color', color1: '#f8f8f8', color2: '#444444' },
        { name: '--button-color', color1: 'black', color2: 'white' },
        { name: '--num-hover-color', color1: '#fa5360', color2: '#fa5360' },
    ]
    rootArray.forEach(entry => {
        let name = entry.name
        let color1 = entry.color1
        let color2 = entry.color2
        let currentColor = getComputedStyle(document.documentElement).getPropertyValue(name)
        let newColor = currentColor === color1 ? color2 : color1
        document.documentElement.style.setProperty(name, newColor)
    })
}


// const adjustFontSize=()=>{
//     console.log(display_h1.scrollWidth , display_h1.clientWidth);

//     while(display_h1.scrollWidth > display_h1.clientWidth){
//         let currentSize = window.getComputedStyle(display_h1).fontSize
//         let newSize = parseFloat(currentSize) - 10
//         display_h1.style.fontSize = `${newSize}px`
//         console.log(currentSize,newSize);

//         if (newSize < 10) break;
//     }
// }
// const adjustFontSize=(node)=>{
//     while(node.scrollWidth > node.clientWidth){
//         let currentSize = window.getComputedStyle(node).fontSize
//         let newSize = parseFloat(currentSize) - 1
//         node.style.fontSize = `${newSize}px`
//         if (newSize < 10) break;
//     }
// }




// create a function that can take 3 arguments 2 num and one operator and do math on them
function isFloat(num) {
    return Number(num) === num && num % 1 !== 0;
  }


const operation = (num1, opr) => {
    num2 = parseFloat(display_h1.textContent)
    let result
    switch (opr) {
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            result = num1 / num2
            break;
    }
    if(isFloat(result)) result = result.toFixed(4)
    display_h1.textContent = result
    display_p.textContent = `${num1} ${opr} ${num2} = ${result} `
    firstNum = result
    operator = ''
    isResultDisplayed = true
    isOprSelected = false
}


const remove = () => {
    let currentText_h1 = display_h1.textContent
    let currentText_p = display_p.textContent
    display_h1.textContent = currentText_h1.slice(0, -1)
    display_p.textContent = currentText_p.slice(0, -1)
}

const clear = () => {
    display_h1.textContent = '0'
    display_p.textContent = ''
    firstNum = undefined
    operator = undefined
    isResultDisplayed = false
    isOprSelected = false
}


const isOpr = (value) => {
    return ['+', '-', 'x', '/'].includes(value)
}

const handleOpr = (value) => {
    let lastChar = display_h1.textContent.slice(-1)
    if (isOpr(lastChar)) {
        display_h1.textContent = display_h1.textContent.slice(0, -1) + value
    } else {
        firstNum = parseFloat(display_h1.textContent)
        display_h1.textContent = ''
    }
    operator = value === 'x' ? '*' : value
}

const smallDisplay = (value) => {
    if (value != 'C') display_p.textContent += value
}

const percentage = () => {
    let currentText = display_h1.textContent
    let number = parseInt(currentText)
    
    if (operator && firstNum !== undefined) {
        secundNum = (number/100).toString()
        display_h1.textContent = secundNum
    } else if (display_h1.textContent == ''){
        display_h1.textContent = ''
    } else {
        display_h1.textContent = (number / 100).toString()
    }
}