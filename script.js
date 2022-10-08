let chance = 1;
if (chance == 1){
    alert("Lets Start!");
    document.getElementById("x_chance").innerHTML = "X";
    document.getElementById("y").style.background= "#000000";

}
function setvalue(x){
    if(chance ==1){
    document.getElementById(x).innerHTML = "X";
    chance = 0;
    document.getElementById("y").style.background= "rgb(74, 60, 82)";
    document.getElementById("y_chance").innerHTML = "O";
    document.getElementById("x").style.background= "#000000";
    document.getElementById("x_chance").innerHTML = "";
    }

    else{
        document.getElementById(x).innerHTML = "O";
        chance = 1;
        document.getElementById("x").style.background= "rgb(54, 66, 18)";
        document.getElementById("x_chance").innerHTML = "X";
        document.getElementById("y").style.background= "#000000";
        document.getElementById("y_chance").innerHTML = "";
    }


}