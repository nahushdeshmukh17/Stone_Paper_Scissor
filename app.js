let userscores=0;
let compscores=0;

const choice = document.querySelectorAll(".choice");
const uscore = document.querySelector("#uscore");
const compscore = document.querySelector("#compscore");
const msg = document.querySelector("#msg");

const checkwinner = (uc,cc) =>{
    if(uc=="stone"){
        if(cc=="paper")
        {
            compscores++;   
            compscore.innerText = compscores;
            msg.innerText = `You lose ${cc} beats ${uc} `;
            msg.style.backgroundColor = "red";
        }
        else{
            userscores++;
            uscore.innerText = userscores;
            msg.innerText = `You win ${uc} beats ${cc} `;
            msg.style.backgroundColor = "green";
        }
    }


    if(uc=="paper"){
        if(cc=="stone")
        {
            userscores++;
            uscore.innerText = userscores;
            msg.innerText = `You win ${uc} beats ${cc} `;
            msg.style.backgroundColor = "green";
        }
        else{
            compscores++;   
            compscore.innerText = compscores;
            msg.innerText = `You lose ${cc} beats ${uc} `;
            msg.style.backgroundColor = "red";
        }
    }


     if(uc=="scissor"){
        if(cc=="stone")
        {
            compscores++;   
            compscore.innerText = compscores;
            msg.innerText = `You lose ${cc} beats ${uc} `;
            msg.style.backgroundColor = "red";
        }
        else{
            userscores++;
            uscore.innerText = userscores;
            msg.innerText = `You win ${uc} beats ${cc} `;
            msg.style.backgroundColor = "green";
        }
    }
}


const generateRandom= () =>{
    return(Math.floor(Math.random()*3));
}

const compareChoices= (uc,cc)=>{
    let ar = ["stone","paper","scissor"];
    cc= ar[cc];
    if(uc==cc){
        console.log("Draw");
        msg.innerText = "Draw";
        msg.style.backgroundColor = "yellow";
        msg.style.color = "black";
    }
    else{
        checkwinner(uc,cc);
    }
}

choice.forEach( (ch)=>{
    ch.addEventListener("click", ()=>{
        let uc= ch.getAttribute("id");
        let cc = generateRandom();
        compareChoices(uc,cc);
    } )
} );
