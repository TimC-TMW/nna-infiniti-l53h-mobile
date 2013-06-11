var sgFrameWidth = 632;
var currentURI = window.location.href;
var isStageEnv=false;
var sStageEnvServer='';
var sStageEnvServerSuffix='';
var nonSecurePath;
var sgran=false;

//Set Default Survey ID:
var sgPageID = $('crmEngine').getAttribute('pageid');
var sgPageLocale = $('crmEngine').getAttribute('pagelocale');

if(currentURI.indexOf('.infinitiusa.com') > -1)
{
sgUpdateState("www.surveygizmo.com/s3*828678*d79dab51e94d|Default|17|14|15|12","PageName=Page_Not_Yet_Loaded~TID=0~PID="+sgPageID+"_"+sgPageLocale);
}
else if(currentURI.indexOf('.nissanusa.com') > -1)
{
sgUpdateState("www.surveygizmo.com/s3*828680*386ccafa7c3e|Default|17|14|15|12","PageName=Page_Not_Yet_Loaded~TID=0~PID="+sgPageID+"_"+sgPageLocale);
}


if(currentURI.indexOf('.stage.') > -1)
{
	isStageEnv=true;
	sStageEnvServer='stage';
	sStageEnvServerSuffix='com';
}
else if(currentURI.indexOf('.newdev.') > -1)
{
	isStageEnv=true;
	sStageEnvServer='newdev';
	sStageEnvServerSuffix='com';
}
else if(currentURI.indexOf('.dev.') > -1)
{
	isStageEnv=true;
	sStageEnvServer='dev';
	sStageEnvServerSuffix='designory.com';
}
else if(currentURI.indexOf('.qa1.') > -1)
{
	isStageEnv=true;
	sStageEnvServer='qa1';
	sStageEnvServerSuffix='com';
}
else if(currentURI.indexOf('.qa2.') > -1)
{
	isStageEnv=true;
	sStageEnvServer='qa2';
	sStageEnvServerSuffix='com';
}
else if(currentURI.indexOf('.qa.') > -1)
{
	isStageEnv=true;
	sStageEnvServer='qa';
	sStageEnvServerSuffix='nna';
}
else if(currentURI.indexOf('search') > -1)
{
	isStageEnv=false;
	sStageEnvServer='search';
	sStageEnvServerSuffix='com';
}

if((currentURI.indexOf('.infinitiusa.com') > -1)||(currentURI.indexOf('.dev.') > -1))
{
	nonSecurePath =	(!isStageEnv) ?	"http://www.infinitiusa.com" : "http://www."+sStageEnvServer+".infinitiusa."+sStageEnvServerSuffix; 
}
else if((currentURI.indexOf('.nissanusa.com') > -1)||(currentURI.indexOf('.dev.') > -1))
{
	nonSecurePath =	(!isStageEnv) ?	"http://www.nissanusa.com" : "http://www."+sStageEnvServer+".nissanusa."+sStageEnvServerSuffix; 
}

var aaflag = 0;
var objFrameSrc;
var winW;
var winY;
var gizmoPid = $('crmEngine').getAttribute('pageid');

// pages that is looking for the ID before addload event is called
if(gizmoPid == 16677){
		sgInit();
}

	//if(gizmoPid == 16677 || gizmoPid == 16602){

function makeFrame(getObj) {
   var aa = getObj;
   ifrm = document.createElement("IFRAME");
   //ifrm.setAttribute("frameborder","0");
   ifrm.setAttribute("frameBorder","0");
   ifrm.setAttribute("src", aa);
   ifrm.style.width = 632+"px";
   //ifrm.style.width = 628+"px";
   ifrm.style.height = 480+"px";
   ifrm.id = ifrm.name = 'gzFrame';
   if(aaflag == 0){
	   //if (document.getElementById('putFrame')!=null)
   			document.getElementById('putFrame').appendChild(ifrm);
   }
   aaflag = 1;
}

function sgUpdateState(surveyinfo,pagename){
	if(sgran==true)
       return;
	custom_var = surveyinfo;
	custom_query = pagename;	
	objFrameSrc = nonSecurePath + "/sgframe.html";
	objFrameSrc = objFrameSrc + "?gizmo=" + custom_var + '::' + custom_query;
}

function gizmoHeight(gizmoHeight){
		var gHeight = 500 + 75;
}

var ns4=document.layers
var ie4=document.all
var ns6=document.getElementById&&!document.all
var dragswitch=0
var nsx
var nsy
var nstemp

function drag_dropns(name){
if (!ns4)
return
temp=eval(name)
temp.captureEvents(Event.MOUSEDOWN | Event.MOUSEUP)
temp.onmousedown=gons
temp.onmousemove=dragns
temp.onmouseup=stopns
}

function gons(e){
temp.captureEvents(Event.MOUSEMOVE)
nsx=e.x
nsy=e.y
}
function dragns(e){
if (dragswitch==1){
temp.moveBy(e.x-nsx,e.y-nsy)
return false
}
}

