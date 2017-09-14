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

/**
 * @author: Sussertod
 */

vUtil.Array = {};
/**
 * @author: Miller Liang
 */

vUtil.Check = {};
/**
 * @author: Rhine Liu
 */

vUtil.Cookie = {};
/**
 * @author: Sussertod
 */

vUtil.DOM = {};
/**
 * @author: Miller Liang
 */

vUtil.Date = {};
/**
 * @author: iorilp
 */

vUtil.Event = {};
/**
 * @author: Rhine Liu
 */

vUtil.Location = {};
/**
 * @author: Rhine Liu
 */

vUtil.Math = {};
/**
 * @author: Sussertod
 */

vUtil.Object = {};
/**
 * @author: Miller Liang
 */

vUtil.String = {};
/**
 * @author: iorilp
 */

vUtil.UA = {};


	return vUtil;
});