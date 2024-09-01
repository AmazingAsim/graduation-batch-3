
function sum(...numbers) {
    let result = numbers.reduce((total,number)=>{
        return total+number
    })

    return result
}
module.exports = sum

