// Use 'const' or 'let' instead of 'var' to declare variables
let userInfo;
let attempt = 0;
let widgetdefaultMessageObj;
let widgetFormAdvanceSettingList;
const myHeaders = new Headers();
let codeBinded = false;
myHeaders.append("Content-Type",  "application/x-www-form-urlencoded");
const myHeaders2 = new Headers();
myHeaders2.append("Content-Type",  "application/json");
let defaultMessage;
const widgetraw = JSON.stringify({
    "encAccountId": document.getElementById("chatbotscript").dataset.accountid,
    "encWebsiteId":  document.getElementById("chatbotscript").dataset.websiteid,
});
setTimeout(function(){
  var playButton = document.createElement('button');
      playButton.style.display = "none"
      playButton.id = "PlayButton"
      playButton.textContent = 'Play Audio';
      document.body.appendChild(playButton);

      // Create the audio element
      var audio = new Audio('https://robofycdn.s3.us-west-2.amazonaws.com/mixkit-achievement-bell-600.wav');

      // Function to play audio when the button is clicked
      function playAudioOnClick() {
        audio.play()
          .then(() => {
            console.log('Audio playback started.');
          })
          .catch((error) => {
            console.error('Error during audio playback:', error);
          });
      }

      // Attach click event listener to the play button
      playButton.addEventListener('click', playAudioOnClick);
},3000);
let emailSuccess = "";
let emailFail = "";
let registrationSuccess = "";
let registrationFail = "";
let callSuccess = "";
let callFail = "";
let Poweredby;
let Wait = false;
// Use 'const' instead of 'var' to declare the following variables
let duplicateId = 0;
let chatBySession = [];
const PERSON_NAME = "You";
const PERSON_IMG = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
const BOT_NAME = "SalezTalk";
const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: widgetraw,
    redirect: 'follow'
};

const shadowDiv = document.createElement("div");
shadowDiv.id = "MainAppDiv";
const anchor = document.createElement("a");
const MaindivElement = document.createElement("Div");
const ModaldivElement = document.createElement("Div");
const WelcomedivElement = document.createElement("Div");
const ShodowMaindivElement = document.createElement("Div");
let shadowRoot = MaindivElement.attachShadow({ mode: 'open' });
MaindivElement.id = "MainWidgetAppDiv";
document.body.appendChild(MaindivElement);

let mainHtml;
let baseUrl;
let widgetFormAppearanceList;
baseUrl = 'https://api.robofy.ai/v1';
fetch(baseUrl + '/get-chatbot-model-data-by-account-id?encAccountId=' + document.getElementById("chatbotscript").dataset.accountid + '&encWebsiteId=' + document.getElementById("chatbotscript").dataset.websiteid, requestOptions)
    .then(response => response.text())
    .then(result => {
        userInfo = JSON.parse(result).Data;
        defaultMessage =  userInfo.DefaultMessage;
        widgetdefaultMessageObj =  userInfo.ChatbotFAQList;
        const css = userInfo.CSSText;
        Poweredby = userInfo.PoweredBy;
        const head = document.head || document.getElementsByTagName('head')[0];
        const style = document.createElement('style');
        const style2 = document.createElement('style');
        var newstyle = "#MainAppDiv .live-chat-image{position:relative;display:inline-block}#MainAppDiv .live-chat-image img{border-radius: 50%;} #MainAppDiv .live-chat-image:after{content:'';width: 10px;height: 10px;display: block;background: #0FD9A2;border-radius: 50%;border: 2.5px solid #fff;position: absolute;right: -6px;bottom: -2px;z-index: 9999999999;}#MainAppDiv .msger-send-btn:disabled {background:#C1D9FA;border:none;}#MainAppDiv .msger-send-btn:disabled svg path{fill:#6DA6F2}#MainAppDiv .msger-send-btn:disabled svg path{background:#C1D9FA;border:none;}#MainAppDiv .msger-inputarea .msger-mic-btn svg{height:24px;}#MainAppDiv .right-msg:focus-visible{outline:none}#MainAppDiv .msger-header-title{width: 82%;}#MainAppDiv .right-msg .msg-text a {color: #fff;}#MainAppDiv .suggestion-title{padding: 10px;font-size: 16px;font-weight: 600;}#MainAppDiv .suggestion-question{padding: 8px;display: inline-block;font-weight:600;border-radius: 5px;margin: 0 5px 5px;color: #1C1A1A;border: 1px solid #97BFF6;cursor: pointer;background: #fff;}#MainAppDiv table tbody tr:first-child{background:#e0e0e0}";
        if (style.styleSheet) {
            style.styleSheet.cssText = css + newstyle;
        } else {
            style.appendChild(document.createTextNode(css + newstyle));
        }
        if (isMobileDevice()) {
          style.appendChild(document.createTextNode(css + "#MainAppDiv .widget-form{font-size: 16px}"));
        }
        let colorValue = userInfo.WidgetThemeColor;
        let WidgetPosition = userInfo.WidgetPosition;
        let IsPoweredBy = userInfo.IsPoweredBy;
        let ShowOnMobile = userInfo.ShowOnMobile;
        if(colorValue){
          let cssRules = `
            #MainAppDiv .msger-send-btn {
              background: ${colorValue};
              border-color: ${colorValue};
            }
            #MainAppDiv .button, #MainAppDiv .form button, .meetings-form button, .messenger-form button, .whatsapp-form button {
              background: ${colorValue};
            }
            #bottom-bar .bar-item.active:not([id*="ChatbotForm"]) svg *, #bottom-bar .bar-item:hover:not([id*="ChatbotForm"]) * {
                stroke: ${colorValue};
                color: ${colorValue};
            }
            #MainAppDiv .msger-header {
              background: ${colorValue};
            }
            #MainAppDiv .widgetdefaultMessage {
              color: ${colorValue};
              border: 1px solid ${colorValue};
            }
            #MainAppDiv .bar-item.active {
              color: ${colorValue};
              border-top: 2px solid ${colorValue};
            }
            #bottom-bar .bar-item.fill.active svg *, #bottom-bar .bar-item.fill:hover *, .bar-item.fill:hover .WidgetName {
              fill: ${colorValue};
              color: ${colorValue};
            }
            #bottom-bar .bar-item.stroke.active svg *, #bottom-bar .bar-item.stroke:hover *, .bar-item.stroke:hover .WidgetName {
              stroke: ${colorValue};
              color: ${colorValue};
            }
            #bottom-bar .bar-item#ChatbotForm svg * {
              fill: ${colorValue};
              stroke: ${colorValue};
            }
            #MainAppDiv .right-msg .msg-bubble {
              background: ${colorValue};
            }
            #MainAppDiv .tabcontent{
              height:100vh;
            }
            #MainAppDiv .msger{
              border-radius:0;
              height:100vh
            }
            #MainAppDiv .msger-header{
              align-items:center;
            }
            #MainAppDiv #footer-items{
              max-width:100%;
            }
          `;
          if(IsPoweredBy == 0){
            cssRules += "#MainAppDiv .sztalk-main-css .sztalkcopyright{display:none !important;}#bottom-bar{padding-bottom:0}#MainAppDiv .msger-inputarea{padding:10px !important;}";
          } else {
            cssRules += "#MainAppDiv .sztalk-main-css .sztalkcopyright{display:block !important;}#bottom-bar{padding-bottom:35px}#MainAppDiv .sztalk-main-css .sztalkcopyright,#MainAppDiv .sztalk-main-css{height: 0;}";
          }
          if(WidgetPosition == 0){
            cssRules += "#MainAppDiv #modal-container{right:revert;left:50px}#MainAppDiv #CallBackAppMainImage{right:revert;left:50px;animation: 0 slideright;}#MainAppDiv #WelcomeMessages{right:revert;left:50px;animation: 0 slideright;}";
          }
          if(WidgetPosition == 1){
            cssRules += "#MainAppDiv #modal-container{right:50px;left:revert}#MainAppDiv #CallBackAppMainImage{right:50px;left:revert;animation: 0 slideleft;}#MainAppDiv #WelcomeMessages{right:50px;left:revert;animation: 0 slideleft;}";
          }
          if(ShowOnMobile == 0){
            cssRules += "@media only screen and (max-width:576px){#MainAppDiv{display:none !important;}}";
          }
          if (style.styleSheet) {
            style.styleSheet.cssText = css + cssRules;
          } else {
            style.appendChild(document.createTextNode(css + cssRules));
          }
        }
        mainHtml = userInfo.ModelText;
        widgetFormAppearanceList = userInfo.widgetFormAppearanceList;
        document.body.appendChild(MaindivElement);
        shadowRoot.appendChild(style);
        showInWindow(mainHtml);
    })
    .catch(error => console.log('error', error));

    anchor.addEventListener("click", function(event) {
      const modalContainer = shadowRoot.getElementById("modal-container");
      if (modalContainer) {
        modalContainer.style.display = "block";
      }

      openPopup(mainHtml, 900000);
    });


const sleep = m => new Promise(r => setTimeout(r, m));

var Modal = function () {
  var c = {},
      a = {},
      d = document.createElement("div"),
      b = document.createElement("div"),
      f = document.createElement("div"),
      h = document.createElement("div"),
      k = document.createElement("div"),
      g = document.createElement("div"),
      sztalkcontainer = document.createElement("div"),
      copyrightmessage = document.createElement("div"),
      l, p;
  c.reload = function(content) {
    h.innerHTML = content;
  };
  c.open = function (e) {
      a.width = e.width || "415px";
      a.lock = e.lock || !1;
      a.hideClose = e.hideClose || !1;
      a.draggable = e.draggable || !1;
      a.closeAfter = e.closeAfter || 0;
      a.closeCallback = e.closeCallback || !1;
      a.openCallback = e.openCallback || !1;
      a.hideOverlay = e.hideOverlay || !1;
      l = function () {
          c.bottomRight({})
      };
      e.content && !e.ajaxContent ? h.innerHTML = e.content : e.ajaxContent && !e.content ? (b.className = "modal-loading", c.ajax(e.ajaxContent, function (a) {
          h.innerHTML = a
      })) : h.innerHTML = "";
      b.style.width = a.width;
      b.style.height = a.height;
      c.bottomRight({});
      if (a.lock || a.hideClose) k.style.visibility = "hidden";
      a.hideOverlay || (d.style.visibility = "visible");
      b.style.visibility = "visible";
      document.onkeypress = function (b) {
          27 === b.keyCode && !0 !== a.lock && c.close()
      };
      k.onclick = function () {
          if (a.hideClose) return !1;
          c.close()
      };
      d.onclick = function () {
          if (a.lock) return !1;
          c.close()
      };
      window.addEventListener ? window.addEventListener("resize", l, !1) : window.attachEvent && window.attachEvent("onresize", l);
      a.draggable ? (f.style.cursor = "move", f.onmousedown = function (a) {
          c.drag(a);
          return !1
      }) : f.onmousedown = function () {
          return !1
      };
      0 < a.closeAfter && (p = window.setTimeout(function () {
          c.close()
      }, 1E3 * a.closeAfter));
      a.openCallback && a.openCallback()
  };
  c.drag = function (a) {
      var c = void 0 !== window.event ? window.event.clientX : a.clientX,
          m = void 0 !== window.event ? window.event.clientY : a.clientY,
          g = c - b.offsetLeft,
          d = m - b.offsetTop;
      document.onmousemove = function (a) {
          c = void 0 !== window.event ? window.event.clientX : a.clientX;
          m = void 0 !== window.event ? window.event.clientY : a.clientY;
          b.style.left = 0 < c - g ? c - g + "px" : 0;
          b.style.top = 0 < m - d ? m - d + "px" : 0;
          document.onmouseup = function () {
              window.document.onmousemove = null
          }
      }
  };
  c.ajax = function (a, c) {
      var d, g = !1,
          f = [function () {
              return new window.XMLHttpRequest
          }, function () {
              return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
          }, function () {
              return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
          }, function () {
              return new window.ActiveXObject("Msxml2.XMLHTTP")
          }];
      for (d = 0; d < f.length; d += 1) {
          try {
              g = f[d]()
          } catch (h) { }
          if (!1 !== g) break
      }
      g.open("GET", a, !0);
      g.onreadystatechange = function () {
          4 === g.readyState && (c(g.responseText), b.removeAttribute("class"))
      };
      g.send(null)
  };
  c.close = function () {
      // h.innerHTML = "";
      // d.setAttribute("style", "");
      d.style.cssText = "";
      d.style.visibility = "hidden";
      b.setAttribute("style", "");
      b.style.cssText = "";
      b.style.visibility = "hidden";
      f.style.cursor = "default";
      k.setAttribute("style", "");
      k.style.cssText = "";
      p && window.clearTimeout(p);
      a.closeCallback && a.closeCallback();
      window.removeEventListener ? window.removeEventListener("resize", l, !1) : window.detachEvent && window.detachEvent("onresize", l)
  };
  c.bottomLeft = function(a) {
      b.style.bottom = "30px";
      b.style.left = "50px";
  };
  c.bottomRight = function(a) {
      b.style.bottom = "30px";
      b.style.right = "50px";
  };
  c.center = function (a) {
      var c = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
          f = Math.max(b.clientWidth, b.offsetWidth),
          g = Math.max(b.clientHeight, b.offsetHeight),
          h = 0,
          k = 0,
          l = 0,
          n = 0;
      "number" === typeof window.innerWidth ? (h = window.innerWidth, k = window.innerHeight) : document.documentElement && document.documentElement.clientWidth && (h = document.documentElement.clientWidth, k = document.documentElement.clientHeight);
      "number" === typeof window.pageYOffset ? (n = window.pageYOffset, l = window.pageXOffset) : document.body && document.body.scrollLeft ? (n = document.body.scrollTop, l = document.body.scrollLeft) : document.documentElement && document.documentElement.scrollLeft && (n = document.documentElement.scrollTop, l = document.documentElement.scrollLeft);
      a.horizontalOnly || (b.style.top = n + k / 2 - g / 2 + "px");
      b.style.left = l + h / 2 - f / 2 + "px";
      d.style.height = c + "px";
      d.style.width = "100%"
  };
  d.setAttribute("id", "modal-overlay");
  b.setAttribute("id", "modal-container");
  f.setAttribute("id", "modal-header");
  h.setAttribute("id", "modal-content");
  k.setAttribute("id", "modal-close");
  g.setAttribute("id", "chat-clear");
  g.setAttribute("onclick", "clearChat()");
  k.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.16992 14.8299L14.8299 9.16992" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.8299 14.8299L9.16992 9.16992" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  g.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.8499 9.14014L18.1999 19.2101C18.0899 20.7801 17.9999 22.0001 15.2099 22.0001H8.7899C5.9999 22.0001 5.9099 20.7801 5.7999 19.2101L5.1499 9.14014" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.3301 16.5H13.6601" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.5 12.5H14.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  sztalkcontainer.setAttribute("id", "sztalkcontainer");
  sztalkcontainer.setAttribute("class", "sztalk-main-css");
  sztalkcontainer.setAttribute("padding", "0px");
  sztalkcontainer.setAttribute("margin", "0px");
  sztalkcontainer.appendChild(b);
  copyrightmessage.classList = "sztalkcopyright";
  copyrightmessage.id = "PoweredBy";
  // copyrightmessage.style.position = "";
  // copyrightmessage.style.bottom = "-25px";
  // copyrightmessage.style.left = "0";
  copyrightmessage.innerHTML = '<a target="_blank" id="poweredby" href="">Powered By Robofy</a>';
  f.appendChild(g);
  f.appendChild(k);
  b.appendChild(f);
  b.appendChild(h);
  b.appendChild(copyrightmessage);
  d.style.visibility = "hidden";
  b.style.display = "none";
  shadowDiv.appendChild(d);
  shadowDiv.appendChild(sztalkcontainer)
  return c
}();

