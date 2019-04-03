var parent, span, spanimg, header, limitCount, sendList, sendButton,
    eElement, headerDiv, bottext, botinnertext, botimg, crossimg, limitP, limitText, feedback,
    maxImg, ClearImg, exportDiv, emailChat, chatBoxFlag, CaseImg, botConnection, user, feedbackButtons, crossDiv, caseDiv, clearDiv, emailDiv, maxDiv, suggestedActions, IsHeaderClicked, isFirstMessage;


/// <summary>
/// This functions is used to render the bot and creating header for it
/// </summary>
function renderBot(directLineKey, botSecret) {
    //Create object of Bot Connection
    botConnection = new BotChat.DirectLine(
        {
            token: directLineKey,
            webSocket: true,
            sendTyping: true
        });

    botConnection
            .postActivity(
                {
                    from: user,
                    name: 'SendWelcomeMessage',
                    // provide event name and check for that event in bot
                    type: 'event',
                    value: ''
                })
            .subscribe(function (id) {
                console.log("event sent");
            });

    BotChat.App(
        {
            botConnection: botConnection,
            user: { id: "User" },
            bot: { id: botSecret },
            resize: 'detect'
        },
        document.getElementById("botContainer"));

    //refresh bot connection
    setInterval(function () {
        botConnection.refreshToken();
    }, BotConstants.tokenRefreshValue);

    $(".wc-shellinput").attr(BotPageStrConst.placeHolder, BotPageStrConst.askQuesMessage);

    parent = $(".wc-header");
    span = $(".wc-header").children("span");
    span.text("");

    spanimg = document.createElement('div');

    document.getElementsByClassName("wc-header")[0].appendChild(spanimg);
    header = document.getElementsByClassName("wc-header")[0];
    eElement = document.getElementsByClassName("wc-message-from-bot")[0];


    headerDiv = document.createElement('div');
    headerDiv.className = "headerDiv";

    bottext = document.createElement('span');
    bottext.className = "bottext";

    botinnertext = document.createElement('span');

    botinnertext.textContent = BotPageStrConst.mobiHelpMessage;

    botimg = document.createElement('img');
    botimg.setAttribute('src', '../../img/MOBI-Icons/botImage.png');
    botimg.setAttribute('class', 'botimg');
    botimg.setAttribute('alt', 'Amy');

    bottext.appendChild(botinnertext);

    header.appendChild(botimg);
    header.appendChild(bottext);

    if (document.getElementsByClassName('wc-header')) {
        if (document.getElementsByClassName('wc-header')[0]) {
            var chatBotHeader = document.getElementsByClassName('wc-header')[0];
            chatBotHeader.setAttribute('onclick', 'hideBot()');
        }
    }

    crossimg = document.createElement('img');
    crossimg.setAttribute('src', '../../img/MOBI-Icons/botshowhide.svg');
    crossimg.setAttribute('title', 'Close Chat');
    crossimg.setAttribute('id', 'closeChat');
    crossimg.setAttribute('class', 'fullScreen');

    maxImg = document.createElement('img');
    maxImg.setAttribute('src', '../../img/MOBI-Icons/new_maximize.png');
    maxImg.setAttribute('title', 'Full Screen');
    maxImg.setAttribute('id', 'maximizeWindow');
    maxImg.setAttribute('class', 'fullScreen chatWindowIconGroup');

    maxDiv = document.createElement('div');
    maxDiv.setAttribute("class", "MaxDiv chatWindowIconGroup");
    maxDiv.setAttribute('onclick', 'fullScreen(event)');
    maxDiv.appendChild(maxImg);


    ClearImg = document.createElement('img');
    ClearImg.setAttribute('src', '../../img/delete.png');
    ClearImg.setAttribute('title', 'Clear Chat');
    ClearImg.setAttribute('id', 'clearChat');
    ClearImg.setAttribute('class', 'fullScreen chatWindowIconGroup');

    clearDiv = document.createElement('div');
    clearDiv.setAttribute("class", "clearDiv chatWindowIconGroup");
    clearDiv.setAttribute('onclick', 'clearChat(event)');
    clearDiv.appendChild(ClearImg);


    trayDiv = '<div class="btn-group dropup fullScreen chatWindowIconGroup trayDiv" onclick="openTray()" id="chatBotTray" onclick="openTray()">\
                    <img src="../../img/MOBI-Icons/tray.png"  id="chatBotTrayHandle" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />\
                    <table class="dropdown-menu">\
                          <tr onclick="SendByMail(event)"><td><img src="../../img/MOBI-Icons/export1@2x.png" /></td><td><p>Export Conversation</p></td></tr>\
                    </table>\
                </div >';

    header.appendChild(crossimg);
    header.appendChild(maxDiv);
    //header.appendChild(emailDiv);
    //header.appendChild(trayDiv);
    //header.innerHTML += trayDiv;


    span = document.createElement('div');
    $(".wc-console").removeClass("has-upload-button");

    //collapse bot initially
    chatBoxFlag = 1;
    IsHeaderClicked = 0;
    isFirstMessage = 0;

    sendList = document.getElementsByClassName("wc-send")[0];
    sendList.removeChild(sendList.childNodes[0]);
    sendButton = document.createElement("BUTTON");
    sendButton.setAttribute('class', 'sendButton');
    sendButton.setAttribute('id', 'sendMsg');
    sendButton.setAttribute('innerHTML', 'Send');
    sendList.appendChild(sendButton);
    document.getElementsByClassName("sendButton")[0].textContent = "Send";
    document.getElementById('sendMsg').disabled = true;
    document.getElementById('sendMsg').style.color = "#D3D3D3";
    document.getElementById('sendMsg').style.color = "auto";

    limitP = document.createElement('span');
    limitP.setAttribute('class', 'limitText');
    limitText = document.createTextNode("100/100");
    limitP.appendChild(limitText);
    document.getElementsByClassName('wc-console')[0].appendChild(limitP);
    document.getElementsByClassName("wc-shellinput")[0].setAttribute("maxLength", BotConstants.countOfLimit);
    document.getElementsByClassName("wc-shellinput")[0].setAttribute("onkeyup", "limitTextSpan()");
    document.getElementsByClassName("wc-send")[0].setAttribute("title", "Send");

    suggestedActions = document.getElementsByClassName("wc-suggested-actions")[0];
    suggestedActions.addEventListener('DOMNodeInserted', function () {
        if (undefined !== suggestedActions.getElementsByClassName("wc-hscroll")[0]) {
            var positive = suggestedActions.getElementsByClassName("wc-hscroll")[0].getElementsByTagName("button");
            if (undefined !== positive) {
                positive[0].setAttribute("title", "Like");
                positive[1].setAttribute("title", "Dislike");
            }
        }
    });

    // calling session storage data to other pages on Bot 
    $(function storeddata() {
        if (null != sessionStorage["myKey"]) {
            var contentsOfOldDiv = JSON.parse(sessionStorage["myKey"]);
            $(".wc-message-group-content").html(contentsOfOldDiv);
        }
    });

    $(function appendmessage() {
        var msgList,targetNode;
        newMessages = document.getElementsByClassName("wc-message-groups")[0];
        if (null !== document.getElementsByClassName("wc-message-groups") && undefined !== document.getElementsByClassName("wc-message-groups")) {
            newMessages.addEventListener('DOMNodeInserted', function (evt) {
                if (undefined !== newMessages.getElementsByClassName("wc-message-group-content")) {
                    msgList = document.getElementsByClassName('wc-message-wrapper list').length;
                    if (0 === isFirstMessage && evt.target.getAttribute('class') === 'wc-message-wrapper list') {
                        isFirstMessage = 1;
                        targetNode = document.getElementsByClassName("wc-message-wrapper list")[0];
                        var grpContent = newMessages.getElementsByClassName("wc-message-group-content")[0];
                        grpContent.removeChild(targetNode);
                        grpContent.appendChild(targetNode);

                    }

                }
            });
        }
    });

    typingActions = document.getElementsByClassName("wc-message-groups")[0];
    typingActions.addEventListener('DOMNodeInserted', function () {
        if (undefined !== typingActions.getElementsByClassName("wc-typing")[0]) {
            var typingIndicator = $(".wc-typing").parent().addClass("wc-typingmsg");
       }
        else {
            $(".wc-message-from-bot .wc-message-content").removeClass("wc-typingmsg").addClass("wc-message-contentnew");
    }
    });




    document.getElementsByClassName('wc-chatview-panel')[0].classList.add('wc-chatview-panel-open');
    document.getElementsByClassName('wc-chatview-panel')[0].setAttribute('style', "transition: all 1s ease 0s");

    document.getElementsByClassName("wc-send")[0].title = BotConstants.sendMessageTitle;
    $(document).on('mouseenter', '.ac-pushButton', function () {
        var text = $(this)[0].textContent;
        $(this)[0].title = text;
    }).on('mouseleave', '.ac-pushButton', function () {
        $(this)[0].title = '';
    });

    $('#sendMsg').on('click', function () {
        document.getElementsByClassName("limitText")[0].textContent = (100) + "/" + 100;
    });


        //collapse initially
    hideBot();
    window.onclick = function (event) {
        var chatBotTrayHandle = document.getElementById("chatBotTrayHandle");
        if ("true" == chatBotTrayHandle.getAttribute("aria-expanded") ) {
            chatBotTrayHandle.setAttribute("aria-expanded", "false");
            var chatBotTray = document.getElementById("chatBotTray");
            chatBotTray.classList.remove("open");
    }


    }

}



