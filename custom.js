<script type="text/javascript">
    $(function() { 
        let numEvents = $('.WaGadgetUpcomingEvents').size()
        if(!numEvents) {
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
                if (numEvents) {
                    $(this).parent().parent().hide();
                    numEvents--;
                } else {
                    $(this).parent().parent().html('<div class="title">No upcoming events</div>');
                } 
            }
        });
    });
</script>

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