/**
 * @author: Rhine Liu
 */

(function () {
	vUtil.Math = {
		random (a, b) {
			if (arguments.length == 0) {
				// Math.random
				return rand();
			}
			if (arguments.length == 1) {
				if (typeof a == 'number') {
					if (parseInt(a) == a) {
						// Int
						return Math.floor(rand() * a);
					}
					// Float
					return rand() * a;
				}
				if (typeof a == 'string') {
					// String
					return a[this.random(a.length)];
				}
				if (typeof a == 'object') {
					if (a instanceof window.Array) {
						// Array
						return a[this.random(a.length)];
					} else {
						// Object
						let arr = [];
						for (let i in a) {
							arr.push(i);
						}
						var index = this.random(arr);
						return [index, a[index]];
					}
				}
			}
			if (arguments.length == 2) {
				if (typeof a == 'number' && typeof b == 'number') {
					if (parseInt(a) == a && parseInt(b) == b) {
						// Int && Int
						return a + (a > b ? -this.random(a - b + 1) : this.random(b - a + 1));
					}
					// Float || Float
					return a + this.random(b - a);
				}
			}
		}
	};

	function rand() {
		return Math.random();
	}
})();
