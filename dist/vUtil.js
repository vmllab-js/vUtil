/*!
 * vUtil.js
 *
 * https://github.com/vmllab-js/vUtil | Released under MIT license
 *
 * @author https://github.com/vmllab-js
 * @since 2017-09-14
 * @version 1.0.0
 * @example https://vmllab-js.github.io/vUtil/
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

(function(vUtil){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @author: Sussertod
 */

vUtil.Array = {
    /**
     * 打乱顺序
     * @param  {Array} arr 原数组
     * @return {Array}     新数组
     */
    randomArr: function randomArr(arr) {
        var sortArr = vUtil.Object.deepCopy(arr);
        return sortArr.sort(function () {
            return 0.5 - Math.random();
        }).sort(function () {
            return 0.5 - Math.random();
        }).sort(function () {
            return 0.5 - Math.random();
        });
    },


    /**
     * 获取最大值
     * @param  {Array} arr 原数组
     * @return {Array}     新数组
     */
    getMax: function getMax(arr) {
        for (var i = 0; i < arr.length; i += 1) {
            if (isNaN(arr[i])) {
                throw new Error('数组第' + i + '项不是数字类型');
            }
        }
        return Math.max.apply(Math, _toConsumableArray(arr));
    },


    /**
     * 根据参数获取数组中最大值的那一项
     * @param  {Array} arr  原数组
     * @param  {String} para 原数组参数
     * @return {Array}      新数组
     */
    getMaxPara: function getMaxPara(arr, para) {
        var paraArr = this.createArr(arr.length, function (item, index) {
            if (!arr[index][para]) {
                throw new Error('数组第' + index + '项未找到' + para + '属性');
            }
            return arr[index][para];
        });

        var max = this.getMax(paraArr);
        var index = paraArr.findIndex(function (item) {
            return item === max;
        });

        return arr[index];
    },


    /**
     * 根据参数获取数组中最大值的那一项的索引值
     * @param  {Array} arr  原数组
     * @param  {String} para 原数组参数
     * @return {Number}      索引值
     */
    getMaxParaIndex: function getMaxParaIndex(arr, para) {
        var paraArr = this.createArr(arr.length, function (item, index) {
            if (!arr[index][para]) {
                throw new Error('数组第' + index + '项未找到' + para + '属性');
            }
            return arr[index][para];
        });

        var max = this.getMax(paraArr);
        var index = paraArr.findIndex(function (item) {
            return item === max;
        });

        return index;
    },


    /**
     * 获取最小值
     * @param  {Array} arr 原数组
     * @return {Array}     新数组
     */
    getMin: function getMin(arr) {
        for (var i = 0; i < arr.length; i += 1) {
            if (isNaN(arr[i])) {
                throw new Error('数组第' + i + '项不是数字类型');
            }
        }
        return Math.min.apply(Math, _toConsumableArray(arr));
    },


    /**
     * 根据参数获取数组中最小值的那一项
     * @param  {Array} arr  原数组
     * @param  {String} para 原数组参数
     * @return {Array}      新数组
     */
    getMinPara: function getMinPara(arr, para) {
        var paraArr = this.createArr(arr.length, function (item, index) {
            if (!arr[index][para]) {
                throw new Error('数组第' + index + '项未找到' + para + '属性');
            }
            return arr[index][para];
        });

        var max = this.getMin(paraArr);
        var index = paraArr.findIndex(function (item) {
            return item === max;
        });

        return arr[index];
    },


    /**
     * 根据参数获取数组中最小值的那一项的索引值
     * @param  {Array} arr  原数组
     * @param  {String} para 原数组参数
     * @return {Number}      索引值
     */
    getMinParaIndex: function getMinParaIndex(arr, para) {
        var paraArr = this.createArr(arr.length, function (item, index) {
            if (!arr[index][para]) {
                throw new Error('数组第' + index + '项未找到' + para + '属性');
            }
            return arr[index][para];
        });

        var max = this.getMin(paraArr);
        var index = paraArr.findIndex(function (item) {
            return item === max;
        });

        return index;
    },


    /**
     * 根据参数获取元素
     * @param  {Array} arr         原数组
     * @param  {Function} [fn=()=>{}] 过滤条件
     * @return {Array}             新数组
     */
    getByPara: function getByPara(arr) {
        var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

        return arr.filter(function (item, index) {
            return fn(item, index);
        });
    },


    /**
     * 创建数组
     * @param  {Number} [length=0]  数组长度，默认为0
     * @param  {Function} [fn=()=>{}] 创建规则
     * @return {Array}             新数组
     */
    createArr: function createArr() {
        var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

        return Array.from({
            length: length
        }, fn);
    },


    /**
     * 复制替换元素
     * @param  {Array} arr        原数组
     * @param  {Number} [target=0] 替换起始位置
     * @param  {Number} start      复制起始位置
     * @param  {Number} end        复制终止位置
     * @return {Array}            新数组
     */
    replaceArr: function replaceArr(arr) {
        var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var start = arguments[2];
        var end = arguments[3];

        var replacedArr = vUtil.Object.deepCopy(arr);
        if (!end) {
            end = arr.length;
        }
        var r = vUtil.Object.deepCopy(replacedArr.copyWithin(target, start, end));
        return r;
    },


    /**
     * 是否包含某个值
     * @param  {Array} arr  原数组
     * @param  {String} item 判断的值
     * @return {Boolean}      结果
     */
    includes: function includes(arr, item) {
        return arr.includes(item);
    }
};
})(vUtil);
(function(vUtil){
"use strict";

/**
 * @author: Miller Liang
 */
vUtil.Check = {
    /*判断OBJ是否为空*/
    isObjEmpty: function isObjEmpty(obj) {
        if (Object.keys(obj).length > 0) {
            return false;
        } else {
            return true;
        }
    },
    /**去空格后非空验证*/
    isNullTrim: function isNullTrim(str) {
        var _str = str.replace(/^\s+|\s+$/g, "");
        if (_str != null && _str != undefined && _str != 'undefined' && _str != "") return false;
        return true;
    },
    /*Email 验证*/
    isEmail: function isEmail(email) {
        var reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        return reg.test(email);
    },
    /*手机号验证*/
    isPhoneNumber: function isPhoneNumber(num) {
        var reg = /^1[0-9]{10}$/;
        return reg.test(num);
    },
    /*是否为数字*/
    isNumeric: function isNumeric(str) {
        return (/^(?:[1-9]\d*|0)(?:\.\d+)?$/.test(str)
        );
    }

};
})(vUtil);
(function(vUtil){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
	set: function set(key, value, expires) {
		if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === 'object') {
			for (var k in key) {
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
	get: function get(key) {
		var a = document.cookie.match(new RegExp("(^| )" + key + "=([^;]*)(;|$)"));
		return a ? unescape(a[2]) : null;
	},

	/**
  * remove a key from cookie
  * @param key {String} necessary
  */
	remove: function remove(key) {
		this.set(key, '', 0);
	}
};
})(vUtil);
(function(vUtil){
'use strict';

/**
 * @author: Sussertod
 */

vUtil.DOM = {
    /**
     * 获取select当前option的文本值
     * @param  {Object} select DOM
     * @return {String}        文本值
     */
    getSelectText: function getSelectText(select) {
        for (var i = 0; i < select.children.length; i += 1) {
            if (select.children[i].selected) {
                return select.children[i].text;
            }
        }
        return false;
    },


    /**
     * 获取表单数据集合
     * @param  {String} data 表单项ID
     * @return {Object}      数据集合
     */
    getFormData: function getFormData() {
        var list = Array.of.apply(Array, arguments);
        var r = {};
        list.map(function (key, index) {
            if (!document.getElementById(key)) {
                throw new Error('不存在ID为' + key + '的DOM');
            }
            r[key] = document.getElementById(key).value;
        });

        return r;
    },


    /**
     * 设置placeholder
     * @param  {String} data ID
     * @param  {String} text placeholder文本值
     * @param  {String} color placeholder颜色
     */
    setPlaceholder: function setPlaceholder(id, text, color) {
        var DOM = document.getElementById(id);
        var placeholderTxt = text || '请输入内容';
        var placeholderColor = color || '#666';
        var DOMColor = DOM.style.color || '#000';
        if (!DOM) {
            throw new Error('不存在ID为' + id + '的DOM');
        }

        DOM.value = placeholderTxt;
        DOM.style.color = placeholderColor;

        var addPlaceholder = function addPlaceholder() {
            if (DOM.value === placeholderTxt) {
                DOM.value = '';
                DOM.style.color = DOMColor;
            }
        };

        var removePlaceholder = function removePlaceholder() {
            if (DOM.value === '' || DOM.value === null) {
                DOM.value = placeholderTxt;
                DOM.style.color = placeholderColor;
            }
        };

        DOM.addEventListener('focus', addPlaceholder);
        DOM.addEventListener('blur', removePlaceholder);
    },


    /**
     * 获取屏幕宽高
     * @return {Object} 宽高
     */
    getWindowSize: function getWindowSize() {
        return {
            w: document.documentElement.clientWidth,
            h: document.documentElement.clientHeight
        };
    },


    /**
     * 获取rem比例
     * @param  {Number} remNum rem基数
     * @return {Number}        比例
     */
    getRemScale: function getRemScale() {
        var remNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

        return parseFloat(document.documentElement.style.fontSize) / remNum;
    },


    /**
     * 开启rem适配
     * @param  {Number} [remNum=100]      rem基数
     * @param  {Number} [layoutWidth=640] layout宽度
     */
    useRem: function useRem() {
        var remNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
        var layoutWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 640;

        var resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
        var resizeCalculate = function resizeCalculate() {
            if (!vUtil.DOM.getWindowSize().w) {
                return;
            }
            document.documentElement.style.fontSize = remNum * (vUtil.DOM.getWindowSize().w / layoutWidth) + 'px';
        };
        if (!document.addEventListener) {
            return;
        }
        resizeCalculate();
        window.addEventListener(resizeEvent, resizeCalculate, false);
        document.addEventListener('DOMContentLoaded', resizeCalculate, false);
    }
};
})(vUtil);
(function(vUtil){
"use strict";

/**
 * @author: Miller
 */
vUtil.Date = {
    //获取当前时间
    getCurrentTime: function getCurrentTime() {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        var hours = today.getHours();
        var minutes = today.getMinutes();
        var seconds = today.getSeconds();
        var timeString = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
        return timeString;
    },
    //获取当前 年-月-日
    getCurrentDate: function getCurrentDate() {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        var dateString = year + "-" + month + "-" + day;
        return dateString;
    },
    //获取当前年份
    getCurrentYear: function getCurrentYear() {
        var today = new Date();
        var year = today.getFullYear();
        return year.toString();
    },
    //获取当前月份
    getCurrentMonth: function getCurrentMonth() {
        var today = new Date();
        var month = today.getMonth() + 1;
        return month.toString();
    },
    //获取当前日期
    getCurrentDay: function getCurrentDay() {
        var today = new Date();
        var date = today.getDate();
        return date.toString();
    },
    //获取当前星期几--0是星期天
    getCurrentWeek: function getCurrentWeek() {
        var today = new Date();
        var week = today.getDay();
        return week.toString();
    },
    //获取某个月的天数，从0开始
    getDaysOfMonth: function getDaysOfMonth(year, month) {
        if (arguments.length == 0) {
            var _year = this.getCurrentYear();
            var _month = this.getCurrentMonth();
            return _getDays(_year, _month);
        } else {
            return _getDays(year, month);
        }
        function _getDays(_y, _m) {
            var d = new Date(_y, _m, 0);
            return d.getDate();
        }
    },
    /**日期格式化，第一个参数为日期，第二个参数为日期格式化的格式，返回一个格式化后的字符串*/
    dateFormat: function dateFormat(date, format) {
        var times = {
            "M+": date.getMonth() + 1, //month
            "d+": date.getDate(), //day
            "h+": date.getHours(), //hour
            "m+": date.getMinutes(), //minute
            "s+": date.getSeconds(), //second
            "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
            "S": date.getMilliseconds() //millisecond
        };
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in times) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? times[k] : ("00" + times[k]).substr(("" + times[k]).length));
            }
        }
        return format;
    },

    /*
     * 比较时间大小
     * time1>time2 return 1
     * time1<time2 return -1
     * time1==time2 return 0
     */
    compareTime: function compareTime(time1, time2) {
        if (Date.parse(time1.replace(/-/g, "/")) > Date.parse(time2.replace(/-/g, "/"))) {
            return 1;
        } else if (Date.parse(time1.replace(/-/g, "/")) < Date.parse(time2.replace(/-/g, "/"))) {
            return -1;
        } else if (Date.parse(time1.replace(/-/g, "/")) == Date.parse(time2.replace(/-/g, "/"))) {
            return 0;
        }
    }
};
})(vUtil);
(function(vUtil){
"use strict";

/**
 * @author: iorilp
 */

vUtil.Event = {
    init: function init(excludeList) {
        //排除的tag、class、id
        var excludeTag = ["A", "INPUT", "TEXTAREA", "SELECT"];
        var excludeClass = [];
        var excludeId = [];

        if (excludeList) {
            excludeList.forEach(function (item, index) {
                if (/^[A-Za-z]+$/.test(item)) excludeTag.push(item);
                if (item.substr(0, 1) === ".") excludeClass.push(item);
                if (item.substr(0, 1) === "#") excludeId.push(item);
            });
        }

        var preventFun = function preventFun() {
            // 判断默认行为是否可以被禁用
            if (event.cancelable) {
                // 判断默认行为是否已经被禁用
                if (!event.defaultPrevented) {
                    event.preventDefault();
                }
            }
        };

        var preventDefault = function preventDefault(event) {

            //获取父容器tag、class、id
            var tag = event.target.parentNode.tagName || false;
            var tagClass = event.target.getAttribute("class") || false;
            var tagId = event.target.getAttribute("id") || false;

            //获取tag、class、id
            var thisTag = event.target.tagName;
            var thisTagClass = event.target.getAttribute("class");
            var thisTagId = event.target.getAttribute("id");

            var isExcludeTag = false;
            var isExcludeTagClass = false;
            var isExcludeTagId = false;

            excludeTag.forEach(function (item) {
                if (tag == item.toUpperCase() || thisTag == item.toUpperCase()) {
                    isExcludeTag = true;
                }
            });
            excludeClass.forEach(function (item) {
                if ("." + tagClass == item || "." + thisTagClass == item) {
                    isExcludeTagClass = true;
                }
            });
            excludeId.forEach(function (item) {
                if ("#" + tagId == item || "#" + thisTagId == item) {
                    isExcludeTagId = true;
                }
            });

            // console.log("isExcludeTag:"+isExcludeTag);
            // console.log("isExcludeTagClass:"+isExcludeTagClass);
            // console.log("isExcludeTagId:"+isExcludeTagId);

            if (!isExcludeTag && !isExcludeTagClass && !isExcludeTagId) {
                preventFun();
            }
        };

        window.document.addEventListener("touchstart", function (event) {
            preventDefault(event);
        });

        window.document.addEventListener("touchmove", function (event) {
            preventDefault(event);
        });

        window.document.addEventListener("touchend", function (event) {
            preventDefault(event);
        });

        window.document.addEventListener("mousedown", function (event) {
            preventDefault(event);
        });

        window.document.addEventListener("mousemove", function (event) {
            preventDefault(event);
        });
    }
};
})(vUtil);
(function(vUtil){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @author: Rhine Liu
 */

vUtil.Location = {
	/**
  * analyze the value of a key in location.search, or the keys and values in location.search
  * @param key {String} unnecessary
  * @returns {Object|String|Null}
  */
	search: function search(key) {
		if (!arguments.length) {
			return this.splitSearch(window.location.search.substr(1));
		} else {
			var r = window.location.search.match(new RegExp("([\?|&])" + key + "=([^&]*)(&|$)"));
			return r ? decodeURIComponent(r[2]) : null;
		}
	},

	/**
  * analyze the value of a key in location.hash, or the keys and values in location.hash
  * @param key {String} unnecessary
  * @returns {String|Null}
  */
	hash: function hash(key) {
		if (!arguments.length) {
			var ret = {};
			if (window.location.hash.indexOf('?') < 0) return ret;
			return this.splitSearch(window.location.hash.substr(window.location.hash.indexOf('?') + 1));
		} else {
			var r = window.location.hash.match(new RegExp("([\?|&])" + key + "=([^&]*)(&|$)"));
			return r ? decodeURIComponent(r[2]) : null;
		}
	},

	/**
  * split search string to object
  * @param searchStr {String}
  * @returns {Object}
  * @example "a=b&c=d" => {"a":"b","c":"d"}
  */
	splitSearch: function splitSearch(searchStr) {
		var ret = {};
		var arr = searchStr.split('&');
		arr.forEach(function (str) {
			var r = str.match(/^(\S*)=(\S*)$/);
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
	param: function param(a, b) {
		if ((typeof a === "undefined" ? "undefined" : _typeof(a)) === 'object' && typeof b === 'string') {
			return this.param(b, a);
		}
		if ((typeof b === "undefined" ? "undefined" : _typeof(b)) === 'object' && typeof a === 'string') {
			var arr = a.split('#');
			var arr2 = arr[0].split('?');
			var obj = arr2[1] ? this.splitSearch(arr2[1]) : {};
			for (var key in b) {
				obj[key] = b[key];
			}
			var search = this.param(obj);
			return arr2[0] + '?' + search + (arr[1] ? '#' + arr[1] : '');
		}
		var params = [];
		for (var _key in a) {
			params.push(_key + '=' + (a[_key] !== undefined && a[_key] !== null ? encodeURIComponent(a[_key]) : ''));
		}
		return params.join('&');
	}
};
})(vUtil);
(function(vUtil){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @author: Rhine Liu
 */

vUtil.Math = {
	/**
  * return a random value
  * @param a {Number|String|Array|Object} unnecessary
  * @param b {Number} unnecessary
  * @param c {Boolean} unnecessary
  * @returns {*}
  */
	random: function random(a, b, c) {
		if (arguments.length === 0) {
			// Math.random
			return rand();
		}
		if (typeof a === 'number') {
			// Float
			if (typeof b === 'boolean' && b) {
				return rand() * a;
			}
			if (typeof b === 'number') {
				// Float
				if (typeof c === 'boolean' && c) {
					return a + rand() * (b - a);
				}
				// Int
				return a + (a > b ? -this.random(a - b + 1) : this.random(b - a + 1));
			}
			// Int
			return Math.floor(rand() * a);
		}
		if (typeof a === 'string') {
			// String
			return a[this.random(a.length)];
		}
		if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
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
	},

	/**
  * select non-repeating values in an array or less than a number
  * @param arg {Number|Array} necessary
  * @param num {Int} necessary
  * @param force {Boolean} unnecessary
  * @returns {*}
  */
	randomlySelect: function randomlySelect(arg, num, force) {
		if (typeof arg === "number") {
			if (!force) {
				// Int
				var nums = [];
				for (var i = 0; i < arg; ++i) {
					nums.push(i);
				}
				var arr = [];
				for (var _i = 0; _i < num; ++_i) {
					var index = this.random(nums.length);
					arr.push(nums[index]);
					nums.splice(index, 1);
				}
				return arr;
			} else {
				// Float
				var _arr = [];
				for (var _i2 = 0; _i2 < num; ++_i2) {
					_arr.push(rand() * arg);
				}
				return _arr;
			}
		}
		if (arg instanceof window.Array) {
			var _arr2 = this.randomlySelect(arg.length, num);
			_arr2.forEach(function (val, ind) {
				_arr2[ind] = arg[val];
			});
			return _arr2;
		}
	}
};

function rand() {
	return Math.random();
}
})(vUtil);
(function(vUtil){
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @author: Sussertod
 */

vUtil.Object = {
    /**
     * 浅拷贝
     * @param  {Object} [obj={}] 原对象
     * @return {Object}          新对象
     */
    simpleCopy: function simpleCopy() {
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (obj instanceof Array) {
            var n = [];
            for (var i = 0; i < obj.length; ++i) {
                n[i] = obj[i];
            }
            return n;
        } else if (obj instanceof Object) {
            var _n = {};
            for (var _i in obj) {
                _n[_i] = obj[_i];
            }
            return _n;
        }
        return obj;
    },


    /**
     * 深拷贝
     * @param  {Object} [obj={}] 原对象
     * @return {Object}          新对象
     */
    deepCopy: function deepCopy() {
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (obj instanceof Array) {
            var n = [];
            for (var i = 0; i < obj.length; ++i) {
                n[i] = this.deepCopy(obj[i]);
            }
            return n;
        } else if (obj instanceof Object) {
            var _n2 = {};
            for (var _i2 in obj) {
                _n2[_i2] = this.deepCopy(obj[_i2]);
            }
            return _n2;
        }
        return obj;
    },


    /**
     * 合并对象
     * @param  {Object} sources 原对象
     * @return {Object}         新对象
     */
    merge: function merge() {
        for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
            sources[_key] = arguments[_key];
        }

        return Object.assign.apply(Object, [{}].concat(_toConsumableArray(sources)));
    },


    /**
     * 判断是否有key值
     * @param  {Object}  obj 原对象
     * @param  {String}  key key值
     * @return {Boolean||Object}     如果不含有则返回false，如果有则返回新对象包含key值和value值
     */
    hasKey: function hasKey(obj, key) {
        if (!(obj instanceof Array) && obj instanceof Object) {
            var arr = Object.entries(obj).filter(function (item, index) {
                return item[0] === key;
            })[0];
            var r = false;
            if (arr) {
                r = _defineProperty({}, arr[0], arr[1]);
            }
            return r;
        } else {
            throw new Error('所传入的不是一个对象');
        }
    },


    /**
     * 对比两个对象的值是否相等
     * @param  {[type]}  obj0 [description]
     * @param  {[type]}  obj1 [description]
     * @return {Boolean}      [description]
     */
    isEqual: function isEqual(obj0, obj1) {
        var objString0 = JSON.stringify(obj0);
        var objString1 = JSON.stringify(obj1);
        return objString0 === objString1;
    }
};
})(vUtil);
(function(vUtil){
'use strict';

/**
 * @author: Miller
 */

vUtil.String = {
    /**清除首尾的空格*/
    trimSpace: function trimSpace(str) {
        return str.replace(/^\s+|\s+$/g, "");
    },
    /**大写转小写，小写转大写*/
    swapCase: function swapCase(str) {
        return str.replace(/[a-z]/ig, function (matchStr) {
            if (matchStr >= 'A' && matchStr <= 'Z') {
                return matchStr.toLocaleLowerCase();
            } else if (matchStr >= 'a' && matchStr <= 'z') {
                return matchStr.toLocaleUpperCase();
            }
        });
    },
    /**字符串反转*/
    reverse: function reverse(str) {
        return str.split("").reverse().join("");
    },
    //中文校验
    isChinese: function isChinese(str) {
        return (/^[\u4E00-\u9FA5]+$/.test(str)
        );
    },
    //去掉中文字符
    removeChinese: function removeChinese(str) {
        return str.replace(/[\u4E00-\u9FA5]+/gm, "");
    },

    /** 功能：截取长字符串
     * @param {string} str 要截取的字符串
     * @param {number} size 截取长度(单字节长度)
     */
    sliceStr: function sliceStr(str, size) {
        var curSize = 0,
            arr = [];
        for (var i = 0, len = str.length; i < len; i++) {
            arr.push(str.charAt(i));
            if (str.charCodeAt(i) > 255) {
                curSize += 2;
                if (size === curSize || size === curSize - 1) {
                    return arr.join('');
                }
            } else {
                curSize++;
                if (size === curSize) {
                    return arr.join('');
                }
            }
        }
    }

};
})(vUtil);
(function(vUtil){
"use strict";

/**
 * @author: iorilp
 */

vUtil.UA = {};

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

//判断是否微博
vUtil.UA.wb = function () {
    try {
        return (/(WeiBo)/i.test(UA)
        );
    } catch (e) {
        return false;
    }
}();

//返回DEVICE
vUtil.UA.system = function () {
    try {
        if (vUtil.UA.ios) return "iOS";
        if (vUtil.UA.android) return "Android";
        if (/(Mac OS)/i.test(UA)) return "MacOS";
        return "Windows";
    } catch (e) {
        return false;
    }
}();

//返回软件
vUtil.UA.app = function () {
    try {
        if (vUtil.UA.wx) return "wx";
        if (vUtil.UA.dd) return "dd";
        if (vUtil.UA.wb) return "WeiBo";
        if (/(Chrome)/i.test(UA)) return "Chrome";
        if (/(Firefox)/i.test(UA)) return "Firefox";
        return "Unknown";
    } catch (e) {
        return false;
    }
}();
})(vUtil);


	return vUtil;
});