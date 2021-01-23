$( function() {
    $( "#accordion" ).accordion({
        collapsible: true,
        active: true,
        heightStyle: 'content',
        header: '> .ages-item > .age-number'
    });
} );