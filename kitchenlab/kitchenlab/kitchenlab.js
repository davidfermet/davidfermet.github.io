!
function(a) {
    function f(a, b) {
        if (!(a.originalEvent.touches.length > 1)) {
            a.preventDefault();
            var c = a.originalEvent.changedTouches[0],
                d = document.createEvent("MouseEvents");
            d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d)
        }
    }
    if (a.support.touch = "ontouchend" in document, a.support.touch) {
        var e, b = a.ui.mouse.prototype,
            c = b._mouseInit,
            d = b._mouseDestroy;
        b._touchStart = function(a) {
            var b = this;
            !e && b._mouseCapture(a.originalEvent.changedTouches[0]) && (e = !0, b._touchMoved = !1, f(a, "mouseover"), f(a, "mousemove"), f(a, "mousedown"))
        }, b._touchMove = function(a) {
            e && (this._touchMoved = !0, f(a, "mousemove"))
        }, b._touchEnd = function(a) {
            e && (f(a, "mouseup"), f(a, "mouseout"), this._touchMoved || f(a, "click"), e = !1)
        }, b._mouseInit = function() {
            var b = this;
            b.element.bind({
                touchstart: a.proxy(b, "_touchStart"),
                touchmove: a.proxy(b, "_touchMove"),
                touchend: a.proxy(b, "_touchEnd")
            }), c.call(b)
        }, b._mouseDestroy = function() {
            var b = this;
            b.element.unbind({
                touchstart: a.proxy(b, "_touchStart"),
                touchmove: a.proxy(b, "_touchMove"),
                touchend: a.proxy(b, "_touchEnd")
            }), d.call(b)
        }
    }
}(jQuery);
$(document).ready(function() {
    function update_slider() {
        pos = (parseInt($('.storeslider').css('left'), 10)) / ($('.storesliderholder').width() - $('.storeslider').width() - 10);
        pos = Math.round(pos * 200) / 200;
        storeleft = ($('.store').children(':visible').length * $('.connector').width() - $('.storeholder').width()) * pos;
        storeleft = -storeleft + "px";
        $('.store').css('left', storeleft);
    };
    
    function iconize() {
        $.each(bigarr, function(index, value) {
            arr = value
            title = arr['title']
            lg='en'
            subtitle = arr[lg]['subtitle']
            ico_path = arr['ico']
            trig_label = arr[lg]['trig_label']
            act_label = arr[lg]['act_label']

            var cx = $('<div class="connector">')
            cx.append($('<div class="ico">').css('background-image', 'url(/images/kitchenlab/' + ico_path + ')'))
            cx.append($('<p class="title">').text(title))
            cx.append($('<p class="subtitle">').text(subtitle))
            cx.attr('data-act', act_label)
            cx.attr('data-tri', trig_label)
            cx.attr('data-search', title.toLowerCase() + ' ' + subtitle.toLowerCase())
            if (trig_label != "") {
                cx.addClass('trig')
            }
            if (act_label != "") {
                cx.addClass('act')
            }
            $(".store").append(cx)
            /* Make connector draggable */
            cx.draggable({
                revert: true,
                distance: 15,
                /* bypass scrollable container */
                appendTo: 'body',
                containment: 'window',
                scroll: false,
                helper: 'clone',
                drag: function(event, ui) {
                    $(this).css('opacity', 0.3)
                    if (ui.helper.hasClass('trig')) {
                        $('.trigger').addClass('glow')
                    }
                    if (ui.helper.hasClass('act')) {
                        $('.action').addClass('glow')
                    }
                },
                stop: function(event, ui) {
                    $(this).css('opacity', 1)
                    $('.trigger').removeClass('glow')
                    $('.action').removeClass('glow')
                }
            })
        })
    }
    $('.storeslider').draggable({
        axis: 'x',
        containment: '.storesliderholder',
        drag: function(event, ui) {
            update_slider();
        }
    })
    $('.then2, .then-holder2').hide();
    $('.action').droppable({
        tolerance: 'pointer',
        accept: '.act',
        drop: function(event, ui) {
            $(this).css('background-image', ui.helper.find('.ico').css('background-image'))
            if ($(this).hasClass("a1")) {
                if ($('.a2').css('backgroundImage') != "none" && $('.then-holder2').text() == "do that") {
                    $('.then2, .then-holder2').show();
                    $('.then-holder2').text($('.then-holder').text());
                }
                $('.then-holder').text(ui.helper.data('act'));
            } else {
                if ($('.a1').css('backgroundImage') == "none") {
                    $('.then-holder').text(ui.helper.data('act'));
                } else {
                    $('.then2, .then-holder2').show();
                    $('.then-holder2').text(ui.helper.data('act'));
                }
            }
        }
    })
    $('.when2, .when-holder2').hide();
    $('.trigger').droppable({
        tolerance: 'pointer',
        accept: '.trig',
        drop: function(event, ui) {
            $(this).css('background-image', ui.helper.find('.ico').css('background-image'))
            if ($(this).hasClass("t1")) {
                if ($('.t2').css('backgroundImage') != "none" && $('.when-holder2').text() == "this") {
                    $('.when2, .when-holder2').show();
                    $('.when-holder2').text($('.when-holder').text());
                }
                $('.when-holder').text(ui.helper.data('tri'));
            } else {
                if ($('.t1').css('backgroundImage') == "none") {
                    $('.when-holder').text(ui.helper.data('tri'));
                } else {
                    $('.when2, .when-holder2').show();
                    $('.when-holder2').text(ui.helper.data('tri'));
                }
            }
        }
    })
    /* Togglers */
    $('.hidetrigger').click(function() {
        if ($(this).hasClass('active') === true) {
            $('.trig').show()
            $(this).removeClass('active')
            $(this).text("Hide triggers")
        } else {
            $('.trig').hide()
            $(this).addClass('active')
            $(this).text("Show triggers")
        }
        update_slider();
    })
    $('.hideaction').click(function() {
        if ($(this).hasClass('active') === true) {
            $('.act').show()
            $(this).removeClass('active')
            $(this).text("Hide actions")
        } else {
            $('.act').hide()
            $(this).addClass('active')
            $(this).text("Show actions")
        }
        update_slider();
    })
    $('.reset').click(function() {
        $('.then2, .then-holder2').hide();
        $('.then-holder').text("do that");
        $('.then-holder2').text("do that");
        $('.t1').css('backgroundImage', 'none');
        $('.t2').css('backgroundImage', 'none');
        $('.when2, .when-holder2').hide();
        $('.when-holder').text("this");
        $('.when-holder2').text("this");
        $('.a1').css('backgroundImage', 'none');
        $('.a2').css('backgroundImage', 'none');
    });
    /* Search fx - veeeery short */
    $('.search').keyup(function() {
        var valThis = $(this).val().toLowerCase();
        if (valThis != "") {
            $('.store>div:not([data-search*="' + valThis + '"])').hide();
            $('.store>div[data-search*="' + valThis + '"]').show();
        } else {
            $('.store>div').show();
        }
        if ($('.hidetrigger').hasClass('active') === true) {
            $('.trig').hide()
        }
        if ($('.hideaction').hasClass('active') === true) {
            $('.act').hide()
        }
        update_slider();
    });
    iconize()
});