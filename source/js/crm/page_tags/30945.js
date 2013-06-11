// **** PAGE 30945 START **** 

crmBuildInfo(1,1356022791640);
// Tag for GENERICTAGGING
if(typeof(jQuery)!="undefined") {jQuery.extend(genTag,{"siteSection":"Microsite"});
jQuery.extend(genTag,{"pageName":"2014_Q50_Micro"});
jQuery.extend(genTag,{"model":"2014_Q50"});
}
function crmEvent30() { coreEvent30.apply(null, crmMarshallEventParams(crmEvent30, coreEvent30) ); }
function coreEvent30(tool) {
try {
crmDebug(coreEvent30);

// Tag for OMNITURE
omnFlushObj();
s.channel="Q50_Micro";
s.prop7="2014_Q50";
s.prop10="2014_Q50_Micro_UpdateMe_Share";
s.prop13="Pre-Launch_Microsite";
s.prop14="2014_Q50_Micro.UpdateMe";
s.prop15="2014_Q50_Micro.UpdateMe.Share";
s.prop16="2014_Q50_Micro.UpdateMe.Share." + tool;
s.prop18="HTML";
s.prop19="Microsite";
s.prop20="2014_Q50_Browse";
s.prop24="Q50_Micro";
s.prop28=crmGetVID();
s.prop30="18205";
s.prop31="English";
s.prop48="Q50_Micro_Share";
s.prop49=(crmGetCookie(crmZipCode) != null);
s.eVar1="Share";
s.hier2="2014_Q50.Microsite.2014_Q50_Micro.UpdateMe.Share." + tool;
s.hier3="Microsite.2014_Q50_Micro.UpdateMe.Share." + tool + ".2014_Q50";
eventArray = [];
eventArray.push("event45");
s.events=eventArray.join(',');
s.pageName="2014_Q50_Micro_UpdateMe_Share_" + tool;
pingOmn();

} catch (err) { crmDebug('crmEvent30 Failed: \n\n' + err);}
}

function crmEvent40() { coreEvent40.apply(null, crmMarshallEventParams(crmEvent40, coreEvent40) ); }
function coreEvent40(placement) {
try {
crmDebug(coreEvent40);

// Tag for OMNITURE
omnFlushObj();
s.channel="Q50_Micro";
s.prop7="2014_Q50";
s.prop10="2014_Q50_Micro_UpdateMe_Form";
s.prop13="Pre-Launch_Microsite";
s.prop14="2014_Q50_Micro.UpdateMe";
s.prop15="2014_Q50_Micro.UpdateMe.Form";
s.prop16="2014_Q50_Micro.UpdateMe.Form";
s.prop18="HTML";
s.prop19="Microsite";
s.prop20="2014_Q50_Browse";
s.prop24="Q50_Micro";
s.prop28=crmGetVID();
s.prop30="18174";
s.prop31="English";
s.prop35="2014_Q50_Micro_UpdateMe_Form.";
s.prop40=placement;
s.prop48="Q50_Micro_UpdateMe_Form";
s.prop49=(crmGetCookie(crmZipCode) != null);
s.eVar34="2014_Q50_Update_Me";
s.hier2="2014_Q50.Microsite.2014_Q50_Micro.UpdateMe.Form";
s.hier3="Microsite.2014_Q50_Micro.UpdateMe.Form.2014_Q50";
eventArray = [];
eventArray.push("scAdd");
s.events=eventArray.join(',');
s.pageName="2014_Q50_Micro_UpdateMe_Form";
pingOmn();

} catch (err) { crmDebug('crmEvent40 Failed: \n\n' + err);}
}

function crmEvent41() { coreEvent41.apply(null, crmMarshallEventParams(crmEvent41, coreEvent41) ); }
function coreEvent41(formError) {
try {
crmDebug(coreEvent41);

// Tag for OMNITURE
omnFlushObj();
s.channel="Q50_Micro";
s.prop7="2014_Q50";
s.prop10="2014_Q50_Micro_UpdateMe_Error";
s.prop13="Pre-Launch_Microsite";
s.prop14="2014_Q50_Micro.UpdateMe";
s.prop15="2014_Q50_Micro.UpdateMe.Error";
s.prop16="2014_Q50_Micro.UpdateMe.Error";
s.prop18="HTML";
s.prop19="Microsite";
s.prop20="2014_Q50_Browse";
s.prop24="Q50_Micro";
s.prop28=crmGetVID();
s.prop30="18175";
s.prop31="English";
s.prop35="2014_Q50_Micro_UpdateMe_Error." + formError;
s.prop48="Q50_Micro_UpdateMe_Form";
s.prop49=(crmGetCookie(crmZipCode) != null);
s.eVar34="2014_Q50_Update_Me";
s.hier2="2014_Q50.Microsite.2014_Q50_Micro.UpdateMe.Error";
s.hier3="Microsite.2014_Q50_Micro.UpdateMe.Error.2014_Q50";
eventArray = [];
eventArray.push("scRemove");
s.events=eventArray.join(',');
s.pageName="2014_Q50_Micro_UpdateMe_Error";
pingOmn();

} catch (err) { crmDebug('crmEvent41 Failed: \n\n' + err);}
}

function crmEvent42() { coreEvent42.apply(null, crmMarshallEventParams(crmEvent42, coreEvent42) ); }
function coreEvent42() {
try {
crmDebug(coreEvent42);

// Tag for OMNITURE
omnFlushObj();
s.channel="Q50_Micro";
s.zip=crmGetZipCode();
s.prop7="2014_Q50";
s.prop10="2014_Q50_Micro_UpdateMe_Confirm";
s.prop13="Pre-Launch_Microsite";
s.prop14="2014_Q50_Micro.UpdateMe";
s.prop15="2014_Q50_Micro.UpdateMe.Confirm";
s.prop16="2014_Q50_Micro.UpdateMe.Confirm";
s.prop18="HTML";
s.prop19="Microsite";
s.prop20="2014_Q50";
s.prop24="Q50_Micro";
s.prop28=crmGetVID();
s.prop29=crmGetSafeValue(crmGetCookie(crmLeadId), 'cookies_disabled');
s.prop30="18176";
s.prop31="English";
s.prop35="2014_Q50_Micro_UpdateMe_Confirm.";
s.prop48="Q50_Micro_UpdateMe_Confirm";
s.prop49=(crmGetCookie(crmZipCode) != null);
s.eVar1="Optin";
s.eVar20=crmGetZipCode();
s.eVar34="2014_Q50_Update_Me";
s.hier2="2014_Q50.Microsite.2014_Q50_Micro.UpdateMe.Confirm";
s.hier3="Microsite.2014_Q50_Micro.UpdateMe.Confirm.2014_Q50";
eventArray = [];
eventArray.push("event6");
eventArray.push("scCheckout");
s.events=eventArray.join(',');
s.pageName="2014_Q50_Micro_UpdateMe_Confirm";
pingOmn();

// Tag for DOUBLECLICK
pingDoubleclick("campa657","l53hm670","u1=true;");
} catch (err) { crmDebug('crmEvent42 Failed: \n\n' + err);}
}

// **** PAGE 30945 END ****
