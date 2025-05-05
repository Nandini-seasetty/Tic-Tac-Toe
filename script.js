let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#rst-btn");
let turnX=true;
let count=0;
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let newBtn=document.querySelector("#newBtn");
const winPatterns=[[0,1,2],[3,4,5],[6,7,8],
                   [0,3,6],[1,4,7],[2,5,8],
                   [0,4,8],[2,4,6]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX==true)
        { box.innerText="X";
          box.style.color="#00BCD4";
          turnX=false;
        }
        else{
            box.style.color="#e63bb0";
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count==9 && !isWinner)
            gameDraw();
    });
});
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1==pos2 && pos2==pos3){
            indicatePattern(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
            showwinner(pos1);
            return true;
        }
        }
    }
}
const indicatePattern=(box1,box2,box3)=>{
    box1.style.backgroundColor="#273F4F";
    box2.style.backgroundColor="#273F4F";
    box3.style.backgroundColor="#273F4F";
};
const enableboxes=()=>{
    count=0;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.style.backgroundColor="#e1e198";
    }
}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const showwinner=(winner)=>{
 msg.innerText=`Congratulations,Winner is ${winner}!`;
 disableboxes();
 msgContainer.classList.remove("hide");
};
const restartGame=()=>{
    boxes.forEach(()=>{
        turnX=true;
        count=0;
        enableboxes();
        msgContainer.classList.add("hide");
    });
};
const gameDraw=()=>{
    msg.innerText="Game was a Draw";
    msgContainer.classList.remove("hide");
    enableboxes();
}
newBtn.addEventListener("click",restartGame);
resetBtn.addEventListener("click",restartGame);