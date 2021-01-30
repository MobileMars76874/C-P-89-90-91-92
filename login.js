function login(){
var Player_1 = document.getElementById("player_1_name").value;
var Player_2 = document.getElementById("player_2_name").value;
localStorage.setItem("Player_1" , Player_1);
localStorage.setItem("Player_2" , Player_2);
localStorage.setItem("player1_Score", 0);
localStorage.setItem("player2_Score", 0);
window.location = "game_page.html";
}