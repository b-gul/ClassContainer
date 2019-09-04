/**
 * A simple central CSS Class Container for your long div classes
 * Author: @bgul <berke.gul@println.work>
 */

var Classy = (function() {
  
  /**
   * @param {Object} index Hold class container
   */
	function Classy(index) {
  	for (var key in index) {
     	document.getElementById(key).classList.add(...index[key]);
    }
  }

  return Classy;
}());