function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

/// <summary>
/// this function is called when new case button is clicked
/// </summary>
function openTray() {
    var chatBotTrayHandle = document.getElementById("chatBotTrayHandle");
    if ("true" == chatBotTrayHandle.getAttribute("aria-expanded")) {
        chatBotTrayHandle.setAttribute("aria-expanded", "false");
        var chatBotTray = document.getElementById("chatBotTray");
        chatBotTray.classList.remove("open");
    }
    else {
        chatBotTrayHandle.setAttribute("aria-expanded", "true");
        var chatBotTray = document.getElementById("chatBotTray");
        chatBotTray.classList.add("open");
    }
    event.stopPropagation();
}

/// displays the feedback suggested action
function showfeedback() {
    feedback.style.display = "block";
}

/// <summary>
/// Hide bot
/// </summary>
function hideBot() {
    var chatWindowElement = document.getElementsByClassName("wc-chatview-panel");
    var iconList = document.getElementsByClassName('chatWindowIconGroup');
    var elementlistlength = iconList.length;
    document.getElementsByClassName('wc-chatview-panel')[0].style.transition = "all 1s";
    feedback = document.getElementsByClassName('wc-hscroll')[0];
    if (feedback !== undefined) {
        if (feedback.textContent.includes("👎") || feedback.textContent.includes("👍")) {
            feedback.style.display = "none";
            setTimeout(showfeedback, 2500);
        }
    }


    //bot gets open when set to 0
    if (0 === chatBoxFlag) {
        if (0 === IsHeaderClicked)
        {
            var urlCurrent = window.location.href;
            var UrlSplitted = urlCurrent.split('/');
            var currentPage = UrlSplitted[UrlSplitted.length - 1];
            ga('send', {
                hitType: 'click',
                eventCategory: 'bot-' + currentPage,
                eventAction: 'open',
                eventLabel: 'maqbot'
            });
            IsHeaderClicked = 1;
        }
       
        document.getElementsByClassName('wc-chatview-panel')[0].classList.remove('wc-chatview-panel-closed');
        document.getElementsByClassName('wc-message-pane')[0].classList.remove('hideElement');
        document.getElementsByClassName('wc-console')[0].classList.remove('hideElement');
        document.getElementsByClassName('wc-message-pane')[0].classList.add('showElement');
        document.getElementsByClassName('wc-console')[0].classList.add('showElement');
        document.getElementById('closeChat').classList.remove('rotateimg180');
        document.getElementById('closeChat').setAttribute('title', BotPageStrConst.closeChat);

        if ($(".fullScreen").length > 0) {
            chatWindowElement[0].classList.remove('maxScrnDimension');
            chatWindowElement[0].classList.add('minScrnDimension');

        }
        else {
            chatWindowElement[0].classList.remove('minScrnDimension');
            chatWindowElement[0].classList.add('maxScrnDimension');
        }
        document.getElementsByClassName('wc-chatview-panel')[0].classList.add('wc-chatview-panel-open');

        var iIterator = 0;
        for (; iIterator < elementlistlength; iIterator++) {
            iconList[iIterator].classList.remove('hideIcon');
            iconList[iIterator].classList.add('showIcon');
        }
        chatBoxFlag = 1;
    }
    else {
        document.getElementsByClassName('wc-chatview-panel')[0].classList.remove('wc-chatview-panel-open');
        document.getElementsByClassName('wc-message-pane')[0].classList.remove('showElement');
        document.getElementsByClassName('wc-console')[0].classList.remove('showElement');

        document.getElementsByClassName('wc-message-pane')[0].classList.add('hideElement');
        document.getElementsByClassName('wc-console')[0].classList.add('hideElement');

        document.getElementsByClassName('wc-chatview-panel')[0].classList.remove('maxScrnDimension');
        document.getElementsByClassName('wc-chatview-panel')[0].classList.add('wc-chatview-panel-closed');
        document.getElementById('closeChat').classList.add('rotateimg180');

        document.getElementById('closeChat').setAttribute('title', BotPageStrConst.openChatText);

        var jIterator = 0;
        for (; jIterator < elementlistlength; jIterator++) {
            iconList[jIterator].classList.remove('showIcon');
            iconList[jIterator].classList.add('hideIcon');
        }

        chatBoxFlag = 0;

    }
}

