/**
 * once
 * create function that only executes once
 */
 function once(fn) {
  let runValue = null;
  let canRun = true;  
  return function runOnce() {
     if (canRun) {
      runValue = fn.apply(this, arguments);
      canRun = false;
     }
     return runValue;
   };
 }

 /**
  * after
  * create a function what executes after specific calls
  */
function after(fn, count) {
  let afterCount = 0;
  return function runAfter() {
    afterCount += 1;
    if (afterCount >= count) {
      return fn.apply(this, arguments);
    }
  }
}

/**
 * throttle
 * create a function, when invoked repeatedly, will call the original function once
 * per every wait milliseconds.
 */
function throttle(fn, wait) {
  let lastTime = null;
  return function throttled() {
    const lastDuration = Date.now() - lastTime;
    if (!lastTime || lastDuration >= wait) {
      fn.apply(this, arguments);
      lastTime = Date.now();
    }
  }
}

/**
 * debounce
 * create a function, when invoked repeatedly, will call the original function
 * after wait milliseconds since the last invocation
 */
function debounce(fn, wait) {
  let timer = null;
  return function debounced() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  }
}