// change the theme by changing elements in :root
const theme = document.getElementById("theme")
theme.addEventListener('click', changeTheme)
//catching the buttons from html
const display_h1 = document.getElementById('main-display')
const display_p = document.getElementById('para-display')
const undo = document.getElementById('undo')

let isResultDisplayed = false
let isOprSelected = false

let firstNum
let operator
let secundNum
let buttons = document.querySelectorAll('main button')

buttons.forEach(e =>
    e.addEventListener('click', e => {
        let value = e.target.textContent
        if (isResultDisplayed && !isOpr(value) && value !== '=') {
            display_h1.textContent = ''
            display_p.textContent = ''
            isResultDisplayed = false
        }

        smallDisplay(value)
        if (value == 'C') { clear() }

        else if (isOpr(value)) {
            let lastChar = display_h1.textContent.slice(-1)

            if (!isOpr(lastChar)) {
                handleOpr(value)
                isOprSelected = true
            }
        }

        else if (value === '=' && display_h1.textContent != '') {
            operation(firstNum, operator)
        }

        else if (value === '%') {
            percentage()
        }
        else {
            if(display_h1.textContent === '0'){
                display_h1.textContent = ''
            }
            display_h1.textContent += value
            isOprSelected = false
        }


    })
)


undo.addEventListener('click', remove)