function showInWindow(popupText){
  var windowView = document.createElement('div');
  windowView.id = "MainAppDiv";
  windowView.className = "WindowMainAppDiv";
  shadowRoot.appendChild(windowView);
  if(shadowRoot.getElementById("MainAppDiv")){
    shadowRoot.getElementById("MainAppDiv").innerHTML = popupText;
  }
  if (getStorage("oldChat")) {
    chatReady();
  }
  var sztalkcontainer = document.createElement("div"),
      copyrightmessage = document.createElement("div");
  sztalkcontainer.setAttribute("id", "sztalkcontainer");
  sztalkcontainer.setAttribute("class", "sztalk-main-css");
  sztalkcontainer.setAttribute("padding", "0px");
  sztalkcontainer.setAttribute("margin", "0px");
  copyrightmessage.classList = "sztalkcopyright";
  copyrightmessage.id = "PoweredBy";
  copyrightmessage.innerHTML = '<a target="_blank" id="poweredby" href="">Powered By Robofy</a>';
  sztalkcontainer.appendChild(copyrightmessage);
  windowView.appendChild(sztalkcontainer);
  var g = document.createElement("div");
      g.setAttribute("id", "chat-clear");
      g.setAttribute("onclick", "clearWindowChat()");
      g.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.8499 9.14014L18.1999 19.2101C18.0899 20.7801 17.9999 22.0001 15.2099 22.0001H8.7899C5.9999 22.0001 5.9099 20.7801 5.7999 19.2101L5.1499 9.14014" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.3301 16.5H13.6601" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.5 12.5H14.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
      shadowRoot.querySelectorAll(".msger-header")[0].appendChild(g);
  if(widgetdefaultMessageObj != null && widgetdefaultMessageObj.length > 0){
    let setDefaultMessage = '';
    for(var j = 0; j < widgetdefaultMessageObj.length; j++){
        setDefaultMessage += `<button onclick="widgetdefaultMessage(event)" class="widgetdefaultMessage" data-message='`+ widgetdefaultMessageObj[j].Question+ `'>`+ widgetdefaultMessageObj[j].DisplayQuestion+ `</button>`;
    }
    if(shadowRoot.getElementById("footer-items")){
      shadowRoot.getElementById("footer-items").innerHTML = shadowRoot.getElementById("footer-items").innerHTML + setDefaultMessage;
    }
  }
  
  setValuesApi();
  scrollChatWindowBottom();
  shadowRoot.querySelectorAll('#szTalkChatModalBox input#PlaceHolderText').forEach(input => input.addEventListener('keydown', e => e.stopPropagation()));
  var bottomBar = shadowRoot.getElementById("bottom-bar");
  var activeTabs = 0;
  if(widgetFormAppearanceList != null && widgetFormAppearanceList.length > 0 && bottomBar){
    for (var i = 0; i < widgetFormAppearanceList.length; i++) {
      var widgetName = widgetFormAppearanceList[i].WidgetName;
      var targetElement = bottomBar.querySelector("[data-form='" + widgetName.trim() + "-form']");
      if (targetElement) {
        targetElement.querySelector(".WidgetName").innerText = widgetFormAppearanceList[i].WidgetName;
        if(widgetFormAppearanceList[i].status == 1){
          targetElement.style.order = widgetFormAppearanceList[i].sortIndex;
        }else{
          targetElement.style.display = "none";
        }
      }
      if(widgetFormAppearanceList[i].WidgetName == "WhatsApp"){
        if(widgetFormAppearanceList[i].status){
          activeTabs++;
          shadowRoot.getElementById("WhatsappForm").style.display = "block";
          if(widgetFormAppearanceList[i].buttontext){
            shadowRoot.getElementById("whatsappButtonVal").textContent = widgetFormAppearanceList[i].buttontext;
          }else{
            shadowRoot.getElementById("whatsappButtonVal").textContent = "WhatsApp Us";
          }
          if(widgetFormAppearanceList[i].tooltiptext){
            shadowRoot.getElementById("WhatsappForm").children[1].textContent = widgetFormAppearanceList[i].tooltiptext;
          }else{
            shadowRoot.getElementById("WhatsappForm").children[1].textContent = "WhatsApp";
          }
          shadowRoot.getElementById("whatsappButtonVal").href = "https://wa.me/"+ widgetFormAppearanceList[i].WhatsAppNo1 + "?text=" + widgetFormAppearanceList[i].DefaultMessage;
          shadowRoot.getElementById("WhatsappForm").style.order = widgetFormAppearanceList[i].sortIndex;
        }
      }
      if(widgetFormAppearanceList[i].WidgetName == "BookDemo"){
        if(widgetFormAppearanceList[i].status){
          activeTabs++;
          shadowRoot.getElementById("MeetingsForm").style.display = "block";
          if(widgetFormAppearanceList[i].buttontext){
            shadowRoot.getElementById("meetingsButtonVal").textContent = widgetFormAppearanceList[i].buttontext;
          }else{
            shadowRoot.getElementById("meetingsButtonVal").textContent = "Calendar";
          }
          if(widgetFormAppearanceList[i].tooltiptext){
            shadowRoot.getElementById("MeetingsForm").children[1].textContent = widgetFormAppearanceList[i].tooltiptext;
          }else{
            shadowRoot.getElementById("MeetingsForm").children[1].textContent = "Meetings";
          }
          shadowRoot.getElementById("meetingsButtonVal").href = widgetFormAppearanceList[i].RedirectLink;
          shadowRoot.getElementById("MeetingsForm").style.order = widgetFormAppearanceList[i].sortIndex;
        }
      }
      if(widgetFormAppearanceList[i].WidgetName == "FBMessenger"){
        if(widgetFormAppearanceList[i].status){
          activeTabs++;
          shadowRoot.getElementById("MessengerForm").style.display = "block";
          if(widgetFormAppearanceList[i].buttontext){
            shadowRoot.getElementById("FacebookButtonVal").textContent = widgetFormAppearanceList[i].buttontext;
          }else{
            shadowRoot.getElementById("FacebookButtonVal").textContent = "Send a Facebook Message";
          }
          if(widgetFormAppearanceList[i].tooltiptext){
            shadowRoot.getElementById("MessengerForm").children[1].textContent = widgetFormAppearanceList[i].tooltiptext;
          }else{
            shadowRoot.getElementById("MessengerForm").children[1].textContent = "Facebook";
          }
          shadowRoot.getElementById("FacebookButtonVal").href = "https://m.me/"+ widgetFormAppearanceList[i].FBMessengerSocialId + "?text=" + widgetFormAppearanceList[i].DefaultMessage;
          shadowRoot.getElementById("MessengerForm").style.order = widgetFormAppearanceList[i].sortIndex;
        }
      }
      if(widgetFormAppearanceList[i].WidgetName == "Email"){
        if(widgetFormAppearanceList[i].status){
          activeTabs++;
          shadowRoot.getElementById("EmailForm").style.display = "block";
          if(widgetFormAppearanceList[i].HeadingText){
            shadowRoot.getElementById("emailHeadingVal").textContent = widgetFormAppearanceList[i].HeadingText;
          }else{
            shadowRoot.getElementById("emailHeadingVal").textContent = "Write an Email to us";
          }
          if(widgetFormAppearanceList[i].Placeholder1){
            shadowRoot.getElementById("emailNameVal").placeholder = widgetFormAppearanceList[i].Placeholder1;
          }else{
            shadowRoot.getElementById("emailNameVal").textContent = "Name";
          }
          if(widgetFormAppearanceList[i].Placeholder2){
            shadowRoot.getElementById("emailVal").placeholder = widgetFormAppearanceList[i].Placeholder2;
          }else{
            shadowRoot.getElementById("emailVal").placeholder = "Email";
          }
          if(widgetFormAppearanceList[i].Placeholder2){
            shadowRoot.getElementById("emailMessageVal").placeholder = widgetFormAppearanceList[i].Placeholder3;
          }else{
            shadowRoot.getElementById("emailMessageVal").placeholder = "Enter your message";
          }
          if(widgetFormAppearanceList[i].buttontext){
          shadowRoot.getElementById("emailButtonVal").textContent = widgetFormAppearanceList[i].buttontext;
          }else{
            shadowRoot.getElementById("emailButtonVal").textContent = "Submit";
          }
          if(widgetFormAppearanceList[i].tooltiptext){
            shadowRoot.getElementById("EmailForm").children[1].textContent = widgetFormAppearanceList[i].tooltiptext;
          }else{
            shadowRoot.getElementById("EmailForm").children[1].textContent = "Email";
          }
          shadowRoot.getElementById("EmailForm").style.order = widgetFormAppearanceList[i].sortIndex;
          if(widgetFormAppearanceList[i].SuccessText){
            emailSuccess = widgetFormAppearanceList[i].SuccessText;
          }else{
            emailSuccess = "Success";
          }
          if(widgetFormAppearanceList[i].FailureText){
            emailFail = widgetFormAppearanceList[i].FailureText;
          }else{
            emailFail = "Fail"
          }
        }
      }
      if(widgetFormAppearanceList[i].WidgetName == "CallBack"){
        if(widgetFormAppearanceList[i].status){
          activeTabs++;
          shadowRoot.getElementById("CallForm").style.display = "block";
          if(widgetFormAppearanceList[i].HeadingText){
            shadowRoot.getElementById("callHeading").textContent = widgetFormAppearanceList[i].HeadingText;
          }else{
            shadowRoot.getElementById("callHeading").textContent = "Request a call back";
          }
          if(widgetFormAppearanceList[i].Placeholder1){
            shadowRoot.getElementById("callNameVal").placeholder = widgetFormAppearanceList[i].Placeholder1;
          }else{
            shadowRoot.getElementById("callNameVal").placeholder = "Name"
          }
          if(widgetFormAppearanceList[i].Placeholder2){
            shadowRoot.getElementById("callPhoneVal").placeholder = widgetFormAppearanceList[i].Placeholder2;
          }else{
            shadowRoot.getElementById("callPhoneVal").placeholder = "Phone number";
          }
          if(widgetFormAppearanceList[i].buttontext){
            shadowRoot.getElementById("callButtonVal").textContent = widgetFormAppearanceList[i].buttontext;
          }else{
            shadowRoot.getElementById("callButtonVal").textContent = "Submit";
          }
          if(widgetFormAppearanceList[i].tooltiptext){
            shadowRoot.getElementById("CallForm").children[1].textContent = widgetFormAppearanceList[i].tooltiptext;
          }else{
            shadowRoot.getElementById("CallForm").children[1].textContent = "Email";
          }
          shadowRoot.getElementById("CallForm").style.order = widgetFormAppearanceList[i].sortIndex;
          callSuccess = widgetFormAppearanceList[i].SuccessText;
          callFail = widgetFormAppearanceList[i].FailureText;
        }
      }
    }
  }
  if(shadowRoot.getElementById("registationForm")){
    shadowRoot.getElementById("registationForm").addEventListener("submit", function(event){
      event.preventDefault();
      var registratorName = shadowRoot.getElementById("registrationNameVal").value;
      var registratorEmail = shadowRoot.getElementById("registratorEmail").value;
      // var registratorMobile = shadowRoot.getElementById("registratorMobile").value;
      // var registratorMessage = shadowRoot.getElementById("registratorMessage").value;
      if(registratorName && registratorEmail){
        const widgetraw = JSON.stringify({
          "Id": "",
          "WebsiteId":  document.getElementById("chatbotscript").dataset.websiteid,
          "AccountId":  document.getElementById("chatbotscript").dataset.accountid,
          "Email": registratorEmail,
          "VisitorName": registratorName,
          "MobileNo": "",
          "Message": "",
          "WidgetName": "Registration"
        })
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: widgetraw
        };
        fetch(baseUrl + '/save-widget-customer-form-details?Id=&WebsiteId='+ document.getElementById("chatbotscript").dataset.websiteid +'&AccountId='+ document.getElementById("chatbotscript").dataset.accountid +'&Email='+ registratorEmail +'&VisitorName='+ registratorName +'&MobileNo=&Message=&WidgetName=Registration', requestOptions)
          .then(response => response.text())
          .then(result => {
            var response = JSON.parse(result);
            if(response.responseStatusCode == 200){
              shadowRoot.getElementById("registrationFormResponse").innerHTML = `<div class="successmessage">`+ emailSuccess +`</div>`;
              setStorage("registration",true,30);
              if(getStorage("registration")){
                shadowRoot.getElementById("widget-form").children[0].style.display = "none";
                shadowRoot.getElementById("widget-form").children[1].style.display = "flex";
              }else{
                shadowRoot.getElementById("widget-form").children[0].style.display = "flex";
                shadowRoot.getElementById("widget-form").children[1].style.display = "none";
              }
            }else{
              shadowRoot.getElementById("registrationFormResponse").innerHTML = `<div class="failemessage">`+ emailFail +`</div>`;
            }
            setTimeout(function(){
              shadowRoot.getElementById("registrationNameVal").value = '';
              shadowRoot.getElementById("registratorEmail").value = '';
              shadowRoot.getElementById("registrationFormResponse").removeChild(shadowRoot.getElementById("registrationFormResponse").firstChild);
            },3000);
          })
          .catch(error => console.log('error', error));
      }else{
        if(!registratorName){
          shadowRoot.getElementById("registrationNameValError").innerHTML = "<div style='color:red'> Please Enter Name</div>"
        }
        if(!registratorEmail){
          shadowRoot.getElementById("registrationEmailValError").innerHTML = "<div style='color:red'> Please Enter Email</div>"
        }
      }
    });
  }
  if(shadowRoot.getElementById("emailFormSubmit")){
    shadowRoot.getElementById("emailFormSubmit").addEventListener("submit", function(event){
      event.preventDefault();
      var emailNameVal = shadowRoot.getElementById("emailNameVal").value;
      var emailVal = shadowRoot.getElementById("emailVal").value;
      var emailMessageVal = shadowRoot.getElementById("emailMessageVal").value;
      if(emailNameVal && emailVal && emailMessageVal){
        const widgetraw = JSON.stringify({
          "Id": "",
          "WebsiteId":  document.getElementById("chatbotscript").dataset.websiteid,
          "AccountId":  document.getElementById("chatbotscript").dataset.accountid,
          "Email": emailVal,
          "VisitorName": emailNameVal,
          "MobileNo": "",
          "Message": emailMessageVal,
          "WidgetName": "Email"
        })
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: widgetraw
        };
        fetch(baseUrl + '/save-widget-customer-form-details?Id=&WebsiteId='+ document.getElementById("chatbotscript").dataset.websiteid +'&AccountId='+ document.getElementById("chatbotscript").dataset.accountid +'&Email='+ emailVal +'&VisitorName='+ emailNameVal +'&MobileNo=&Message='+ emailMessageVal +'&WidgetName=Email', requestOptions)
          .then(response => response.text())
          .then(result => {
            var response = JSON.parse(result);
            if(response.responseStatusCode == 200){
              shadowRoot.getElementById("emailFormResponse").innerHTML = `<div class="successmessage">`+ emailSuccess +`</div>`;
            }else{
              shadowRoot.getElementById("emailFormResponse").innerHTML = `<div class="failmessage">`+ emailFail +`</div>`;
            }
            setTimeout(function(){
              shadowRoot.getElementById("emailNameVal").value = "";
              shadowRoot.getElementById("emailVal").value = "";
              shadowRoot.getElementById("emailMessageVal").value = "";
              shadowRoot.getElementById("emailFormResponse").removeChild(shadowRoot.getElementById("emailFormResponse").firstChild);
            },3000);
          })
          .catch(error => console.log('error', error));
      }else{
        if(!emailNameVal){
          shadowRoot.getElementById("emailNameValError").innerHTML = "<div style='color:red'> Please Enter Name</div>"
        }
        if(!emailVal){
          shadowRoot.getElementById("emailValError").innerHTML = "<div style='color:red'> Please Enter Email</div>"
        }
        if(!emailMessageVal){
          shadowRoot.getElementById("emailMessageValError").innerHTML = "<div style='color:red'> Please Enter Message</div>"
        }
      }
    });
  }
  if(shadowRoot.getElementById("callFormSubmit")){
    shadowRoot.getElementById("callFormSubmit").addEventListener("submit", function(event){
    event.preventDefault();
    var callNameVal = shadowRoot.getElementById("callNameVal").value;
    var countryCode = shadowRoot.getElementById("countryCode").value;
    var callPhoneVal = shadowRoot.getElementById("callPhoneVal").value;
    if(callNameVal && countryCode && callPhoneVal){
        const widgetraw = JSON.stringify({
          "Id": "",
          "WebsiteId":  document.getElementById("chatbotscript").dataset.websiteid,
          "AccountId":  document.getElementById("chatbotscript").dataset.accountid,
          "Email": "",
          "VisitorName": callNameVal,
          "MobileNo": countryCode + callPhoneVal,
          "Message": "",
          "WidgetName": "Callback"
        });
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: widgetraw
        };
        fetch(baseUrl + '/save-widget-customer-form-details?Id=&WebsiteId='+ document.getElementById("chatbotscript").dataset.websiteid +'&AccountId='+ document.getElementById("chatbotscript").dataset.accountid +'&Email=&VisitorName='+ callNameVal +'&MobileNo='+ countryCode + callPhoneVal +'&Message=&WidgetName=Callback', requestOptions)
          .then(response => response.text())
          .then(result => {
            var response = JSON.parse(result);
            if(response.responseStatusCode == 200){
              shadowRoot.getElementById("callFormResponse").innerHTML = `<div class="successmessage">`+ callSuccess +`</div>`;
            }else{
              shadowRoot.getElementById("callFormResponse").innerHTML = `<div class="failmessage">`+ callFail +`</div>`;
            }
            setTimeout(function(){
              shadowRoot.getElementById("callNameVal").value = "";
              shadowRoot.getElementById("countryCode").value = "";
              shadowRoot.getElementById("callPhoneVal").value = "";
              shadowRoot.getElementById("callFormResponse").removeChild(shadowRoot.getElementById("callFormResponse").firstChild);
            },3000);
          })
          .catch(error => console.log('error', error));
    }else{
      if(!callNameVal){
        shadowRoot.getElementById("callNameValError").innerHTML = "<div style='color:red'> Please Enter Name</div>"
      }
      if(!countryCode){
        shadowRoot.getElementById("countryCodeError").innerHTML = "<div style='color:red'> Please Enter Code</div>"
      }
      if(!callPhoneVal){
        shadowRoot.getElementById("callPhoneValError").innerHTML = "<div style='color:red'> Please Enter Phone</div>"
      }
    }
  });
}
  if(userInfo && userInfo.ChatbotIcon){
    shadowRoot.getElementById("profileSet").src = userInfo.ChatbotIcon;
  }
  if(activeTabs == 0){
    var barItems = shadowRoot.querySelectorAll(".bar-item");
    if(shadowRoot.getElementById("bottom-bar")){
      shadowRoot.getElementById("bottom-bar").style.display = "none";
    }
    barItems.forEach(function(item) {
      item.style.display = "none";
    });
  }
  
        if(shadowRoot.getElementById("ChatbotForm")){
          if(userInfo.WidgetName){
            shadowRoot.getElementById("ChatbotForm").children[1].textContent = userInfo.WidgetName;
          }else{
            shadowRoot.getElementById("ChatbotForm").children[1].textContent = "Chatbot";
          }
        }
        if(shadowRoot.getElementById("registationForm")){
          shadowRoot.getElementById("registationForm").addEventListener("submit", function(event){
            event.preventDefault();
            var registratorName = shadowRoot.getElementById("registrationNameVal").value;
            var registratorEmail = shadowRoot.getElementById("registratorEmail").value;
            // var registratorMobile = shadowRoot.getElementById("registratorMobile").value;
            // var registratorMessage = shadowRoot.getElementById("registratorMessage").value;
            if(registratorName && registratorEmail){
              const widgetraw = JSON.stringify({
                "Id": "",
                "WebsiteId":  document.getElementById("chatbotscript").dataset.websiteid,
                "AccountId":  document.getElementById("chatbotscript").dataset.accountid,
                "Email": registratorEmail,
                "VisitorName": registratorName,
                "MobileNo": "",
                "Message": "",
                "WidgetName": "Registration"
              })
              const requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: widgetraw
              };
              fetch(baseUrl + '/save-widget-customer-form-details?Id=&WebsiteId='+ document.getElementById("chatbotscript").dataset.websiteid +'&AccountId='+ document.getElementById("chatbotscript").dataset.accountid +'&Email='+ registratorEmail +'&VisitorName='+ registratorName +'&MobileNo=&Message=&WidgetName=Registration', requestOptions)
                .then(response => response.text())
                .then(result => {
                  var response = JSON.parse(result);
                  if(response.responseStatusCode == 200){
                    shadowRoot.getElementById("registrationFormResponse").innerHTML = `<div class="successmessage">`+ emailSuccess +`</div>`;
                    setStorage("registration",true,30);
                    if(getStorage("registration")){
                      shadowRoot.getElementById("widget-form").children[0].style.display = "none";
                      shadowRoot.getElementById("widget-form").children[1].style.display = "flex";
                    }else{
                      shadowRoot.getElementById("widget-form").children[0].style.display = "flex";
                      shadowRoot.getElementById("widget-form").children[1].style.display = "none";
                    }
                  }else{
                    shadowRoot.getElementById("registrationFormResponse").innerHTML = `<div class="failemessage">`+ emailFail +`</div>`;
                  }
                  setTimeout(function(){
                    shadowRoot.getElementById("registrationNameVal").value = '';
                    shadowRoot.getElementById("registratorEmail").value = '';
                    shadowRoot.getElementById("registrationFormResponse").removeChild(shadowRoot.getElementById("registrationFormResponse").firstChild);
                  },3000);
                })
                .catch(error => console.log('error', error));
            }else{
              if(!registratorName){
                shadowRoot.getElementById("registrationNameValError").innerHTML = "<div style='color:red'> Please Enter Name</div>"
              }
              if(!registratorEmail){
                shadowRoot.getElementById("registrationEmailValError").innerHTML = "<div style='color:red'> Please Enter Email</div>"
              }
            }
          });
        }
        if(shadowRoot.getElementById("emailFormSubmit")){
          shadowRoot.getElementById("emailFormSubmit").addEventListener("submit", function(event){
            event.preventDefault();
            var emailNameVal = shadowRoot.getElementById("emailNameVal").value;
            var emailVal = shadowRoot.getElementById("emailVal").value;
            var emailMessageVal = shadowRoot.getElementById("emailMessageVal").value;
            if(emailNameVal && emailVal && emailMessageVal){
              const widgetraw = JSON.stringify({
                "Id": "",
                "WebsiteId":  document.getElementById("chatbotscript").dataset.websiteid,
                "AccountId":  document.getElementById("chatbotscript").dataset.accountid,
                "Email": emailVal,
                "VisitorName": emailNameVal,
                "MobileNo": "",
                "Message": emailMessageVal,
                "WidgetName": "Email"
              })
              const requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: widgetraw
              };
              fetch(baseUrl + '/save-widget-customer-form-details?Id=&WebsiteId='+ document.getElementById("chatbotscript").dataset.websiteid +'&AccountId='+ document.getElementById("chatbotscript").dataset.accountid +'&Email='+ emailVal +'&VisitorName='+ emailNameVal +'&MobileNo=&Message='+ emailMessageVal +'&WidgetName=Email', requestOptions)
                .then(response => response.text())
                .then(result => {
                  var response = JSON.parse(result);
                  if(response.responseStatusCode == 200){
                    shadowRoot.getElementById("emailFormResponse").innerHTML = `<div class="successmessage">`+ emailSuccess +`</div>`;
                  }else{
                    shadowRoot.getElementById("emailFormResponse").innerHTML = `<div class="failmessage">`+ emailFail +`</div>`;
                  }
                  setTimeout(function(){
                    shadowRoot.getElementById("emailNameVal").value = "";
                    shadowRoot.getElementById("emailVal").value = "";
                    shadowRoot.getElementById("emailMessageVal").value = "";
                    shadowRoot.getElementById("emailFormResponse").removeChild(shadowRoot.getElementById("emailFormResponse").firstChild);
                  },3000);
                })
                .catch(error => console.log('error', error));
            }else{
              if(!emailNameVal){
                shadowRoot.getElementById("emailNameValError").innerHTML = "<div style='color:red'> Please Enter Name</div>"
              }
              if(!emailVal){
                shadowRoot.getElementById("emailValError").innerHTML = "<div style='color:red'> Please Enter Email</div>"
              }
              if(!emailMessageVal){
                shadowRoot.getElementById("emailMessageValError").innerHTML = "<div style='color:red'> Please Enter Message</div>"
              }
            }
          });
        }
        
        shadowRoot.getElementById("callFormSubmit").addEventListener("submit", function(event){
          event.preventDefault();
          var callNameVal = shadowRoot.getElementById("callNameVal").value;
          var countryCode = shadowRoot.getElementById("countryCode").value;
          var callPhoneVal = shadowRoot.getElementById("callPhoneVal").value;
          if(callNameVal && countryCode && callPhoneVal){
              const widgetraw = JSON.stringify({
                "Id": "",
                "WebsiteId":  document.getElementById("chatbotscript").dataset.websiteid,
                "AccountId":  document.getElementById("chatbotscript").dataset.accountid,
                "Email": "",
                "VisitorName": callNameVal,
                "MobileNo": countryCode + callPhoneVal,
                "Message": "",
                "WidgetName": "Callback"
              });
              const requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: widgetraw
              };
              fetch(baseUrl + '/save-widget-customer-form-details?Id=&WebsiteId='+ document.getElementById("chatbotscript").dataset.websiteid +'&AccountId='+ document.getElementById("chatbotscript").dataset.accountid +'&Email=&VisitorName='+ callNameVal +'&MobileNo='+ countryCode + callPhoneVal +'&Message=&WidgetName=Callback', requestOptions)
                .then(response => response.text())
                .then(result => {
                  var response = JSON.parse(result);
                  if(response.responseStatusCode == 200){
                    shadowRoot.getElementById("callFormResponse").innerHTML = `<div class="successmessage">`+ callSuccess +`</div>`;
                  }else{
                    shadowRoot.getElementById("callFormResponse").innerHTML = `<div class="failmessage">`+ callFail +`</div>`;
                  }
                  setTimeout(function(){
                    shadowRoot.getElementById("callNameVal").value = "";
                    shadowRoot.getElementById("countryCode").value = "";
                    shadowRoot.getElementById("callPhoneVal").value = "";
                    shadowRoot.getElementById("callFormResponse").removeChild(shadowRoot.getElementById("callFormResponse").firstChild);
                  },3000);
                })
                .catch(error => console.log('error', error));
          }else{
            if(!callNameVal){
              shadowRoot.getElementById("callNameValError").innerHTML = "<div style='color:red'> Please Enter Name</div>"
            }
            if(!countryCode){
              shadowRoot.getElementById("countryCodeError").innerHTML = "<div style='color:red'> Please Enter Code</div>"
            }
            if(!callPhoneVal){
              shadowRoot.getElementById("callPhoneValError").innerHTML = "<div style='color:red'> Please Enter Phone</div>"
            }
          }
        });
        if(userInfo.ShowRegistrationForm == "0"){
          shadowRoot.getElementById("widget-form").children[1].style.display = "flex";
          shadowRoot.getElementById("widget-form").children[0].style.display = "none";
        }else{
          if(getStorage("registration")){
            shadowRoot.getElementById("widget-form").children[0].style.display = "none";
            shadowRoot.getElementById("widget-form").children[1].style.display = "flex";
          }else{
            shadowRoot.getElementById("widget-form").children[0].style.display = "flex";
            shadowRoot.getElementById("widget-form").children[1].style.display = "none";
          }
        }
        if(shadowRoot.getElementById("RegistrationFormHeading") && userInfo.RegistrationFormHeading){
          shadowRoot.getElementById("RegistrationFormHeading").innerHTML = userInfo.RegistrationFormHeading;
        }

        // Get all input and textarea elements
        var inputElements = shadowRoot.querySelectorAll("input, textarea");

        // Attach keypress event listener to each element
        inputElements.forEach(function(element) {
            element.addEventListener("keypress", function(e) {
                if (e.keyCode == 32) {
                    this.value = replaceWithEmojis(this.value);
                }
            });
        });
        if(!isMobileDevice()){
            shadowRoot.querySelector(".msger-inputarea").insertAdjacentHTML("beforeend", `<button class="msger-mic-btn" type="button" style="padding: 2px 0;border: 0;right: 65px;cursor:pointer;background: transparent;display:block" onclick="return chatrecordclick()" id="msger-mic-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.1197 9.11999C18.7297 9.11999 18.4197 9.42999 18.4197 9.81999V11.4C18.4197 14.94 15.5397 17.82 11.9997 17.82C8.45969 17.82 5.57969 14.94 5.57969 11.4V9.80999C5.57969 9.41999 5.26969 9.10999 4.87969 9.10999C4.48969 9.10999 4.17969 9.41999 4.17969 9.80999V11.39C4.17969 15.46 7.30969 18.81 11.2997 19.17V21.3C11.2997 21.69 11.6097 22 11.9997 22C12.3897 22 12.6997 21.69 12.6997 21.3V19.17C16.6797 18.82 19.8197 15.46 19.8197 11.39V9.80999C19.8097 9.42999 19.4997 9.11999 19.1197 9.11999Z" fill="#4A4848"/>
            <path d="M12.0001 2C9.56008 2 7.58008 3.98 7.58008 6.42V11.54C7.58008 13.98 9.56008 15.96 12.0001 15.96C14.4401 15.96 16.4201 13.98 16.4201 11.54V6.42C16.4201 3.98 14.4401 2 12.0001 2ZM13.3101 8.95C13.2401 9.21 13.0101 9.38 12.7501 9.38C12.7001 9.38 12.6501 9.37 12.6001 9.36C12.2101 9.25 11.8001 9.25 11.4101 9.36C11.0901 9.45 10.7801 9.26 10.7001 8.95C10.6101 8.64 10.8001 8.32 11.1101 8.24C11.7001 8.08 12.3201 8.08 12.9101 8.24C13.2101 8.32 13.3901 8.64 13.3101 8.95ZM13.8401 7.01C13.7501 7.25 13.5301 7.39 13.2901 7.39C13.2201 7.39 13.1601 7.38 13.0901 7.36C12.3901 7.1 11.6101 7.1 10.9101 7.36C10.6101 7.47 10.2701 7.31 10.1601 7.01C10.0501 6.71 10.2101 6.37 10.5101 6.27C11.4701 5.92 12.5301 5.92 13.4901 6.27C13.7901 6.38 13.9501 6.71 13.8401 7.01Z" fill="#4A4848"/>
            </svg>
            </button>`);
        }
        if(shadowRoot.getElementById("msger-mic-btn")){
          if(userInfo.widgetFormAdvanceSettingList.ExtCol5 == '1'){
            shadowRoot.getElementById("msger-mic-btn").style.display = 'block';
          }else{
            shadowRoot.getElementById("msger-mic-btn").style.display = 'none';
          }
        }
  debugger;
  if(shadowRoot.querySelector("#LiveChat")){
    shadowRoot.querySelector("#LiveChat").setAttribute("onclick", `appendClientCode(event,'${userInfo.LiveChatMode}')`);
  }
  if(userInfo.ShowRegistrationForm == "0"){
    shadowRoot.getElementById("widget-form").children[1].style.display = "flex";
    shadowRoot.getElementById("widget-form").children[0].style.display = "none";
  }else{
    if(getStorage("registration")){
      shadowRoot.getElementById("widget-form").children[0].style.display = "none";
      shadowRoot.getElementById("widget-form").children[1].style.display = "flex";
    }else{
      shadowRoot.getElementById("widget-form").children[0].style.display = "flex";
      shadowRoot.getElementById("widget-form").children[1].style.display = "none";
    }
  }
  if(shadowRoot.getElementById("RegistrationFormHeading") && userInfo.RegistrationFormHeading){
    shadowRoot.getElementById("RegistrationFormHeading").innerHTML = userInfo.RegistrationFormHeading;
  }

  // Get all input and textarea elements
  var inputElements = shadowRoot.querySelectorAll("input, textarea");

  // Attach keypress event listener to each element
  inputElements.forEach(function(element) {
      element.addEventListener("keypress", function(e) {
          if (e.keyCode == 32) {
              this.value = replaceWithEmojis(this.value);
          }
      });
  });
  if(!isMobileDevice()){
      shadowRoot.querySelector(".msger-inputarea").insertAdjacentHTML("beforeend", `<button class="msger-mic-btn" type="button" style="padding: 2px 0;border: 0;right: 65px;cursor:pointer;background: transparent;display:block" onclick="return chatrecordclick()" id="msger-mic-btn">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.1197 9.11999C18.7297 9.11999 18.4197 9.42999 18.4197 9.81999V11.4C18.4197 14.94 15.5397 17.82 11.9997 17.82C8.45969 17.82 5.57969 14.94 5.57969 11.4V9.80999C5.57969 9.41999 5.26969 9.10999 4.87969 9.10999C4.48969 9.10999 4.17969 9.41999 4.17969 9.80999V11.39C4.17969 15.46 7.30969 18.81 11.2997 19.17V21.3C11.2997 21.69 11.6097 22 11.9997 22C12.3897 22 12.6997 21.69 12.6997 21.3V19.17C16.6797 18.82 19.8197 15.46 19.8197 11.39V9.80999C19.8097 9.42999 19.4997 9.11999 19.1197 9.11999Z" fill="#4A4848"/>
      <path d="M12.0001 2C9.56008 2 7.58008 3.98 7.58008 6.42V11.54C7.58008 13.98 9.56008 15.96 12.0001 15.96C14.4401 15.96 16.4201 13.98 16.4201 11.54V6.42C16.4201 3.98 14.4401 2 12.0001 2ZM13.3101 8.95C13.2401 9.21 13.0101 9.38 12.7501 9.38C12.7001 9.38 12.6501 9.37 12.6001 9.36C12.2101 9.25 11.8001 9.25 11.4101 9.36C11.0901 9.45 10.7801 9.26 10.7001 8.95C10.6101 8.64 10.8001 8.32 11.1101 8.24C11.7001 8.08 12.3201 8.08 12.9101 8.24C13.2101 8.32 13.3901 8.64 13.3101 8.95ZM13.8401 7.01C13.7501 7.25 13.5301 7.39 13.2901 7.39C13.2201 7.39 13.1601 7.38 13.0901 7.36C12.3901 7.1 11.6101 7.1 10.9101 7.36C10.6101 7.47 10.2701 7.31 10.1601 7.01C10.0501 6.71 10.2101 6.37 10.5101 6.27C11.4701 5.92 12.5301 5.92 13.4901 6.27C13.7901 6.38 13.9501 6.71 13.8401 7.01Z" fill="#4A4848"/>
      </svg>
      </button>`);
  }
  if(userInfo.widgetFormAdvanceSettingList.ExtCol5 == '1'){
   shadowRoot.getElementById("msger-mic-btn").style.display = 'block';
  }else{
   shadowRoot.getElementById("msger-mic-btn").style.display = 'none';
  }
  shadowRoot.getElementById("LiveChat").style.display = 'none';
  if(userInfo.LiveChatMode == '0'){
   shadowRoot.getElementById("LiveChat").style.display = 'none';
  }else{
   shadowRoot.getElementById("LiveChat").style.display = 'block';
  }
  if(userInfo.LiveChatMode == 1){
    shadowRoot.querySelector(".live-chat-image").children[0].setAttribute("src","https://robofycdn.s3.us-west-2.amazonaws.com/widgetimages/tawk.webp");
  } else if(userInfo.LiveChatMode == 2){
    shadowRoot.querySelector(".live-chat-image").children[0].setAttribute("src","https://robofycdn.s3.us-west-2.amazonaws.com/widgetimages/intercom.webp");
  }else if(userInfo.LiveChatMode == 3){
    shadowRoot.querySelector(".live-chat-image").children[0].setAttribute("src","https://robofycdn.s3.us-west-2.amazonaws.com/widgetimages/crispchat.webp");
  }else if(userInfo.LiveChatMode == 4){
    shadowRoot.querySelector(".live-chat-image").children[0].setAttribute("src","https://robofycdn.s3.us-west-2.amazonaws.com/widgetimages/jivochat.webp");
  }else{
    if(shadowRoot.querySelector("#LiveChat")){
      shadowRoot.querySelector("#LiveChat").style.display = 'none';
    }
  }
  var chatSuggestionObj = JSON.parse(getStorage("oldChatSuggestion"));
  if(chatSuggestionObj != null && chatSuggestionObj.length > 0){
    for(var i= 0; i < chatSuggestionObj.length; i++){
        storesuggestedQuestion.push(chatSuggestionObj[i]);
      shadowRoot.querySelector(".suggetion-box").insertAdjacentHTML("beforeend", `<div class="suggestion-question" style="cursor:pointer" onclick="widgetsuggestionMessage(event)" data-message="${i}">${chatSuggestionObj[i].replace(/[#$*@]/g, '')}</div>`);
    }
    shadowRoot.querySelector(".suggetion-box").style.display = "block";
  }
  shadowRoot.querySelector(".msger-chat").scrollTop = shadowRoot.querySelector(".msger-chat").clientHeight + 300;
  if(userInfo && userInfo.widgetFormAdvanceSettingList.AccountId == "194884" && userInfo.widgetFormAdvanceSettingList.WebsiteId == "11337"){
      shadowRoot.getElementById("DefaultMessage").parentElement.parentElement.style.display = "none";
        shadowRoot.getElementById("DefaultMessageImg").parentElement.parentElement.style.display = "block";
        shadowRoot.getElementById("DefaultMessage").parentElement.parentElement.style.display = "block";
      shadowRoot.getElementById("defaultImg").setAttribute("src","https://robofycdn.s3.us-west-2.amazonaws.com/robofyimages/Screenshot+2024-02-09+115933.png");
      shadowRoot.getElementById("defaultImg").setAttribute("style","border-radius: 16px");
      shadowRoot.getElementById("DefaultMessageImg").parentElement.setAttribute("style","background: transparent;border: 0;padding: 0;width:250px");
        shadowRoot.getElementById("DefaultMessage2").parentElement.parentElement.style.display = "block";
      shadowRoot.getElementById("DefaultMessage2").innerHTML = "Je suis Fitty l'assistante virtuelle de FIT'ACTION. Je suis là pour répondre à tes questions. Je peux aussi te rediriger vers l’équipe FIT’ACTION.";
      shadowRoot.getElementById("chat-clear").innerHTML = '';
    shadowRoot.getElementById("modal-close").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 66.91" style="enable-background:new 0 0 122.88 66.91" xml:space="preserve"><g><path d="M11.68,1.95C8.95-0.7,4.6-0.64,1.95,2.08c-2.65,2.72-2.59,7.08,0.13,9.73l54.79,53.13l4.8-4.93l-4.8,4.95 c2.74,2.65,7.1,2.58,9.75-0.15c0.08-0.08,0.15-0.16,0.22-0.24l53.95-52.76c2.73-2.65,2.79-7.01,0.14-9.73 c-2.65-2.72-7.01-2.79-9.73-0.13L61.65,50.41L11.68,1.95L11.68,1.95z"></path></g></svg>';
    shadowRoot.getElementById("header-image").innerHTML = '<div style="background: #FFF;color: #42dec9;padding: 10px;border-radius: 50%;width: 25px;height: 25px;display: flex;align-items: center;justify-content: center;text-align: center;line-height: 10px;font-weight: 600;font-size: 40px;">F</div>';
    // Create a temporary container element
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = '<div id="headingTextDefault" style="background: #6acbb8;padding: 15px;display: flex;font-weight: 600;border-radius: 0 0 100% 100% / 0 0 25% 25%;">Nous répondons immédiatement</div>'; // Set the HTML content

    // Get the first child of the temporary container (the div you want to prepend)
    const divToPrepend = tempContainer.firstChild;

    // Prepend the div to .widget-chat
    shadowRoot.querySelector(".widget-chat").prepend(divToPrepend);
  }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function clearWindowChat() {
    chatBySession = [];
    duplicateId = 0;
    removeStorage("oldChat");
    deleteAllCookies();
    shadowRoot.getElementById("szTalkChatModalBox").outerHtml = mainHtml;
    Modal.reload(mainHtml);
    if(widgetdefaultMessageObj != null && widgetdefaultMessageObj.length > 0){
      let setDefaultMessage = '';
      for(var j = 0; j < widgetdefaultMessageObj.length; j++){
        if(j < 4){
          setDefaultMessage += `<button onclick="widgetdefaultMessage(event)" class="widgetdefaultMessage" data-message='`+ widgetdefaultMessageObj[j].Question+ `'>`+ widgetdefaultMessageObj[j].DisplayQuestion+ `</button>`;
        }
      }
      if(shadowRoot.getElementById("footer-items")){
        shadowRoot.getElementById("footer-items").innerHTML = shadowRoot.getElementById("footer-items").innerHTML + setDefaultMessage;
      }
    }
    setValuesApi();
    showInWindow(mainHtml);
  }
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;";
}

