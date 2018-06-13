$(document).ready(function() {
    var i18n = {
        "en": {},
        "fr": {}
    }
    i18n['en']['cook_it'] = "Connect it with..."
    i18n['fr']['cook_it'] = "Connecter avec..."
    i18n['en']['integration_not_available'] = "This integration is not yet available, but we've been looking at it closely. Enter your email and vote for it so we can unlock it"
    i18n['fr']['integration_not_available'] = "Ce connecteur n'est pas encore intégré, mais nous y avons déjà regardé de près. Entrez votre email et votez pour que nous le débloquions"

    i18n['fr']['addconnector'] = 'http://surycat.com/fr/jouer-avec-surycat/connecteurs/proposer-un-connecteur.html'
    i18n['en']['addconnector'] = 'http://surycat.com/en/?option=com_content&view=article&id=9&Itemid=134'

    i18n['fr']['kitchenlab'] = 'http://surycat.com/fr/jouer-avec-surycat/kitchen-lab.html'
    i18n['en']['kitchenlab'] = 'http://surycat.com/en/play-with-surycat/kitchen-lab.html'

    if ( window.location.pathname.search('/fr/') == 0) { lg_bis = 'fr'} else { lg_bis='en'}
    var lg
    lg = 'en'
    /* remove joomla whitespace*/
    $('.connector-list').text('');
    var disabled_class = "uk-panel-box-secondary"
    function widgetize(title, subtitle, info, disabled, ico_path, href) {
        var widget;
        widget = $('<div>').addClass('');
        link = $('<a class="uk-panel uk-panel-hover cx-widget">')
        if (href != "") {
            link.attr('href', href)
        }
        if (disabled === true) {
            link.addClass(disabled_class)
        }
        link.append($('<div style="background-image:url(\'./images/kitchenlab/' + ico_path + '\')" alt="' + title + '" class="cx-logo draggable">'))
        link.append($('<h3 class="uk-panel-title">').text(title))
        link.append(subtitle)
        widget.attr('data-search', title.toLowerCase() + ' ' + subtitle.toLowerCase())
        widget.attr('data-info', info)
        widget.append(link)
        return widget
    }
    console.log('tototo')
    var kitchen_link = $('<a href="'+ i18n[lg_bis]['kitchenlab'] +'" class="uk-button uk-button-primary">').text(i18n[lg]['cook_it'])
    function connectize() {
        $.each(bigarr, function(index, value) {
            arr = value
            title = arr['title']
            subtitle = arr[lg]['subtitle']
            ico_path = arr['ico']
            disabled = arr['disabled']
            href = arr['link']
            info = arr[lg]['info']
            $('.connector-list').append(widgetize(title, subtitle, info, disabled, ico_path, href))
        })
    }
    
    /* Show inline content (info or vote-for-it) */
    /*$(document).on('click', '.cx-widget', function() {
        $('.inline').remove()
        box_width = $(this).parent().outerWidth()
        row = 1 + Math.round(($(this).parent().offset().top - $('.store').offset().top) / box_width)
        nb_box_per_row = Math.round($('.store').width() / box_width)
        last_of_row = $('.store :nth-child(' + row * nb_box_per_row + ')')
        last_of_row.after($('<div>').addClass('uk-width-1-1 inline'))
        if ($(this).hasClass(disabled_class) === true) {
            $('.inline').text(i18n[lg]['intergation_not_available'])
        } else {
            $('.inline').append($('<p>').text($(this).parent().attr('data-info')).append(kitchen_link))
        }
    })*/
    bigarr.push({
        "title": "Add a connector",
        "ico": "plus.png",
        "en": {
            "subtitle": "click to add a connector",
            "trig_label": "",
            "act_label": "",
            "info": ""
        },
        "disabled": false,
        "link": i18n[lg_bis]['addconnector']
    })
    connectize()
    
    /* Search fx - veeeery short */
    $('.search ').keyup(function() {
        var valThis = $(this).val().toLowerCase();
        if (valThis != "") {
            $('.store>div:not([data-search*="' + valThis + '"])').hide();
            $('.store>div[data-search*="' + valThis + '"]').show();
        } else {
            $('.store>div').show();
        }
    });


    $( ".draggable" ).draggable({
      revert: true,
      helper: "clone",
      appendTo: "body"
    });
    $( ".droppable" ).droppable({
      accept: ".draggable",
      drop: function( event, ui ) {
        console.log($(ui.helper).css('background-image'))
        $(this).css('background-image',$(ui.helper).css('background-image'))
      }
    });
});