/// <summary>
/// clear chat functionality
/// </summary>
function clearChat(event) {
    $(".wc-message-from-bot").remove();
    $(".wc-message-from-me").remove();
    $(".wc-message-wrapper").remove();
    $(".wc-message-pane").removeClass("show-actions");
    event.stopPropagation();
}

/// <summary>
/// Increase screen size
/// </summary>
function fullScreen(event) {
    var chatWindow = document.getElementsByClassName("wc-chatview-panel");
    maxImg = document.getElementById("maximizeWindow");

    //if bot is of small size
    if ($(".fullScreen").length > 0) {
        $(".fullScreen").addClass("minScreen");
        $(".fullScreen").removeClass("fullScreen");
        chatWindow[0].classList.remove('minScrnDimension');
        chatWindow[0].classList.add('maxScrnDimension');
        $(".modal-dialog").css("height", "92%");
        $(".modal-dialog").css("width", "98%");
        $(".modal-content").css("width", "100%");
        document.getElementById('maximizeWindow').setAttribute('title', 'Collapse Window');

        //maxImg.setAttribute('title', 'Collapse Window');
        maxImg.setAttribute('src', '../../img/MOBI-Icons/minimize.svg');
        //document.getElementById('maximizeWindow').classList.add('rotateimg180');
        event.stopPropagation();
    }
    else {
        $(".minScreen").addClass("fullScreen");
        $(".minScreen").removeClass("minScreen");
        chatWindow[0].classList.remove('maxScrnDimension');
        chatWindow[0].classList.add('minScrnDimension');
        $(".modal-dialog").css("height", "70%");
        $(".modal-dialog").css("width", "30%");
        document.getElementById('maximizeWindow').setAttribute('title', 'Full Screen');
        //maxImg.setAttribute('title', 'Full Screen');
        maxImg.setAttribute('src', '../../img/MOBI-Icons/new_maximize.png');
        event.stopPropagation();
    }
}

