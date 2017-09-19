/**
 * @author: Rhine Liu
 */

vUtil.Location = {
	/**
	 * analyze the value of a key in location.search
	 * @param key {String} necessary
	 * @returns {String|Null}
	 */
	search (key) {
		let r = window.location.search.match(new RegExp("([\?|&])" + key + "=([^&]*)(&|$)"));
		return r ? decodeURIComponent(r[2]) : null;
	},
	/**
	 * analyze the value of a key in location.hash
	 * @param key {String} necessary
	 * @returns {String|Null}
	 */
	hash (key) {
		let r = window.location.hash.match(new RegExp("([\?|&])" + key + "=([^&]*)(&|$)"));
		return r ? decodeURIComponent(r[2]) : null;
	},
	/**
	 * return
	 * @param data {Object} necessary
	 * @param baseUrl {String} unnecessary
	 * @returns {string}
	 */
	param (data, baseUrl) {
		if (typeof baseUrl == 'string') {
			return baseUrl + (baseUrl.indexOf('?') < 0 ? '?' : '&') + this.param(data);
		}
		let params = [];
		for (let key in data) {
			params.push(key + '=' + encodeURIComponent(data[key]));
		}
		return params.join('&');
	}
};