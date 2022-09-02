const app = document.querySelector(".app")
const iconMaximize = document.querySelector('.icon-maximize');
const iconMinimize = document.querySelector('.icon-minimize');

maximizeButton.onclick = function() {
    app.classList.toggle("fullscreen");
    iconMaximize.classList.toggle("hide");
    iconMinimize.classList.toggle("hide");

    chatTransform();
}


/////////////////


const groupsHeaders = document.querySelectorAll(".group-header-name");

for (const head of groupsHeaders) {
    head.addEventListener("click", () => {
        var parent = head.parentElement;
        if (parent.className == "group-header") {
            parent.classList.add("closed");
        } else {
            parent.classList.remove("closed");
        }
    });
}


/////////////////


const infoListHeaders = document.querySelectorAll(".info-list-header");

for (const header of infoListHeaders) {
    header.addEventListener("click", () => {
        if (header.className == "info-list-header") {
            header.classList.add("closed");
        } else {
            header.classList.remove("closed");
        }
    });
}


////////////////


const infoIconClose = document.querySelector(".info-icon-close");
const chatIconMore = document.querySelector(".chat-icon-more");
const infoSection = document.querySelector(".info");

infoIconClose.onclick = function() {
    infoSection.classList.add('hide');

    chatTransform();
}

chatIconMore.onclick = function() {
    if(infoSection.className == "info") {
        infoSection.classList.add('hide');

        chatTransform();
    } else {
        infoSection.classList.remove('hide');
        if(chatSection.offsetWidth < 400 && listSection.className == "list") {   
            listSection.classList.add('hide');
        }
        
        chatTransform();
    }
}


////////////////


const chatIconList = document.querySelector(".chat-icon-list");
const listSection = document.querySelector(".list");

chatIconList.onclick = function() {
    if (listSection.className == "list") {
        // chatIconList.classList.add('closed');
        listSection.classList.add('hide');
        
        chatTransform();
    } else {
        // chatIconList.classList.remove('closed');
        listSection.classList.remove('hide');
        if(chatSection.offsetWidth < 400 && infoSection.className == "info") {   
            infoSection.classList.add('hide');
        }

        chatTransform();
    }
}



// function changeListIcon() {
//     console.log("list icon");
//     if (listSection.className == "list hide") {
//         chatIconList.classList.add('closed');
//     }
// }
// changeListIcon();


const chatSection = document.querySelector(".chat");

console.dir(chatSection);

window.addEventListener("resize", function () {
    if(window.innerWidth < 1000 && app.className == "app") {   
        infoSection.classList.add('hide');
    }

    if(window.innerWidth < 750 && app.className == "app") {   
        listSection.classList.add('hide');
    }

    if(chatSection.offsetWidth < 400 && app.className == "app fullscreen") {   
        infoSection.classList.add('hide');
        if(chatSection.offsetWidth < 400 && app.className == "app fullscreen") {   
            listSection.classList.add('hide');
        }
    }

    chatTransform();
});


function chatTransform() {
    if(chatSection.offsetWidth > 736) {
        chatSection.classList.add('toowide');
    } else {
        chatSection.classList.remove('toowide');
    }
}



///////////////////////////
// toogle Day/Night mode //
///////////////////////////

// const iconMoon = document.querySelector(".icon-moon");
const html = document.querySelector("html");

toggleTheme.onclick = function() {
    html.classList.toggle("day");
    html.classList.toggle("night");
}