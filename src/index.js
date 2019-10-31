function HoverSD() {
  var timeout;

  const rebuildTimer = function(secondsLaterDoFn, seconds, reNormalFn) {
    return function() {
      var context = this;
      var args = arguments;
      reNormalFn.apply(context, args);
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

window.HoverSD = HoverSD;