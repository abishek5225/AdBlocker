chrome.webNavigation.onCommitted.addListener(function (tab){
    //prevent script from running when other frames load
    if(tab.frameId == 0){
        chrome.tabs.query({
            activate:true,
            lastFocusedWindow: true,
        },
        tabs=>{
               //get the url of webpage
               let url= tabs[0].url;
               //remove unnecessary protocol definitions and www subdomain from the URL
               let parsedUrl=url.replace("https://","")
               .replace("http://","")
               .replace("www.","") 
            }
        )
    }
})