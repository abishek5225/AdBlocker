chrome.webNavigation.onCommitted.addListener(function (tab){
    //prevent script from running when other frames load
    if(tab.frameId == 0){
        chrome.tabs.query({
            activate:true,
            lastFocusedWindow: true,
        },
        (tabs)=>{
               //get the url of webpage
               let url= tabs[0].url;
               //remove unnecessary protocol definitions and www subdomain from the URL
               let parsedUrl=url.replace("https://","")
               .replace("http://","")
               .replace("www.","") 

               //removing path and queries because we only want base domain
               let domain=parsedUrl.slice(0,parsedUrl.indexOf('/') == -1? parsedUrl.length : parsedUrl.indexOf('/'))
               .slice(0, parsedUrl.indexOf('?') == -1 ? parsedUrl.length : parsedUrl.indexOf('?'))

               try{
                if(domain.length<1 || domain === null || domain===undefined){
                    return;
                }else if(domain == "linkedin.com"){
                    runLinkedinScript();
                    return;
                }
               }catch(err){
                throw(err);
               }
               
            }
        )
    }
})

function runLinkedinScript(){
    //inject from file into the webpage
    chrome.tabs.executeScript({
        file: 'linkedin.js'
    })
    return true;
}