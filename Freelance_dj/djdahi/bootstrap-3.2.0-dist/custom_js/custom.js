$('[data-toggle="tooltip"]').tooltip({
    'placement': 'bottom'

});
$('[data-toggle="tooltipone"]').tooltip({
    'placement': 'top'

});
$('[data-toggle="tooltiptwo"]').tooltip({
    'placement': 'right'

});
$('[data-toggle="popover"]').popover({
    trigger: 'hover',
        'placement': 'top'
});

$(document).ready(function(){
    $("a").tooltip();
});


