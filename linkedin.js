function removeAds(){
    
    let spans= document.getElementsByTagName("span");
    for(let i=0; i< spans.length;i++){
        if(spans[i].innerHTML === "Promoted"){

            let card = spans[i].closest(".fie-impression-container");

            if(card === null){
                let j=0;
                card= spans[i];
                while(j<6){
                    card=card.parentNode;
                    ++j;
                }
            }
            card.setAttribute("style", "display: none !important;");
        }
    }
}
removeAds();

setInterval(function(){
    removeAds();
},100)