function ShowLoader(){
    $('body').append('<div class="CommonLoader"></div>');
}
function HideLoader(){
    $('.CommonLoader').remove();
}

function ShowMessage(Title,Text){
    $.fancybox.open('<div class="message"><h2>'+Title+'</h2><p>'+Text+'</p></div>');
}

function ShowIframe(link,maxwidth){
    $.fancybox.open({
        src  : link,
        type : 'iframe',
        opts : {
            iframe:{
                css:{
                    width: maxwidth,
                }
            },
        }
    });
}



function ShowIframeCMSForm(link,maxwidth,entityFieldID){
    $.fancybox.open({
        src  : link,
        type : 'iframe',
        scrolling : 'yes',
        opts : {
            iframe:{
                preload : false,
                css:{
                    width: maxwidth,
                }
            },
            baseClass: "transparent",
            beforeClose : function( instance, current ) {
                ShowFieldLoader($('#select-field-'+entityFieldID));
                $.post('/cms/form/field/'+entityFieldID,{ },function(data){
                    $('#select-field-'+entityFieldID).replaceWith(data);

                    $('#select-field-'+entityFieldID+' .ui.dropdown').dropdown({
                        clearable: true,
                    });

                })
            }
        }
    });
}


function InitializeMenu(){

}




function closeFancyBox()
{
    parent.jQuery.fancybox.getInstance().close();
}



var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
}



function InitializeHeaderScroll(){
    var scroll_start = 0;
    var scrollAmount = $(document).scrollTop() / 4;

    $('header').css({ 'transform':'translateY('+scrollAmount+'px)', 'transition':'0s all' })
    $('.content-header .title').css({ 'transform':'translateY(-'+(scrollAmount * 2)+'px)', 'transition':'0s all', 'opacity' : (100 - (scrollAmount*2))/100 })
}



function ShowConfirmation2title(title,html,btnaction){
    $('body').append('<div id="confirmation_modal" class="modal"><div class="modal-content"><h4>'+title+'</h4><p>'+html+'</p></div><div class="modal-footer"><a href="#!" onclick="eval('+btnaction+')" class="modal-close waves-effect waves-green btn-flat">Agree</a></div></div');
    $('#confirmation_modal').modal({
        onCloseEnd: function(){ $('#confirmation_modal').remove(); }
    });
    $('#confirmation_modal').modal('open');
}

function ShowConfirmation(title,html,btnaction){

    $('body').append('<div class="ui small basic test modal transition confirmation"><div class="ui icon header"><i class="fas fa-question-circle icon"></i>'+title+'</div><div class="content center aligned"><p class="item text-center">'+html+'</p></div><hr class="line white"><div class="actions"><div class="ui red basic cancel inverted button"><i class="remove icon"></i>No</div><div class="ui green ok inverted button"><i class="checkmark icon"></i>Yes</div></div></div>');
    $('.ui.modal.confirmation')
        .modal({
            closable  : false,
            onDeny    : function(){
            },
            onApprove : function() {
                eval(btnaction);
            },
            onHidden: function(){
                $('.ui.modal.confirmation').remove();
            }
        })
        .modal('show');
}



function ShowToast(title, type){

    var bgcolor;
    if(type === "success"){
        bgcolor = "rgba(57,154,127,1)";
    }else if(type === "error"){
        bgcolor = "rgba(220,0,0,1)";
    }

    var newtype = false;
    if(type == "error"){ newtype = type; }
    $('body')
        .toast({
            title: type,
            message: title,
            class: newtype,
            displayTime: 5000,
            showProgress: 'bottom'
        });
}


function formSelectChange(field,value){
    try {
        value = "value_"+value.split(" ").join("_");
        $( "div[data-triggered-" + field + "='true']").addClass('hidden');
        $( "div[data-triggered-" + field + "='true']."+value).removeClass('hidden');
        FormFieldUpdate();
    } catch (error) {

    }
}



function formChangeDate(date) {
    var newdate = date.split("/").reverse().join("-");
    return newdate;

}


function FormDropzone_removeImage(elem) {
    var obj = JSON.parse(decodeURIComponent($('#'+elem.attr('attr-fieldname')+'_multi').val()));


    var newArray = [];
    Object.keys(obj).forEach(key => {
        if(elem.attr('attr-image') != obj[key]){
            newArray.push(obj[key])
            // alert(obj[key]);
        }
        // console.log(key, obj[key]);
    });
    $('#'+elem.attr('attr-fieldname')+'_multi').val(encodeURIComponent(JSON.stringify(newArray)));
    elem.parent().remove();

}




