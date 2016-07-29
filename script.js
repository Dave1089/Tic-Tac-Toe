var symPlayer,symCom;
gameOver = [['a1','a2','a3'],['b1','b2','b3'],['c1','c2','c3'],['a1','b1','c1'],['a2','b2','c2'],['a3','b3','c3'],['a1','b2','c3'],['a3','b2','c1']];
aiArr = ['a1','a3','b2','c3','c1'];
mov = 0;
var movIndex;
//playArr = [];
function firstMove(){
	playArr = ['a1','a2','a3','b1','b2','b3','c1','c2','c3'];
	firstPos = playArr[Math.floor(Math.random()*playArr.length)];//aiArr[2];
	//Math.floor(Math.random()*aiArr.length)
	movIndex = playArr.indexOf(firstPos);
	playArr.splice(movIndex,1);
	document.getElementById(firstPos).innerHTML = symCom;
	//playArr.push(firstPos);
	mov++;
}
//Check for game over
function checkOver(){
	for(var i=0;i<gameOver.length;i++){
		one = document.getElementById(gameOver[i][0]).innerHTML;
		two = document.getElementById(gameOver[i][1]).innerHTML;
		three = document.getElementById(gameOver[i][2]).innerHTML;
		if(one==two && one==three && one==symCom){
			alert("You lost");
				playArr = [];
				symPlayer = symCom = '';
				mov = 0;
				$('#board table tr td').empty();
			$('.selection').fadeIn(2000);
			break;
		}
		else if(one==two && one==three && one==symPlayer){
			alert("You won");
				playArr = [];
				symPlayer = symCom = '';
				mov = 0;
			$('#board table tr td').empty();
			$('.selection').fadeIn(2000);
			break;
		}
	}	
	
}

function playerMove(){
	//var curState = playArr.join("");
	var nextMove = playArr[Math.floor(Math.random()*playArr.length)];;
	/*switch(curState){
	//Center Move
		case 'b2b1':
		case 'b2a2':
		case 'b2b3c1a3':
		case 'b2c2a3c1':
		case 'b2c1a3b1a1a2':
		case 'b2c1a3a2':
		case 'b2c1a3a1b1b3':
		case 'b2c1a3a1b1c2':
		case 'b2c1a3a1b1a2':
			nextMove = 'c3';
			break;
		case 'b2b3':
		case 'b2b1c3a1':
		case 'b2a2c3a1a3b2':
			nextMove = 'c1';
			break;
		case 'b2c2':
		case 'b2c1':
		case 'b2a2c3a1':
		case 'b2b1c3a1c1c2':
			nextMove = 'a3';
			break;
		case 'b2b1c3a1c1a3':
		case 'b2b3c1a3c3a1':
		case 'b2c1a3a1b1a2c3b3':
			nextMove = 'c2';
			break;
		case 'b2a2c3a1a3c1':
			nextMove = 'b2';
			break;
		case 'b2b3c1a3c3c2':
		case 'b2c2a3c1c3b3':
		case 'b2c1a3b1':
		case 'b2c1a3a2c3b3':
			nextMove = 'a1';
			break;
		case 'b2c2a3c1c3a1':
		case 'b2c1a3a2c3a1':
		case 'b2c1a3a1b1a2c3c2':
			nextMove = 'b3';
			break;
		case 'b2c1a3b1a1c3':
		case 'b2c1a3a1b1b3c3c2':
		case 'b2c1a3a1b1c2c3b3':
			nextMove = 'a2';
			break;
		case 'b2c1a3a1':
			nextMove = 'b1';
			break;
		
	}*/
	document.getElementById(nextMove).innerHTML = symCom;
	movIndex = playArr.indexOf(nextMove);
	playArr.splice(movIndex,1);
	//playArr.push(nextMove);
	mov++;
	if(mov == 9){
		alert('Draw!');
		playArr = [];
		symPlayer = symCom = '';
		mov = 0;
		$('#board table tr td').empty();
		$('.selection').fadeIn(2000);
	}
	else{
		checkOver();
	}
		
}

$(function() {
//Assign symbol
	$('.selection a').click(function() {
		symPlayer = $(this).html();
		if (symPlayer == 'X') {
			symCom = 'O';
		} else {
			symCom = 'X';
		}
		$('.selection').hide();
		firstMove();
	});
	
	$('.square').click(function(){
		curId = $(this).prop('id');
		if($(this).html() == '' && mov > 0)
			{
				$(this).html(symPlayer);
				movIndex = playArr.indexOf(curId);
				playArr.splice(movIndex,1);//playArr.push(curId);
				mov++;
				checkOver();
				playerMove();
			}
		
	});
//	
});