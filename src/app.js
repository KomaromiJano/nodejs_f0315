// app.js

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("form");
    var a = document.getElementById("a_side");
    var b = document.getElementById("b_side");
    var c = document.getElementById("c_side");
    var d = document.getElementById("d_side");
    var terulet = document.getElementById("terulet");
    var kerulet = document.getElementById("kerulet");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var T = Terulet(parseFloat(a.value), parseFloat(b.value), parseFloat(c.value), parseFloat(d.value));
        var K = Kerulet(parseFloat(a.value), parseFloat(b.value), parseFloat(c.value), parseFloat(d.value));

        terulet.innerText = T.toFixed(2); // Két tizedesre kerekítve jelenítjük meg
        kerulet.innerText = K.toFixed(2);
  
    });
});

function Terulet(a,b,c,d){

    var s = (a+b+c+d)/2;
    var terulet = Math.sqrt((s-a)*(s-b)*(s-c)*(s-d));

    return terulet;

}

function Kerulet(a,b,c,d){

    var kerulet = a + b + c + d;

    return kerulet;
}