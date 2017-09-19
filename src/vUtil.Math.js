/**
 * @author: Rhine Liu
 */

vUtil.Math = {
	/**
	 * return a random value
	 * @param a {Number|String|Array|Object} unnecessary
	 * @param b {Number} unnecessary
	 * @param c {Boolean} unnecessary
	 * @returns {*}
	 */
	random (a, b, c) {
		if (arguments.length == 0) {
			// Math.random
			return rand();
		}
		if (typeof a == 'number') {
			// Float
			if (typeof b == 'boolean' && b) {
				return rand() * a;
			}
			if (typeof b == 'number') {
				// Float
				if (typeof c == 'boolean' && c) {
					return a + rand() * (b - a);
				}
				// Int
				return a + (a > b ? -this.random(a - b + 1) : this.random(b - a + 1));
			}
			// Int
			return Math.floor(rand() * a);
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
				let index = this.random(arr);
				return [index, a[index]];
			}
		}
	},
	/**
	 * select non-repeating values in an array or less than a number
	 * @param arg {Number|Array} necessary
	 * @param num {Int} necessary
	 * @param force {Boolean} unnecessary
	 * @returns {*}
	 */
	randomlySelect (arg, num, force) {
		if (typeof arg == "number") {
			if (!force) {
				// Int
				let nums = [];
				for (let i = 0; i < arg; ++i) {
					nums.push(i);
				}
				let arr = [];
				for (let i = 0; i < num; ++i) {
					let index = this.random(nums.length);
					arr.push(nums[index]);
					nums.splice(index, 1);
				}
				return arr;
			} else {
				// Float
				let arr = [];
				for (let i = 0; i < num; ++i) {
					arr.push(rand() * arg);
				}
				return arr;
			}
		}
		if (arg instanceof window.Array) {
			let arr = this.randomlySelect(arg.length, num);
			arr.forEach((val, ind) => {
				arr[ind] = arg[val];
			});
			return arr;
		}
	}
};

function rand() {
	return Math.random();
}
