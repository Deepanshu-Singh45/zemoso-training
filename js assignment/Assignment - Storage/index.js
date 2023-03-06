
const locScr = document.getElementById("localScore");
const sessionScr = document.getElementById("sessionScore");

var loc = localStorage.getItem("localScore");
var session = sessionStorage.getItem("sessionScore");

if(!loc) {
    loc = 0;
}
else {
    session = Number(session)
}
if(!session) { 
    session = 0;
}else {
    session = Number(session)
}

locScr.textContent = loc;
sessionScr.textContent = session;

function counterFunc() {

    loc++;
    session++;
    locScr.textContent = loc;
    sessionScr.textContent = session;
    localStorage.setItem("localScore", loc);
    sessionStorage.setItem("sessionScore", session);

}