function stopns(){
temp.releaseEvents(Event.MOUSEMOVE)
}

function drag_drop(e){
if (ie4&&dragapproved){
crossobj.style.left=tempx+event.clientX-offsetx
crossobj.style.top=tempy+event.clientY-offsety
return false
}
else if (ns6&&dragapproved){
crossobj.style.left=tempx+e.clientX-offsetx+"px"
crossobj.style.top=tempy+e.clientY-offsety+"px"
return false
}
}

function initializedrag(e){
crossobj=ns6? document.getElementById("showimage") : document.all.showimage
var firedobj=ns6? e.target : event.srcElement
var topelement=ns6? "html" : document.compatMode && document.compatMode!="BackCompat"? "documentElement" : "body"
while (firedobj.tagName!=topelement.toUpperCase() && firedobj.id!="dragbar"){
firedobj=ns6? firedobj.parentNode : firedobj.parentElement
}

if (firedobj.id=="dragbar"){
offsetx=ie4? event.clientX : e.clientX
offsety=ie4? event.clientY : e.clientY

tempx=parseInt(crossobj.style.left)
tempy=parseInt(crossobj.style.top)

dragapproved=true
document.onmousemove=drag_drop
}
}
document.onmouseup=new Function("dragapproved=false")

function hidebox(){
//document.getElementById('showimage').style.display = 'none';
crossobj=ns6? document.getElementById("showimage") : document.all.showimage
if (ie4||ns6)
{crossobj.style.visibility="hidden"
crossobj.style.display="none";}
else if (ns4)
document.showimage.visibility="hide"
}

function showbox(trkSource){
var additionalTracking = (trkSource=='trkGloablFeedBkSurvey') ? "&nvx=DefaultSurvey_Image" : "&nvx=DefaultSurvey_Footer";
	if(!(objFrameSrc.indexOf('nvx') > -1)){
		objFrameSrc = objFrameSrc + additionalTracking
	}
makeFrame(objFrameSrc);
document.getElementById('showimage').style.display = 'inline';

var winY = 0;
var winW = 0;
if (window.innerWidth != undefined) {
	winW = window.innerWidth;
} else if (document.body.clientWidth != undefined) {
	winW = document.body.clientWidth;
} else {
	winW = document.documentElement.clientWidth;
}
if (document.documentElement.scrollTop != undefined) {
	winY = document.documentElement.scrollTop;
} else if (document.body.scrollTop != undefined && document.body.scrollTop > 0) {
	winY = document.body.scrollTop;
} else if (window.pageYOffset != undefined) {
	winY = window.pageYOffset;
} else {
	winY = 0;
}


winW = (winW - sgFrameWidth)/2;


document.getElementById('showimage').style.display = 'inline';
crossobj=ns6? document.getElementById("showimage") : document.all.showimage


var iebody=(document.compatMode && document.compatMode != "BackCompat")? document.documentElement : document.body

var dsocleft=document.all? iebody.scrollLeft : pageXOffset
var dsoctop=document.all? iebody.scrollTop : pageYOffset

var ieWidth	= document.body.clientWidth / 2;
var FFWidth = parent.window.innerWidth / 2;


dsocleft = ns6? (dsocleft + FFWidth - 320) : (dsocleft + ieWidth - 320) ;
dsoctop = dsoctop +100;

/*document.getElementById('showimage').style.left=dsocleft+"px";
document.getElementById('showimage').style.top=dsoctop+"px";
alert("left:"+dsocleft+"top:"+dsoctop);*/

crossobj=ns6? document.getElementById("showimage") : document.all.showimage
if (ie4||ns6)
crossobj.style.visibility="visible"
else if (ns4)
document.showimage.visibility="show"
}


function sgAddLoadEvents(){
	
	var _body = document.getElementsByTagName('body')[0];
	var _div = document.createElement('div');
	var _text = "";
	_text+='<div onclick="showbox();" style="cursor:pointer;" id="gizmoS">show box 2</div>';
	_div.appendChild(_text);
	_body.appendChild(_div);
	
}

