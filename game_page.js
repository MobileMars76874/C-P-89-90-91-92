player_1 = localStorage.getItem("Player_1");
player_2 = localStorage.getItem("Player_2");
player1_score = 0;
player2_score = 0;
document.getElementById("player_1_name").innerHTML = player_1+""+"-"+"";
document.getElementById("player_2_name").innerHTML = player_2+""+"-"+"";
question = player_1;
answer = player_2;
document.getElementById("player_question").innerHTML = "Question - "+question;
document.getElementById("player_answer").innerHTML = "Answer - "+answer;

function Ask(){
number_1 = document.getElementById("1").value;
number_2 = document.getElementById("2").value;
op = ["+","-","x","/"];
i = Math.floor(Math.random(0, op.length-1) * 3) + 0;
row_1 = number_1+op[i]+number_2;
row_2 = "<input id='answer_i' placehodler='Enter your answer here'>"
row_3 = "<button onclick='Ok()'>OK</button>"
var div = row_1+"<br><br>"+row_2+"<br><br>"+row_3;
document.getElementById("output").innerHTML = div;
}

function Ok(){
answer_by_u = document.getElementById("answer_i").value;
A = document.getElementById("1").value;
B = document.getElementById("2").value;
M = op[i]
if(M == "+"){
r_a = parseInt(A) + parseInt(B);
console.log(r_a);
check();
}
if(M == "-"){
r_a = parseInt(number_1) - parseInt(number_2);
console.log(r_a);
check();
}
if(M == "x"){
r_a = parseInt(number_1) * parseInt(number_2);
console.log(r_a);
check();
}
if(M == "/"){
r_a = parseInt(number_1) / parseInt(number_2);
console.log(r_a);
check();
}

document.getElementById("1").innerHTML = "";
document.getElementById("2").innerHTML = "";
}

function check(){
if(answer_by_u == r_a){
if(answer == player_1){
player1_score = player1_score + 1;
localStorage.setItem("player1_Score", player1_score)
document.getElementById("player1_score").innerHTML = player1_score;
}
else if(answer == player_2){
player2_score = player2_score + 1;
localStorage.setItem("player2_Score", player2_score)
document.getElementById("player2_score").innerHTML = player2_score;
}
}
if(question == player_1){
question = player_2;
answer = player_1;
document.getElementById("player_question").innerHTML = "Question - "+question;
document.getElementById("player_answer").innerHTML = "Answer -"+answer;
}
else{
question = player_1;
answer = player_2;
document.getElementById("player_question").innerHTML = "Question - "+question;
document.getElementById("player_answer").innerHTML = "Answer -"+answer;
}
}

