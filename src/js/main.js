var header = document.getElementById("headerSticky");
var sticky = header.offsetTop;
var count = 0;
var timeOut;
var collapse = ["q0", "q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"];

// document.querySelectorAll('.action__item_description__list.mob')[0].scrollLeft

document.addEventListener("DOMContentLoaded", ready);
window.onscroll = function () {
    stickyHeader();
    if ((screen.width <= 1023) && (screen.width >= 560)) {
        stickyPhone(actionItem1, 1);
        stickyPhone(actionItem2, 2);
    }
};
playvid.addEventListener('click', function () {
    document.getElementsByClassName('overflow')[0].classList.toggle('visible')
})
document.getElementsByClassName('overflow')[0].addEventListener('click', function (e) {
    e.stopPropagation();
    this.classList.toggle('visible')
})
document.addEventListener('click', function (e) {
    var id = e.target.id;

    if (e.target.classList.contains('drop__button')) {
        document.querySelectorAll('.drop__button + .drop__list_wrap')[0].classList.toggle('visible')
    } else if (document.querySelectorAll('.drop__button + .drop__list_wrap')[0].classList.contains('visible')) {
        document.querySelectorAll('.drop__button + .drop__list_wrap')[0].classList.toggle('visible')
    } else if (e.target.classList.contains('question__item')) {
        if (e.target.getElementsByTagName('input')[0].getAttribute('checked')) {
            this.classList.toggle('background')
        }
    }

    if (id) {
        [].forEach.call(collapse, function (item) {
            if (item !== id) {
                document.getElementById(item).checked = false;
            }
        });
    }
})

actionItem1.onmouseover = hoverItem;
actionItem1.onmouseout = hoverItem;
actionItem2.onmouseover = hoverItem;
actionItem2.onmouseout = hoverItem;

function ready() {
    var x = document.getElementsByClassName('dwn');
    var Name = "Unknown OS";
    var OSName = '';
    if (navigator.userAgent.indexOf("Win") != -1) OSName = 'Windows'; Name = "https://onwallet-desktop-ui.s3.eu-central-1.amazonaws.com/win-unpacked.zip";
    if (navigator.userAgent.indexOf("Mac") != -1) OSName = 'MacOS'; Name = "https://onwallet-desktop-ui.s3.eu-central-1.amazonaws.com/mac.zip";
    if (navigator.userAgent.indexOf("Linux") != -1) OSName = 'Linux'; Name = "https://onwallet-desktop-ui.s3.eu-central-1.amazonaws.com/linux-unpacked.zip";
    if (navigator.userAgent.indexOf("Android") != -1) OSName = 'Android'; Name =
        "Android OS";
    if (navigator.userAgent.indexOf("like Mac") != -1) OSName = 'iOS'; Name =
        "iOS";

    [].forEach.call(x, function (el) {
        el.href = Name;
    })
    dwnlink.href = Name;
    if (OSName != '') clientOs.innerHTML = OSName;
}

// function goUp() {
//     var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

//     if (top > 0) {
//         window.scrollBy(0, -100);
//         timeOut = setTimeout('goUp()', 20);
//     } else clearTimeout(timeOut);
// }

function stickyPhone(elem, n) {
    var box = elem.getBoundingClientRect();
    var fixEl = document.getElementById('fixedPhone' + n);
    var delta = elem.offsetHeight - fixEl.offsetHeight - 100;
    if ((box.top <= 96) && (box.top >= -delta)) {
        fixEl.classList.remove('downPhone');
        fixEl.classList.add('fixedPhone');
    } else if (box.top <= -delta) {
        fixEl.classList.add('downPhone');
        fixEl.classList.remove('fixedPhone');
    } else {
        fixEl.classList.remove('fixedPhone');
        fixEl.classList.remove('downPhone');
    }
}

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function hoverItem(e) {
    if (e.target.classList.contains('item__hover')) {
        var items = [1, 2, 3, 4, 5, 6, 7];

        [].forEach.call(items, function (item) {
            if (item == e.target.getAttribute('hattr')) {
                document.getElementsByClassName('item__' + e.target.getAttribute('hattr'))[0].classList.add('visible')
            } else {
                document.getElementsByClassName('item__' + item)[0].classList.remove('visible')
            }
        });
    }
}