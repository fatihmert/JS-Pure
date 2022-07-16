/* 
    @ref: https://youmightnotneedjquery.com/#ready
*/

Document.prototype.ready = function(callback=()=>{}) {
    if (document.readyState != 'loading'){
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
}