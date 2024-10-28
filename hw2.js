


// const strCheck = (str1, str2) => {
//     const arrStr1 = str1.split('').sort((a, b) => a > b ? 1 : -1).join('')
//     const arrStr2 = str2.split('').sort((a, b) => a > b ? 1 : -1).join('')
   
//     return arrStr1 === arrStr2;    
// }


// console.log(strCheck('str21ing', 'string1'))


// const findSecond = (arr) => {
//     return arr.sort((a, b) => b - a)[1]
// }


const findSecond = (arr) => {
    const result = arr.reduce((acc, curr) => {
        if(acc.first <= curr) {
            return { first: curr, second: acc.first}
        }       

        return acc;
    }, { first: 0, second: 0})

    return result.second

}


console.log(findSecond([3,4,2,1,5,6, 6]))