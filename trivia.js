var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"   
        Score++
        
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
	
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
	
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         score++
	
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         score++
	
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
	
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
	
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         score++

    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         score++
	
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
	
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
	ans++; 
}
        

function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
   	document.view.question.value ="Which country won the FIFA World Cup in soccer in 2018? \na)Italy \nb)Canada \nc)France \nd)There was no FIFA World Cup in 2018";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which two basketball teams are in the 2019 finals? \na)Golden state and Raptors \nb)Bucks and Raptors \nc)Lakers and Raptors \nd)The finals didn't start yet";
    document.view.qans.value=""
}
else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which is not a sport? \na)Soccer \nb)Swimming \nc)Chess \nd)Golf";
    document.view.qans.value=""
}
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Is it illegal to punch your oponent in the kidneys in boxing? \na)No \nb)Yes \nc)In some cases \nd)You are allowed to always";
    document.view.qans.value=""
}
else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who scored the most goals in NHL history? \na)Gordie Howe \nb)Austin Matthews \nc)Sydney Crosby \nd)Wayne Gretzky";
    document.view.qans.value=""
}
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who is number 30 on the Golden State Warriors basketball team? \na)Stephen Curry \nb)Klay Thompson \nc)Draymond Green \nd)Lebron James";
    document.view.qans.value=""
}
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the most played sport in the world? \na)Basketball \nb)Hockey \nc)Soccer \nd)Tennis";
    document.view.qans.value=""
}
else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the place where the Blue Jays play baseball in Toronto? \na)Scotiabank arena \nb)Rogers Centre \nc)CN tower \nd)None of the above";
    document.view.qans.value=""
}
else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What job opportunities can you pursue in the sports industry? \na)Professional athlete \nb)Coach \nc)Marketer \nd)All of the above";
    document.view.qans.value=""
}
else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which clothing brands are for sports? \na)Nike \nb)Gucci \nc)Apple \nd)Tommy Hilfiger";
    document.view.qans.value=""
}

	i++; 
}
   