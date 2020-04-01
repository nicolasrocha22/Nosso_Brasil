function iframeHeight() {
    let iframe = document.getElementById("map");
    
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}