


    function refreshContent(elem){
        var url =  elem.attr('data-url');

        $.ajax({
            type: "GET",
            url: url,
            success: function (data) {
                elem.html(data);
                elem.addClass('content-loaded');
                console.log("loaded");
            }});



    }

    function refreshContents(){
        $(".refreshable-content:not(.content-loaded)").each(function(index , elem){
            refreshContent($(elem));
        });
    }




