
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn")
let turnO = true //player1,player2
let newBtn = document.querySelector("#new-btn")
let msgContainer= document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let count =0;

const winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const restetGame = ()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = ()=>{
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
}

const drawCase = ()=>{
    if(count == 9){
        msgContainer.classList.remove("hide")
        msg.innerText = `Match has been Drawn`
        disableBoxes();
    }
}


const showWinner=(winner)=>{
        msgContainer.classList.remove("hide")
        msg.innerText = `Congratulations Winner is ${winner}`
        count=0;
        disableBoxes();
}

const checkWinners = () => {
    for (let pattern of winningPatterns){
        let posValue1= boxes[[pattern[0]]].innerText
        let posValue2=boxes[[pattern[1]]].innerText
        let posValue3=boxes[[pattern[2]]].innerText

       if(posValue1 !="" && posValue2 !="" && posValue3 !=""){
        if(posValue1 === posValue2 && posValue2 === posValue3){
            console.log("winner");
            showWinner(posValue1);
        }
       }

    }
}

boxes.forEach((box) => {
    box.addEventListener("click",(e) => {
        count += 1;
        drawCase();
        if(turnO){
            box.innerText = "O";
            box.style.color = "#F7DBA7";
            turnO = false
        }
        else{
            box.innerText = "X";
            box.style.color = "#F03A47";
            turnO = true
        }
        box.disabled = true;
        checkWinners();
    }
)

})

newBtn.addEventListener("click", restetGame)
resetBtn.addEventListener("click",restetGame)


