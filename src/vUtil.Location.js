/**
 * @author: Rhine Liu
 */

vUtil.Location = {
	/**
	 * analyze the value of a key in location.search, or the keys and values in location.search
	 * @param key {String} unnecessary
	 * @returns {String|Null}
	 */
	search (key) {
		if (!arguments.length) {
			let ret = {};
			let arr = window.location.search.substr(1).split('&');
			arr.forEach(str => {
				let r = str.match(/^(\S*)=(\S*)$/);
				if (r && r[1]) ret[r[1]] = r[2];
			});
			return ret;
		} else {
			let r = window.location.search.match(new RegExp("([\?|&])" + key + "=([^&]*)(&|$)"));
			return r ? decodeURIComponent(r[2]) : null;
		}
	},
	/**
	 * analyze the value of a key in location.hash, or the keys and values in location.hash
	 * @param key {String} unnecessary
	 * @returns {String|Null}
	 */
	hash (key) {
		if (!arguments.length) {
			let ret = {};
			if (window.location.hash.indexOf('?') < 0) return ret;
			let arr = window.location.hash.substr(window.location.hash.indexOf('?') + 1).split('&');
			arr.forEach(str => {
				let r = str.match(/^(\S*)=(\S*)$/);
				if (r && r[1]) ret[r[1]] = r[2];
			});
			return ret;
		} else {
			let r = window.location.hash.match(new RegExp("([\?|&])" + key + "=([^&]*)(&|$)"));
			return r ? decodeURIComponent(r[2]) : null;
		}
	},
	/**
	 * return a url combined with baseUrl and data
	 * @param a {Object} necessary data
	 * @param b {String} unnecessary baseUrl
	 * @returns {string}
	 */
	param (a, b) {
		if (typeof a == 'object' && typeof b == 'string') {
			return b + (b.indexOf('?') < 0 ? '?' : '&') + this.param(a);
		}
		if (typeof b == 'object' && typeof a == 'string') {
			return a + (a.indexOf('?') < 0 ? '?' : '&') + this.param(b);
		}
		let params = [];
		for (let key in a) {
			params.push(key + '=' + encodeURIComponent(a[key]));
		}
		return params.join('&');
	}
};