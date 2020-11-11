function publishResult2(){
    const prog=document.getElementById("prog2").value;
    const hal=document.getElementById("hal2").value;
    const web=document.getElementById("web2").value;

    let total= parseFloat(prog) + parseFloat(hal) + parseFloat(web);
    document.getElementById("sum2").innerHTML="Elért pontszám:" + total;
    let percentage2=(total*100)/120;
    document.getElementById("percentage2").innerHTML="Százalék:" + percentage2; 

    if (percentage2>=60) {
        document.getElementById("grade2").innerHTML="Osztályzat: 5";
    }
    else if (percentage2>=47) {
        document.getElementById("grade2").innerHTML="Osztályzat: 4";
    }
    else if (percentage2>=33) {
        document.getElementById("grade2").innerHTML="Osztályzat: 3";
    }
    else if (percentage2>=25) {
        document.getElementById("grade2").innerHTML="Osztályzat: 2";
    }
    
    else{
        document.getElementById("grade2").innerHTML="Osztályzat: 1";;

    }
}
