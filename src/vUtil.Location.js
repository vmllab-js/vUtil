/**
 * @author: Rhine Liu
 */

vUtil.Location = {
	/**
	 * analyze the value of a key in location.search, or the keys and values in location.search
	 * @param key {String} unnecessary
	 * @returns {Object|String|Null}
	 */
	search (key) {
		if (!arguments.length) {
			return this.splitSearch(window.location.search.substr(1));
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
			return this.splitSearch(window.location.hash.substr(window.location.hash.indexOf('?') + 1));
		} else {
			let r = window.location.hash.match(new RegExp("([\?|&])" + key + "=([^&]*)(&|$)"));
			return r ? decodeURIComponent(r[2]) : null;
		}
	},
	/**
	 * split search string to object
	 * @param searchStr {String}
	 * @returns {Object}
	 * @example "a=b&c=d" => {"a":"b","c":"d"}
	 */
	splitSearch (searchStr) {
		let ret = {};
		let arr = searchStr.split('&');
		arr.forEach(str => {
			let r = str.match(/^(\S*)=(\S*)$/);
			if (r && r[1]) ret[r[1]] = r[2];
		});
		return ret;
	},
	/**
	 * return a url combined with baseUrl and data
	 * @param a {Object} necessary data
	 * @param b {String} unnecessary baseUrl
	 * @returns {string}
	 */
	param (a, b) {
		if (typeof a === 'object' && typeof b === 'string') {
			return this.param(b, a);
		}
		if (typeof b === 'object' && typeof a === 'string') {
			let arr = a.split('#');
			let arr2 = arr[0].split('?');
			let obj = arr2[1] ? this.splitSearch(arr2[1]) : {};
			for (let key in b) {
				obj[key] = b[key];
			}
			let search = this.param(obj);
			return arr2[0] + '?' + search + (arr[1] ? '#' + arr[1] : '');
		}
		let params = [];
		for (let key in a) {
			params.push(key + '=' + (a[key] !== undefined && a[key] !== null ? encodeURIComponent(a[key]) : ''));
		}
		return params.join('&');
	}
};