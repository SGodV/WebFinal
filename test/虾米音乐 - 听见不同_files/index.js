(function(a,e,r,n,t){
    var i=a.getElementsByTagName("head")[0];
    function v(e){
        var r=a.createElement("script");
        r.src=e;return i.appendChild(r)
    }
    var f="//g.alicdn.com";
    var s=self.goldlog;
    if(s&&s.getCdnPath){
        f=s.getCdnPath()}f+="/secdev/";
    var d=t.match(/Chrome\/(\d*)/);
    if(d){
        d=+d[1]
    }
    if(!a._sufei_data2){
        var c="3.6.8";
        var o=v(f+"sufei_data/"+c+"/index.js");
        o.id="aplus-sufei"
    }
    var l=.001;
    if(e()<l){
        a._linkstat_sample=l;
        v(f+"linkstat/index.js?v=1201")
    }
    window.nsrprtrt=.01;
    var u=1;
    if(u){
        var m=0;
        var h=["1.0.47",51,54];
        var g=100;
        var _=m;
        function p(a){
            var e=0;
            for(var r=0;r<a.length;r++) {
                e=(e<<5)-e+a.charCodeAt(r);
                e=e>>>0
            }
            return e
        }
        var E=a.cookie.match(/cna=([^;]+)/);
        E=E&&E[1]||"";
        if(p(E)%1e4<=g){_=h}
        if(!_){return}
        var j=f+"nsv/"+_[0]+"/";
        var C=j+"ns_a_"+_[1]+"_2_fa.js";
        var k=j+"ns_a_"+_[2]+"_2_nf.js";
        function b(){
            var e="function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D";
            if("WebkitAppearance"in a.documentElement.style){
                if(escape(r.javaEnabled.toString())===e){return true}
            }
            return false
        }
        var x=t.match(/Edge\/([\d]*)/);
        var A=t.match(/Safari\/([\d]*)/);
        var B=t.match(/Firefox\/([\d]*)/);
        var S=t.match(/MSIE|Trident/);
        if(x){v(C)}
        else if(d){
            if(d>59){v(C)}
            else if(d<45){v(C)}
            else{v(C)}
        }
        else if(A||B||S){v(k)}
        else{
            if(b()){v(C)}
            else{v(k)}
        }
    }
})(document,Math.random,navigator,encodeURIComponent,navigator.userAgent);