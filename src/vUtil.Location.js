/**
 * @author: Rhine Liu
 */

vUtil.Location = {
	search (key) {
		let r = location.search.match(new RegExp("(^|&)" + key + "=([^&]*)(&|$)"));
		return r ? decodeURIComponent(r[2]) : null;
	},
	hash (key) {
		let r = location.hash.match(new RegExp("([\?|&])" + key + "=([^&]*)(&|$)"));
		return r ? decodeURIComponent(r[2]) : null;
	}
};