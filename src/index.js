function hoversd() {
  var timeout;

  const rebuildTimer = function(secondsLaterDoFn, seconds, reNormalFn) {
    return function() {
      reNormalFn();
      var context = this;
      var args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        secondsLaterDoFn.apply(context, args);
      }, seconds);
    }
  }
  
  const clearTimer = function() {
    timeout && clearTimeout(timeout);
  }

  this.secondsHoverEX = function(element, secondsLaterDoFn, seconds, reNormalFn) {
    element.addEventListener('mousemove', rebuildTimer(secondsLaterDoFn, seconds, reNormalFn));
    element.addEventListener('mouseleave', clearTimer);
  }
  
  
  this.removeElemEventListener = function() {
    
  }
}

window.hoversd = hoversd;