const white = document.querySelectorAll(".white");
const whitekey = [81, 87, 69, 82, 85, 73, 79, 65, 83, 68, 70, 74, 75, 76, 90, 88, 67, 86, 77, 188, 190, 191, 80, 186];
const black = document.querySelectorAll(".black");
const blackKey = [81, 87, 82, 85, 73, 65, 83, 70, 74, 75, 90, 88, 86, 77, 188, 80, 186, 191];
function addId() {
    white.forEach((e, i) => {
        e.id = `k${whitekey[i]}`
    });
}

function keyDownSet(e) {
    if (e.shiftKey) {
        if (blackKey.indexOf(e.keyCode) >= 0) {
            if (e.keyCode == 80 || e.keyCode == 65) {
                black[5].style.background = "gray";
            } else if (e.keyCode == 186 || e.keyCode == 90) {
                black[10].style.background = "gray";
            } else if (e.keyCode == 191) {
                
                black[15].style.background = "gray";
            } else {
                black[blackKey.indexOf(e.keyCode)].style.background = "gray";
            }
        } else {
            console.log("올바른 건반이 아닙니다.");
        }
    } else {
        if (whitekey.indexOf(e.keyCode) >= 0) {
            if (e.keyCode == 80 || e.keyCode == 65) {
                white[7].style.background = "orange";
            } else if (e.keyCode == 186 || e.keyCode == 90) {
                white[14].style.background = "orange";
            } else {
                white[whitekey.indexOf(e.keyCode)].style.background = "orange";
            }
        } else {
            console.log("올바른 건반이 아닙니다.");
        }
    }
}

function keyUpSet(e) {
    console.log("up");
    if (e.shiftKey) {
        if (blackKey.indexOf(e.keyCode) >= 0) {
            if (e.keyCode == 80 || e.keyCode == 65) {
                black[5].style.background = "";
            } else if (e.keyCode == 186 || e.keyCode == 90) {
                black[10].style.background = "";
            } else if (e.keyCode == 191) {
                
                black[15].style.background = "";
            } else {
                black[blackKey.indexOf(e.keyCode)].style.background = "";
            }
        } else {
            console.log("올바른 건반이 아닙니다.");
        }
    } else {
        if (whitekey.indexOf(e.keyCode) >= 0) {
            if (e.keyCode == 80 || e.keyCode == 65) {
                white[7].style.background = "";
            } else if (e.keyCode == 186 || e.keyCode == 90) {
                white[14].style.background = "";
            } else {
                white[whitekey.indexOf(e.keyCode)].style.background = "";
            }
        } else {
            console.log("올바른 건반이 아닙니다.");
        }
    }
}

function init() {
    addId();
    window.addEventListener("keydown", keyDownSet);
    window.addEventListener("keyup",keyUpSet);  
};

init();