var filter = "win16|win32|win64|mac";
if(navigator.platform){
    if(0>filter.indexOf(navigator.platform.toLowerCase())){
        window.location.href = "mobile.html";
    } else{
        window.location.href = "index.html";
}

/*var mobile = (/iphone|ipad|android|blackberry|mini|windowssce|palm/i.test(navigator.userAgent.toLowerCase()));
if (mobile) {
    window.location.href = "mobile.html";
} else {
    window.location.href = "index.html";
}*/