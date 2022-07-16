// Prototypes
NodeList.prototype.addEventListener = function(method, callback=()=>{}, useCapture=false) {
    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(method, callback, useCapture);
    }
}

// Helper
function copyToClipboard(text) {
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
}

// Separeted functions
async function setStars(){
    const repoInfo = await (await fetch("https://api.github.com/repos/fatihmert/JS-Pure")).json();
    document.querySelector('.github-stars').innerHTML = repoInfo.stargazers_count;
}

function anchorLinks(){
    document.querySelectorAll('[data-anchor]').addEventListener('click', function(e){
        let anchorLink = document.location.href;
        if(!document.location.host.includes('127')) {
            anchorLink = document.location.origin;
        }

        anchorLink += '#' + e.target.id.toLowerCase(); 
        window.open(anchorLink, '_self');
        copyToClipboard(anchorLink);
    });
}

function dataLinks(){
    document.querySelectorAll('[data-link]').addEventListener('click', function(e){
        let target = e.target;
        if(target.tagName == "path") {
            target = target.parentNode;
        }
        
        target.hasAttribute('data-link') && window.open(target.getAttribute('data-link'));
    });
}

// App
document.addEventListener('DOMContentLoaded', async function(){
    hljs.highlightAll();

    await setStars();

    anchorLinks();
    dataLinks();
});