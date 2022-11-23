// import * as MODEL from "./model-module.js";

import { updateView, fn } from "./model-module.js";

function initListeners () {
    $("nav a").click(function (e) {
        //This stores the id from the anchor tag
        let aID = e.currentTarget.id;
        let contentID = aID + "Content";


        updateView(contentID);
        console.log(fn)
        
    });
}

$(document).ready(function () {
    initListeners();
    updateView("homeContent");
}); 
