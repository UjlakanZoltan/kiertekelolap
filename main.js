function publishResult(){
    const prog=document.getElementById("prog").value;
    const hal=document.getElementById("hal").value;
    const web=document.getElementById("web").value;

    let total= parseFloat(prog) + parseFloat(hal) + parseFloat(web);
    document.getElementById("sum").innerHTML="Elért pontszám:" + total;
    let percentage=(total*100)/300;
    document.getElementById("percentage").innerHTML="Százalék:" + percentage; 

    if (percentage>=80) {
        document.getElementById("grade").innerHTML="Osztályzat: 5";
    }
    else if (percentage>=60) {
        document.getElementById("grade").innerHTML="Osztályzat: 4";
    }
    else if (percentage>=40) {
        document.getElementById("grade").innerHTML="Osztályzat: 3";
    }
    else if (percentage>=25) {
        document.getElementById("grade").innerHTML="Osztályzat: 2";
    }
    
    else{
        document.getElementById("grade").innerHTML="Osztályzat: 1";;

    }
}
