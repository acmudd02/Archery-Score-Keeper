$(document).ready(function() {
$("input:radio").hover(function(){
        $(this).prop('checked', true);
}, function(){
        $(this).prop('checked', false);
    }).click(function(){
    $("input:radio").unbind('mouseenter mouseleave')
    $(this).prop('checked', true);
});
});
