let chance = 1;
let select =new Audio("sounds/select.mp3");
let start = new Audio("sounds/game-start.mp3");
if (chance == 1){
    alert("Lets Start!");
    start.play();
    document.getElementById("x_chance").innerHTML = "X";
    document.getElementById("y").style.background= "#000000";

}
let win =()=>{
    const boxes =document.getElementsByClassName("box");
    const winboxconf=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    console.log(typeof(boxes));
    console.log(boxes);
    winboxconf.forEach(e=>{
        if( (boxes[e[0]].innerText === boxes[e[1]].innerText) && (boxes[e[1]].innerText === boxes[e[2]].innerText) && (boxes[e[0]].innerText !== ""))
        alert("Won!!!!!!!!");

    })
}

function setvalue(x){
    select.play(); 
    if(document.getElementById(x).innerText === ""){
            
        if(chance ==1){
        document.getElementById(x).innerHTML = "X";
        chance = 0;
        document.getElementById("y").style.background= "rgb(74, 60, 82)";
        document.getElementById("y_chance").innerHTML = "O";
        document.getElementById("x").style.background= "#000000";
        document.getElementById("x_chance").innerHTML = "";
        win();        
        }

        else{
            document.getElementById(x).innerHTML = "O";
            chance = 1;
            document.getElementById("x").style.background= "rgb(54, 66, 18)";
            document.getElementById("x_chance").innerHTML = "X";
            document.getElementById("y").style.background= "#000000";
            document.getElementById("y_chance").innerHTML = "";
            win();
        }



    }
}