function ModifiersInit(container){
    $(container).find('input[type="checkbox"]').change(function() {
        if($(this).attr('data-questionnaire') == 1){
            if($(this).prop('checked')==1){
                $.fancybox.open({
                    src  : '/twa/modifiers/questionnaire/'+$(this).prop('value'),
                    type : 'iframe',
                    width: 500,
                    height: 540,
                    opts : {
                        width:'600',
                        afterShow : function( instance, current ) {
                            console.info( 'done!' );
                        }
                    }
                });
            }
        }
    });
}


function TWA_Lightbox(url){

}