function deleteCookie(cookieName) {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    if (cookie.trim().startsWith(cookieName + "=")) {
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      return;
    }
  }
}

function formOpen(obj,form){
  var bottomBar = shadowRoot.getElementById("bottom-bar");
  var allForm = shadowRoot.getElementById("allForm");
  var children = allForm.children;
  var Bottomchildren = bottomBar.children;
  for (var i = 0; i < children.length; i++) {
    children[i].style.display = "none";  
  }
  for (var i = 0; i < Bottomchildren.length; i++) {
    Bottomchildren[i].classList.remove("active"); 
  }
  shadowRoot.querySelectorAll("."+form)[0].style.display = "flex";
  obj.classList.add("active");
}

function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  }
}

function widgetdefaultMessage(event){
  chatDefaultMessageClick(event.target.dataset.message);
}

function widgetsuggestionMessage(event){
  chatDefaultMessageClick(storesuggestedQuestion[event.target.dataset.message]);
}

async function appendClientCode(event,code){
  document.getElementById("MainWidgetAppDiv").style.display = "none";
  if(!codeBinded){
    eval(userInfo.LiveChatCode);
    await sleep(2500);
    codeBinded = true;
  }
  if(code == 1){
    if(window.Tawk_API){
      window.Tawk_API.toggle();
    }
    document.getElementById("MainWidgetAppDiv").style.display = "none";
    Modal.close();
  }
  if(code == 2){
    if(window.Intercom){
      Intercom('show');
      Intercom('onHide', function() {
        document.getElementById("MainWidgetAppDiv").style.display = "block";
      });
    }
    document.getElementById("MainWidgetAppDiv").style.display = "none";
    Modal.close();
  }
  if(code == 3){
    if(window.$crisp){
      $crisp.push(["do", "chat:show"]);
      $crisp.push(["do", "chat:toggle"]);
      $crisp.push(["on", "chat:closed", function(){
      $crisp.push(["do", "chat:hide"]);
        document.getElementById("MainWidgetAppDiv").style.display = "block";
      }])
    }
    document.getElementById("MainWidgetAppDiv").style.display = "none";
    Modal.close();
  }
  if(code == 4){
    if(window.jivo_api){
      showJivochat();
    }
    document.getElementById("MainWidgetAppDiv").style.display = "none";
    Modal.close();
  }
}

