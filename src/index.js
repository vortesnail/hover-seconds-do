function HoverSD(element, secondsLaterDoFn, seconds, reNormalFn) {
  var timeout;
  var ele = element, secondsLDF = secondsLaterDoFn, secs = seconds, reNFn = reNormalFn;

  var rebuildTimer = function() {
    var context = this;
    var args = arguments;
    reNFn.apply(context, args);
    clearTimer();
    timeout = setTimeout(() => {
      secondsLDF.apply(context, args);
    }, secs);
  }
  
  var clearTimer = function() {
    timeout && clearTimeout(timeout);
  }

  this.secondsHoverEX = function() {
    ele.addEventListener('mousemove', rebuildTimer);
    ele.addEventListener('mouseleave', clearTimer);
  }
  
  this.removeElemEventListener = function() {
    ele.removeEventListener('mousemove', rebuildTimer);
    ele.removeEventListener('mouseleave', clearTimer);
  }
}

window.HoverSD = HoverSD;