const header = document.getElementById("header");

window.addEventListener( "scroll", changeBackground );

function changeBackground() {
    let yVal = window.scrollY;
    console.log(yVal);
    if( yVal > 20 ) {
        header.style.backgroundColor = "black";
    }
    else {
        header.style.backgroundColor = "transparent";
    }
}