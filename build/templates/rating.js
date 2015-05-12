function updateRateOver${customField.id}(val) {
    var stars = jQuery(".rater-${customField.id}");
    var AC = true;
    for (var i = 0; i < stars.length; i++) {
        if (AC) {
            jQuery(stars[i]).addClass("star-rating-hover");
        } else {
            jQuery(stars[i]).removeClass("star-rating-hover");
        }
        if (stars[i].children[0].innerHTML == val) { AC = false;}
    }
    return false;
}
function updateRateOverOff${customField.id}() {
    var stars = jQuery(".rater-${customField.id}");
    for (var i = 0; i < stars.length; i++) {
        jQuery(stars[i]).removeClass("star-rating-hover");
    }
    return false;
}
function updateRate${customField.id}(val) {
    jQuery('input[name=${customField.id}]')[0].value=val;
    var stars = jQuery(".rater-${customField.id}");
    var AC = true;
    if ( val == -1 ) {AC = false;}
    for (var i = 0; i < stars.length; i++) {
        if (AC) {
            jQuery(stars[i]).addClass("star-rating-on");
        } else {
            jQuery(stars[i]).removeClass("star-rating-on");
        }
        if (stars[i].children[0].innerHTML == val) { AC = false;}
    }
    return false;
}

