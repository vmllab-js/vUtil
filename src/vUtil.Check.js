/**
 * @author: Miller Liang
 */
vUtil.Check = {
    /*判断OBJ是否为空*/
    isObjEmpty: function (obj) {
        if (Object.keys(obj).length > 0) {
            return false
        }
        else {
            return true
        }
    },
    /**去空格后非空验证*/
    isNullTrim: function (str) {
        var _str = str.replace(/^\s+|\s+$/g, "");
        if (_str != null && _str != undefined && _str != 'undefined' && _str != "")
            return false;
        return true;
    },
    /*Email 验证*/
    isEmail: function (email) {
        var reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        return reg.test(email);
    },
    /*手机号验证*/
    isPhoneNumber: function (num) {
        var reg = /^1[0-9]{10}$/;
        return reg.test(num);
    },
    /*是否为数字*/
    isNumeric: function (str) {
        return /^(?:[1-9]\d*|0)(?:\.\d+)?$/.test(str);
    }

}