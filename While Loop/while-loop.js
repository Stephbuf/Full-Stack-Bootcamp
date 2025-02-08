//Infinit 
//do{
//    Do this
//   }while(<condition>)

//let someCondition = fase;

//////

// One Time
//while(someCondition){
//    console.log("While: Hello");
//}

//do{
//    console.log("Do...While:Hello");
//}while(someCondition)

//Roll dice until you roll a 6

let maxNum = 6;
letminNum = 1;

let diceRoll;
do{
    diceRoll = Math.floor(Math.random() * maxNum) + minNum;
    console.log(`Rolled: ${diceRoll}`)
}while(diceRoll !== maxNum);
console.log(`You rolled ${maxNum}!`)

//While loop is for when there is no exact number 