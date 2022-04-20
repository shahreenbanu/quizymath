var player1 = localStorage.getItem("name1");
var player2 = localStorage.getItem("name2");
var player1_score = 0;
var player2_score = 0;
document.getElementById("player1_name").innerHTML=player1;
document.getElementById("player2_name").innerHTML=player2;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn =" + player1;
document.getElementById("player_answer").innerHTML="Answer Turn =" + player2;


function send(){
     num1 = document.getElementById("input_number1").value;
     num2 = document.getElementById("input_number2").value;
     ans = parseInt(num1) + parseInt(num2);
    question_number = "<h4>" + num1 + " + "+ num2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'> Check </button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;

    document.getElementById("input_number1").value = "";
    document.getElementById("input_number2").value = "";


}
var question_turn = player1;
var answer_turn = player2;
function check() {
    get_number = document.getElementById("input_check_box").value;
    if(get_number == ans) {
        if(answer_turn == player1){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
          else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML=player2_score;
          }
    }
    if(question_turn == player1){
        question_turn == player2;
        document.getElementById("player_question").innerHTML="Question Turn =" + player2;
    }
    else{
        question_turn == player1;
        document.getElementById("player_question").innerHTML="Question Turn =" + player1;
    }


    if(answer_turn == player1){
        answer_turn == player2;
        document.getElementById("player_answer").innerHTML="Answer Turn =" + player2;

    }
    else{
        question_turn == player1;
        document.getElementById("player_answer").innerHTML="Answer Turn =" + player1;
    }
}
