HTMLVideoElement.prototype.waitUntilLoad = function(callback=()=>{}, tick=1000, wait=500){
    const loadPid = setInterval(() => {
        this.load();

        setTimeout(() => {
            if(!!this.duration) {
                callback(this);
                clearInterval(loadPid);
            }
        }, wait);
    }, tick);
}


HTMLVideoElement.prototype.waitUntilLoadAsync = function(tick=1000, wait=500){
    return new Promise(resolve => {
        const loadPid = setInterval(() => {
            this.load();
    
            setTimeout(() => {
                if(!!this.duration) {
                    resolve(this);
                    clearInterval(loadPid);
                }
            }, wait);
        }, tick);
    });
}