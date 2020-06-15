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
    } else if (e.target.classList.contains('question__item')){
        console.log(e.target.getElementsByTagName('input')[0].getAttribute('checked'));
        if(e.target.getElementsByTagName('input')[0].getAttribute('checked')){
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

// document.getElementsByClassName('question__item').addEventListener('click', function(e){
//     if(e.target.getElementsByTagName('input')[0].getAttribute('checked')){
//         this.classList.toggle('background')
//     }
// })
function hoverItem(e){
    if (e.target.classList.contains('item__hover') && !(document.getElementsByClassName('item__' + e.target.getAttribute('hattr'))[0].classList.contains('visible'))) {
        document.getElementsByClassName('item__' + e.target.getAttribute('hattr'))[0].classList.toggle('visible')
    } else if (e.target.classList.contains('item__hover')) {
        document.getElementsByClassName('item__' + e.target.getAttribute('hattr'))[0].classList.toggle('visible')
    }
}
actionItem1.addEventListener('mouseover', hoverItem);
actionItem2.addEventListener('mouseover', hoverItem);