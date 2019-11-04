let tWindow = document.getElementById("win");
let handle = document.getElementById("win-handle");

function dragElement(elmnt, handle) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (document.getElementById(handle.id)) {
        document.getElementById(handle.id).onmousedown = dragMouseDown;
        document.getElementById(handle.id).ontouchstart = touchStart;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        let cx = e.clientX;
        let cy = e.clientY;
        pos1 = pos3 - cx;
        pos2 = pos4 - cy;
        pos3 = cx;
        pos4 = cy;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function touchStart(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos3 = e.clientY;
        
        document.ontouchend = touchEnd;
        document.ontouchmove = touchMove;
    }

    function touchMove(e) {
        e = e || window.event;
        pos1 = pos3 - e.targetTouches[0].clientX;
        pos2 = pos4 - e.targetTouches[0].clientY;
        pos3 = e.targetTouches[0].clientX;
        pos4 = e.targetTouches[0].clientY;

        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function touchEnd() {
        document.ontouchend = null;
        document.ontouchmove = null;
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

dragElement(tWindow, handle);