function JsonBuilderClone(elem,fieldname){
    $(elem).parents('.json-parent').find('.json-row:last').clone().appendTo('.json-parent-'+fieldname+' .json-clone-area tbody').addClass('json-builder-cloned').find('input[data-incremental!=true]').val('');
    $('.json-builder-cloned').find('input[data-incremental=true]').each(function(index,elem){
        $(elem).val(parseInt($(elem).val())+1);
        // console.log();
    });
    //re-initialize the dropdown menu
    $('.json-builder-cloned .ui.dropdown.upwards').dropdown({
        clearable: true,
        direction: 'upward'
    });
    $('.json-builder-cloned .ui.dropdown.upwards').dropdown('clear');

    $('.json-builder-cloned').removeClass('json-builder-cloned');

    reIndexJsonBuilder();
}

function reIndexJsonBuilder(event , data){
    $('.counter-value').each(function(index , elem){
        $(elem).find('.loop').text(index+1);
    });
}



function CountdownSeconds(elem,script){
    var val = parseInt($(elem).text());
    val = val - 1;
    $(elem).text(val);
    if(val === 0){
        eval(script);
    }
}


function ShowFieldLoader(target){
    $(target).append('<div class="ui active inverted dimmer"><div class="ui mini text loader">Loading</div></div>')
}

function HideFieldLoader(target){
    $(target).find('.ui.loader').parent().remove();
}



function InitiateFieldLangGroup(){
    $('.field-group-lang').find('.field.toggle').hide();
    $('.field-group-lang').each(function(index,elem){
      $(this).find('.langs').find('a').first().click();
    })
}

function InitializeCopiable(){
    $('.copiable').click(function(){
        CopyMe($(this).text());
    });
}

function CopyMe(TextToCopy) {
    var TempText = document.createElement("input");
    TempText.value = TextToCopy;
    document.body.appendChild(TempText);
    TempText.select();

    document.execCommand("copy");
    document.body.removeChild(TempText);

    // alert("Copied the text: " + TempText.value);
    ShowToast("Successfully copied to clipboard", "success")
}


function InitiatePanelAccordion(){
    $('.panel.accordion').css({ 'min-height':0 });
    $('.panel.accordion').find('.panel-content').slideUp();
    $('.panel.accordion').click(function(){
      $(this).find('.panel-content').slideToggle();
    });

    $('.panel-accordion .panel').css({ 'min-height':0 });
    $('.panel-accordion').find('.panel-content').slideUp();
    $('.panel-accordion .panel-title').click(function(){
      $(this).toggleClass('expanded');
      $(this).parents('.panel, .panel-v2, .panel-v3').find('.panel-content').slideToggle();
    });
}


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function initializeComponents(){
    InitializeMoreMenu();
    $('.ui.checkbox').checkbox();
    $('select.dropdown:not(.upwards)').dropdown();
    $('select.dropdown.upwards').dropdown({
        direction: 'upward',
        clearable: false
    });

    $('.ui.dropdown.upwards.right').dropdown({
        clearable: true,
        fullTextSearch : true,
        direction: 'upward'
    });
    $('.ui.dropdown.upwards:not(.left)').dropdown({
        clearable: true,
        direction: 'upward'
    });
    $('.ui.dropdown:not(.upwards):not(.notclearable)').dropdown({
        clearable: true,
        fullTextSearch : true

    });
    $('.ui.dropdown.notclearable:not(.upwards)').dropdown({
    });
    $('.dropdown-menu .dropdown:not(.upwards)').dropdown({
        action: 'hide',
        clearable: true,
        fullTextSearch : true
    });


    $("#nav-search input").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $('.nav.main ul li').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $('.menu-toggle').click(function(){
        if($('body').hasClass('menu-collapsed')){
            setCookie('cms_menu_toggle','0',365);
        }else{
            setCookie('cms_menu_toggle','1',365);
        }
        $('body').toggleClass('menu-collapsed');
    })

    $('.browse')
        .popup({
            popup : $('.custom.popup'),
            on    : 'click',
            position   : 'bottom center',
            setFluidWidth: true
        })
    ;

    $('.custom-popup').each(function(){
        $(this)
            .popup({
                popup : $($(this).attr('data-target')),
                on    : 'click',
                position   : 'bottom right',
                inline:true,
                setFluidWidth: true,
                onShow : function(){ $(this).parents('td.operations').addClass('active'); },
                onHide : function(){ $(this).parents('td.operations').removeClass('active'); },

            })
        ;
    })

}


