function ready(){var t=document.getElementsByClassName("dwn"),e="Unknown OS";-1!=navigator.userAgent.indexOf("Win")&&(e="https://onwallet-desktop-ui.s3.eu-central-1.amazonaws.com/win-unpacked.zip"),-1!=navigator.userAgent.indexOf("Mac")&&(e="https://onwallet-desktop-ui.s3.eu-central-1.amazonaws.com/mac.zip"),-1!=navigator.userAgent.indexOf("Linux")&&(e="https://onwallet-desktop-ui.s3.eu-central-1.amazonaws.com/linux-unpacked.zip"),-1!=navigator.userAgent.indexOf("Android")&&(e="Android OS"),-1!=navigator.userAgent.indexOf("like Mac")&&(e="iOS"),[].forEach.call(t,function(t){t.href=e}),dwnlink.href=e}function hoverItem(t){(t.target.classList.contains("item__hover")&&!document.getElementsByClassName("item__"+t.target.getAttribute("hattr"))[0].classList.contains("visible")||t.target.classList.contains("item__hover"))&&document.getElementsByClassName("item__"+t.target.getAttribute("hattr"))[0].classList.toggle("visible")}document.addEventListener("DOMContentLoaded",ready),document.addEventListener("click",function(t){t.target.classList.contains("drop__button")||document.querySelectorAll(".drop__button + .drop__list_wrap")[0].classList.contains("visible")?document.querySelectorAll(".drop__button + .drop__list_wrap")[0].classList.toggle("visible"):t.target.classList.contains("question__item")&&(console.log(t.target.getElementsByTagName("input")[0].getAttribute("checked")),t.target.getElementsByTagName("input")[0].getAttribute("checked")&&this.classList.toggle("background"))}),playvid.addEventListener("click",function(){document.getElementsByClassName("overflow")[0].classList.toggle("visible")}),document.getElementsByClassName("overflow")[0].addEventListener("click",function(t){t.stopPropagation(),this.classList.toggle("visible")}),actionItem1.addEventListener("mouseover",hoverItem),actionItem2.addEventListener("mouseover",hoverItem);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsicmVhZHkiLCJ4IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiTmFtZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImluZGV4T2YiLCJmb3JFYWNoIiwiY2FsbCIsImVsIiwiaHJlZiIsImR3bmxpbmsiLCJob3Zlckl0ZW0iLCJlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJnZXRBdHRyaWJ1dGUiLCJ0b2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnNvbGUiLCJsb2ciLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInRoaXMiLCJwbGF5dmlkIiwic3RvcFByb3BhZ2F0aW9uIiwiYWN0aW9uSXRlbTEiLCJhY3Rpb25JdGVtMiJdLCJtYXBwaW5ncyI6IkFBRUEsU0FBU0EsUUFDTCxJQUFJQyxFQUFJQyxTQUFTQyx1QkFBdUIsT0FDcENDLEVBQU8sY0FDZ0MsR0FBdkNDLFVBQVVDLFVBQVVDLFFBQVEsU0FBY0gsRUFBTywrRUFDVixHQUF2Q0MsVUFBVUMsVUFBVUMsUUFBUSxTQUFjSCxFQUFPLHNFQUNSLEdBQXpDQyxVQUFVQyxVQUFVQyxRQUFRLFdBQWdCSCxFQUFPLGlGQUNSLEdBQTNDQyxVQUFVQyxVQUFVQyxRQUFRLGFBQWtCSCxFQUM5QyxlQUM0QyxHQUE1Q0MsVUFBVUMsVUFBVUMsUUFBUSxjQUFtQkgsRUFDL0MsT0FFSixHQUFHSSxRQUFRQyxLQUFLUixFQUFHLFNBQVVTLEdBQ3pCQSxFQUFHQyxLQUFPUCxJQUdkUSxRQUFRRCxLQUFPUCxFQTZCbkIsU0FBU1MsVUFBVUMsSUFDWEEsRUFBRUMsT0FBT0MsVUFBVUMsU0FBUyxpQkFBb0JmLFNBQVNDLHVCQUF1QixTQUFXVyxFQUFFQyxPQUFPRyxhQUFhLFVBQVUsR0FBR0YsVUFBVUMsU0FBUyxZQUUxSUgsRUFBRUMsT0FBT0MsVUFBVUMsU0FBUyxpQkFEbkNmLFNBQVNDLHVCQUF1QixTQUFXVyxFQUFFQyxPQUFPRyxhQUFhLFVBQVUsR0FBR0YsVUFBVUcsT0FBTyxXQWhEdkdqQixTQUFTa0IsaUJBQWlCLG1CQUFvQnBCLE9Bb0I5Q0UsU0FBU2tCLGlCQUFpQixRQUFTLFNBQVVOLEdBRXJDQSxFQUFFQyxPQUFPQyxVQUFVQyxTQUFTLGlCQUVyQmYsU0FBU21CLGlCQUFpQixvQ0FBb0MsR0FBR0wsVUFBVUMsU0FBUyxXQUQzRmYsU0FBU21CLGlCQUFpQixvQ0FBb0MsR0FBR0wsVUFBVUcsT0FBTyxXQUczRUwsRUFBRUMsT0FBT0MsVUFBVUMsU0FBUyxvQkFDbkNLLFFBQVFDLElBQUlULEVBQUVDLE9BQU9TLHFCQUFxQixTQUFTLEdBQUdOLGFBQWEsWUFDaEVKLEVBQUVDLE9BQU9TLHFCQUFxQixTQUFTLEdBQUdOLGFBQWEsWUFDdERPLEtBQUtULFVBQVVHLE9BQU8saUJBSWxDTyxRQUFRTixpQkFBaUIsUUFBUyxXQUM5QmxCLFNBQVNDLHVCQUF1QixZQUFZLEdBQUdhLFVBQVVHLE9BQU8sYUFFcEVqQixTQUFTQyx1QkFBdUIsWUFBWSxHQUFHaUIsaUJBQWlCLFFBQVMsU0FBVU4sR0FDL0VBLEVBQUVhLGtCQUNGRixLQUFLVCxVQUFVRyxPQUFPLGFBZTFCUyxZQUFZUixpQkFBaUIsWUFBYVAsV0FDMUNnQixZQUFZVCxpQkFBaUIsWUFBYVAiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHJlYWR5KTtcclxuXHJcbmZ1bmN0aW9uIHJlYWR5KCkge1xyXG4gICAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkd24nKTtcclxuICAgIHZhciBOYW1lID0gXCJVbmtub3duIE9TXCI7XHJcbiAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiV2luXCIpICE9IC0xKSBOYW1lID0gXCJodHRwczovL29ud2FsbGV0LWRlc2t0b3AtdWkuczMuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb20vd2luLXVucGFja2VkLnppcFwiO1xyXG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1hY1wiKSAhPSAtMSkgTmFtZSA9IFwiaHR0cHM6Ly9vbndhbGxldC1kZXNrdG9wLXVpLnMzLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL21hYy56aXBcIjtcclxuICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJMaW51eFwiKSAhPSAtMSkgTmFtZSA9IFwiaHR0cHM6Ly9vbndhbGxldC1kZXNrdG9wLXVpLnMzLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL2xpbnV4LXVucGFja2VkLnppcFwiO1xyXG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkFuZHJvaWRcIikgIT0gLTEpIE5hbWUgPVxyXG4gICAgICAgIFwiQW5kcm9pZCBPU1wiO1xyXG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcImxpa2UgTWFjXCIpICE9IC0xKSBOYW1lID1cclxuICAgICAgICBcImlPU1wiO1xyXG5cclxuICAgIFtdLmZvckVhY2guY2FsbCh4LCBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBlbC5ocmVmID0gTmFtZTtcclxuICAgICAgICAvLyBlbC5pbm5lckhUTUwgKz0gJyAnICsgTmFtZVxyXG4gICAgfSlcclxuICAgIGR3bmxpbmsuaHJlZiA9IE5hbWU7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZHJvcF9fYnV0dG9uJykpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcF9fYnV0dG9uICsgLmRyb3BfX2xpc3Rfd3JhcCcpWzBdLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKVxyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcF9fYnV0dG9uICsgLmRyb3BfX2xpc3Rfd3JhcCcpWzBdLmNsYXNzTGlzdC5jb250YWlucygndmlzaWJsZScpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3BfX2J1dHRvbiArIC5kcm9wX19saXN0X3dyYXAnKVswXS5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJylcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdxdWVzdGlvbl9faXRlbScpKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXS5nZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnKSk7XHJcbiAgICAgICAgaWYoZS50YXJnZXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF0uZ2V0QXR0cmlidXRlKCdjaGVja2VkJykpe1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2JhY2tncm91bmQnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxucGxheXZpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ292ZXJmbG93JylbMF0uY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpXHJcbn0pXHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ292ZXJmbG93JylbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpXHJcbn0pXHJcblxyXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdxdWVzdGlvbl9faXRlbScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbi8vICAgICBpZihlLnRhcmdldC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXS5nZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnKSl7XHJcbi8vICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdiYWNrZ3JvdW5kJylcclxuLy8gICAgIH1cclxuLy8gfSlcclxuZnVuY3Rpb24gaG92ZXJJdGVtKGUpe1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaXRlbV9faG92ZXInKSAmJiAhKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2l0ZW1fXycgKyBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hhdHRyJykpWzBdLmNsYXNzTGlzdC5jb250YWlucygndmlzaWJsZScpKSkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2l0ZW1fXycgKyBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hhdHRyJykpWzBdLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKVxyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW1fX2hvdmVyJykpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpdGVtX18nICsgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdoYXR0cicpKVswXS5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJylcclxuICAgIH1cclxufVxyXG5hY3Rpb25JdGVtMS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBob3Zlckl0ZW0pO1xyXG5hY3Rpb25JdGVtMi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBob3Zlckl0ZW0pO1xyXG4vL29yXHJcblxyXG4vLyBmdW5jdGlvbiBnZXRPUygpIHtcclxuLy8gICAgIHZhciB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCxcclxuLy8gICAgICAgICBwbGF0Zm9ybSA9IHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0sXHJcbi8vICAgICAgICAgbWFjb3NQbGF0Zm9ybXMgPSBbJ01hY2ludG9zaCcsICdNYWNJbnRlbCcsICdNYWNQUEMnLCAnTWFjNjhLJ10sXHJcbi8vICAgICAgICAgd2luZG93c1BsYXRmb3JtcyA9IFsnV2luMzInLCAnV2luNjQnLCAnV2luZG93cycsICdXaW5DRSddLFxyXG4vLyAgICAgICAgIGlvc1BsYXRmb3JtcyA9IFsnaVBob25lJywgJ2lQYWQnLCAnaVBvZCddLFxyXG4vLyAgICAgICAgIG9zID0gbnVsbDtcclxuXHJcbi8vICAgICBpZiAobWFjb3NQbGF0Zm9ybXMuaW5kZXhPZihwbGF0Zm9ybSkgIT09IC0xKSB7XHJcbi8vICAgICAgIG9zID0gJ01hYyBPUyc7XHJcbi8vICAgICB9IGVsc2UgaWYgKGlvc1BsYXRmb3Jtcy5pbmRleE9mKHBsYXRmb3JtKSAhPT0gLTEpIHtcclxuLy8gICAgICAgb3MgPSAnaU9TJztcclxuLy8gICAgIH0gZWxzZSBpZiAod2luZG93c1BsYXRmb3Jtcy5pbmRleE9mKHBsYXRmb3JtKSAhPT0gLTEpIHtcclxuLy8gICAgICAgb3MgPSAnV2luZG93cyc7XHJcbi8vICAgICB9IGVsc2UgaWYgKC9BbmRyb2lkLy50ZXN0KHVzZXJBZ2VudCkpIHtcclxuLy8gICAgICAgb3MgPSAnQW5kcm9pZCc7XHJcbi8vICAgICB9IGVsc2UgaWYgKCFvcyAmJiAvTGludXgvLnRlc3QocGxhdGZvcm0pKSB7XHJcbi8vICAgICAgIG9zID0gJ0xpbnV4JztcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICByZXR1cm4gb3M7XHJcbi8vICAgfSJdfQ==
