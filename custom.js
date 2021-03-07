<script type="text/javascript">
    $(function() { 
        if(!$('.WaGadgetUpcomingEvents').size()) {
            return;
        }
        $('.WaGadgetUpcomingEvents a:contains("(session")').each(function() {
            var text = $(this).html();
            var match = text.match(/\(session (\d) of (\d)\)/);
            var sessionNumber = match[1];
            var sessionTotal = match[2];
            if (sessionNumber == 1) {
                var newText = text.replace(/session[\w\s]+/, sessionTotal + " sessions");
                $(this).html(newText); 
            } else {
                $(this).parent().parent().hide();
                // TODO: If we've removed all list items, display the empty list message
                // $(this).parent().parent().html('<div class="title">No upcoming events</div>'); 
            }
        });
    });
</script>

$(function() { 
    if(!$('.WaGadgetUpcomingEvents').size()) {
        return;
    }
    let notEmpty = false;
    $('.WaGadgetUpcomingEvents a').each(function() {
        if (!$(this).contains("(session")) {
            notEmpty = true;
        }
        
        var text = $(this).html();
        var match = text.match(/\(session (\d) of (\d)\)/);
        var sessionNumber = match[1];
        var sessionTotal = match[2];
        if (sessionNumber == 1) {
            var newText = text.replace(/session[\w\s]+/, sessionTotal + " sessions");
            $(this).html(newText); 
            notEmpty = true;
        } else {
            $(this).parent().parent().hide();
        }
    });
    // TODO: If we've removed all list items, display the empty list message
    if (!notEmpty) {
        $('.WaGadgetUpcomingEvents div:last').html('<div class="title">No upcoming events</div>');
        // $(this).parent().parent().html('<div class="title">No upcoming events</div>'); 
    }
});


<script>
if ($(".monthButtonLabel").length >0) {
    setEventBackground("sailing-beginner", "#76ADBC");
    setEventBackground("sailing-intermediate", "E8E288");
    setEventBackground("sailing-advanced", "#6B2D5C");
    setEventBackground("sailing-cat", "#6B2D5C");
    setEventBackground("windsurfing", "#E8E288");
    setEventBackground("kayaking", "#FF8360");
    setEventBackground("sup", "#084C61");
} 
function setEventBackground(tagName, bgcolor) {
$( "a[data-tags*='" + tagName + "']")
.parent().css("background-color", bgcolor).parent().find(".eventTime").parent().css("background-color", bgcolor);
}
</script>


// DB3A34