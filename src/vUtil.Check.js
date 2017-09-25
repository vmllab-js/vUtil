/**
 * @author: Miller Liang
 */
vUtil.Check = {
    /*判断OBJ是否为空*/
    isObjEmpty: function (obj) {
        if (Object.keys(obj).length > 0) {
            return true
        }
        else {
            return false
        }
    },
    /**去空格后非空验证*/
    isNotNullTrim: function (str) {
        var _str = str.replace(/^\s+|\s+$/g, "");
        if (_str != null && _str != undefined && _str != 'undefined' && _str != "")
            return true;
        return false;
    },
    /*Email 验证*/
    isEmail: function (email) {
        var regex = new RegExp("^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$");
        return regex.exec(email);
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