/// <summary>
/// Export chat to mail functionality
/// </summary>
function SendByMail(event) {
    // variable to initialise all the data 
    var textMessages = "";

    // get list of chat messages
    var messageList = document.getElementsByClassName("wc-message-wrapper");

    if (null!== messageList) {
        var messageListLength = messageList.length;
    }

    // get data from each reply and add it to variable

    for (var itrMsg = 0; itrMsg < messageListLength; itrMsg++) {
        var userTextLength;
        if (messageList[itrMsg].children.length > 0) {
            userTextLength = messageList[itrMsg].children[1].outerHTML.length;
            textMessages += messageList[itrMsg].children[1].outerHTML.substr(0, userTextLength - 13) + ":</span></div>";
            textMessages += messageList[itrMsg].children[0].outerHTML + "\n";
        }
    }
    var date = new Date();
    downloadFile("ExportChat" + date + ".docx", textMessages);
    event.stopPropagation();
}


/// <summary>
/// download chat as text file
/// </summary>
function downloadFile(filename, text) {
    var header = "<!DOCTYPE html xmlns:o='urn:schemas-microsoft-com:office:office' " +
        "xmlns:w='urn:schemas-microsoft-com:office:word' " +
        "xmlns='http://www.w3.org/TR/REC-html40'>" +
        "<head><meta charset='utf-8'><title></title></head><body>";
    var footer = "</body></html>";
    var regEx = new RegExp("couldn't send retry", 'g');
    text = text.replace(regEx, 'User');
    text = header + text + footer;
    var element = document.createElement('a');
    var downloadFile = htmlDocx.asBlob(text);
    saveAs(downloadFile, filename);
}

