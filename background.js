chrome.webNavigation.onCommitted.addListener(function (tab){
    //prevent script from running when other frames load
    if(tab.frameId == 0){
        chrome.tabs.query({
            activate:true,
            lastFocusedWindow: true,
        },
        tabs=>{
                
            }
        )
    }
})