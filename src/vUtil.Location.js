/**
 * @author: Rhine Liu
 */

vUtil.Location = {
	search (key) {
		var r = location.search.match(new RegExp("(^|&)" + key + "=([^&]*)(&|$)"));
		return r ? decodeURIComponent(r[2]) : null;
	},
	hash (key) {
		var r = location.hash.match(new RegExp("([\?|&])" + key + "=([^&]*)(&|$)"));
		return r ? decodeURIComponent(r[2]) : null;
	}
};