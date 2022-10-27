
const hands = ['rock','paper','scissors'];


funcA();

function funcA () {
    console.log('Hello world');
}


const funcB =function (){
    console.log("Hello from function expression");
}

function onHandClick(btn){
    const playerHand = btn.id;
    // console.log(btn.id);




// const i = Math.floor(Math.random() * 3);
const i = Math.floor(Math.random() * hands.length);

const computerHand = hands[i];
// console.log(computerHand);
const computerElement = document.querySelector('#computerHand');
// console.log(computerElement);
computerElement.innerText = computerHand;


const result = judge(playerHand, computerHand);


document.querySelector('#outcome').innerText = result;
}


// floor→小数点を切る
// var random = Math.floor(Math.random() * 3);
// console.log(random, "ランダムな数字")


function judge(playerHand, computerHand){
    let result = undefined;

    if (playerHand === computerHand) {
        result = 'Draw';
    } else if (
        (playerHand === 'rock' && computerHand === 'scissors') ||
        (playerHand === 'paper' && computerHand === 'rock') ||
        (playerHand === 'scissors' && computerHand === 'paper') 
    ) {
        result = 'Win';
    } else {
        result = 'Lose';
    }

    




    // if (playerHand === 'rock'){
    //     if(computerHand === 'rock'){
    //         result = 'draw';
    //     }else if (computerHand === 'scissors'){
    //         result = 'win';
    //     }else {
    //         result = 'lose';
    //     }
    // } else if (playerHand === 'paper'){
    //     if(computerHand === 'paper'){
    //         result = 'draw';
    //     }else if(computerHand === 'rock'){
    //         result = 'win';
    //     }else {
    //         result = 'lose';
    //     }
    // } else {
    //     if(computerHand === 'scissors'){
    //         result = 'draw';
    //     }else if(computerHand === 'paper'){
    //         result = 'win';
    //     }else {
    //         result = 'lose';
    //     }
    // }


    // let str ='p:' + (playerHand + ',').padEnd('scissors, '.length);
    // str += 'c: ' + (computerHand + ', ') .padEnd('scissors, '.length);
    // str += 'player: ' + result;
    // console.log(str);

    return result;
}


    // console.log('p:' + (playerHand + ',').padEnd('scissors, '.length) +  ',c: ' + computerHand);

for (let playerHand of hands){
    for (let computerHand of hands) {
        const result = judge(playerHand, computerHand);
        // console.log('p:' + (playerHand + ',').padEnd('scissors, '.length) +  ',c: ' + computerHand);

        let str ='p:' + (playerHand + ',').padEnd('scissors, '.length);
        str += 'c: ' + (computerHand + ', ') .padEnd('scissors, '.length);
        str += 'player: ' + result;
        console.log(str);
    }
}