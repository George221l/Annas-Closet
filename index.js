// alert("hello")
// let quantity = 0;

// let boot = document.getElementsByClassName("butt");
// butt.onclick = function sass(){
//     alert("Added to Cart")
//     document.body.style.backgroundColor = "red"
// }

// prompt(hey)


let menulist = document.getElementById("menulist")

menulist.style.maxHeight = "0px";

function toggle(){
    if(menulist.style.maxHeight == "0px")
    {
        menulist.style.maxHeight = "500px";
    }
    else{
        menulist.style.maxHeight = "0px";
    }
}

