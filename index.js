
// const func = () => {
//     console.log('pass')
// }


// func()


const closure = () => {
    const initialValue = 0;
    let x = initialValue;

    function show() {
        return x;
    }

    function change(y) {
        x = y
    }

    function add() {
        x = x + 1
    }

    function multiply() {
        x = x * 2
    }

    function reset() {
        x = initialValue;
    }



    return [show, change, add, multiply, reset]
}

// +1, *2, si aduce valoarea initiala

// const [changeX, showX] = closure()
// const [changeY, showY] = closure()

// console.log(changeX())
// console.log(changeY())
// showX(4)
// showY(7)
// console.log(changeX())
// console.log(changeY())

const [showX, changeX, addX, multiplyX, resetX] = closure()

console.log(showX())
changeX(5)
console.log(showX())
addX()
console.log(showX())
multiplyX()
console.log(showX())
resetX()
console.log(showX())



