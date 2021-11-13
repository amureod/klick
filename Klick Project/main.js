
document.getElementById("btn").innerHTML = "Start";

function klik(){
    document.getElementById("btn").removeEventListener('click', klik);
    var time1 = setTimeout(timer1, 1000);
    var time2 = setTimeout(timer2, 2000);
    var time3 = setTimeout(timer3, 3000);
    var time4 = setTimeout(timer4, 4000);
    function timer1(){
        document.getElementById("btn").innerHTML="3";
    }
    function timer2(){
        document.getElementById("btn").innerHTML="2";
    }
    function timer3(){
        document.getElementById("btn").innerHTML="1";
    }
    function timer4(){
        document.getElementById("btn").innerHTML="Click!!!";
        var y = 0;
        document.getElementById("btn").onclick = function(){
            y+=1;
            document.getElementById("cps").innerHTML = ("Clicks : " + String(y));
            var time7 = setTimeout(timer7, 10000);
            function timer7(){
                document.getElementById("cps").innerHTML = ("CPS : " + String(y/10));
                document.getElementById("btn").onclick = function(){
                    this.onclick = false;
                }
            }
        }
    }
}

document.getElementById("btn").addEventListener('click', klik);
