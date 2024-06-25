let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let winnerMsg = document.querySelector(".winnerMessage");
let playAgain = document.querySelector(".playAgain");
let winner = document.querySelector(".winner");
let winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let turn = true;

const checkWin = ()=>{
    for(pattern of winPattern){
        
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val!=="" && pos2Val!=="" && pos3Val!==""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                declareWinner(pos1Val);
            }
        }

    }
};

const declareWinner = (winVar)=>{
    winner.innerText = winVar;
    winnerMsg.hidden = false;
};

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turn){
            box.innerText = "X";
            turn = false;
        } else{
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        checkWin();
    });
});

const reset = ()=>{
    boxes.forEach((box)=>{
        box.innerText = null;
        box.disabled = false;
    });
    turn = true;
};

resetBtn.addEventListener("click", ()=>{
    reset();
});

playAgain.addEventListener("click", ()=>{
    winnerMsg.hidden=true;
    reset();
});