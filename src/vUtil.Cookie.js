/**
 * @author: Rhine Liu
 */

vUtil.Cookie = {
	/**
	 * set the value of a key or keys in cookie
	 * @param key {String|Object} necessary
	 * @param value {String} unnecessary
	 * @param expires {Number} unnecessary seconds
	 */
	set (key, value, expires) {
		if (typeof key === 'object') {
			for (let k in key) {
				this.set(k, key[k], value);
			}
		} else {
			document.cookie = key + "=" + escape(value) + (expires != undefined ? ";expires=" + new Date(Date.now() + expires * 1000).toGMTString() : "");
		}
	},
	/**
	 * get the value of a key in cookie
	 * @param key {String} necessary
	 * @returns {String|Null}
	 */
	get (key) {
		let a = document.cookie.match(new RegExp("(^| )" + key + "=([^;]*)(;|$)"));
		return a ? unescape(a[2]) : null;
	},
	/**
	 * remove a key from cookie
	 * @param key {String} necessary
	 */
	remove (key) {
		this.set(key, '', 0);
	}
};
