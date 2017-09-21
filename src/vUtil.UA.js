/**
 * @author: iorilp
 */

vUtil.UA = {};

let UA = window.navigator.userAgent.toLowerCase();

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

//判断是否微博
vUtil.UA.wb = (function (){
    try { return /(WeiBo)/i.test(UA) }
    catch( e ) { return false; }
})();

//返回DEVICE
vUtil.UA.system = (function (){
    try {
        if(vUtil.UA.ios)return "iOS";
        if(vUtil.UA.android)return "Android";
        if(/(Mac OS)/i.test(UA))return "MacOS";
        return "Windows";
    }
    catch( e ) { return false; }
})();

//返回软件
vUtil.UA.app = (function (){
    try {
        if(vUtil.UA.wx)return "wx";
        if(vUtil.UA.dd)return "dd";
        if(vUtil.UA.wb)return "WeiBo";
        if(/(Chrome)/i.test(UA))return "Chrome";
        if(/(Firefox)/i.test(UA))return "Firefox";
        return "Unknown";
    }
    catch( e ) { return false; }
})();