function showJivochat(){
    let apiResult = jivo_api.open();
    document.getElementsByTagName('jdiv')[0].style.display = "block";
}

function hideJivochat(){
  document.getElementsByTagName('jdiv')[0].style.display = "none";
}

function jivo_onClose() {
  document.getElementById("MainWidgetAppDiv").style.display = "block";
  hideJivochat();
}

var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();

Tawk_API.onLoad = function(){
  Tawk_API.hideWidget();
}

Tawk_API.onChatMinimized = function() {
  Tawk_API.hideWidget();
  document.getElementById("MainWidgetAppDiv").style.display = "block";
}

/**
 * Displays a modal popup with the given text and automatically closes it after a specified time.
 *
 * @param {string} popupText - The text to display in the popup.
 * @param {number} popupCloseTimer - The time (in milliseconds) before automatically closing the popup.
 * @returns {void}
 */
function openPopup(popupText, popupCloseTimer) {
    const modalOptions = {
      content: popupText,
      draggable: false,
      closeAfter: popupCloseTimer,
      openCallback: function() {
        if(shadowRoot.getElementById("WelcomeMessages")){
          shadowRoot.getElementById("WelcomeMessages").remove();
        }
        if (getStorage("oldChat")) {
          shadowRoot.getElementById("CallBackAppMainDiv").style.display = 'none';
          chatReady();
        } else {
          if(shadowRoot.getElementById("modal-content")){
            shadowRoot.getElementById("CallBackAppMainDiv").style.display = 'none';
            shadowRoot.getElementById("modal-content").innerHTML = popupText;
          }
        }
        if(widgetdefaultMessageObj != null && widgetdefaultMessageObj.length > 0){
          let setDefaultMessage = '';
          for(var j = 0; j < widgetdefaultMessageObj.length; j++){
            if(j < 4){
              setDefaultMessage += `<button onclick="widgetdefaultMessage(event)" class="widgetdefaultMessage" data-message='`+ widgetdefaultMessageObj[j].Question+ `'>`+ widgetdefaultMessageObj[j].DisplayQuestion+ `</button>`;
            }
          }
          if(shadowRoot.getElementById("footer-items")){
            shadowRoot.getElementById("footer-items").innerHTML = shadowRoot.getElementById("footer-items").innerHTML + setDefaultMessage;
          }
        }
        debugger;
        if(shadowRoot.querySelector("#LiveChat")){
          shadowRoot.querySelector("#LiveChat").setAttribute("onclick", `appendClientCode(event,'${userInfo.LiveChatMode}')`);
        }
        shadowRoot.appendChild(shadowDiv);
        setValuesApi();
        scrollChatWindowBottom();
        shadowRoot.querySelectorAll('#szTalkChatModalBox input#PlaceHolderText').forEach(input => input.addEventListener('keydown', e => e.stopPropagation()));
        var bottomBar = shadowRoot.getElementById("bottom-bar");
        var activeTabs = 0;
        if(widgetFormAppearanceList != null && widgetFormAppearanceList.length > 0 && bottomBar){
          for (var i = 0; i < widgetFormAppearanceList.length; i++) {
            var widgetName = widgetFormAppearanceList[i].WidgetName;
            var targetElement = bottomBar.querySelector("[data-form='" + widgetName.trim() + "-form']");
            if (targetElement) {
              targetElement.querySelector(".WidgetName").innerText = widgetFormAppearanceList[i].WidgetName;
              if(widgetFormAppearanceList[i].status == 1){
                targetElement.style.order = widgetFormAppearanceList[i].sortIndex;
              }else{
                targetElement.style.display = "none";
              }
            }
            if(widgetFormAppearanceList[i].WidgetName == "WhatsApp"){
              if(widgetFormAppearanceList[i].status){
                activeTabs++;
                shadowRoot.getElementById("WhatsappForm").style.display = "block";
                if(widgetFormAppearanceList[i].buttontext){
                  shadowRoot.getElementById("whatsappButtonVal").textContent = widgetFormAppearanceList[i].buttontext;
                }else{
                  shadowRoot.getElementById("whatsappButtonVal").textContent = "WhatsApp Us";
                }
                if(widgetFormAppearanceList[i].tooltiptext){
                  shadowRoot.getElementById("WhatsappForm").children[1].textContent = widgetFormAppearanceList[i].tooltiptext;
                }else{
                  shadowRoot.getElementById("WhatsappForm").children[1].textContent = "WhatsApp";
                }
                shadowRoot.getElementById("whatsappButtonVal").href = "https://wa.me/"+ widgetFormAppearanceList[i].WhatsAppNo1 + "?text=" + widgetFormAppearanceList[i].DefaultMessage;
                shadowRoot.getElementById("WhatsappForm").style.order = widgetFormAppearanceList[i].sortIndex;
              }
            }
            if(widgetFormAppearanceList[i].WidgetName == "BookDemo"){
              if(widgetFormAppearanceList[i].status){
                activeTabs++;
                shadowRoot.getElementById("MeetingsForm").style.display = "block";
                if(widgetFormAppearanceList[i].buttontext){
                  shadowRoot.getElementById("meetingsButtonVal").textContent = widgetFormAppearanceList[i].buttontext;
                }else{
                  shadowRoot.getElementById("meetingsButtonVal").textContent = "Calendar";
                }
                if(widgetFormAppearanceList[i].tooltiptext){
                  shadowRoot.getElementById("MeetingsForm").children[1].textContent = widgetFormAppearanceList[i].tooltiptext;
                }else{
                  shadowRoot.getElementById("MeetingsForm").children[1].textContent = "Meetings";
                }
                shadowRoot.getElementById("meetingsButtonVal").href = widgetFormAppearanceList[i].RedirectLink;
                shadowRoot.getElementById("MeetingsForm").style.order = widgetFormAppearanceList[i].sortIndex;
              }
            }
            if(widgetFormAppearanceList[i].WidgetName == "FBMessenger"){
              if(widgetFormAppearanceList[i].status){
                activeTabs++;
                shadowRoot.getElementById("MessengerForm").style.display = "block";
                if(widgetFormAppearanceList[i].buttontext){
                  shadowRoot.getElementById("FacebookButtonVal").textContent = widgetFormAppearanceList[i].buttontext;
                }else{
                  shadowRoot.getElementById("FacebookButtonVal").textContent = "Send a Facebook Message";
                }
                if(widgetFormAppearanceList[i].tooltiptext){
                  shadowRoot.getElementById("MessengerForm").children[1].textContent = widgetFormAppearanceList[i].tooltiptext;
                }else{
                  shadowRoot.getElementById("MessengerForm").children[1].textContent = "Facebook";
                }
                shadowRoot.getElementById("FacebookButtonVal").href = "https://m.me/"+ widgetFormAppearanceList[i].FBMessengerSocialId + "?text=" + widgetFormAppearanceList[i].DefaultMessage;
                shadowRoot.getElementById("MessengerForm").style.order = widgetFormAppearanceList[i].sortIndex;
              }
            }
            if(widgetFormAppearanceList[i].WidgetName == "Email"){
              if(widgetFormAppearanceList[i].status){
                activeTabs++;
                shadowRoot.getElementById("EmailForm").style.display = "block";
                if(widgetFormAppearanceList[i].HeadingText){
                  shadowRoot.getElementById("emailHeadingVal").textContent = widgetFormAppearanceList[i].HeadingText;
                }else{
                  shadowRoot.getElementById("emailHeadingVal").textContent = "Write an Email to us";
                }
                if(widgetFormAppearanceList[i].Placeholder1){
                  shadowRoot.getElementById("emailNameVal").placeholder = widgetFormAppearanceList[i].Placeholder1;
                }else{
                  shadowRoot.getElementById("emailNameVal").textContent = "Name";
                }
                if(widgetFormAppearanceList[i].Placeholder2){
                  shadowRoot.getElementById("emailVal").placeholder = widgetFormAppearanceList[i].Placeholder2;
                }else{
                  shadowRoot.getElementById("emailVal").placeholder = "Email";
                }
                if(widgetFormAppearanceList[i].Placeholder2){
                  shadowRoot.getElementById("emailMessageVal").placeholder = widgetFormAppearanceList[i].Placeholder3;
                }else{
                  shadowRoot.getElementById("emailMessageVal").placeholder = "Enter your message";
                }
                if(widgetFormAppearanceList[i].buttontext){
                shadowRoot.getElementById("emailButtonVal").textContent = widgetFormAppearanceList[i].buttontext;
                }else{
                  shadowRoot.getElementById("emailButtonVal").textContent = "Submit";
                }
                if(widgetFormAppearanceList[i].tooltiptext){
                  shadowRoot.getElementById("EmailForm").children[1].textContent = widgetFormAppearanceList[i].tooltiptext;
                }else{
                  shadowRoot.getElementById("EmailForm").children[1].textContent = "Email";
                }
                shadowRoot.getElementById("EmailForm").style.order = widgetFormAppearanceList[i].sortIndex;
                if(widgetFormAppearanceList[i].SuccessText){
                  emailSuccess = widgetFormAppearanceList[i].SuccessText;
                }else{
                  emailSuccess = "Success";
                }
                if(widgetFormAppearanceList[i].FailureText){
                  emailFail = widgetFormAppearanceList[i].FailureText;
                }else{
                  emailFail = "Fail"
                }
              }
            }
            if(widgetFormAppearanceList[i].WidgetName == "CallBack"){
              if(widgetFormAppearanceList[i].status){
                activeTabs++;
                shadowRoot.getElementById("CallForm").style.display = "block";
                if(widgetFormAppearanceList[i].HeadingText){
                  shadowRoot.getElementById("callHeading").textContent = widgetFormAppearanceList[i].HeadingText;
                }else{
                  shadowRoot.getElementById("callHeading").textContent = "Request a call back";
                }
                if(widgetFormAppearanceList[i].Placeholder1){
                  shadowRoot.getElementById("callNameVal").placeholder = widgetFormAppearanceList[i].Placeholder1;
                }else{
                  shadowRoot.getElementById("callNameVal").placeholder = "Name"
                }
                if(widgetFormAppearanceList[i].Placeholder2){
                  shadowRoot.getElementById("callPhoneVal").placeholder = widgetFormAppearanceList[i].Placeholder2;
                }else{
                  shadowRoot.getElementById("callPhoneVal").placeholder = "Phone number";
                }
                if(widgetFormAppearanceList[i].buttontext){
                  shadowRoot.getElementById("callButtonVal").textContent = widgetFormAppearanceList[i].buttontext;
                }else{
                  shadowRoot.getElementById("callButtonVal").textContent = "Submit";
                }
                if(widgetFormAppearanceList[i].tooltiptext){
                  shadowRoot.getElementById("CallForm").children[1].textContent = widgetFormAppearanceList[i].tooltiptext;
                }else{
                  shadowRoot.getElementById("CallForm").children[1].textContent = "Email";
                }
                shadowRoot.getElementById("CallForm").style.order = widgetFormAppearanceList[i].sortIndex;
                callSuccess = widgetFormAppearanceList[i].SuccessText;
                callFail = widgetFormAppearanceList[i].FailureText;
              }
            }
          }
        }else{
          shadowRoot.getElementById("bottom-bar").style.display = "none";
        }
        shadowRoot.getElementById("profileSet").src = userInfo.ChatbotIcon;
        if(activeTabs == 0){
          var barItems = shadowRoot.querySelectorAll(".bar-item");
          if(shadowRoot.getElementById("bottom-bar")){
            shadowRoot.getElementById("bottom-bar").style.display = "none";
          }
          barItems.forEach(function(item) {
            item.style.display = "none";
          });
        }
        if(shadowRoot.getElementById("ChatbotForm")){
          if(userInfo.WidgetName){
            shadowRoot.getElementById("ChatbotForm").children[1].textContent = userInfo.WidgetName;
          }else{
            shadowRoot.getElementById("ChatbotForm").children[1].textContent = "Chatbot";
          }
        }
        if(shadowRoot.getElementById("registationForm")){
          shadowRoot.getElementById("registationForm").addEventListener("submit", function(event){
            event.preventDefault();
            var registratorName = shadowRoot.getElementById("registrationNameVal").value;
            var registratorEmail = shadowRoot.getElementById("registratorEmail").value;
            // var registratorMobile = shadowRoot.getElementById("registratorMobile").value;
            // var registratorMessage = shadowRoot.getElementById("registratorMessage").value;
            if(registratorName && registratorEmail){
              const widgetraw = JSON.stringify({
                "Id": "",
                "WebsiteId":  document.getElementById("chatbotscript").dataset.websiteid,
                "AccountId":  document.getElementById("chatbotscript").dataset.accountid,
                "Email": registratorEmail,
                "VisitorName": registratorName,
                "MobileNo": "",
                "Message": "",
                "WidgetName": "Registration"
              })
              const requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: widgetraw
              };
              fetch(baseUrl + '/save-widget-customer-form-details?Id=&WebsiteId='+ document.getElementById("chatbotscript").dataset.websiteid +'&AccountId='+ document.getElementById("chatbotscript").dataset.accountid +'&Email='+ registratorEmail +'&VisitorName='+ registratorName +'&MobileNo=&Message=&WidgetName=Registration', requestOptions)
                .then(response => response.text())
                .then(result => {
                  var response = JSON.parse(result);
                  if(response.responseStatusCode == 200){
                    shadowRoot.getElementById("registrationFormResponse").innerHTML = `<div class="successmessage">`+ emailSuccess +`</div>`;
                    setStorage("registration",true,30);
                    if(getStorage("registration")){
                      shadowRoot.getElementById("widget-form").children[0].style.display = "none";
                      shadowRoot.getElementById("widget-form").children[1].style.display = "flex";
                    }else{
                      shadowRoot.getElementById("widget-form").children[0].style.display = "flex";
                      shadowRoot.getElementById("widget-form").children[1].style.display = "none";
                    }
                  }else{
                    shadowRoot.getElementById("registrationFormResponse").innerHTML = `<div class="failemessage">`+ emailFail +`</div>`;
                  }
                  setTimeout(function(){
                    shadowRoot.getElementById("registrationNameVal").value = '';
                    shadowRoot.getElementById("registratorEmail").value = '';
                    shadowRoot.getElementById("registrationFormResponse").removeChild(shadowRoot.getElementById("registrationFormResponse").firstChild);
                  },3000);
                })
                .catch(error => console.log('error', error));
            }else{
              if(!registratorName){
                shadowRoot.getElementById("registrationNameValError").innerHTML = "<div style='color:red'> Please Enter Name</div>"
              }
              if(!registratorEmail){
                shadowRoot.getElementById("registrationEmailValError").innerHTML = "<div style='color:red'> Please Enter Email</div>"
              }
            }
          });
        }
        if(shadowRoot.getElementById("emailFormSubmit")){
          shadowRoot.getElementById("emailFormSubmit").addEventListener("submit", function(event){
            event.preventDefault();
            var emailNameVal = shadowRoot.getElementById("emailNameVal").value;
            var emailVal = shadowRoot.getElementById("emailVal").value;
            var emailMessageVal = shadowRoot.getElementById("emailMessageVal").value;
            if(emailNameVal && emailVal && emailMessageVal){
              const widgetraw = JSON.stringify({
                "Id": "",
                "WebsiteId":  document.getElementById("chatbotscript").dataset.websiteid,
                "AccountId":  document.getElementById("chatbotscript").dataset.accountid,
                "Email": emailVal,
                "VisitorName": emailNameVal,
                "MobileNo": "",
                "Message": emailMessageVal,
                "WidgetName": "Email"
              })
              const requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: widgetraw
              };
              fetch(baseUrl + '/save-widget-customer-form-details?Id=&WebsiteId='+ document.getElementById("chatbotscript").dataset.websiteid +'&AccountId='+ document.getElementById("chatbotscript").dataset.accountid +'&Email='+ emailVal +'&VisitorName='+ emailNameVal +'&MobileNo=&Message='+ emailMessageVal +'&WidgetName=Email', requestOptions)
                .then(response => response.text())
                .then(result => {
                  var response = JSON.parse(result);
                  if(response.responseStatusCode == 200){
                    shadowRoot.getElementById("emailFormResponse").innerHTML = `<div class="successmessage">`+ emailSuccess +`</div>`;
                  }else{
                    shadowRoot.getElementById("emailFormResponse").innerHTML = `<div class="failmessage">`+ emailFail +`</div>`;
                  }
                  setTimeout(function(){
                    shadowRoot.getElementById("emailNameVal").value = "";
                    shadowRoot.getElementById("emailVal").value = "";
                    shadowRoot.getElementById("emailMessageVal").value = "";
                    shadowRoot.getElementById("emailFormResponse").removeChild(shadowRoot.getElementById("emailFormResponse").firstChild);
                  },3000);
                })
                .catch(error => console.log('error', error));
            }else{
              if(!emailNameVal){
                shadowRoot.getElementById("emailNameValError").innerHTML = "<div style='color:red'> Please Enter Name</div>"
              }
              if(!emailVal){
                shadowRoot.getElementById("emailValError").innerHTML = "<div style='color:red'> Please Enter Email</div>"
              }
              if(!emailMessageVal){
                shadowRoot.getElementById("emailMessageValError").innerHTML = "<div style='color:red'> Please Enter Message</div>"
              }
            }
          });
        }
        if(shadowRoot.getElementById("callFormSubmit")){
          shadowRoot.getElementById("callFormSubmit").addEventListener("submit", function(event){
          event.preventDefault();
          var callNameVal = shadowRoot.getElementById("callNameVal").value;
          var countryCode = shadowRoot.getElementById("countryCode").value;
          var callPhoneVal = shadowRoot.getElementById("callPhoneVal").value;
          if(callNameVal && countryCode && callPhoneVal){
              const widgetraw = JSON.stringify({
                "Id": "",
                "WebsiteId":  document.getElementById("chatbotscript").dataset.websiteid,
                "AccountId":  document.getElementById("chatbotscript").dataset.accountid,
                "Email": "",
                "VisitorName": callNameVal,
                "MobileNo": countryCode + callPhoneVal,
                "Message": "",
                "WidgetName": "Callback"
              });
              const requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: widgetraw
              };
              fetch(baseUrl + '/save-widget-customer-form-details?Id=&WebsiteId='+ document.getElementById("chatbotscript").dataset.websiteid +'&AccountId='+ document.getElementById("chatbotscript").dataset.accountid +'&Email=&VisitorName='+ callNameVal +'&MobileNo='+ countryCode + callPhoneVal +'&Message=&WidgetName=Callback', requestOptions)
                .then(response => response.text())
                .then(result => {
                  var response = JSON.parse(result);
                  if(response.responseStatusCode == 200){
                    shadowRoot.getElementById("callFormResponse").innerHTML = `<div class="successmessage">`+ callSuccess +`</div>`;
                  }else{
                    shadowRoot.getElementById("callFormResponse").innerHTML = `<div class="failmessage">`+ callFail +`</div>`;
                  }
                  setTimeout(function(){
                    shadowRoot.getElementById("callNameVal").value = "";
                    shadowRoot.getElementById("countryCode").value = "";
                    shadowRoot.getElementById("callPhoneVal").value = "";
                    shadowRoot.getElementById("callFormResponse").removeChild(shadowRoot.getElementById("callFormResponse").firstChild);
                  },3000);
                })
                .catch(error => console.log('error', error));
          }else{
            if(!callNameVal){
              shadowRoot.getElementById("callNameValError").innerHTML = "<div style='color:red'> Please Enter Name</div>"
            }
            if(!countryCode){
              shadowRoot.getElementById("countryCodeError").innerHTML = "<div style='color:red'> Please Enter Code</div>"
            }
            if(!callPhoneVal){
              shadowRoot.getElementById("callPhoneValError").innerHTML = "<div style='color:red'> Please Enter Phone</div>"
            }
          }
        });
      }

        if(shadowRoot.getElementById("bottom-bar").style.display !== 'none'){
          shadowRoot.querySelectorAll(".msger-inputarea").forEach(function(item) {
            item.style.padding = "10px";
          });
        }else{
          shadowRoot.querySelectorAll(".msger-inputarea").forEach(function(item) {
            item.style.padding = "10px 10px 35px";
          });
        }
        if(userInfo.ShowRegistrationForm == "0"){
          shadowRoot.getElementById("widget-form").children[1].style.display = "flex";
          shadowRoot.getElementById("widget-form").children[0].style.display = "none";
        }else{
          if(getStorage("registration")){
            shadowRoot.getElementById("widget-form").children[0].style.display = "none";
            shadowRoot.getElementById("widget-form").children[1].style.display = "flex";
          }else{
            shadowRoot.getElementById("widget-form").children[0].style.display = "flex";
            shadowRoot.getElementById("widget-form").children[1].style.display = "none";
          }
        }
        if(shadowRoot.getElementById("RegistrationFormHeading") && userInfo.RegistrationFormHeading){
          shadowRoot.getElementById("RegistrationFormHeading").innerHTML = userInfo.RegistrationFormHeading;
        }

        // Get all input and textarea elements
        var inputElements = shadowRoot.querySelectorAll("input, textarea");

        // Attach keypress event listener to each element
        inputElements.forEach(function(element) {
            element.addEventListener("keypress", function(e) {
                if (e.keyCode == 32) {
                    this.value = replaceWithEmojis(this.value);
                }
            });
        });
      },
      closeCallback: function() {
        shadowRoot.getElementById("CallBackAppMainDiv").style.display = 'block';
        try {
          shadowRoot.getElementById("modal-container").style.display = "none";
        } catch (e) {
          console.error("Error closing popup:", e);
        }
      }
    };
  
    Modal.open(modalOptions);
}

