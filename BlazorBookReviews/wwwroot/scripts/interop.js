function setHalloween(on) {
    let body = document.getElementsByTagName("body")[0];

    if (on)
        body.classList.add("halloween");
    else
        body.classList.remove("halloween");
}


function initialize(caller) {
    let body = document.getElementsByTagName("body")[0];

    body.addEventListener("mouseleave", () => caller.invokeMethodAsync("MouseLeave"));
}
