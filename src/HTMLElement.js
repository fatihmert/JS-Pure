/* 
    @ref: https://youmightnotneedjquery.com/#index
*/

HTMLElement.prototype.index = function(){
    if(!this) return -1;
    let i = 0,
        el = this;
    
    while(el = el.previousElementSibling) {
        i++;
    }

    return i;
}

/* 
    @ref: https://youmightnotneedjquery.com/#matches_selector
*/

HTMLElement.prototype.is = function(selector){
    return (
        this.matches || 
        this.matchesSelector || 
        this.msMatchesSelector || 
        this.mozMatchesSelector || 
        this.webkitMatchesSelector || 
        this.oMatchesSelector
    ).call(this, selector);
}

/* 
    @ref: https://youmightnotneedjquery.com/#offset
*/

HTMLElement.prototype.offset = function(){
    var rect = this.getBoundingClientRect();

    return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
    }
}

/* 
    @ref: https://youmightnotneedjquery.com/#siblings
*/

HTMLElement.prototype.siblings = function () {
    if (this.parentNode === null) return [];
  
    return Array.prototype.filter.call(this.parentNode.children, function (child) {
      return child !== this;
    });
};