/// <summary>
/// charcter limit
/// <summary>
function limitTextSpan() {
    document.getElementById('sendMsg').style.cursor = "pointer";
    var limitField = document.getElementsByClassName("wc-shellinput")[0];
    var textString = limitField.value;
    if (textString.length > BotConstants.countOfLimit) {
        limitField.value = limitField.value.substring(0, BotConstants.countOfLimit);
    }
    else {
        if ('' === limitField.value) {
            limitCount = BotConstants.countOfLimit;
        }
        else {
            limitCount = BotConstants.countOfLimit - textString.length;
            document.getElementById('sendMsg').style.color = "#BA141A";
        }
    }
    if (0 === limitCount) {
        document.getElementsByClassName("limitText")[0].textContent = (BotConstants.countOfLimit - textString.length) + "/" + BotConstants.countOfLimit;
    }
    else {
        document.getElementsByClassName("limitText")[0].textContent = (BotConstants.countOfLimit - textString.length) + "/" + BotConstants.countOfLimit;
    }
    if (limitCount === BotConstants.countOfLimit - 1) {
        document.getElementById('sendMsg').disabled = false;
        document.getElementById('sendMsg').style.cursor = "pointer";
        document.getElementById('sendMsg').style.color = "#BA141A";
    }
    if (limitCount === BotConstants.countOfLimit) {
        document.getElementById('sendMsg').disabled = true;
        document.getElementById('sendMsg').style.cursor = "auto";
        document.getElementById('sendMsg').style.color = "#D3D3D3";

    }
}

$(document).ready(
    function () {
        renderBot('I6ldON-4Twk.cwA.z0k.W49-jZyvzMcK_ArFX490lPBBRBiFB6vX1WN2JZKDxqo', 'jbBMQG640:fyndaUVO92}!*');
        $(window).scroll(function () {
            $(".scroll-top").remove();
        });
    }
    );
$(document).on('DOMNodeInserted', function () {
    $("a[href^='mailto:']").removeAttr('target');
}
);

window.onbeforeunload = function storedata() {
    sessionStorage["myKey"] = JSON.stringify($(".wc-message-group-content").html());
}
