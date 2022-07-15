/* 
    @src: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
*/
NodeList.prototype.addEventListener = function(method, callback=()=>{}, useCapture=false) {
    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(method, callback, useCapture);
    }
}

/* 
    @src: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
*/
NodeList.prototype.removeEventListener = function(method, callback=()=>{}, useCapture=false) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(method, callback, useCapture);
    }
}

/* 
    @src: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
*/
NodeList.prototype.dispatchEvent = function(customEventObject) {
    for (let i = 0; i < this.length; i++) {
        this[i].dispatchEvent(customEventObject);
    }
}

