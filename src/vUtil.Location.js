/**
 * @author: Rhine Liu
 */

vUtil.Location = {
	/**
	 * analyze the value of a key in location.search
	 * @param key {String}
	 * @returns {String|Null}
	 */
	search (key) {
		let r = location.search.match(new RegExp("(^|&)" + key + "=([^&]*)(&|$)"));
		return r ? decodeURIComponent(r[2]) : null;
	},
	/**
	 * analyze the value of a key in location.hash
	 * @param key {String}
	 * @returns {String|Null}
	 */
	hash (key) {
		let r = location.hash.match(new RegExp("([\?|&])" + key + "=([^&]*)(&|$)"));
		return r ? decodeURIComponent(r[2]) : null;
	}
};