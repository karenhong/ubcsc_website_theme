jq$(document).ready(function() {
    var forumUpdatesDiv = jq$('.WaGadgetForumUpdates.gadgetStyle002');

    jq$(forumUpdatesDiv).each(function(){
        var contentDivColor = jq$(this).css('background-color');
        if(contentDivColor != undefined || contentDivColor != 'transparent'){
            var rgba = contentDivColor.replace(')', ', 0.60)').replace('rgb', 'rgba');
            jq$(this).css('background-color',rgba);
    }
    });
});