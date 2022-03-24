// let backpack = []
// //adds var to array
// backpack.push(`pokeball`)
// backpack.push(`potion`)
// backpack.push(`pokedollars`)

// console.log(backpack)

// //both remove a item (shift does the first item)
// //backpack.shift()
// backpack.splice(0,1)

// console.log(backpack)

// let stone = (`waterstone`)
// backpack.push(stone)


// console.log(backpack)

// //removes the last item of list
// backpack.pop()

// console.log(backpack.length)

// backpack.push(`greatball`,`antidote`,`revive`)

// console.log(backpack)


//let satchel = backpack.splice(3,2)



//for (let r = 0; r < backpack.length; r++){
  //  console.log(`Backpack items,${r}`,backpack[r])
//}
//for (let i = 0; i < 2; i++){
  //  console.log(backpack[i])
//}

// if(backpack.length > 2){
//     for (let i = 0; i < 2; i++){
//         console.log(backpack[i])
//     }
// } else {
// for (let r = 0; r < backpack.length; r++){
//     console.log(`Backpack items,${r}`,backpack[r])
// }
// }
// //console.log(backpack)




let guessMe = 54

while (guessMe < 100) {
    console.log("start of:",guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25
        console.log(`divisible by 4 or 5, add 25, ${guessMe}`)
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
        console.log(`divisible by 3, minus 27, ${guessMe}`)
    } else {
        guessMe += 3
        console.log(`add 3, ${guessMe}`)
    }


    guessMe += 22
    console.log(`add 22, ${guessMe}`)
}
console.log(`final value, ${guessMe}`)