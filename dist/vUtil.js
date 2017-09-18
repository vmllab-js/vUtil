/*!
 * vUtil.js
 *
 * https://github.com/vmllab-js/vUtil | Released under MIT license
 *
 * @author https://github.com/vmllab-js
 * @since 2017-09-14
 * @version 0.0.1 alpha
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

vUtil.Check = {
    /*判断OBJ是否为空*/
    isObjEmpty: function isObjEmpty(obj) {
        if (Object.keys(obj).length > 0) {
            return true;
        } else {
            return false;
        }
    },
    /**去空格后非空验证*/
    isNotNullTrim: function isNotNullTrim(str) {
        var _str = str.replace(/^\s+|\s+$/g, "");
        if (_str != null && _str != undefined && _str != 'undefined' && _str != "") return true;
        return false;
    },
    /*Email 验证*/
    isEmail: function isEmail(email) {
        var regex = new RegExp("^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$");
        return regex.exec(email);
    },
    /*手机号验证*/
    isPhoneNumber: function isPhoneNumber(num) {
        var reg = /^1[0-9]{10}/;
        return reg.test(num);
    }

};
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

vUtil.Location = {
	/**
  * analyze the value of a key in location.search
  * @param key {String}
  * @returns {String|Null}
  */
	search: function search(key) {
		var r = location.search.match(new RegExp("(^|&)" + key + "=([^&]*)(&|$)"));
		return r ? decodeURIComponent(r[2]) : null;
	},

	/**
  * analyze the value of a key in location.hash
  * @param key {String}
  * @returns {String|Null}
  */
	hash: function hash(key) {
		var r = location.hash.match(new RegExp("([\?|&])" + key + "=([^&]*)(&|$)"));
		return r ? decodeURIComponent(r[2]) : null;
	}
};
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @author: Rhine Liu
 */

(function () {
	vUtil.Math = {
		random: function random(a, b) {
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
				if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) == 'object') {
					if (a instanceof window.Array) {
						// Array
						return a[this.random(a.length)];
					} else {
						// Object
						var arr = [];
						for (var i in a) {
							arr.push(i);
						}
						var index = this.random(arr);
						return [index, a[index]];
					}
				}
			}
			if (arguments.length == 2) {
				if (typeof a == 'number' && typeof b == 'number') {
					return a + this.random(b - a + 1);
				}
			}
		}
	};

	function rand() {
		return Math.random();
	}
})();
"use strict";

/**
 * @author: Sussertod
 */

vUtil.Object = {};
"use strict";

/**
 * @author: Miller Liang
 */

vUtil.String = {
    /**清除首尾的空格*/
    trimSpace: function trimSpace() {
        return this.replace(/^\s+|\s+$/g, "");
    }
};
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
            return "PC";
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