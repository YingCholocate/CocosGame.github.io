System.register("chunks:///main.js",["cc"],(function(){var t,e,o,n,i,r,s,l,a,c,u,p,h,g,d,f,m,C,b,y,v,L,T,M;return{setters:[function(P){t=P.cclegacy,e=P._decorator,o=P.Node,n=P.Color,i=P.Canvas,r=P.UITransform,s=P.instantiate,l=P.Label,a=P.RichText,c=P.Toggle,u=P.Button,p=P.director,h=P.Component,g=P.CCBoolean,d=P.CCInteger,f=P.v3,m=P.resources,C=P.SpriteFrame,b=P.Sprite,y=P.Prefab,v=P.BoxCollider2D,L=P.Contact2DType,T=P.PhysicsSystem2D,M=P.find}],execute:function(){function P(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(i=n.key,r=void 0,"symbol"==typeof(r=function(t,e){if("object"!=typeof t||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"))?r:String(r)),n)}var i,r}function E(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,S(t,e)}function S(t,e){return(S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}function x(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(o)return(o=o.call(t)).next.bind(o);if(Array.isArray(t)||(o=function(t,e){if(t){if("string"==typeof t)return A(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?A(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function B(t,e,o,n){o&&Object.defineProperty(t,e,{enumerable:o.enumerable,configurable:o.configurable,writable:o.writable,value:o.initializer?o.initializer.call(n):void 0})}function I(t,e,o,n,i){var r={};return Object.keys(n).forEach((function(t){r[t]=n[t]})),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=o.slice().reverse().reduce((function(o,n){return n(t,e,o)||o}),r),i&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(i):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(t,e,r),r=null),r}var D,F,_,O,R,z,j,k,N;t._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var U,W,V,G,H,K=e.ccclass,J=e.property;D=K("internal.DebugViewRuntimeControl"),F=J(o),_=J(o),O=J(o),D((j=I((z=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return B(e=t.call.apply(t,[this].concat(i))||this,"compositeModeToggle",j,w(e)),B(e,"singleModeToggle",k,w(e)),B(e,"EnableAllCompositeModeButton",N,w(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[n.WHITE,n.BLACK,n.RED,n.GREEN,n.BLUE],e}E(e,t);var o=e.prototype;return o.start=function(){if(this.node.parent.getComponent(i)){var t=this.node.parent.getComponent(r),e=.5*t.width,o=.5*t.height,p=.1*e-e,h=o-.1*o,g=this.node.getChildByName("MiscMode"),d=s(g);d.parent=this.node,d.name="Buttons";var f=s(g);f.parent=this.node,f.name="Titles";for(var m=0;m<2;m++){var C=s(this.EnableAllCompositeModeButton.getChildByName("Label"));C.setPosition(p+(m>0?450:150),h,0),C.setScale(.75,.75,.75),C.parent=f;var b=C.getComponent(l);b.string=m?"----------Composite Mode----------":"----------Single Mode----------",b.color=n.WHITE,b.overflow=0,this.labelComponentList[this.labelComponentList.length]=b}h-=20;for(var y=0,v=0;v<this.strSingle.length;v++,y++){v===this.strSingle.length>>1&&(p+=200,y=0);var L=v?s(this.singleModeToggle):this.singleModeToggle;L.setPosition(p,h-20*y,0),L.setScale(.5,.5,.5),L.parent=this.singleModeToggle.parent;var T=L.getComponentInChildren(a);T.string=this.strSingle[v],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,L.on(c.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[v]=L}p+=200,this.EnableAllCompositeModeButton.setPosition(p+15,h,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(u.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=d;var M=this.EnableAllCompositeModeButton.getComponentInChildren(l);this.labelComponentList[this.labelComponentList.length]=M;var P=s(this.EnableAllCompositeModeButton);P.setPosition(p+90,h,0),P.setScale(.5,.5,.5),P.on(u.EventType.CLICK,this.changeTextColor,this),P.parent=d,(M=P.getComponentInChildren(l)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=M;var E=s(this.EnableAllCompositeModeButton);E.setPosition(p+200,h,0),E.setScale(.5,.5,.5),E.on(u.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(M=E.getComponentInChildren(l)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=M,this.hideButtonLabel=M,h-=40;for(var S=0;S<this.strMisc.length;S++){var w=s(this.compositeModeToggle);w.setPosition(p,h-20*S,0),w.setScale(.5,.5,.5),w.parent=g;var A=w.getComponentInChildren(a);A.string=this.strMisc[S],this.textComponentList[this.textComponentList.length]=A,this.textContentList[this.textContentList.length]=A.string,w.getComponent(c).isChecked=!!S,w.on(c.EventType.TOGGLE,S?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[S]=w}h-=150;for(var x=0;x<this.strComposite.length;x++){var B=x?s(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(p,h-20*x,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var I=B.getComponentInChildren(a);I.string=this.strComposite[x],this.textComponentList[this.textComponentList.length]=I,this.textContentList[this.textContentList.length]=I.string,B.on(c.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[x]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},o.isTextMatched=function(t,e){var o=new String(t),n=o.search(">");return-1===n?t===e:(o=(o=o.substr(n+1)).substr(0,o.search("<")))===e},o.toggleSingleMode=function(t){for(var e=p.root.debugView,o=t.getComponentInChildren(a),n=0;n<this.strSingle.length;n++)this.isTextMatched(o.string,this.strSingle[n])&&(e.singleMode=n)},o.toggleCompositeMode=function(t){for(var e=p.root.debugView,o=t.getComponentInChildren(a),n=0;n<this.strComposite.length;n++)this.isTextMatched(o.string,this.strComposite[n])&&e.enableCompositeMode(n,t.isChecked)},o.toggleLightingWithAlbedo=function(t){p.root.debugView.lightingWithAlbedo=t.isChecked},o.toggleCSMColoration=function(t){p.root.debugView.csmLayerColoration=t.isChecked},o.enableAllCompositeMode=function(t){var e=p.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(c).isChecked=!0}var n=this.miscModeToggleList[0].getComponent(c);n.isChecked=!1,e.csmLayerColoration=!1,(n=this.miscModeToggleList[1].getComponent(c)).isChecked=!0,e.lightingWithAlbedo=!0},o.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},o.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},o.onLoad=function(){},o.update=function(t){},e}(h)).prototype,"compositeModeToggle",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=I(z.prototype,"singleModeToggle",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=I(z.prototype,"EnableAllCompositeModeButton",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=z));t._RF.pop(),t._RF.push({},"73631YL01ROLZwzE6isKAPE","Bgcontrol",void 0);var Y,Z,q,X,Q,$=e.ccclass,tt=e.property,et=(U=$("Bgcontrol"),W=tt(g),U((H=I((G=function(t){function e(){for(var e,o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return B(e=t.call.apply(t,[this].concat(n))||this,"symbol",H,w(e)),e}E(e,t);var o=e.prototype;return o.start=function(){},o.update=function(t){if(this.symbol)for(var e,o=x(this.node.children);!(e=o()).done;){var n=e.value;n.setPosition(n.getPosition().x,n.getPosition().y-150*t),n.getPosition().y<=-852&&n.setPosition(n.getPosition().x,n.getPosition().y+1704)}},o.restart=function(){this.symbol=!1},o.pause=function(){this.symbol=!1},e}(h)).prototype,"symbol",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),V=G))||V);t._RF.pop(),t._RF.push({},"f7954HedypA4qCZm8Sb7OAz","BulletControl",void 0);var ot,nt=e.ccclass,it=e.property,rt=(Y=nt("BulletControl"),Z=it(d),Y((Q=I((X=function(t){function e(){for(var e,o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return B(e=t.call.apply(t,[this].concat(n))||this,"speed",Q,w(e)),e}E(e,t);var o=e.prototype;return o.start=function(){},o.update=function(t){var e,o,n;(null==(e=this.node)||e.setWorldPosition(f(this.node.getWorldPosition().x,this.node.getWorldPosition().y+this.speed*t)),(null==(o=this.node)?void 0:o.getPosition().y)>820)&&(null==(n=this.node)||n.destroy())},o.miss=function(){try{var t;null==(t=this.node)||t.destroy()}catch(t){}},e}(h)).prototype,"speed",[Z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 800}}),q=X))||q);t._RF.pop(),t._RF.push({},"7eedaNHvi1FmKtPBbswiPT1","PopupBase",void 0);var st,lt,at,ct,ut,pt,ht,gt,dt,ft=e.ccclass,mt=(e.property,ft(ot=function(t){function e(){for(var e,o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this).options=null,e}E(e,t);var o=e.prototype;return o.onShow=function(){},o.onHide=function(){},o.show=function(t){this.options=t,this.init(this.options),this.updateDisplay(this.options),this.onShow()},o.hide=function(){this.onHide()},o.init=function(t){},o.updateDisplay=function(t){},e}(h))||ot);t._RF.pop(),t._RF.push({},"571a7Zq3f9OF5YdsrYEJDQT","ConfirmPopup",void 0);var Ct,bt,yt,vt,Lt,Tt,Mt,Pt=e.ccclass,Et=e.property;st=Pt("ConfirmPopup"),lt=Et(l),at=Et(l),ct=Et(o),st((ht=I((pt=function(t){function e(){for(var e,o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return B(e=t.call.apply(t,[this].concat(n))||this,"titleLabel",ht,w(e)),B(e,"contentLabel",gt,w(e)),B(e,"confirmBtn",dt,w(e)),e}E(e,t);var o,n,i,r=e.prototype;return r.onLoad=function(){this.confirmBtn.on("touchend",this.onConfirmBtnClick,this)},r.updateDisplay=function(t){this.titleLabel.string=t.title,this.contentLabel.string=t.content},r.onConfirmBtnClick=function(){this.hide()},o=e,i=[{key:"path",get:function(){return"prefabs/ConfirmPopup"}}],(n=null)&&P(o.prototype,n),i&&P(o,i),Object.defineProperty(o,"prototype",{writable:!1}),e}(mt)).prototype,"titleLabel",[lt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),gt=I(pt.prototype,"contentLabel",[at],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),dt=I(pt.prototype,"confirmBtn",[ct],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ut=pt));t._RF.pop(),t._RF.push({},"af9e6sI+3pJH5zdGCBd5E8i","EnemyControl",void 0);var St,wt,At,xt,Bt,It=e.ccclass,Dt=e.property,Ft=(Ct=It("EnemyControl"),bt=Dt(d),yt=Dt(g),Ct((Tt=I((Lt=function(t){function e(){for(var e,o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return B(e=t.call.apply(t,[this].concat(n))||this,"speed",Tt,w(e)),B(e,"isDestory",Mt,w(e)),e.isDie=!1,e}E(e,t);var o=e.prototype;return o.start=function(){},o.update=function(t){0==this.isDie&&this.node.setWorldPosition(f(this.node.getWorldPosition().x,this.node.getWorldPosition().y-this.speed*t)),this.node.getPosition().y<-800&&this.node.destroy()},o.die=function(){var t=this;this.isDestory||(this.isDestory=!0,m.load("enemy0_die/spriteFrame",C,(function(e,o){e||(t.node.getComponent(b).spriteFrame=o),setTimeout((function(){var e;null==(e=t.node)||e.destroy()}),200)})))},o.vectory=function(){var t=this;m.load("enemy0_die/spriteFrame",C,(function(e,o){e||(t.node.getComponent(b).spriteFrame=o)}))},e}(h)).prototype,"speed",[bt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 250}}),Mt=I(Lt.prototype,"isDestory",[yt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),vt=Lt))||vt);t._RF.pop(),t._RF.push({},"4e19caRP6lJEb8Ap9jpC2Uc","EnermyManager",void 0);var _t,Ot,Rt,zt,jt,kt,Nt,Ut=e.ccclass,Wt=e.property;St=Ut("EnermyManager"),wt=Wt({type:y}),St((Bt=I((xt=function(t){function e(){for(var e,o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return B(e=t.call.apply(t,[this].concat(n))||this,"ememyPre",Bt,w(e)),e}E(e,t);var o=e.prototype;return o.start=function(){},o.update=function(t){},e}(h)).prototype,"ememyPre",[wt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),At=xt));t._RF.pop(),t._RF.push({},"be20asOJKNGnZX2+6SLo+5p","PlayerControl",void 0);var Vt=e.ccclass,Gt=e.property;_t=Vt("PlayerControl"),Ot=Gt({type:y}),Rt=Gt({type:y}),_t((kt=I((jt=function(t){function e(){for(var e,o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return B(e=t.call.apply(t,[this].concat(n))||this,"bulletPrefab",kt,w(e)),B(e,"enemyPrefab",Nt,w(e)),e.colliderBox=null,e}E(e,t);var n=e.prototype;return n.onLoad=function(){var t;this.colliderBox=this.node.getComponent(v),this.colliderBox.on(L.BEGIN_CONTACT,this.onBeginContact,this),null==(t=T.instance)||t.on(L.BEGIN_CONTACT,this.onBeginContact,this)},n.lose=function(){var t=this;this.unscheduleAllCallbacks(),m.load("hero1_die/spriteFrame",C,(function(e,o){e||(t.node.getComponent(b).spriteFrame=o)}))},n.onBeginContact=function(t,e,o){var n,i=this;((0===t.tag&&1===e.tag||1===t.tag&&0===e.tag)&&(0===t.tag?t.getComponent(rt).miss():t.getComponent(Ft).die(),1===e.tag?e.getComponent(Ft).die():e.getComponent(rt).miss()),console.log("ss",t.tag),console.log("oo",e.tag),1===t.tag&&2===e.tag&&!t.getComponent(Ft).isDestory||2===t.tag&&1===e.tag&&!e.getComponent(Ft).isDestory)&&(null==(n=M("Canvas/bg").getComponent(et))||n.pause(),1===t.tag?t.getComponent(Ft).vectory():e.getComponent(Ft).vectory(),this.unscheduleAllCallbacks(),m.load("hero1_die/spriteFrame",C,(function(t,e){t||(i.node.getComponent(b).spriteFrame=e)})))},n.start=function(){var t=this;this.node.getComponent(r);this.node.on(o.EventType.TOUCH_MOVE,(function(e){t.node.setWorldPosition(f(e.getUILocation().x,e.getUILocation().y))})),this.schedule((function(){var e=175*Math.random()+1,o=Math.floor(e);Math.random()>.5||0===o||(o=-o);var n=s(t.enemyPrefab);n.setParent(t.node.parent),n.setPosition(o,420)}),.5),this.schedule((function(){var e=s(t.bulletPrefab);e.setParent(t.node.parent),e.setPosition(t.node.getPosition().x,t.node.getPosition().y+80)}),.1)},n.update=function(t){},n.onDestroy=function(){this.node.destroy(),this.unscheduleAllCallbacks()},e}(h)).prototype,"bulletPrefab",[Ot],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Nt=I(jt.prototype,"enemyPrefab",[Rt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),zt=jt));t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///main.js'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});