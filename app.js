let userscore=0;
let compscore=0;

const choice = document.querySelectorAll(".choice");
choice.forEach( (ch)=>{
    ch.addEventListener("click", ()=>{
        uc= ch.getAttribute("id");
        console.log(uc, "was clicked");
    } )
} );
