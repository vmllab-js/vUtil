/*!
 * vUtil.js
 *
 * https://github.com/vmllab-js/vUtil | Released under MIT license
 *
 * @author https://github.com/vmllab-js
 * @since 2017-09-14
 */
(function (global, factory) {

	"use strict";

	if (typeof module === "object" && typeof module.exports === "object") {
		module.exports = factory(global, true);
	} else if (typeof define === "function" && define.amd) {
		define("vUtil", [], function () {
			return factory(global);
		});
	} else {
		global.vUtil = factory(global);
	}

})(this, function (global, noGlobal) {

	"use strict";

	var vUtil = {};

	"use strict";

	/**
	 * @author: Sussertod
	 */

	vUtil.Array = {};
	"use strict";

	/**
	 * @author: Miller Liang
	 */

	vUtil.Check = {};
	"use strict";

	/**
	 * @author: Rhine Liu
	 */

	vUtil.Cookie = {
		/**
		 * set the value of a key in cookie
		 * @param key {String}
		 * @param value {String}
		 * @param expires {Number} seconds
		 */
		set: function set(key, value, expires) {
			document.cookie = key + "=" + escape(value) + (expires != undefined ? ";expires=" + new Date(Date.now() + expires * 1000).toGMTString() : "");
		},

		/**
		 * get the value of a key in cookie
		 * @param key {String}
		 * @returns {String|Null}
		 */
		get: function get(key) {
			var a = document.cookie.match(new RegExp("(^| )" + key + "=([^;]*)(;|$)"));
			return a ? unescape(a[2]) : null;
		},

		/**
		 * remove a key from cookie
		 * @param key {String}
		 */
		remove: function remove(key) {
			this.set(key, '', 0);
		}
	};
	"use strict";

	/**
	 * @author: Sussertod
	 */

	vUtil.DOM = {};
	"use strict";

	/**
	 * @author: Miller Liang
	 */

	vUtil.Date = {};
	"use strict";

	/**
	 * @author: iorilp
	 */

	vUtil.Event = {};
	"use strict";

	/**
	 * @author: Rhine Liu
	 */

	vUtil.Location = {};
	"use strict";

	/**
	 * @author: Rhine Liu
	 */

	vUtil.Math = {};
	"use strict";

	/**
	 * @author: Sussertod
	 */

	vUtil.Object = {};
	"use strict";

	/**
	 * @author: Miller Liang
	 */

	vUtil.String = {};
	"use strict";

	/**
	 * @author: iorilp
	 */

	var vUtil = vUtil || {};
	vUtil.UA = {};

	!function () {
		var UA = window.navigator.userAgent.toLowerCase();

		//判断是否IOS
		vUtil.UA.ios = function () {
			try {
				return (/(iPhone|iPad|iPod|iOS)/i.test(UA)
				);
			} catch (e) {
				return false;
			}
		}();

		//判断是否安卓
		vUtil.UA.android = function () {
			try {
				return (/(Android)/i.test(UA)
				);
			} catch (e) {
				return false;
			}
		}();

		//判断是否PC
		vUtil.UA.pc = function () {
			try {
				return !vUtil.UA.ios && !vUtil.UA.android;
			} catch (e) {
				return false;
			}
		}();

		//判断是否移动设备
		vUtil.UA.mobile = function () {
			try {
				return vUtil.UA.ios || vUtil.UA.android;
			} catch (e) {
				return false;
			}
		}();

		//判断是否微信
		vUtil.UA.wx = function () {
			try {
				return (/(MicroMessenger)/i.test(UA)
				);
			} catch (e) {
				return false;
			}
		}();

		//判断是否钉钉
		vUtil.UA.dd = function () {
			try {
				return (/(DingTalk)/i.test(UA)
				);
			} catch (e) {
				return false;
			}
		}();

		//返回DEVICE
		vUtil.UA.device = function () {
			try {
				if (vUtil.UA.ios) return "iOS";
				if (vUtil.UA.android) return "Android";
				if (!vUtil.UA.ios && !vUtil.UA.android) return "PC";
				return "Unknown";
			} catch (e) {
				return false;
			}
		}();

		//返回软件
		vUtil.UA.app = function () {
			try {
				if (vUtil.UA.wx) return "wx";
				if (vUtil.UA.dd) return "dd";
				return "Unknown";
			} catch (e) {
				return false;
			}
		}();
	}();


	return vUtil;
});