function DetectKey(obj, e) {
  if (e.currentTarget.value == '' && e.keyCode == 13) {
      e.preventDefault();
  }
  if (e.keyCode == 16) {
      ctrl = true;
  }
  if (e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault();
      chatsubmitclick(e);
  }
}


function textAreaAdjust(element) {
  if(element.value.length >= 2){
    shadowRoot.querySelector(".msger-send-btn").removeAttribute('disabled');
  }else{
    shadowRoot.querySelector(".msger-send-btn").setAttribute('disabled',true);
  }
  element.style.height = "1px";
  element.style.height = Math.min(element.scrollHeight, 100) + "px";
}

function init() {
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ||  window.mozSpeechRecognition || window.msSpeechRecognition;
  if (('SpeechRecognition' in window || 'webkitSpeechRecognition' in window || 'mozSpeechRecognition' in window || 'msSpeechRecognition' in window)) {
    let speech = {
      enabled: true,
      listening: false,
      recognition: new window.SpeechRecognition(),
      text: ''
    }
    speech.recognition.continuous = true;
    speech.recognition.interimResults = true;
    speech.recognition.lang = 'en-US';
    speech.recognition.onstart = function() {
      // Focus on the input field when speech recognition starts
        const inputField = shadowRoot.querySelector(".msger-input");
        if (inputField) {
            inputField.focus();
            // Start typing animation
            const transcript = "Listening..."; // Initial message while waiting for recognition
            let index = 0;
            inputField.value = '';
            const typingInterval = setInterval(function() {
                inputField.value += transcript[index];
                index++;
                if (index >= transcript.length) {
                    clearInterval(typingInterval);
                }
            }, 100); // Adjust typing speed as needed (milliseconds)
        }
    };
    speech.recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript;
      shadowRoot.querySelector(".msger-input").value = transcript;
    };
    speech.recognition.onend = function() {
      console.log('Speech recognition ended.');
    };

    speech.recognition.start();
  }
}

