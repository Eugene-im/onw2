function ready(){var t=document.getElementsByClassName("dwn"),e="Unknown OS";-1!=navigator.userAgent.indexOf("Win")&&(e="Windows OS"),-1!=navigator.userAgent.indexOf("Mac")&&(e="Macintosh"),-1!=navigator.userAgent.indexOf("Linux")&&(e="Linux OS"),-1!=navigator.userAgent.indexOf("Android")&&(e="Android OS"),-1!=navigator.userAgent.indexOf("like Mac")&&(e="iOS"),[].forEach.call(t,function(t){t.href="#"+e}),dwnlink.href="#"+e}document.addEventListener("DOMContentLoaded",ready),document.addEventListener("click",function(t){(t.target.classList.contains("drop__button")||document.querySelectorAll(".drop__button + .drop__list")[0].classList.contains("visible"))&&document.querySelectorAll(".drop__button + .drop__list")[0].classList.toggle("visible")}),document.addEventListener("mouseover",function(t){console.log(t.target),t.target.classList.contains("item__hover")&&!document.getElementsByClassName(".item__"+t.target.getAttribute(hattr))[0].classList.contains("visible")&&document.getElementsByClassName(".item__"+t.target.id)[0].classList.toggle("visible")});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsicmVhZHkiLCJ4IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiTmFtZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImluZGV4T2YiLCJmb3JFYWNoIiwiY2FsbCIsImVsIiwiaHJlZiIsImR3bmxpbmsiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicXVlcnlTZWxlY3RvckFsbCIsInRvZ2dsZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRBdHRyaWJ1dGUiLCJoYXR0ciIsImlkIl0sIm1hcHBpbmdzIjoiQUFFQSxTQUFTQSxRQUNMLElBQUlDLEVBQUlDLFNBQVNDLHVCQUF1QixPQUNwQ0MsRUFBTyxjQUNnQyxHQUF2Q0MsVUFBVUMsVUFBVUMsUUFBUSxTQUFjSCxFQUMxQyxlQUN1QyxHQUF2Q0MsVUFBVUMsVUFBVUMsUUFBUSxTQUFjSCxFQUMxQyxjQUN5QyxHQUF6Q0MsVUFBVUMsVUFBVUMsUUFBUSxXQUFnQkgsRUFDNUMsYUFDMkMsR0FBM0NDLFVBQVVDLFVBQVVDLFFBQVEsYUFBa0JILEVBQzlDLGVBQzRDLEdBQTVDQyxVQUFVQyxVQUFVQyxRQUFRLGNBQW1CSCxFQUMvQyxPQUNKLEdBQUdJLFFBQVFDLEtBQUtSLEVBQUcsU0FBVVMsR0FDekJBLEVBQUdDLEtBQU8sSUFBTVAsSUFHcEJRLFFBQVFELEtBQU8sSUFBTVAsRUFuQnpCRixTQUFTVyxpQkFBaUIsbUJBQW9CYixPQXNCOUNFLFNBQVNXLGlCQUFpQixRQUFTLFNBQVVDLElBRXJDQSxFQUFFQyxPQUFPQyxVQUFVQyxTQUFTLGlCQUVyQmYsU0FBU2dCLGlCQUFpQiwrQkFBK0IsR0FBR0YsVUFBVUMsU0FBUyxhQUR0RmYsU0FBU2dCLGlCQUFpQiwrQkFBK0IsR0FBR0YsVUFBVUcsT0FBTyxhQUtyRmpCLFNBQVNXLGlCQUFpQixZQUFhLFNBQVVDLEdBQzdDTSxRQUFRQyxJQUFJUCxFQUFFQyxRQUNWRCxFQUFFQyxPQUFPQyxVQUFVQyxTQUFTLGlCQUFvQmYsU0FBU0MsdUJBQXVCLFVBQVlXLEVBQUVDLE9BQU9PLGFBQWFDLFFBQVEsR0FBR1AsVUFBVUMsU0FBUyxZQUNoSmYsU0FBU0MsdUJBQXVCLFVBQVlXLEVBQUVDLE9BQU9TLElBQUksR0FBR1IsVUFBVUcsT0FBTyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgcmVhZHkpO1xyXG5cclxuZnVuY3Rpb24gcmVhZHkoKSB7XHJcbiAgICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2R3bicpO1xyXG4gICAgdmFyIE5hbWUgPSBcIlVua25vd24gT1NcIjtcclxuICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJXaW5cIikgIT0gLTEpIE5hbWUgPVxyXG4gICAgICAgIFwiV2luZG93cyBPU1wiO1xyXG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1hY1wiKSAhPSAtMSkgTmFtZSA9XHJcbiAgICAgICAgXCJNYWNpbnRvc2hcIjtcclxuICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJMaW51eFwiKSAhPSAtMSkgTmFtZSA9XHJcbiAgICAgICAgXCJMaW51eCBPU1wiO1xyXG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkFuZHJvaWRcIikgIT0gLTEpIE5hbWUgPVxyXG4gICAgICAgIFwiQW5kcm9pZCBPU1wiO1xyXG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcImxpa2UgTWFjXCIpICE9IC0xKSBOYW1lID1cclxuICAgICAgICBcImlPU1wiO1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKHgsIGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIGVsLmhyZWYgPSAnIycgKyBOYW1lO1xyXG4gICAgICAgIC8vIGVsLmlubmVySFRNTCArPSAnICcgKyBOYW1lXHJcbiAgICB9KVxyXG4gICAgZHdubGluay5ocmVmID0gJyMnICsgTmFtZTtcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQpXHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wX19idXR0b24nKSkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wX19idXR0b24gKyAuZHJvcF9fbGlzdCcpWzBdLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKVxyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcF9fYnV0dG9uICsgLmRyb3BfX2xpc3QnKVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2libGUnKSkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wX19idXR0b24gKyAuZHJvcF9fbGlzdCcpWzBdLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKVxyXG4gICAgfVxyXG59KVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpXHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpdGVtX19ob3ZlcicpICYmICEoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnLml0ZW1fXycgKyBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoaGF0dHIpKVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2libGUnKSkpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCcuaXRlbV9fJyArIGUudGFyZ2V0LmlkKVswXS5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJylcclxuICAgIH1cclxufSlcclxuLy9vclxyXG5cclxuLy8gZnVuY3Rpb24gZ2V0T1MoKSB7XHJcbi8vICAgICB2YXIgdXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQsXHJcbi8vICAgICAgICAgcGxhdGZvcm0gPSB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtLFxyXG4vLyAgICAgICAgIG1hY29zUGxhdGZvcm1zID0gWydNYWNpbnRvc2gnLCAnTWFjSW50ZWwnLCAnTWFjUFBDJywgJ01hYzY4SyddLFxyXG4vLyAgICAgICAgIHdpbmRvd3NQbGF0Zm9ybXMgPSBbJ1dpbjMyJywgJ1dpbjY0JywgJ1dpbmRvd3MnLCAnV2luQ0UnXSxcclxuLy8gICAgICAgICBpb3NQbGF0Zm9ybXMgPSBbJ2lQaG9uZScsICdpUGFkJywgJ2lQb2QnXSxcclxuLy8gICAgICAgICBvcyA9IG51bGw7XHJcblxyXG4vLyAgICAgaWYgKG1hY29zUGxhdGZvcm1zLmluZGV4T2YocGxhdGZvcm0pICE9PSAtMSkge1xyXG4vLyAgICAgICBvcyA9ICdNYWMgT1MnO1xyXG4vLyAgICAgfSBlbHNlIGlmIChpb3NQbGF0Zm9ybXMuaW5kZXhPZihwbGF0Zm9ybSkgIT09IC0xKSB7XHJcbi8vICAgICAgIG9zID0gJ2lPUyc7XHJcbi8vICAgICB9IGVsc2UgaWYgKHdpbmRvd3NQbGF0Zm9ybXMuaW5kZXhPZihwbGF0Zm9ybSkgIT09IC0xKSB7XHJcbi8vICAgICAgIG9zID0gJ1dpbmRvd3MnO1xyXG4vLyAgICAgfSBlbHNlIGlmICgvQW5kcm9pZC8udGVzdCh1c2VyQWdlbnQpKSB7XHJcbi8vICAgICAgIG9zID0gJ0FuZHJvaWQnO1xyXG4vLyAgICAgfSBlbHNlIGlmICghb3MgJiYgL0xpbnV4Ly50ZXN0KHBsYXRmb3JtKSkge1xyXG4vLyAgICAgICBvcyA9ICdMaW51eCc7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcmV0dXJuIG9zO1xyXG4vLyAgIH0iXX0=
