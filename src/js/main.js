document.addEventListener("DOMContentLoaded", ready);

function ready() {
    var x = document.getElementsByClassName('dwn');
    var Name = "Unknown OS";
    if (navigator.userAgent.indexOf("Win") != -1) Name = "https://onwallet-desktop-ui.s3.eu-central-1.amazonaws.com/win-unpacked.zip";
    if (navigator.userAgent.indexOf("Mac") != -1) Name = "https://onwallet-desktop-ui.s3.eu-central-1.amazonaws.com/mac.zip";
    if (navigator.userAgent.indexOf("Linux") != -1) Name = "https://onwallet-desktop-ui.s3.eu-central-1.amazonaws.com/linux-unpacked.zip";
    if (navigator.userAgent.indexOf("Android") != -1) Name =
        "Android OS";
    if (navigator.userAgent.indexOf("like Mac") != -1) Name =
        "iOS";

    [].forEach.call(x, function (el) {
        el.href = Name;
        // el.innerHTML += ' ' + Name
    })
    dwnlink.href = Name;
}

document.addEventListener('click', function (e) {
    // console.log(e.target)
    if (e.target.classList.contains('drop__button')) {
        document.querySelectorAll('.drop__button + .drop__list_wrap')[0].classList.toggle('visible')
    } else if (document.querySelectorAll('.drop__button + .drop__list_wrap')[0].classList.contains('visible')) {
        document.querySelectorAll('.drop__button + .drop__list_wrap')[0].classList.toggle('visible')
    } else if (e.target.classList.contains('question__item')) {
        // console.log(e.target.getElementsByTagName('input')[0].getAttribute('checked'));
        if (e.target.getElementsByTagName('input')[0].getAttribute('checked')) {
            this.classList.toggle('background')
        }
    }
})
playvid.addEventListener('click', function () {
    document.getElementsByClassName('overflow')[0].classList.toggle('visible')
})
document.getElementsByClassName('overflow')[0].addEventListener('click', function (e) {
    e.stopPropagation();
    this.classList.toggle('visible')
})

window.onscroll = function () { stickyHeader() };

var header = document.getElementById("headerSticky");
var sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// document.querySelectorAll('cb')
var cbs = document.getElementsByClassName("cb");
[].forEach.call(cbs, function (el) {
    el.onchange = cbChange(el);
})
function cbChange(obj) {
    for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = false;
    }
    obj.checked = true;
}

function hoverItem(e) {
    if (e.target.classList.contains('item__hover')) {
        // console.log('1');
        var elh = document.querySelectorAll('' + this.id + '> item__h1');
        [].forEach.call(elh, function (el) {
            el.classList.remove('visible');
            // console.log('1');
        });
        document.getElementsByClassName('item__' + e.target.getAttribute('hattr'))[0].classList.toggle('visible')
    }
}
actionItem1.onmouseover = hoverItem;
actionItem1.onmouseout = hoverItem;
actionItem2.onmouseover = hoverItem;
actionItem2.onmouseout = hoverItem;