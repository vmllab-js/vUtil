/**
 * @author: iorilp
 */

var vUtil = vUtil || {};
vUtil.UA = {};

!function () {
    var UA = window.navigator.userAgent.toLowerCase();

    //判断是否IOS
    vUtil.UA.ios = (function (){
        try { return /(iPhone|iPad|iPod|iOS)/i.test(UA) }
        catch( e ) { return false; }
    })();

    //判断是否安卓
    vUtil.UA.android = (function (){
        try {return /(Android)/i.test(UA) }
        catch( e ) { return false; }
    })();

    //判断是否PC
    vUtil.UA.pc = (function (){
        try { return !vUtil.UA.ios && !vUtil.UA.android }
        catch( e ) { return false; }
    })();

    //判断是否移动设备
    vUtil.UA.mobile = (function (){
        try { return vUtil.UA.ios || vUtil.UA.android }
        catch( e ) { return false; }
    })();

    //判断是否微信
    vUtil.UA.wx = (function (){
        try { return /(MicroMessenger)/i.test(UA) }
        catch( e ) { return false; }
    })();

    //判断是否钉钉
    vUtil.UA.dd = (function (){
        try { return /(DingTalk)/i.test(UA) }
        catch( e ) { return false; }
    })();

    //返回DEVICE
    vUtil.UA.device = (function (){
        try {
            if(vUtil.UA.ios)return "iOS";
            if(vUtil.UA.android)return "Android";
            return "PC";
        }
        catch( e ) { return false; }
    })();

    //返回软件
    vUtil.UA.app = (function (){
        try {
            if(vUtil.UA.wx)return "wx";
            if(vUtil.UA.dd)return "dd";
            return "Unknown";
        }
        catch( e ) { return false; }
    })();

}();