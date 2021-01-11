var body = document.querySelector("body");
var clr1 = document.querySelector("#color1");
var clr2 = document.querySelector("#color2");
var out = document.querySelector("#output");
var box = document.querySelector("#box");
var btn = document.querySelector("#btn");
var tgl = 0;

box.style.display = "none";
body.style.backgroundImage = "linear-gradient(to right, rgb(0, 189, 31), rgb(0, 50, 143)";


function updateBackgroundColor(){
    body.style.background =
        "linear-gradient(to right,"
        + clr1.value
        + ", "
        + clr2.value
        + ")";
}

function updateFooterValue(){
    if (!tgl){
        out.textContent =
        "linear-gradient(to right, "
        + clr1.value.toUpperCase()
        + ", "
        + clr2.value.toUpperCase()
        + ");";
    }
    else {
        out.textContent = body.style.backgroundImage + ";"
    }
    updateButton();
}

function updateButton(){
    if (!tgl){
        btn.textContent = "HEX";
    }
    else{
        btn.textContent = "RGB";
    }
}

[clr1, clr2].forEach(function(elem){
    elem.addEventListener("input", function(){
        box.style.display = "flex";
        updateBackgroundColor();
        updateFooterValue();
    })
})

btn.addEventListener("click", function(){
    box.style.display = "flex";
    tgl ^= 1;
    updateFooterValue();
})