function adjustSgFrame()
{
var iebody=(document.compatMode && document.compatMode != "BackCompat")? document.documentElement : document.body

var dsocleft=document.all? iebody.scrollLeft : pageXOffset
var dsoctop=document.all? iebody.scrollTop : pageYOffset

var ieWidth	= document.body.clientWidth / 2;
var FFWidth = document.body.clientWidth / 2;

dsocleft = ns6? (dsocleft + FFWidth - 320) : (dsocleft + ieWidth - 320) ;
document.getElementById('sgFrameLayer').style.left=dsocleft+"px";

}
function sgInit(){
if (document.body == null) {
	setTimeout(sgInit,1000);
	return;
}		
var sgD1=document.createElement("div");
sgD1.id="sgFrameLayer";
//Survey Gizmo changes start
sgD1.style.position="fixed";
/*var LeftPosition = (screen.width) ? (screen.width-600)/2 : 0;
sgD1.style.left=LeftPosition+'px';*/
sgD1.style.top="40px";
sgD1.style.zIndex="10000";
//Survey Gizmo changes end
var _sgdi="";
var brows=(brows=="moz")?"pointer":"hand"; //should sniff, later, but this works.

		//Survey Gizmo changes start
		var msie = navigator.appVersion.split("MSIE");
		var ieVersion = parseFloat(msie[1]);
		var ie7OrLower = (!isNaN(ieVersion) && ieVersion<=7);

		if(ie7OrLower){
			sgD1.style.position="absolute";
			sgD1.className="sgFrameLayer";
		}
		//Survey Gizmo changes end
		
_sgdi+='<div id="showimage" style="z-index: 100000;position:fixed;_position:absolute;border-left:14px solid #333333; border-right:14px solid #333333; border-bottom:14px solid #333333; display:none;"><table border="0" width="'+sgFrameWidth+'" cellspacing="0" cellpadding="0"><tr><td><table border="0" cellspacing="0" cellpadding="0" height="36px"><tr><td bgcolor="#333333" id="dragbar" style="cursor:hand; cursor:pointer"></td><td align="right" bgcolor="#333333" id="dragbar" style="cursor:hand; cursor:pointer"><div style="height:20px;text-align:right;"><a href="#" onClick="hidebox();return false" style="color:#000000;"><img style="display:inline" src="'+nonSecurePath+'/img/surveygizmo/btn_close.gif" height="16" width="50" border="0"></a></div></td></tr><tr><td colspan="2"><div id="putFrame"></div></td></tr></table></td></tr></table></td></tr></table></div>';

sgD1.innerHTML=_sgdi;
document.body.appendChild(sgD1);

if(sgPageID == "8348"){
	if(Math.floor(Math.random()*20) ==1)
 	{ 
    sgUpdateState("www.surveygizmo.com/s3*828678*d79dab51e94d|Config_Summary|17|122|15|12","PageName=Config_Summary~TID=0~PID="+sgPageID+"_"+sgPageLocale);
    sgran = true;
    showbox();
 	}
}else{

	if(Math.floor(Math.random()*300) ==1)
	 { 
		sgUpdateState("www.surveygizmo.com/s3*828678*d79dab51e94d|Random|17|14|15|12","PageName=Random_Survey~TID=0~PID="+sgPageID+"_"+sgPageLocale);
		sgran = true;
		//showbox();
	 }
}
 
adjustSgFrame();
}

function sgShowImgLink(){
		if (document.body == null) {
			setTimeout(sgShowImgLink,1000);
			return;
		}		
		var d=document.createElement("div");
		//d.outerHTML='<div style="background-color:red;width:100px;height:100px"></div>'
		d.id="sgcss";
		d.style.zIndex="1000";
		
		try{
				var fileref=document.createElement("link");
				fileref.setAttribute("rel", "stylesheet");
				fileref.setAttribute("type", "text/css");
				fileref.setAttribute("href", "/css/t/sgizmo.css");
				document.getElementsByTagName("head")[0].appendChild(fileref);
				d.className="sgcssIe7";
			}
			catch(e)
			{

			}
				
		var _di="";
		var brows=(brows=="moz")?"pointer":"hand"; //should sniff, later, but this works.
		
		_di+='<div onclick="showbox(\'trkGloablFeedBkSurvey\');" style="cursor:pointer;position:fixed;_position:absolute;right:20px;bottom:19px;z-index:1000;" id="gizmoS"><img src="'+nonSecurePath+'/img/surveygizmo/feedback_icon.gif" onload="setOverSrc(this);"></div>';	
		d.innerHTML=_di;
		document.body.appendChild(d);
	
		var msie = navigator.appVersion.split("MSIE");
		var ieVersion = parseFloat(msie[1]);
		var ie6OrLower = (!isNaN(ieVersion) && ieVersion<=6);

		//d.style.position='fixed';//removing for the fix for bluetooth
		if(ie6OrLower){
			//d.style.position='absolute';//removing for the fix for bluetooth
			d.className="sgcssIe6";
		}

}

function addLoadEvent(func) {
	var oldonload = window.onload;
		if (typeof window.onload != 'function') {
			window.onload = func;
		} else {
			//Start of SR 19660
			var sgInitId = $('crmEngine').getAttribute('pageid');
			if(sgInitId==499)
			{
				func();
			}
			//End of SR 19660
			window.onload = function() {
			oldonload();
			func();
		}
	}
}

function O_LC(){
	showbox();
	};


function sgAddLoadEvents(){
	
	//Starting Conditions for Pages that can't do load event
	var gizmoPid = $('crmEngine').getAttribute('pageid')
	if(gizmoPid == 16677 || gizmoPid == 16602){
		sgShowImgLink();
	}else{
		addLoadEvent(sgShowImgLink);	
	}
}

addLoadEvent(sgInit); // addloadevent b/c dom isn't ready to add the element.
window.onresize=adjustSgFrame;
sgShowImgLink();
//addLoadEvent(sgShowImgLink);
//setTimeout(sgAddLoadEvents,2000);