(t=>{var e="object"==typeof global&&global,o=(e.global!==e&&e.window!==e&&e.self!==e||(t=e),document.body),n=0;function i(){var t,e,n=document.createElement("span");n.className="fa",n.style.display="none",o.insertBefore(n,o.firstChild),"icons"!==window.getComputedStyle(n,null).getPropertyValue("font-family")&&(t="https://fgl27.github.io/SmartTwitchTV/release/githubio/css/icons.min.css",(e=document.createElement("link")).rel="stylesheet",e.href=t,document.getElementsByTagName("head")[0].appendChild(e)),o.removeChild(n)}function c(){i();try{n=""!==Android.getversion()}catch(t){o.style.backgroundColor="rgba(155, 155, 155, 1)"}if(L(),n&&!Android.deviceIsTV()){l=document.getElementById("scenekeys"),a=document.getElementById("scenekeys_position");for(var t=0,e=s.length;t<e;t++)((t,e)=>{t.onpointerdown=function(){k(),g()&&(v(e),u=y(function(){k(),r=((t,e,n)=>{if(f(n),e&&0<e)return window.setInterval(t,e)})(function(){v(e)},50,r)},600,u))},t.onpointerup=function(){k(),g()&&M(e,1)}})(document.getElementById(s[t]),t);o.onpointerup=function(){p()},B()}}var d,l,a,r,u,s=["clickup","clickdown","clickleft","clickright","clickenter","clickback","clickpgup","clickpgdown","clickfeed"];function f(t){window.clearInterval(t)}function y(t,e,n){return m(n),e&&0<e?window.setTimeout(t,e):window.setTimeout(t)}function m(t){window.clearTimeout(t)}function p(){E(),w(),h()}function g(){return parseInt(100*l.style.opacity)===parseInt(100*x)}function w(){m(d)}function h(){d=y(b,4e3,d)}function b(){l.style.opacity="0"}function k(){m(u),f(r)}function v(t){M(t,0)}function E(){n&&(l.style.opacity=x,w(),h())}var T,I,x=12*.05,C=0,S=[[6,0],[6,44],[63,44],[63,0]];function B(){n&&(p(),a.style.right=S[C][0]+"%",a.style.bottom=S[C][1]+"%")}function L(){var t,e,n=window.innerHeight,i=window.innerWidth;1920/1080<=i/n?(I=(t=n)/1080,e=Math.ceil(1920*I),document.body.style.marginTop=0,document.body.style.marginLeft=Math.ceil((i-e)/2)+"px"):(I=(e=i)/1920,t=Math.ceil(1080*I),document.body.style.marginTop=Math.ceil((n-t)/2)+"px",document.body.style.marginLeft=0),i=t,n=e,T=29*I,o.style.width=n+"px",o.style.height=i+"px",o.style.fontSize=T+"px"}function M(t,e){n&&Android.keyEvent(t,e)}window.addEventListener("resize",function(){n||L()},!1),t.Extrapage={mainstart:function(){"loading"===document.readyState?document.addEventListener("DOMContentLoaded",function(){c()}):c()},initbodyClickSet:p,Set_dpad_opacity:function(t){x=.05*t,E()},Set_dpad_position:function(t){C=t,B()}}})(this),Extrapage.mainstart();