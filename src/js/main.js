var Name = "Unknown OS";
if (navigator.userAgent.indexOf("Win") != -1) Name =
    "Windows OS";
if (navigator.userAgent.indexOf("Mac") != -1) Name =
    "Macintosh";
if (navigator.userAgent.indexOf("Linux") != -1) Name =
    "Linux OS";
if (navigator.userAgent.indexOf("Android") != -1) Name =
    "Android OS";
if (navigator.userAgent.indexOf("like Mac") != -1) Name =
    "iOS";
console.log(Name);

//or

// function getOS() {
//     var userAgent = window.navigator.userAgent,
//         platform = window.navigator.platform,
//         macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
//         windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
//         iosPlatforms = ['iPhone', 'iPad', 'iPod'],
//         os = null;
  
//     if (macosPlatforms.indexOf(platform) !== -1) {
//       os = 'Mac OS';
//     } else if (iosPlatforms.indexOf(platform) !== -1) {
//       os = 'iOS';
//     } else if (windowsPlatforms.indexOf(platform) !== -1) {
//       os = 'Windows';
//     } else if (/Android/.test(userAgent)) {
//       os = 'Android';
//     } else if (!os && /Linux/.test(platform)) {
//       os = 'Linux';
//     }
  
//     return os;
//   }