function chatrecordclick(event){
    init();

    // recognition.onresult = function(event) {
    //   const transcript = event.results[0][0].transcript;
    //   shadowRoot.querySelector(".msger-input").value = transcript;
    // };
}

function setValuesApi(){
  if(shadowRoot.getElementById("HeadingText")){
    shadowRoot.getElementById("HeadingText").innerText = userInfo.HeadingText;
  }
  if(shadowRoot.getElementById("DefaultMessage")){
    shadowRoot.getElementById("DefaultMessage").innerText = userInfo.DefaultMessage;
  }
  if(shadowRoot.getElementById("PlaceHolderText")){
    shadowRoot.getElementById("PlaceHolderText").placeholder = userInfo.PlaceHolderText;
  }
    if (shadowRoot.getElementById("PoweredBy")) {
        if (userInfo.PoweredBy != 'robofy') {
            shadowRoot.getElementById("PoweredBy").innerHTML = `<div>Powered By ` + userInfo.PoweredBy + `</div>`;
        } else {
            shadowRoot.getElementById("PoweredBy").innerHTML = `<a target='_black' href='https://www.robofy.ai/?utm_source=widget&utm_medium=poweredby&utm_campaign=` + window.location.origin + `'>Powered By ` + userInfo.PoweredBy + `</a>`;
        }
  }
}
function chatReady(){
    var modalContent = shadowRoot.querySelector(".msger-chat");
    var chatObj = JSON.parse(getStorage("oldChat"));
    chatBySession = chatObj;
    var htmlReady = "";
    htmlReady += `<div class="msg left-msg"><div class="msg-bubble"><div class="msg-text" style="word-break: break-word;">`+ defaultMessage +`</div></div></div>`;
    
    for(var i = 0; i < chatObj.length; i++){
        var date = new Date(chatObj[i].datetime);
        // const formattedDate = date.toLocaleString('en-GB', {
        //     day: '2-digit',
        //     month: '2-digit',
        //     year: 'numeric',
        //     hour: '2-digit',
        //     minute: '2-digit',
        //     hour12: true
        //   });
        var formattedDate = date.toLocaleString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
        var url = chatObj[i].message;
        try{
          if (containsMarkupLink(url)) {
            url = markdownToHtml(url);
          } else if(containsLink(url)) {
            url = convertUrlToLink(url);
          }else{
            url = markdownToHtml(url);
          }
        }catch(ex){
          url = markdownToHtml(url);
        }
        url = replaceWithEmojis(url);
        if(chatObj[i].from == "right"){
            htmlReady += `<div class="msg `+ chatObj[i].from +`-msg"><div class="msg-bubble"><div class="msg-text" style="word-break: break-word;">`+ url +`<span class="msg-info-time" style='text-align:right'>`+ formattedDate +`</span></div></div></div>`;
        }else{
            if(chatObj[i].MessageId && chatObj[i].MessageId.startsWith('00')){
                htmlReady += `<div class="msg `+ chatObj[i].from +`-msg"><div class="msg-bubble"><div class="msg-text" style="word-break: break-word;">`+ url +`<span class="msg-info-time" style='text-align:left;padding-left:0'>`+ formattedDate +`</span></div></div></div>`;
            }else{
                if(chatObj[i].vote == '0'){
                    htmlReady += `<div class="msg `+ chatObj[i].from +`-msg"><div class="msg-bubble"><div class="msg-text" style="word-break: break-word;">`+ url +`<span class="msg-info-time" style='text-align:left;padding-left:0'>`+ formattedDate +`</span></div></div><div class='display-flex-item'><div class='thumbs-down-icon active' data-vote='`+ chatObj[i].vote +`' data-messageid='`+ chatObj[i].MessageId + `'  onclick="userVote('`+ chatObj[i].MessageId + `','0')"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M13.7665 4.7085L11.1832 2.7085C10.8499 2.37516 10.0999 2.2085 9.59986 2.2085H6.43319C5.43319 2.2085 4.34986 2.9585 4.09986 3.9585L2.09986 10.0418C1.68319 11.2085 2.43319 12.2085 3.68319 12.2085H7.01653C7.51653 12.2085 7.93319 12.6252 7.84986 13.2085L7.43319 15.8752C7.26653 16.6252 7.76653 17.4585 8.51653 17.7085C9.18319 17.9585 10.0165 17.6252 10.3499 17.1252L13.7665 12.0418" stroke="#FC3333" stroke-width="1.5" stroke-miterlimit="10"/><path d="M18.0168 4.70833V12.875C18.0168 14.0417 17.5168 14.4583 16.3501 14.4583H15.5168C14.3501 14.4583 13.8501 14.0417 13.8501 12.875V4.70833C13.8501 3.54167 14.3501 3.125 15.5168 3.125H16.3501C17.5168 3.125 18.0168 3.54167 18.0168 4.70833Z" stroke="#FC3333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div></div>`;
                }else if(chatObj[i].vote == '100'){
                    htmlReady += `<div class="msg `+ chatObj[i].from +`-msg"><div class="msg-bubble"><div class="msg-text" style="word-break: break-word;">`+ url +`<span class="msg-info-time" style='text-align:left;padding-left:0'>`+ formattedDate +`</span></div></div><div class='display-flex-item'><div class='thumbs-up-icon active' data-vote='`+ chatObj[i].vote +`' data-messageid='`+ chatObj[i].MessageId +`'  onclick="userVote('`+ chatObj[i].MessageId +`','100')">\n<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6.2334 15.2916L8.81673 17.2916C9.15006 17.6249 9.90006 17.7916 10.4001 17.7916H13.5667C14.5667 17.7916 15.6501 17.0416 15.9001 16.0416L17.9001 9.95823C18.3167 8.79156 17.5667 7.79156 16.3167 7.79156H12.9834C12.4834 7.79156 12.0667 7.37489 12.1501 6.79156L12.5667 4.12489C12.7334 3.37489 12.2334 2.54156 11.4834 2.29156C10.8167 2.04156 9.9834 2.37489 9.65006 2.87489L6.2334 7.95823" stroke="#1EA185" stroke-width="1.5" stroke-miterlimit="10"/><path d="M1.9834 15.2915V7.12484C1.9834 5.95817 2.4834 5.5415 3.65007 5.5415H4.4834C5.65006 5.5415 6.15007 5.95817 6.15007 7.12484V15.2915C6.15007 16.4582 5.65006 16.8748 4.4834 16.8748H3.65007C2.4834 16.8748 1.9834 16.4582 1.9834 15.2915Z" stroke="#1EA185" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div></div>`;
                }else{
                    htmlReady += `<div class="msg `+ chatObj[i].from +`-msg"><div class="msg-bubble"><div class="msg-text" style="word-break: break-word;">`+ url +`<span class="msg-info-time" style='text-align:left;padding-left:0'>`+ formattedDate +`</span></div></div><div class='display-flex-item'><div class='thumbs-up-icon' data-vote='`+ chatObj[i].vote +`' data-messageid='`+ chatObj[i].MessageId +`'  onclick="userVote('`+ chatObj[i].MessageId +`','100')">\n<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6.2334 15.2916L8.81673 17.2916C9.15006 17.6249 9.90006 17.7916 10.4001 17.7916H13.5667C14.5667 17.7916 15.6501 17.0416 15.9001 16.0416L17.9001 9.95823C18.3167 8.79156 17.5667 7.79156 16.3167 7.79156H12.9834C12.4834 7.79156 12.0667 7.37489 12.1501 6.79156L12.5667 4.12489C12.7334 3.37489 12.2334 2.54156 11.4834 2.29156C10.8167 2.04156 9.9834 2.37489 9.65006 2.87489L6.2334 7.95823" stroke="#1EA185" stroke-width="1.5" stroke-miterlimit="10"/><path d="M1.9834 15.2915V7.12484C1.9834 5.95817 2.4834 5.5415 3.65007 5.5415H4.4834C5.65006 5.5415 6.15007 5.95817 6.15007 7.12484V15.2915C6.15007 16.4582 5.65006 16.8748 4.4834 16.8748H3.65007C2.4834 16.8748 1.9834 16.4582 1.9834 15.2915Z" stroke="#1EA185" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class='thumbs-down-icon' data-vote='`+ chatObj[i].vote +`' data-messageid='`+ chatObj[i].MessageId + `'  onclick="userVote('`+ chatObj[i].MessageId + `','0')"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M13.7665 4.7085L11.1832 2.7085C10.8499 2.37516 10.0999 2.2085 9.59986 2.2085H6.43319C5.43319 2.2085 4.34986 2.9585 4.09986 3.9585L2.09986 10.0418C1.68319 11.2085 2.43319 12.2085 3.68319 12.2085H7.01653C7.51653 12.2085 7.93319 12.6252 7.84986 13.2085L7.43319 15.8752C7.26653 16.6252 7.76653 17.4585 8.51653 17.7085C9.18319 17.9585 10.0165 17.6252 10.3499 17.1252L13.7665 12.0418" stroke="#FC3333" stroke-width="1.5" stroke-miterlimit="10"/><path d="M18.0168 4.70833V12.875C18.0168 14.0417 17.5168 14.4583 16.3501 14.4583H15.5168C14.3501 14.4583 13.8501 14.0417 13.8501 12.875V4.70833C13.8501 3.54167 14.3501 3.125 15.5168 3.125H16.3501C17.5168 3.125 18.0168 3.54167 18.0168 4.70833Z" stroke="#FC3333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div></div>`;
                }
            }
        }
    }
    modalContent.innerHTML = htmlReady;
}

function containsMarkupLink(str) {
  // Regular expression to match anchor tags in Markdown/HTML with space between [] and ()
  var linkRegex = new RegExp("\\[\\s*([^\\]]+)\\s*\\]\\s*\\(\\s*([^)]+)\\s*\\)", "g");

  // Test the string against the regex
  return linkRegex.test(str);
}

