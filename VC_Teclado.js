/**
 * <p>
 * Company: EverSystems <br/>
 * Date: 16/05/2008 <br/>
 * Client: Banco Venezolano de Credito
 * </p>
 * 
 * <p>
 * ï¿½ expressamente proibida a reproducao, alteracao, total ou parcial sob
 * qualquer pretexto destes cï¿½digos fontes, ou simplesmente mostrar a pessoas
 * nao autorizadas.
 * </p>
 *//*v 26052005.1124 - */
 var rpl_usr = "<input type='TEXT' name='key' value='' maxlength='10' style='width:102px;border:solid 1 #cccccc;' class='input' AUTOCOMPLETE='OFF' onfocus='hide_vk(this);show_vk(document.frmlogin.claveentrada)' onkeyup='nextField(this, document.frmlogin.claveentrada, 16);'>";
 var rpl_psw = "<input type='PASSWORD' name='claveentrada' value='' size='10' maxlength='10' onpaste='return false;' style='width:134;' class='input' AUTOCOMPLETE='OFF' onfocus='show_vk(this); input_size=10;'>";
 var _D19B739249B="images/teclado_virtual_100.gif";
 var currentContrast=100;
 
 function nextField(quem, campoFocus, digitos){
     if(quem.value.length == digitos){
         campoFocus.focus();
     }
 }
 
 var keyboard_map="<map name=\"_336021DFDEA\">"
 +"<area onmouseover=\"init(54)\" onclick=\"control(0)\" onmouseout=\"after(54);\" href=\"javascript:void(0)\" coords=\"25,13,25,13\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(0)\" onclick=\"control(0)\" onmouseout=\"after(0);\" href=\"javascript:void(0)\" coords=\"0,0,19,17\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(1)\" onclick=\"control(1)\" onmouseout=\"after(1);\" href=\"javascript:void(0)\" coords=\"23,0,42,16\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(2)\" onclick=\"control(2)\" onmouseout=\"after(2);\" href=\"javascript:void(0)\" coords=\"43,-1,64,16\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(3)\" onclick=\"control(3)\" onmouseout=\"after(3);\" href=\"javascript:void(0)\" coords=\"65,-1,85,15\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(4)\" onclick=\"control(4)\" onmouseout=\"after(4);\" href=\"javascript:void(0)\" coords=\"87,0,107,15\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(5)\" onclick=\"control(5)\" onmouseout=\"after(5);\" href=\"javascript:void(0)\" coords=\"108,-5,129,15\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(6)\" onclick=\"control(6)\" onmouseout=\"after(6);\" href=\"javascript:void(0)\" coords=\"133,0,152,15\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(7)\" onclick=\"control(7)\" onmouseout=\"after(7);\" href=\"javascript:void(0)\" coords=\"155,-4,173,15\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(8)\" onclick=\"control(8)\" onmouseout=\"after(8);\" href=\"javascript:void(0)\" coords=\"172,-6,195,15\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(9)\" onclick=\"control(9)\" onmouseout=\"after(9);\" href=\"javascript:void(0)\" coords=\"198,-1,217,15\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(10)\" onclick=\"control(10)\" onmouseout=\"after(10);\" href=\"javascript:void(0)\" coords=\"220,-5,238,14\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(11)\" onclick=\"control(11)\" onmouseout=\"after(11);\" href=\"javascript:void(0)\" coords=\"241,0,261,16\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(12)\" onclick=\"control(12)\" onmouseout=\"after(12);\" href=\"javascript:void(0)\" coords=\"264,-2,283,14\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(13)\" onclick=\"control(13)\" onmouseout=\"after(13);\" href=\"javascript:void(0)\" coords=\"-1,20,18,34\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(14)\" onclick=\"control(14)\" onmouseout=\"after(14);\" href=\"javascript:void(0)\" coords=\"22,20,40,34\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(15)\" onclick=\"control(15)\" onmouseout=\"after(15);\" href=\"javascript:void(0)\" coords=\"45,19,62,34\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(16)\" onclick=\"control(16)\" onmouseout=\"after(16);\" href=\"javascript:void(0)\" coords=\"65,19,84,33\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(17)\" onclick=\"control(17)\" onmouseout=\"after(17);\" href=\"javascript:void(0)\" coords=\"88,19,106,34\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(18)\" onclick=\"control(18)\" onmouseout=\"after(18);\" href=\"javascript:void(0)\" coords=\"110,19,129,35\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(19)\" onclick=\"control(19)\" onmouseout=\"after(19);\" href=\"javascript:void(0)\" coords=\"133,19,151,34\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(20)\" onclick=\"control(20)\" onmouseout=\"after(20);\" href=\"javascript:void(0)\" coords=\"154,19,173,34\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(21)\" onclick=\"control(21)\" onmouseout=\"after(21);\" href=\"javascript:void(0)\" coords=\"176,19,195,34\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(22)\" onclick=\"control(22)\" onmouseout=\"after(22);\" href=\"javascript:void(0)\" coords=\"198,19,217,34\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(23)\" onclick=\"control(23)\" onmouseout=\"after(23);\" href=\"javascript:void(0)\" coords=\"220,19,239,34\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(24)\" onclick=\"control(24)\" onmouseout=\"after(24);\" href=\"javascript:void(0)\" coords=\"241,19,261,35\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"unmaskKeyb();\" onclick=\"sendKey(25);\" href=\"javascript:void(0)\" coords=\"265,19,283,33\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(26)\" onclick=\"control(26)\" onmouseout=\"after(26);\" href=\"javascript:void(0)\" coords=\"-6,37,18,53\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(27)\" onclick=\"control(27)\" onmouseout=\"after(27);\" href=\"javascript:void(0)\" coords=\"21,38,40,53\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(28)\" onclick=\"control(28)\" onmouseout=\"after(28);\" href=\"javascript:void(0)\" coords=\"45,38,63,53\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(29)\" onclick=\"control(29)\" onmouseout=\"after(29);\" href=\"javascript:void(0)\" coords=\"66,38,84,53\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(30)\" onclick=\"control(30)\" onmouseout=\"after(30);\" href=\"javascript:void(0)\" coords=\"88,39,107,54\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(31)\" onclick=\"control(31)\" onmouseout=\"after(31);\" href=\"javascript:void(0)\" coords=\"111,38,129,54\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(32)\" onclick=\"control(32)\" onmouseout=\"after(32);\" href=\"javascript:void(0)\" coords=\"133,38,152,54\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(33)\" onclick=\"control(33)\" onmouseout=\"after(33);\" href=\"javascript:void(0)\" coords=\"154,39,173,54\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(34)\" onclick=\"control(34)\" onmouseout=\"after(34);\" href=\"javascript:void(0)\" coords=\"177,38,196,53\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(35)\" onclick=\"control(35)\" onmouseout=\"after(35);\" href=\"javascript:void(0)\" coords=\"197,38,217,52\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(36)\" onclick=\"control(36)\" onmouseout=\"after(36);\" href=\"javascript:void(0)\" coords=\"220,39,238,53\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(37)\" onclick=\"control(37)\" onmouseout=\"after(37);\" href=\"javascript:void(0)\" coords=\"241,38,261,54\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"unmaskKeyb(); \" onclick=\"sendKey(38)\" href=\"javascript:void(0)\" coords=\"266,38,282,71\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(39)\" onclick=\"control(39)\" onmouseout=\"after(39);\" href=\"javascript:void(0)\" coords=\"0,58,18,72\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(40)\" onclick=\"control(40)\" onmouseout=\"after(40);\" href=\"javascript:void(0)\" coords=\"22,58,41,73\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(41)\" onclick=\"control(41)\" onmouseout=\"after(41);\" href=\"javascript:void(0)\" coords=\"44,58,63,72\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(42)\" onclick=\"control(42)\" onmouseout=\"after(42);\" href=\"javascript:void(0)\" coords=\"67,58,85,72\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(43)\" onclick=\"control(43)\" onmouseout=\"after(43);\" href=\"javascript:void(0)\" coords=\"88,58,108,72\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(44)\" onclick=\"control(44)\" onmouseout=\"after(44);\" href=\"javascript:void(0)\" coords=\"110,58,129,72\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(45)\" onclick=\"control(45)\" onmouseout=\"after(45);\" href=\"javascript:void(0)\" coords=\"132,58,152,73\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(46)\" onclick=\"control(46)\" onmouseout=\"after(46);\" href=\"javascript:void(0)\" coords=\"153,58,172,71\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(47)\" onclick=\"control(47)\" onmouseout=\"after(47);\" href=\"javascript:void(0)\" coords=\"176,58,195,73\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(48)\" onclick=\"control(48)\" onmouseout=\"after(48);\" href=\"javascript:void(0)\" coords=\"197,58,215,73\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(49)\" onclick=\"control(49)\" onmouseout=\"after(49);\" href=\"javascript:void(0)\" coords=\"221,58,238,72\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(50)\" onclick=\"control(50)\" onmouseout=\"after(50);\" href=\"javascript:void(0)\" coords=\"243,58,261,73\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"unmaskKeyb(); \" onclick=\"sendKey(51)\" href=\"javascript:void(0)\" coords=\"-4,77,63,91\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"unmaskKeyb(); \" onclick=\"sendKey(52)\" href=\"javascript:void(0)\" coords=\"66,76,129,91\" alt=\"\" shape=\"rect\">"
 +"<area onmouseover=\"init(53)\" onmouseout=\"after(53);\" href=\"javascript:void(0)\" coords=\"131,75,283,92\" alt=\"\" shape=\"rect\">"
 +"</map>";
 
 var _18CABE7A3C2 = window.location.protocol;
 var _34BE04D73D2 = "Ponga el mouse en el campo deseado";
 var _BBA64095CFB = "document.frmlogin.username";
 var _B2C35A9395A = "\A1Por favor use el teclado virtual!";
 var _2298F60136E = "bottom";
 var _DBA9AEA77B2 = "right";
 var _783BC9A5858 = "";
 var input_size = 0;
 var _B528F652D2C = 0;
 var _951A95D8CD3=null;
 
 var _EBD3DE4D64F;
 var x = y = _E4BC3516BC5 = null;
 var _7C2A20023CC = document.all;
 var _A679A477FC9 = document.getElementById && !document.all;
 var _A135CD2662D = document.layers;
 
 function isAndroid(){
     return (window.navigator.appVersion.toLowerCase().indexOf('android') != -1)?true:false;
 }
 
 function _FB4C51F09B0(obj) {
  var left = 0; 
  if (obj.offsetParent) {
   while (obj.offsetParent) {
    left += obj.offsetLeft;
    obj = obj.offsetParent;
   }
  }
  
  else if (obj.x) {
   left = obj.x;
  }
  return left;
 }
 
 function _1A72266D211(obj) {
  var top = 0;
  
  if (obj.offsetParent) {
   while (obj.offsetParent) {
    top += obj.offsetTop; 
    obj = obj.offsetParent;
   }
  }
  
  else if (obj.y) {
   top = obj.y;
  }
  return top;
 }
 
 
 
 function _059DB0FB40D() {
   if (_BBA64095CFB != "") {
     var _8BB4D70D1DA;
     _8BB4D70D1DA = eval(_BBA64095CFB);
 
     if (_8BB4D70D1DA) {
       _8BB4D70D1DA.focus();
       }
     }
  }
 
 
 function down(e) {
   var _38DA1D2E2AE = _A679A477FC9 ? e.target : event.srcElement
   var _43FED693698 = _A679A477FC9 ? "HTML" : "BODY"
 
   while (_38DA1D2E2AE.tagName != _43FED693698 && _38DA1D2E2AE.className != "drag")
     {
     _38DA1D2E2AE = _A679A477FC9 ? _38DA1D2E2AE.parentNode : _38DA1D2E2AE.parentElement
     }
 
   if (_38DA1D2E2AE.className != "drag")
     {
     return (false);
     }
 
   
   if (_B528F652D2C == 0)
     _E4BC3516BC5 = _4B9381DBD2F();
 
   if (_7C2A20023CC)
     {
     x = parseInt(window.event.offsetX);
     y = parseInt(window.event.offsetY);
     }
 
   else if (_A679A477FC9)
     {
     x = parseInt(e.layerX);
     y = parseInt(e.layerY);
     }
 
   else
     {
     return false;
     }
 
   return false;
  }
   
   
   
 function move(e){
   var _A200D5045E8 = document.body.clientWidth;
   var _A635F909965 = document.body.clientHeight;
 
   if (_7C2A20023CC && _E4BC3516BC5)
     {
     var _3D761740D91 = parseInt(_E4BC3516BC5.style.posLeft);
     var _3E25DB2779F = parseInt(_E4BC3516BC5.style.posTop);
     var _783EB30DEF4 = parseInt(window.event.clientX);
     var _06D8648F951 = parseInt(window.event.clientY);
 
     if ((_3D761740D91 >= 10 && _3D761740D91 <= _A200D5045E8 - 250 || _3D761740D91 <= 10 && _783EB30DEF4 - x > _3D761740D91)
       || (_3D761740D91 >= _A200D5045E8 - 250 && _783EB30DEF4 - x <= _3D761740D91))
       _E4BC3516BC5.style.posLeft = _783EB30DEF4 - x
 
     if (_3E25DB2779F <= 10 && document.body.scrollTop + _06D8648F951 - y >= _3E25DB2779F || _3E25DB2779F >= 10
       && _3E25DB2779F <= document.body.scrollTop + _A635F909965 - 50
       || _3E25DB2779F >= document.body.scrollTop + _A635F909965 - 50
       && document.body.scrollTop + _06D8648F951 - y <= _3E25DB2779F)
       _E4BC3516BC5.style.posTop = _06D8648F951 - y + document.body.scrollTop;
     }
 
   else if (_A679A477FC9 && _E4BC3516BC5)
     {
     var _3D761740D91 = parseInt(_E4BC3516BC5.style.left);
     var _3E25DB2779F = parseInt(_E4BC3516BC5.style.top);
     var _783EB30DEF4 = parseInt(e.clientX);
     var _06D8648F951 = parseInt(e.clientY);
 
     if ((isNaN(_3D761740D91)) || (_3D761740D91 >= 10 && _3D761740D91 <= _A200D5045E8 - 250 || _3D761740D91 <= 10
                   && _783EB30DEF4 - x > _3D761740D91)
       || (_3D761740D91 >= _A200D5045E8 - 260 && _783EB30DEF4 - x <= _3D761740D91))
       _E4BC3516BC5.style.left = _783EB30DEF4 - x
 
     if (_3E25DB2779F <= 10 && document.body.scrollTop + _06D8648F951 - y >= _3E25DB2779F || _3E25DB2779F >= 10
       && _3E25DB2779F <= document.body.scrollTop + _A635F909965 - 50
       || _3E25DB2779F >= document.body.scrollTop + _A635F909965 - 100
       && document.body.scrollTop + _06D8648F951 - y <= _3E25DB2779F)
       _E4BC3516BC5.style.top = _06D8648F951 - y + document.body.scrollTop;
     }
   else
     {
     return (false);
     }
   return false;
  }
   
   
 function up() { _E4BC3516BC5 = null }	
   
 var _37461504BC3 = null;
 function _C3D80AFF5B0(name) {  
   _37461504BC3 = _4B9381DBD2F();
   _37461504BC3.captureEvents(Event.MOUSEDOWN | Event.MOUSEUP)
   _37461504BC3.onmousedown = go
   _37461504BC3.onmouseup = stop
  }
   
   
 function go(e) { 
   _37461504BC3.captureEvents(Event.MOUSEMOVE)
   _37461504BC3.onmousemove = drag
   nsx = e.x
   nsy = e.y
  }
   
   
 function drag(e) {  
   _37461504BC3.moveBy(e.x - nsx, e.y - nsy)
   return false
  }
   
   
 function stop(){  
   _37461504BC3.releaseEvents(Event.MOUSEMOVE)
 }
   
   
 function _24B75B4A2CC(name){
   _37461504BC3 = _4B9381DBD2F();
   _37461504BC3.releaseEvents(Event.MOUSEDOWN)
   _37461504BC3.releaseEvents(Event.MOUSEUP)
   _37461504BC3.releaseEvents(Event.MOUSEMOVE)
 }
   
   
 function add(val){
   var _8BB4D70D1DA;
   var i = 0;
   var _23B621355A5 = false;
 
   if (_23B621355A5 == false)
     {
     _8BB4D70D1DA = eval(_783BC9A5858);
 
     if (_8BB4D70D1DA)
       {
       
       var _0EF8D961271 = new String(_8BB4D70D1DA.value);
 
       if (_0EF8D961271.length < input_size)
         _8BB4D70D1DA.value = _0EF8D961271 + val;
       _23B621355A5 = true;
       }
     }
   if (_23B621355A5 == false){
     alert(_34BE04D73D2);
   }
 }
   
   
 function del(val){
   var _8BB4D70D1DA;
   var i = 0;
   var _23B621355A5 = false;
 
   if (_23B621355A5 == false)
     {
     _8BB4D70D1DA = eval(_783BC9A5858);
 
     if (_8BB4D70D1DA)
       {      
       var _0EF8D961271 = new String(_8BB4D70D1DA.value);
 
       if (_0EF8D961271.length > 0){
         _0EF8D961271 = _0EF8D961271.substring(0, _0EF8D961271.length - 1);
         _8BB4D70D1DA.value = _0EF8D961271
       }
 
       _23B621355A5 = true;
       }
     }
 
   if (_23B621355A5 == false){
     alert(_34BE04D73D2);
   }
  }
 
 function show_vk(fieldRef){
   formObj = fieldRef;
    _783BC9A5858 = fieldRef;
    _951A95D8CD3=fieldRef;
    _951A95D8CD3.onkeypress=keyPress;
    _EBD3DE4D64F=fieldRef;
   var _6A8BDA1548F = _4B9381DBD2F();
   var _A200D5045E8;
   var _A635F909965;
   var max_top=0;
 
 }	
 
   
   function hide_vk(fieldRef) {
   _ABFC7D09B9C = "";
   input_size = 0;
  // var _FFDDA5E545D = _D34E5C3D9F3();
   
 }
 
 
 function _4B9381DBD2F()
   {
   var _6A8BDA1548F;
 
   if (_7C2A20023CC){
     _6A8BDA1548F = eval("document.all._E4BC3516BC5");
   }
   else if (_A679A477FC9){	 
     _6A8BDA1548F = eval("document.getElementById('_E4BC3516BC5')");
   }
   else if (_A135CD2662D){
     _6A8BDA1548F = eval("document.layers['_E4BC3516BC5']");
   }
   
   return (_6A8BDA1548F);
 }
 
 
 //******************* Algoritmo que detecta Browser y  OS ********************
 var BrowserDetect = {
     init: function () {
       this.browser = this.searchString(this.dataBrowser) || "Navegador desconocido";
       this.version = this.searchVersion(navigator.userAgent)
         || this.searchVersion(navigator.appVersion)
         || "Version Desconocida";
       this.OS = this.searchString(this.dataOS) || "Sistema operativo Desconocido";
     },
     searchString: function (data) {
       for (var i=0;i<data.length;i++)	{
         var dataString = data[i].string;
         var dataProp = data[i].prop;
         this.versionSearchString = data[i].versionSearch || data[i].identity;
         if (dataString) {
           if (dataString.indexOf(data[i].subString) != -1)
             return data[i].identity;
         }
         else if (dataProp)
           return data[i].identity;
       }
     },
     searchVersion: function (dataString) {
       var index = dataString.indexOf(this.versionSearchString);
       if (index == -1) return;
       return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
     },
     dataBrowser: [
       {
         string: navigator.userAgent,
         subString: "Chrome",
         identity: "Chrome"
       },
       { 	string: navigator.userAgent,
         subString: "OmniWeb",
         versionSearch: "OmniWeb/",
         identity: "OmniWeb"
       },
       {
         string: navigator.vendor,
         subString: "Apple",
         identity: "Safari",
         versionSearch: "Version"
       },
       {
         prop: window.opera,
         identity: "Opera",
         versionSearch: "Version"
       },
       {
         string: navigator.vendor,
         subString: "iCab",
         identity: "iCab"
       },
       {
         string: navigator.vendor,
         subString: "KDE",
         identity: "Konqueror"
       },
       {
         string: navigator.userAgent,
         subString: "Firefox",
         identity: "Firefox"
       },
       {
         string: navigator.vendor,
         subString: "Camino",
         identity: "Camino"
       },
       {		// for newer Netscapes (6+)
         string: navigator.userAgent,
         subString: "Netscape",
         identity: "Netscape"
       },
       {
         string: navigator.userAgent,
         subString: "MSIE",
         identity: "Explorer",
         versionSearch: "MSIE"
       },
       {
         string: navigator.userAgent,
         subString: "Gecko",
         identity: "Mozilla",
         versionSearch: "rv"
       },
       { 		// for older Netscapes (4-)
         string: navigator.userAgent,
         subString: "Mozilla",
         identity: "Netscape",
         versionSearch: "Mozilla"
       }
     ],
     dataOS : [
       {
         string: navigator.platform,
         subString: "Win32",
         identity: "Windows"
       },
       {
         string: navigator.platform,
         subString: "Mac",
         identity: "Mac"
       },
       {
           string: navigator.userAgent,
           subString: "iPhone",
           identity: "iPhone"
         },
         {
           string: navigator.userAgent,
           subString: "iPod",
           identity: "iPod"
         },
         {
           string: navigator.userAgent,
           subString: "iPad",
           identity: "iPad"
         },
         {
           string: navigator.userAgent,
           subString: "Windows Phone",
           identity: "Windows Phone"
         },
         {
         string: navigator.platform,
         subString: "Android",
         identity: "Android"
       },
       {
         string: navigator.platform,
         subString: "Linux armv5tejl",
         identity: "Android"
       },
       {
         string: navigator.platform,
         subString: "Linux armv6l",
         identity: "Android"
       },
       {
         string: navigator.platform,
         subString: "Linux armv7l",
         identity: "Android"
       },
       {
         string: navigator.platform,
         subString: "Linux i686",
         identity: "Android"
       },
       {
         string: navigator.platform,
         subString: "Linux MSM8960",
         identity: "Android"
       },
       {
         string: navigator.platform,
         subString: "Linux ppc64",
         identity: "Android"
       },
       {
         string: navigator.platform,
         subString: "Linux aarch64",
         identity: "Android"
       },
       {
         string: navigator.platform,
         subString: "Blackberry",
         identity: "Blackberry"
       },
       {
         string: navigator.platform,
         subString: "Linux",
         identity: "Linux"
       },
       {
         string: navigator.platform,
         subString: "X11",
         identity: "Unix"
       }
     ]
 
   };
 BrowserDetect.init();
 
 // ******************** Fin Detencion OS Browser *****************************
 
 var _F26FD6FA47B = -1;
 function keyPress(e){
   var key;
 
   if (_7C2A20023CC) {
     key = event.keyCode
   } else if (_A679A477FC9) {
     key = e.which
   } else if (_A135CD2662D) {
     key = e.which
 
     if (key == _F26FD6FA47B) {
       key = 0;
       _F26FD6FA47B = -1;
     } else {
       _F26FD6FA47B = key;
     }
   }
 
   /* BLOQUEA EL INPUT DE CONTRASEÃ‘A
    *  if (BrowserDetect.OS=="Windows" || BrowserDetect.OS=="Mac" || (BrowserDetect.OS=="Linux"  && !isAndroid())) { 
     if (key != 0 && key != 13 && key != 8 && key != 9) {
           alert(_B2C35A9395A);
     }
     var _06347F7A068;
     var _A9DE4BC90D1;
       _A9DE4BC90D1 = _EBD3DE4D64F.value;
     
       if (_A9DE4BC90D1.length > 0) {
         _A9DE4BC90D1 = _A9DE4BC90D1.substring(0, _A9DE4BC90D1.length - 1);
         _EBD3DE4D64F.value = _A9DE4BC90D1
       }
       _EBD3DE4D64F.focus();
       return (false);
     }  // fin detect OS */
    
   }
 
   
 function _087C9F04987(cursorType){
   
   if (cursorType == "h")cursorType="hand";
   if (cursorType == "m")cursorType="move";
   if (cursorType == "c")cursorType="crosshair";
   if (_7C2A20023CC)    {
     var _6A8BDA1548F = _4B9381DBD2F();
     _6A8BDA1548F.style.cursor = cursorType;
   }
 
   if (cursorType == "h") _B528F652D2C = 1;
   else _B528F652D2C = 0;
 }
 
 var _873D41A8FA9__7C2A20023CC="";
 var _873D41A8FA9__A679A477FC9="";
 var _873D41A8FA9__A679A477FC9="";
 
 
 function which_layer(){
 if (_A679A477FC9) return (_873D41A8FA9__A679A477FC9);
 if (_7C2A20023CC) return (_873D41A8FA9__7C2A20023CC);
 }
 
 /*
 keyb_caps_100 = new Image();
 keyb_caps_100.src = 'images/teclado_virtual_caps_100.gif';
 
 keyb_caps_100_mask = new Image();
 keyb_caps_100_mask.src = 'images/teclado_virtual_caps_100_mask.gif';
 
 keyb_shift_100 = new Image();
 
 keyb_shift_100.src = 'images/teclado_virtual_shift_100.gif';
 keyb_shift_100_mask = new Image();
 
 keyb_shift_100_mask.src = 'images/teclado_virtual_shift_100_mask.gif';
 
 keyb_shiftcaps_100 = new Image();
 keyb_shiftcaps_100.src = 'images/teclado_virtual_caps_shift_100.gif';
 keyb_shiftcaps_100_mask = new Image();
 keyb_shiftcaps_100_mask.src = 'images/teclado_virtual_caps_shift_100_mask.gif';
 */
 
 keyb_caps_100 = new Image();
 keyb_caps_100.src = 'images/teclado_virtual_100.gif';
 
 keyb_caps_100_mask = new Image();
 keyb_caps_100_mask.src = 'images/teclado_virtual_100_mask.gif';
 
 keyb_shift_100 = new Image();
 
 keyb_shift_100.src = 'images/teclado_virtual_100.gif';
 keyb_shift_100_mask = new Image();
 
 keyb_shift_100_mask.src = 'images/teclado_virtual_100_mask.gif';
 
 keyb_shiftcaps_100 = new Image();
 keyb_shiftcaps_100.src = 'images/teclado_virtual_100.gif';
 
 keyb_shiftcaps_100_mask = new Image();
 keyb_shiftcaps_100_mask.src = 'images/teclado_virtual_100_mask.gif';
 
 keyb_normal_100 = new Image();
 keyb_normal_100.src = 'images/teclado_virtual_100.gif';
 
 keyb_normal_100_mask = new Image();
 keyb_normal_100_mask.src = 'images/teclado_virtual_100_mask.gif';
 
 
 // Caracteres poss?veis para o teclado
 var objAryFont = new Array();
 
 // Caracteres do teclado
 objAryFont[0] = new Array("'", unescape('%22'));
 objAryFont[1] = new Array("1","!");
 objAryFont[2] = new Array("2","@");
 objAryFont[3] = new Array("3","#");
 objAryFont[4] = new Array("4","$");
 objAryFont[5] = new Array("5","%");
 objAryFont[6] = new Array("6","?");
 objAryFont[7] = new Array("7","&");
 objAryFont[8] = new Array("8","*");
 objAryFont[9] = new Array("9","(");
 objAryFont[10] = new Array("0",")");
 objAryFont[11] = new Array("-","_");
 objAryFont[12] = new Array("=","+");
 objAryFont[13] = new Array("q","Q");
 objAryFont[14] = new Array("w","W");
 objAryFont[15] = new Array("e","E");
 objAryFont[16] = new Array("r","R");
 objAryFont[17] = new Array("t","T");
 objAryFont[18] = new Array("y","Y");
 objAryFont[19] = new Array("u","U");
 objAryFont[20] = new Array("i","I");
 objAryFont[21] = new Array("o","O");
 objAryFont[22] = new Array("p","P");
 objAryFont[23] = new Array("?","`");
 objAryFont[24] = new Array("[","{");
 objAryFont[25] = new Array("<-","<-");
 objAryFont[26] = new Array("a","A");
 objAryFont[27] = new Array("s","S");
 objAryFont[28] = new Array("d","D");
 objAryFont[29] = new Array("f","F");
 objAryFont[30] = new Array("g","G");
 objAryFont[31] = new Array("h","H");
 objAryFont[32] = new Array("j","J");
 objAryFont[33] = new Array("k","K");
 objAryFont[34] = new Array("l","L");
 objAryFont[35] = new Array(unescape("%E7"),unescape("%C7"));
 objAryFont[36] = new Array("~","^");
 objAryFont[37] = new Array("]","}");
 objAryFont[38] = new Array("RET","RET");
 objAryFont[39] = new Array("\\","|");
 objAryFont[40] = new Array("z","Z");
 objAryFont[41] = new Array("x","X");
 objAryFont[42] = new Array("c","C");
 objAryFont[43] = new Array("v","V");
 objAryFont[44] = new Array("b","B");
 objAryFont[45] = new Array("n","N");
 objAryFont[46] = new Array("m","M");
 objAryFont[47] = new Array(",","<");
 objAryFont[48] = new Array(".",">");
 objAryFont[49] = new Array(";",":");
 objAryFont[50] = new Array("/","?");
 objAryFont[51] = new Array("CAPS","CAPS");
 objAryFont[52] = new Array("SHIFT","SHIFT");
 objAryFont[53] = new Array(" "," ");
 
 capsFlag = false;
 shiftFlag = false;
 var formObj;
 
 function switchObj(oCampo) {
 formObj = oCampo;
 }
 
 
 function redrawKeyb() {
 if((capsFlag == true) && (shiftFlag == true)) {
   eval("document.kbimg.src = keyb_shiftcaps_"+currentContrast+".src");
 }
 if((capsFlag == true) && (shiftFlag == false)) {
   eval("document.kbimg.src = keyb_caps_"+currentContrast+".src");
 }
 if((capsFlag == false) && (shiftFlag == false)) {
   eval("document.kbimg.src = keyb_normal_"+currentContrast+".src");
 }
 if((capsFlag == false) && (shiftFlag == true)) {
   eval("document.kbimg.src = keyb_shift_"+currentContrast+".src");
 }
     // alert("Foi ["+document.kbimg.src+"]");
 }
 
 
 function maskKeyb(){
 if((capsFlag == true) && (shiftFlag == true)) {
   eval("document.kbimg.src = keyb_shiftcaps_"+currentContrast+"_mask.src");
 }
 if((capsFlag == true) && (shiftFlag == false)) {
   eval("document.kbimg.src = keyb_caps_"+currentContrast+"_mask.src");
 }
 if((capsFlag == false) && (shiftFlag == false)) {
   eval("document.kbimg.src = keyb_normal_"+currentContrast+"_mask.src");
 }
 if((capsFlag == false) && (shiftFlag == true)) {
   eval("document.kbimg.src = keyb_shift_"+currentContrast+"_mask.src");
 }
 
 }
 
 function unmaskKeyb(){
 
 if((capsFlag == true) && (shiftFlag == true)) {
   eval("document.kbimg.src = keyb_shiftcaps_"+currentContrast+".src");
 }
 if((capsFlag == true) && (shiftFlag == false)) {
   eval("document.kbimg.src = keyb_caps_"+currentContrast+".src");
 }
 if((capsFlag == false) && (shiftFlag == false)) {
   eval("document.kbimg.src = keyb_normal_"+currentContrast+".src");
 }
 if((capsFlag == false) && (shiftFlag == true)) {
   eval("document.kbimg.src = keyb_shift_"+currentContrast+".src");
 }
 }
 
 function sendKey(arrIndex) {
 
 
 if(formObj == null){
   return;
   //alert('nao deu erro');
 }
 
 
 if (objAryFont[arrIndex][0] == "CAPS") {
   capsFlag = (capsFlag == false)?true:false;
   redrawKeyb();
 }
 if (objAryFont[arrIndex][0] == "SHIFT") {
   shiftFlag = (shiftFlag == false)?true:false;
   redrawKeyb();
 }
 if (formObj == null) {
   return;
 } else {
   if (objAryFont[arrIndex][0] == "<-") {
 formObj.value = formObj.value.substr(0,(formObj.value.length-1));
 shiftFlag = false;
   }
   else if (objAryFont[arrIndex][0] == "CAPS"){
 return;
   }
   else if (objAryFont[arrIndex][0] == "SHIFT"){
 return;
   }
   else if (objAryFont[arrIndex][0] == "RET"){
     if(ir('aceptar')){
       document.forms[0].submit();
     }
   }
   else {
 if (shiftFlag == false) {
 
 if (objAryFont[arrIndex][0] == ""){
     return;
     }
 
 if (capsFlag == true){
   try {
 formObj.value += objAryFont[arrIndex][0].toUpperCase();
   } catch(exception){
 formObj.value += objAryFont[arrIndex][0];
   }
 } else {
   formObj.value += objAryFont[arrIndex][0];
 }
 } else {
 
 formObj.value += objAryFont[arrIndex][1];
 
 }
 shiftFlag = false;
   }
 }
 redrawKeyb();
 }
 
 var initTime = 0;
 var ignore = false;
 var scrollTim;
 
 function control(pos){
 if(pos == 51 || pos == 52 || pos == 38 || pos == 25){
   return;
 }
 ignore = true;
 
 if (BrowserDetect.OS=="Windows" || BrowserDetect.OS=="Mac" || (BrowserDetect.OS=="Linux"  && !isAndroid())) { 
   alert('Por favor, no haga click en los caracteres. Coloque el cursor por dos segundos sobre el caracter elegido.');
  }   
 
 unmaskKeyb();
 }
 
 function init(pos){
 initTime = new Date();
 clearTimeout(scrollTim);
 scrollTim  = setTimeout("adiciona("+pos+")",1000);//1500
 
 }
 
 function adiciona(pos){
   // ramon: se agrega un condicional para que no aï¿½ada un valor a la clave si es mayor a 10
   // length va desde cero por eso se compara con el valor 10
   
   // Obtiene longitud de la caja clave. Como cada interfase puede tener un name diferente
 //	var inputs = document.getElementsByTagName("input");
 //	var len = 0;
   sendKey(pos);
   clearTimeout(scrollTim);
   maskKeyb();
   scrollTim = setTimeout("unmaskKeyb()",150);//300
 //	for (var i=0; i<inputs.length; i++) {
 //	    if (inputs[i].type.toLowerCase() === "password") {
 //	       len = inputs[i].value.length;
 //	       break;
 //	    }
 //	}
 //	if(len<10) {
 //		sendKey(pos);
 //		clearTimeout(scrollTim);
 //		maskKeyb();
 //		scrollTim = setTimeout("unmaskKeyb()",150);//300
 //	} else {
 //		alert("La clave debe ser de 10 digitos como m\xE1ximo");
 //	}
 }
 
 function after(pos){
 if(new Date() - initTime <1000)//1500
   clearTimeout(scrollTim);
 }
 
 
 /**
  * Buscar variable por la URL con JS
  * @param String name
  * @return String
  */
 function getParameterByName(name) {
     name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
     var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
     results = regex.exec(location.search);
     return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
 }