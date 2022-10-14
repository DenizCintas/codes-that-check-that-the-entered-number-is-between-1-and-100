function sayıKontrol() {
    let s = document.getElementById("sayı").value;
    let text;
    var x = document.getElementById("true");
    var y = document.getElementById("false");

    if (isNaN(s) || s < 1 || s > 100) {
        text = "Girdiğiniz sayı 1 ile 100 arasında değildir"
        document.getElementById("cevap").innerHTML = text;
        setTimeout("document.getElementById('false').style.display = 'none'", 2000);
        
        if (y.style.display === "none") {
            y.style.display = " block"
            
        }
        else {
            y.style.display = "none"
        }

    }

    else {
        text = " girdiğiniz sayı 1 ile 100 arasdındadır "
        document.getElementById("cevap").innerHTML = text;
        setTimeout("document.getElementById('true').style.display = 'none'", 2000);
        if (x.style.display === "none") {
            x.style.display = "block"
        } else {
            x.style.display = "none"


         }
         

    }
    





}