function containsLink(str) {
  // Regular expression to match anchor tags in Markdown/HTML
  const linkRegex = new RegExp("(?:(?:https?|ftp):\\/\\/)?(?:www\\.)?\\w{2,}\\.[\\w-]+(?:\\.[\\w-]+)*(?:[\\?\\&\\/][^\\]\\(\\s]*)?(?<![()\\[\\]])", "g");

  // Regular expression to match common phone number formats
  const phoneRegex = /(\d{1,4}[-\s]?)?(\()?\d{3}(\))?[-\s]?\d{3}[-\s]?\d{4}/;

  // Test the string against both regex patterns
  return linkRegex.test(str) || phoneRegex.test(str);
}

/**
 * Clear the chat session data and reset the chat window to its initial state
 */
function clearChat() {
    chatBySession = [];
    duplicateId = 0;
    removeStorage("oldChat");
    deleteAllCookies();
    shadowRoot.getElementById("szTalkChatModalBox").outerHtml = mainHtml;
    Modal.reload(mainHtml);
    if(widgetdefaultMessageObj != null && widgetdefaultMessageObj.length > 0){
      let setDefaultMessage = '';
      for(var j = 0; j < widgetdefaultMessageObj.length; j++){
          setDefaultMessage += `<button onclick="widgetdefaultMessage(event)" class="widgetdefaultMessage" data-message='`+ widgetdefaultMessageObj[j].Question+ `'>`+ widgetdefaultMessageObj[j].DisplayQuestion+ `</button>`;
      }
      if(shadowRoot.getElementById("footer-items")){
        shadowRoot.getElementById("footer-items").innerHTML = shadowRoot.getElementById("footer-items").innerHTML + setDefaultMessage;
      }
    }
    setValuesApi();
    openPopup(mainHtml,9000);
  }
  
  /**
   * Remove a key from localStorage and its expiration key
   * @param {string} key - The key to remove
   * @returns {boolean} - Returns true if operation succeeded, false otherwise
   */
  function removeStorage(key) {
    try {
      localStorage.removeItem(key);
      localStorage.removeItem(`${key}_expiresIn`);
    } catch (e) {
      console.log(`removeStorage: Error removing key [${key}] from localStorage: ${e}`);
      return false;
    }
    return true;
  }
  
  /**
   * Get a value from localStorage by its key
   * @param {string} key - The key to retrieve the value for
   * @returns {string | null} - The value of the key or null if it's expired or an error occurs
   */
  function getStorage(key) {
    const now = new Date();
    const expiresIn = parseInt(localStorage.getItem(`${key}_expiresIn`));
    
    if (expiresIn === undefined || expiresIn === null) {
      return null;
    }
  
    if (expiresIn < now.getTime()) {
      removeStorage(key);
      return null;
    } else {
      try {
        const value = localStorage.getItem(key);
        return value;
      } catch (e) {
        console.log(`getStorage: Error reading key [${key}] from localStorage: ${e}`);
        return null;
      }
    }
  }
  
  /**
   * Set a key-value pair in localStorage with an expiration time
   * @param {string} key - The key to set
   * @param {string} value - The value to set for the key
   * @param {number} expires - The number of seconds from now to expire the key
   * @returns {boolean} - Returns true if operation succeeded, false otherwise
   */
  function setStorage(key, value, expires) {
    if (expires === undefined || expires === null) {
      expires = 24 * 60 * 60; // Default: seconds for 1 day
    } else {
      expires = Math.abs(expires) * 24 * 60 * 60; // Make sure it's positive
    }
  
    const now = Date.now(); // Milliseconds since epoch time
    const schedule = now + expires * 1000;
  
    try {
      localStorage.setItem(key, value);
      if (!localStorage.getItem(`${key}_expiresIn`)) {
        localStorage.setItem(`${key}_expiresIn`, schedule);
      }
    } catch (e) {
      console.log(`setStorage: Error setting key [${key}] in localStorage: ${e}`);
      return false;
    }
    return true;
  }

  async function botResponse(msgText) {
    if (Wait) {
        return;
    }
    Wait = true;
    const msgerSendBtn = shadowRoot.querySelector(".msger-send-btn");
    msgerSendBtn.setAttribute("disabled", "disabled");
    const check = checkRepeatedQuestion(msgText);
    if (!check || !check.valid) {
      attempt = 0;
      await fetchData(msgText);
    } else {
        Wait = false;
        duplicateId++;
        msgerSendBtn.removeAttribute("disabled");
        appendMessage(`00${check.MessageId}`, BOT_NAME, BOT_IMG, "left", check.message);
    }

    scrollChatWindowBottom();
}

  
// Event listener for default message click
function chatDefaultMessageClick(msgText) {
    if (!msgText) {
      return;
    }
    if (!Wait) {
      appendMessage("", PERSON_NAME, PERSON_IMG, "right", msgText);
      botResponse(msgText);
      setStorage("oldChat", JSON.stringify(chatBySession));
      
      scrollChatWindowBottom();
    }
  }
  
  // Event listener for form submit
  function chatsubmitclick(event) {
    event.preventDefault();
    const msgText = shadowRoot.querySelector(".msger-input").value.trim();
    if (!msgText) {
      return;
    }
    appendMessage("", PERSON_NAME, PERSON_IMG, "right", msgText);
    shadowRoot.querySelector(".msger-input").value = "";
    botResponse(msgText);
    setStorage("oldChat", JSON.stringify(chatBySession));
    scrollChatWindowBottom();
  }
  
  // Append a message to the chat window
  function appendMessage(id, name, img, side, text) {
    const message = createMessage(id, name, img, side, text);
    chatWindow.insertAdjacentHTML("beforeend", message);
  }
  
  // Create a message HTML element
  function createMessage(id, name, img, side, text) {
    const messageSide = side === "left" ? "msger-chat-left" : "msger-chat-right";
    const messageId = id ? `data-id="${id}"` : "";
    return `
      <div class="msger-chat ${messageSide}" ${messageId}>
        <div class="msger-chat-img">
          <img src="${img}" class="msger-img" alt="${name}">
        </div>
        <div class="msger-chat-text">
          <p>${text}</p>
        </div>
      </div>
    `;
  }
  async function fetchData(msgText) {
    const accountId = document.getElementById("chatbotscript").dataset.accountid;
    const websiteId = document.getElementById("chatbotscript").dataset.websiteid;
    const sessionId = getCookie("SessionId");
    const url = window.location.href;
    const sourceMode = "0";
    const questionQuery = msgText.trim();
  
    const body = JSON.stringify({
      AccountId: accountId,
      WebsiteId: websiteId,
      URL: url,
      SourceMode: sourceMode,
      QuestionQuery: questionQuery,
      SessionId: sessionId,
    });
  
    const headers = new Headers({
      "Content-Type": "text/plain"
    });
  
    const options = {
      method: "POST",
      headers: headers,
      body: body,
      redirect: "follow",
    };
  
    const loadingBubble = `<div id="loading-bubble">
                            <div class="spinner">
                                <div class="bounce1"></div>
                                <div class="bounce2"></div>
                                <div class="bounce3"></div>
                            </div>
                          </div>`;
    try {
      shadowRoot
        .querySelector(".msger-chat")
        .insertAdjacentHTML("beforeend", loadingBubble);
  
      const response = await fetch(
        "https://3ipk7r0ux8.execute-api.us-west-2.amazonaws.com/Prod",
        options
      );
      const result = await response.text();

      if (response.ok) {
        const data = JSON.parse(result).Data;
        const delay = shadowRoot.querySelector(".msger-input").value.split(" ").length * 100;
        setTimeout(() => {
          appendMessage(
            data.MessageId,
            BOT_NAME,
            BOT_IMG,
            "left",
            data.BotAnswer
          );
          scrollChatWindowBottom();
        }, delay);
  
        if (!getCookie("SessionId")) {
          setCookie("SessionId", data.SessionId, 30);
        }
      } else {
        console.error("Error response:", result);
      }
    } catch (error) {
      if (shadowRoot.getElementById("loading-bubble")) {
        shadowRoot.getElementById("loading-bubble").remove();
      }
      attempt++;
      if(attempt == 3){
        if (shadowRoot.getElementById("loading-bubble")) {
          shadowRoot.getElementById("loading-bubble").remove();
        }
        appendMessage(
          "0000",
          BOT_NAME,
          BOT_IMG,
          "left",
          "Sorry, I can't find the answer right now. Try again later."
        );
        scrollChatWindowBottom();
      }else{
        fetchData(msgText);
      }
    } finally {
      Wait = false;
      shadowRoot
        .querySelector(".msger-send-btn")
        .removeAttribute("disabled");
      if(widgetFormAdvanceSettingList && widgetFormAdvanceSettingList.PlaySound == 1){
        document.getElementById("PlayButton").click();
      }
    }
    if (shadowRoot.getElementById("loading-bubble")) {
      shadowRoot.getElementById("loading-bubble").remove();
    }
  }