function AttemptLinkingStore(fieldClass){
    if($('select[name="ecom_stores_id"]').length > 0){
        $('.'+fieldClass).addClass('disabled');
        $('.'+fieldClass).parents('.select-container').css({ 'visibility' : 'visible', 'position':'absolute', 'transform': 'scale(0)'});
    }
    $('select[name="ecom_stores_id"]').change(function(){
        $('.'+fieldClass).dropdown('set value', $(this).val());
    })
}

function slugify(str)
{
    str = str.replace(/^\s+|\s+$/g, '');

    // Make the string lowercase
    str = str.toLowerCase();

    // Remove accents, swap ñ for n, etc
    var from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
    var to   = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    // Remove invalid chars
    str = str.replace(/[^a-z0-9 -]/g, '')
        // Collapse whitespace and replace by -
        .replace(/\s+/g, '-')
        // Collapse dashes
        .replace(/-+/g, '-');

    return str;
}

function FillSlug(targetField){
    var fieldname = "label";
    var value = "";
    if($('input[name="label_en"]').length == 1){
        fieldname = "label_en";
    }
    $('input[name='+fieldname+']').keyup(function(){
       value = slugify($(this).val());
        $(targetField).val(value);
    });

}


function InitializeMoreMenu(){
    $('.has-submenu').parent().find('.has-submenu').parent().addClass('expandable');
    $('.has-submenu').parent().find('li.expandable').click(function(){
        if($(this).hasClass('expanded')){
            $('.has-submenu').parent().find('li.expandable.expanded').removeClass('expanded');
        }else{
            $('.has-submenu').parent().find('li.expandable.expanded').removeClass('expanded');
            $(this).addClass('expanded');
        }

    });
}

function CMSSearch(source, search) {
    source = JSON.parse(source);
    var results = [];
    var index;
    var entry;
    var html = '';
    search = search.toUpperCase();
    for (index = 0; index < source.length; ++index) {
        entry = source[index];
        if (entry && entry.label && (entry.label.toUpperCase().indexOf(search) !== -1 || entry.tree.toUpperCase().indexOf(search) !== -1)) {
            results.push(entry);
        }
    }
    if(results.length > 0){
        for (index = 0; index < results.length; ++index) {
            html += '<a href="'+results[index]['link']+'">'+results[index]['tree']+'</a>';
        }
    }else{
        html = '<div class="text grey">no results found</div>';
    }

    return html;
}

var MenuSearchLock = 1;

function InitializeCMSSearch(json) {
    $('nav.main .middle input').focus(function () {
        MenuSearchLock = 0;
        $(this).parents('.middle').find('.search-results').show();
    })
    $('nav.main .middle input').blur(function () {
        MenuSearchLock = 1;
        setTimeout(function () {
            $('nav.main .middle .search-results').hide();
        }, 200);
    })


    $('nav.main .middle input').on('keydown', function (e) {
        if(e.keyCode == 13){
            window.location=$("nav.main .middle .search-results a.active").prop('href');
            return false;
        }
        if (e.keyCode == 40) {
            if($("nav.main .middle .search-results a.active").next('a').length > 0){
                $("nav.main .middle .search-results a.active").last().removeClass('active').next('a').addClass('active');
                $("nav.main .middle .search-results .content").stop().scrollTo($("nav.main .middle .search-results a.active"));
            }
            return false;
        }
        if (e.keyCode == 38) {
            if($("nav.main .middle .search-results a.active").prev('a').length > 0){
                $("nav.main .middle .search-results a.active").first().removeClass('active').prev('a').addClass('active');
                $("nav.main .middle .search-results .content").stop().scrollTo($("nav.main .middle .search-results a.active"));
            }
            return false;
        }

        $(this).parents('.middle').find('.search-results .header').html("searchig for: <b>" + $(this).val() + "</b>");
        $(this).parents('.middle').find('.search-results .content').html(CMSSearch(json, $(this).val()));


        var valThis = $(this).val().toLowerCase();
        var length = $(this).val().length;

        $("nav.main .middle .search-results .content a").each(function() {
            var text = $(this).html(),      // ***
                textL = text.toLowerCase(),
                index = textL.indexOf(valThis);         // ***

            if (index !== -1) {
                var htmlR = text.substr(0, index) + '<span>' + text.substr(index, length) + '</span>' + text.substr(index + length); // ***
                $(this).html(htmlR).show()
            }
        });


        $(this).parents('.middle').find('.search-results .content a').removeClass('active');
        $(this).parents('.middle').find('.search-results .content a').first().addClass('active');
        $(this).parents('.middle').find('.search-results .content a').mouseover(function () {
            $(this).parents('.middle').find('.search-results .content a').removeClass('active');
            $(this).addClass('active');
        });

    })


}