// Convert Markdown syntax to HTML
function markdownToHtml(markdownText) {
  // Convert Markdown syntax to HTML tags
  // You can customize this function to support the Markdown features you need
  let htmlText = markdownText
    .replace(/# (.+)/g, '<h1>$1</h1>')
    .replace(/## (.+)/g, '<h2>$1</h2>')
    .replace(/### (.+)/g, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^\s*-\s*(.*)$/gm, '<li>$1</li>')
    .replace(/<\/li>\s*<li>/g, '</li><li>')
    .replace(/\[([^\[\]]+)\]\s*\(\s*([^)]+)\s*\)/g, '<a href="$2" target="_blank">$1</a>') // Modified regex for clickable links
    .replace(/^\|(.+)\|$/gm, (match, p1) => {
      // Handle Markdown table rows
      const columns = p1.split('|').map(column => column.trim());
      const tableRow = columns
        .filter(column => !column.includes('-') && column !== '') // Ignore strings containing "-"
        .map(column => `<td>${column}</td>`)
        .join('');
      return `<tr>${tableRow}</tr>`;
    })
    .replace(/^\|(-+)\|$/gm, '') // Remove table separator row
    .replace(/\n/g, '<br>'); // Convert "\n" to "<br>" for line breaks

  // Check if the Markdown text represents a table
  const isTable = /^\|/.test(markdownText);

  // Wrap the converted content in a table if it's a table
  if (isTable) {
    htmlText = `<table border="1" cellspacing="0" cellpadding="5">${htmlText}</table>`;
  }

  return htmlText;
}


async function appendMessage(MessageId,name, img, side, text) {
    if(shadowRoot.querySelector(".suggetion-box")){
      shadowRoot.querySelector(".suggetion-box").remove();
    }
    var date = new Date();
    chatBySession.push({"MessageId": MessageId ,"from":side,"message":text, "datetime": date, "vote": "" , "valid" : true});
    var today = new Date();
    var dateToCheck = new Date(); // This will be your 'date' variable

    // Check if the date is today's date
    if (dateToCheck.toDateString() === today.toDateString()) {
        var formattedDate = dateToCheck.toLocaleString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    } else {
        var formattedDate = dateToCheck.toLocaleString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    }
    if (/#\^#/.test(text)) {
      text = text.split("#^#");
      var url = text[0];
    } else if (/\$\@\$/.test(text)) {
      text = text.split("$@$");
      var url = text[0];
    } else{
      text = [text];
      var url = text[0];
    }
    var sourceUrl = '';
    if(text.length > 1){
      if (!(/\$\*\$/.test(text[1]))) {
        sourceUrl = text[1].replace(/Source\s*|\[|\]|\(|\)/g, "");
      }
    }else{
      sourceUrl = '';
    }
    try{
      if (containsMarkupLink(url)) {
        url = markdownToHtml(url);
      } else if(containsLink(url)) {
        url = markdownToHtml(convertUrlToLink(url));
      }else{
        url = markdownToHtml(url);
      }
    }catch(ex){
      url = markdownToHtml(url);
    }
    debugger;
    url = replaceWithEmojis(url);
    if(MessageId && MessageId.startsWith('00')){
        var msgHTML = "\n<div class=\"msg " + side + "-msg\">\n\n<div class=\"msg-bubble\">\n<div class=\"msg-text\" style=\"word-break: break-word;\">" + url + " <span class=\"msg-info-time\" style=\"color:#777575;text-align:" + side + "\">" + formattedDate + "</span>\n</div>\n</div>\n</div>\n  ";
    }else{
        if(side == "right"){
            var msgHTML = "\n<div class=\"msg " + side + "-msg\" tabindex='-1'>\n\n<div class=\"msg-bubble\">\n<div class=\"msg-text\" style=\"word-break: break-word;\">" + url + " <span class=\"msg-info-time\" style=\"text-align:" + side + "\">" + formattedDate + "</span>\n</div>\n</div>\n</div>\n  ";
        }
        else{
            var msgHTML = `\n<div class=\"msg ` + side + `-msg\">\n\n<div class=\"msg-bubble\">\n<div class=\"msg-text\" style=\"word-break: break-word;\">` + url + `</div>\n</div>\n<div class='display-flex-item' style="display:none">\n<div class='thumbs-up-icon' data-vote='' data-messageid='`+MessageId+`' onclick="userVote('`+MessageId+`','100')">\n<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6.2334 15.2916L8.81673 17.2916C9.15006 17.6249 9.90006 17.7916 10.4001 17.7916H13.5667C14.5667 17.7916 15.6501 17.0416 15.9001 16.0416L17.9001 9.95823C18.3167 8.79156 17.5667 7.79156 16.3167 7.79156H12.9834C12.4834 7.79156 12.0667 7.37489 12.1501 6.79156L12.5667 4.12489C12.7334 3.37489 12.2334 2.54156 11.4834 2.29156C10.8167 2.04156 9.9834 2.37489 9.65006 2.87489L6.2334 7.95823" stroke="#2F80ED" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M1.9834 15.2915V7.12484C1.9834 5.95817 2.4834 5.5415 3.65007 5.5415H4.4834C5.65006 5.5415 6.15007 5.95817 6.15007 7.12484V15.2915C6.15007 16.4582 5.65006 16.8748 4.4834 16.8748H3.65007C2.4834 16.8748 1.9834 16.4582 1.9834 15.2915Z" stroke="#2F80ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class='thumbs-down-icon' data-vote='' data-messageid='`+MessageId+`'  onclick="userVote('`+ MessageId +`','0')"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M13.7665 4.7085L11.1832 2.7085C10.8499 2.37516 10.0999 2.2085 9.59986 2.2085H6.43319C5.43319 2.2085 4.34986 2.9585 4.09986 3.9585L2.09986 10.0418C1.68319 11.2085 2.43319 12.2085 3.68319 12.2085H7.01653C7.51653 12.2085 7.93319 12.6252 7.84986 13.2085L7.43319 15.8752C7.26653 16.6252 7.76653 17.4585 8.51653 17.7085C9.18319 17.9585 10.0165 17.6252 10.3499 17.1252L13.7665 12.0418" stroke="#EB5757" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M18.0168 4.70833V12.875C18.0168 14.0417 17.5168 14.4583 16.3501 14.4583H15.5168C14.3501 14.4583 13.8501 14.0417 13.8501 12.875V4.70833C13.8501 3.54167 14.3501 3.125 15.5168 3.125H16.3501C17.5168 3.125 18.0168 3.54167 18.0168 4.70833Z" stroke="#EB5757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>\n</div>\n</div>\n</div><div class="suggetion-box" style="display:none"></div>`;
        }
    }
    if (side === 'left') {
      shadowRoot.querySelector(".msger-chat").insertAdjacentHTML("beforeend", msgHTML);
      var suggestedQuestion = [];
      var sourceUrlHTML = "";
      if(sourceUrl){
          if (text[2] && /\$\*\$/.test(text[2])) {
            for(var i= 1; i < text.length; i++){
              suggestedQuestion.push(text[i]);
              shadowRoot.querySelector(".suggetion-box").insertAdjacentHTML("beforeend", `<div class="suggestion-question" style="cursor:pointer" onclick="widgetdefaultMessage(event)" data-message="${text[i].replace(/[#$*@]/g, '')}">${text[i].replace(/[#$*@]/g, '')}</div>`);
            }
            sourceUrlHTML = `<div style="border-top: 1px solid #ccc;padding-top: 10px;margin-top:10px"><div><div style="display: flex;justify-content: space-between;flex: 1;"><span style="display: flex;align-items: center;">${sourceSVG}&nbsp;&nbsp;Source</span><div class="svgTickMark" onclick="checkLinkCopy(event)"><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5H10.5C12 5 12 4.25 12 3.5C12 2 11.25 2 10.5 2H7.5C6.75 2 6 2 6 3.5C6 5 6.75 5 7.5 5Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 3.51501C14.4975 3.65001 15.75 4.57251 15.75 8.00002V12.5C15.75 15.5 15 17 11.25 17H6.75C3 17 2.25 15.5 2.25 12.5V8.00002C2.25 4.58001 3.5025 3.65001 6 3.51501" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>  </div></div><div style="overflow: hidden;text-overflow: ellipsis;"><a href="${sourceUrl}" target="_blank" style="cursor:pointer;white-space:nowrap">${sourceUrl}</a></div>
            </div>`;
          }
      }else{
        if(text.length > 1){
          if (text[1] && /\$\*\$/.test(text[1])) {
            for(var i= 1; i < text.length; i++){
              suggestedQuestion.push(text[i]);
              shadowRoot.querySelector(".suggetion-box").insertAdjacentHTML("beforeend", `<div class="suggestion-question" style="cursor:pointer" onclick="widgetdefaultMessage(event)" data-message="${text[i].replace(/[#$*@]/g, '')}">${text[i].replace(/[#$*@]/g, '')}</div>`);
            }
          }
        }
        sourceUrlHTML = "";
      }
      typingAnimation(shadowRoot.querySelectorAll(".msg-text")[shadowRoot.querySelectorAll(".msg-text").length - 1], url + sourceUrlHTML + ` <span class="msg-info-time" style="color:#777575;text-align:${side}">${formattedDate}</span>\n`, 10, suggestedQuestion,sourceUrl);
    } else {
      shadowRoot.querySelector(".msger-chat").insertAdjacentHTML("beforeend", msgHTML);
    }
    // var suggestionItem = shadowRoot.querySelector("#footer-items").outer;
    // shadowRoot.querySelector("#footer-items").remove();
    // shadowRoot.querySelector(".msger-chat").insertAdjacentHTML("beforeend", suggestionItem);
    
    shadowRoot.querySelector(".msger-chat").scrollTop += 500;
    
    setStorage("oldChat",JSON.stringify(chatBySession),30);
    setStorage("oldChatSuggestion",JSON.stringify(suggestedQuestion),30);
    scrollChatWindowBottom();
}

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function checkLinkCopy(event){
  event.currentTarget.children[0].insertAdjacentHTML("beforeend", `<path id="myPath" d="M6.98242 11.025L8.10742 12.15L11.1074 9.15002" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>`);

  // After 5 seconds, remove the inserted content
  setTimeout(() => {
      const myPath = shadowRoot.getElementById('myPath');
      if (myPath) {
          myPath.remove();
      }
  }, 1000);
  copyFunction(event.currentTarget.parentElement.nextElementSibling.children[0]);
}
function copyFunction(element) {
  // Create a temporary textarea element
  var tempTextArea = document.createElement("textarea");
  tempTextArea.style.position = "absolute";
  tempTextArea.style.opacity = "0";
  
  // Set the value of the temporary textarea to the text content of the passed element
  tempTextArea.value = element.textContent || element.innerText;
  
  // Append the temporary textarea to the DOM (invisibly)
  document.body.appendChild(tempTextArea);
  
  // Select the text in the temporary textarea
  tempTextArea.select();
  
  // Copy the selected text
  document.execCommand("copy");
  
  // Remove the temporary textarea from the DOM
  document.body.removeChild(tempTextArea);
}

function typingAnimation(element, message, delay, suggestedQuestion,sourceUrl) {
    let index = 0;
    const insertContent = () => {
        if (index >= message.length) {
            
            shadowRoot.querySelectorAll(".msg-text")[shadowRoot.querySelectorAll(".msg-text").length - 1].parentElement.nextElementSibling.style.display = "flex";
            if(suggestedQuestion.length > 0){
              shadowRoot.querySelector(".suggetion-box").style.display = "block";
            }
            shadowRoot.querySelector(".msger-chat").scrollTop += 500;
            clearInterval(typingInterval); // End the typing animation

            if(shadowRoot.querySelector(".msger-input").value.length == 0 && !isMobileDevice()){
              shadowRoot.querySelectorAll(".right-msg")[shadowRoot.querySelectorAll(".right-msg").length - 1].focus();
            }
            shadowRoot.querySelector(".msger-input").focus();
            if (isMobileDevice()) {
                shadowRoot.querySelector(".msger-chat").scrollTop += 100;
            }
            return;
        }

        if (message[index] === '<') {
            // Detect start of an HTML tag
            const endIndex = message.indexOf('>', index) + 1;
            let tag = message.substring(index, endIndex);
            let closeTag = '';
            if (tag.includes('</')) {
                // Closing tag, insert immediately.
                element.insertAdjacentHTML('beforeend', tag);
                index = endIndex;
            } else {
                // Opening tag, check for closing tag of the same kind to include its content.
                const tagName = tag.match(/<(\w+)/)[1]; // Extract the tag name
                const closeTagIndex = message.indexOf(`</${tagName}>`, endIndex);
                if (closeTagIndex !== -1) {
                    // Found closing tag, include all content up to and including the closing tag.
                    closeTag = message.substring(endIndex, closeTagIndex + `</${tagName}>`.length);
                    element.insertAdjacentHTML('beforeend', tag + closeTag);
                    index = closeTagIndex + `</${tagName}>`.length;
                } else {
                    // No closing tag found or tag does not enclose text (e.g., <br>, <img>), insert opening tag only.
                    element.insertAdjacentHTML('beforeend', tag);
                    index = endIndex;
                }
            }
        } else {
            // Regular text character, insert one by one.
            const nextChar = message[index++];
            element.insertAdjacentHTML('beforeend', nextChar);
        }
            shadowRoot.querySelector(".msger-chat").scrollTop += (index * 2);
    };

    const typingInterval = setInterval(insertContent, delay);
}
  
function checkRepeatedQuestion(question) {
    let chatData = JSON.parse(getStorage('oldChat'));
  
    const repeatedQuestion = chatData.find((message, index) => 
      message.from === 'right' &&
      message.message.toLowerCase().trim() === question.toLowerCase().trim() &&
      index < chatData.length - 1 &&
      chatData[index + 1].from === 'left'
    );
  
    if (repeatedQuestion) {
      const nextMessage = chatData[chatData.indexOf(repeatedQuestion) + 1];
      return nextMessage;
    } else {
      return false;
    }
  }
  function replaceWithEmojis(text) {
      const emojiMap = {
          ':-)': '😊',
          ':)': '😊',
          ';-)': '😉',
          ';)': '😉',
          ':-D': '😄',
          ':D': '😄',
          ':-P': '😛',
          ':P': '😛',
          ':-O': '😲',
          ':O': '😲',
          ':-(': '😞',
          ':(': '😞',
          ":'(": '😢',
          ':-|': '😐',
          ':|': '😐',
          '>:(': '😠',
          '<3': '❤️',
          ':*': '😘',
          ':-/': '😕',
          ':/': '😕',
          '8-)': '🤓',
          'B-)': '😎',
          ':-$': '🤑',
          ':$': '🤑',
          'O:-)': '😇',
          'O:)': '😇',
          '\\o/': '🙌',
          '^_^': '😊',
          '>_<': '😖',
          'XD': '😆',
          'xD': '😆'
      };

      try {
        for (let key in emojiMap) {
            if (!emojiMap.hasOwnProperty(key)) {
                continue;
            }

            // escape special characters for regex
            const escapedKey = key.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
            const regex = new RegExp(`(?:^|\\s)${escapedKey}(?=\\s|$)`, 'g');

            if (typeof text === 'string') {
                text = text.replace(regex, emojiMap[key]);
            } else {
                // Handle other data types if needed
            }
        }
    } catch (error) {
        // Handle errors if necessary
    }

      return text;
  }
  function formatDate(date) {
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    return `${hours}:${minutes}`;
  }
  
  function scrollChatWindowBottom() {
    const chatWindow = shadowRoot.querySelector('.msger-chat');
    if(chatWindow){
      chatWindow.scrollTo({
        top: chatWindow.scrollHeight,
        behavior: 'smooth'
      });
    }
  }
  
  function deleteMessage(chatData, messageId) {
    const indexToDelete = chatData.findIndex(message => message.MessageId === messageId);
    const indexPrevious = indexToDelete - 1;
  
    if (indexToDelete !== -1) {
      chatData.splice(indexToDelete, 1);
    }
  
    if (indexPrevious >= 0 && chatData[indexPrevious].from === 'right') {
      const indexPreviousToDelete = chatData.findIndex(message => message.MessageId === messageId) - 1;
      if (indexPreviousToDelete !== -1) {
        chatData.splice(indexPreviousToDelete, 1);
      }
    }
  
    return chatData;
  }
  
  function userVote(MessageId, vote){
    var chatData = JSON.parse(getStorage("oldChat"));
    shadowRoot.querySelectorAll(`div[data-messageid="${MessageId}"]`)[0].classList.add('active');
    if(!shadowRoot.querySelectorAll(`div[data-messageid="${MessageId}"]`)[0].dataset.vote){
        if(vote == "100"){
            const messageToUpdate = chatData.find(message => message.MessageId === MessageId);
            if (messageToUpdate) {
                messageToUpdate.valid = true; // update the value of the "vote" property
                messageToUpdate.vote = 100;
            }
            chatBySession = chatData;
            setStorage("oldChat",JSON.stringify(chatBySession));
            shadowRoot.querySelectorAll(`div[data-messageid="${MessageId}"].thumbs-down-icon`)[0].remove();
        }else{
            const indexToDelete = chatData.findIndex(message => message.MessageId === MessageId);
            const indexPrevious = chatData.findIndex(message => message.MessageId === MessageId) - 1;
            if (indexToDelete !== -1 && indexPrevious >= 0 && chatData[indexPrevious].from === "right") {
                chatData.splice(indexToDelete, 1);
                chatData.splice(indexPrevious, 1);
            } else if (indexToDelete !== -1) {
                chatData.splice(indexToDelete, 1);
            }
            var datalength = chatData.length;
            for(var h = 0; h < datalength; h++){
                const indexDuplicateToDelete = chatData.findIndex(message => message.MessageId === "00" + MessageId);
                const indexDuplicatePrevious = chatData.findIndex(message => message.MessageId === "00" + MessageId) - 1;
                if (indexDuplicateToDelete !== -1 && indexDuplicatePrevious >= 0 && chatData[indexDuplicatePrevious].from === "right") {
                    chatData.splice(indexDuplicateToDelete,1);
                    chatData.splice(indexDuplicatePrevious,1);
                }
            }
            chatBySession = chatData;
            setStorage("oldChat",JSON.stringify(chatBySession));
            shadowRoot.querySelectorAll(`div[data-messageid="${MessageId}"].thumbs-up-icon`)[0].remove();
            chatReady();
        }
        fetch( baseUrl + '/update-message-rating?accountId=' + document.getElementById("chatbotscript").dataset.accountid + '&websiteId=' + document.getElementById("chatbotscript").dataset.websiteid + '&messageId='+ MessageId +'&rating=' + vote, requestOptions)
        .then(response => response.text())
        .then(result => {
            var response = JSON.parse(result);
            if(response.responseStatusCode == '200'){
                var response = JSON.parse(result);
                const messageToUpdate = chatData.find(message => message.MessageId === MessageId);
                if (messageToUpdate) {
                    messageToUpdate.vote = vote; // update the value of the "vote" property
                }
                chatBySession = chatData;
                setStorage("oldChat",JSON.stringify(chatBySession));
            }
        })
        .catch(error => console.log('error', error));
    }
}

function convertUrlToLink(text) {
  const emailRegex = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/g;
  const urlRegex = new RegExp("(?:(?:https?|ftp):\\/\\/)?(?:www\\.)?\\w{2,}\\.[\\w-]+(?:\\.[\\w-]+)*(?:[\\?\\&\\/][^\\]\\(\\s]*)?(?<![()\\[\\]])", "g");
  const phoneRegex = /(?:\+\d{1,2}\s*)?(?:(?:\d{1,4}[\s-]?)?\d{3,4}[\s-]?)?\d{3,4}[\s-]?\d{4}/g;

  // Replace email addresses with placeholders
  let emailMap = {};
  let emailCounter = 0;
  const textWithPlaceholders = text.replace(emailRegex, (match) => {
    const placeholder = `___EMAIL_PLACEHOLDER_${emailCounter}___`;
    emailMap[placeholder] = match;
    emailCounter++;
    return placeholder;
  });

  // Process URLs and convert them to links
  const textWithUrlsAndPhones = textWithPlaceholders
    .replace(urlRegex, (urls) => {
      // Remove special characters at the beginning and end of the URL
      const cleanedUrl = urls.replace(/^[\W_]+|[\W_]+$/g, '');

      // Check if the URL consists only of numbers
      if (/^\d+(?:\.\d+)*$/.test(cleanedUrl)) {
        return urls; // Return the original URL without modification
      }

      // Add "http://" prefix if necessary
      const prefixedUrl = /^(?:https?|ftp):\/\//i.test(cleanedUrl) ? cleanedUrl : `http://${cleanedUrl}`;

      // Return the HTML link
      return `<a href="${prefixedUrl}" target="_blank">${cleanedUrl}</a>`;
    })
    .replace(phoneRegex, '<a href="tel:$&">$&</a>'); // Convert phone numbers to clickable telephone links

  // Replace placeholders with email links
  const finalText = textWithUrlsAndPhones.replace(/___EMAIL_PLACEHOLDER_\d+___/g, (placeholder) => {
    const email = emailMap[placeholder];
    return `<a href="mailto:${email}">${email}</a>`;
  });

  return finalText;
}

// Utility function to get the first element that matches a selector.
  
function get(selector) {
    var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    return root.querySelector(selector);
}

// function convertUrlToLink(text) {
//     // Regular expression to match website URLs
//     const urlRegex = /(https?:\/\/)?(www\.)?\S+\.\S+/gi;

//     // Replace URLs with clickable hyperlinks
//     return text.replace(urlRegex, function(match) {
//     var url = match.startsWith('http') ? match : 'http://' + match;
//     var spec = url.slice(-1);
//     if (url.slice(-1) === '.' || url.slice(-1) === ',') {
//         url = url.slice(0, -1);
//         match = match.slice(0, -1);
//         return '<a href="' + url + '" target="_blank">' + match + '</a>' + spec;
//     }else{
//         return '<a href="' + url + '" target="_blank">' + match + '</a>';
//     }
//     });
// }
var script = document.createElement('script');
script.id = 'chatbotscript'; script.dataset.accountid = 'bUaqGiIEydXWYJTzAFhpng=='; 
script.dataset.websiteid = '5/tcjLxMEbLTROogZO32rw==';
script.src = 'https://app.robofy.ai/bot/js/common.js?v='+ new Date().getTime(); document.head.appendChild(script);