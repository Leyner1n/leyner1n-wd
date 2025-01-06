const sidebarElement = document.querySelector('.sidebar');
const homeBtnElement = sidebarElement.querySelector('#home-btn');
const articleFormOpenElement = sidebarElement.querySelector('#create-card');
const articleFormCloseElement = document.querySelector('#close-btn');
const notifnotificationsBtnElement = sidebarElement.querySelector('#notifications-btn');
const messageBtnElement = sidebarElement.querySelector('#message-btn');

const btnElements = [
    homeBtnElement,
    articleFormOpenElement,
    notifnotificationsBtnElement,
    messageBtnElement,
    articleFormCloseElement
];

const openNavList = (evt) => {
    for (const btnElement of btnElements) {
        btnElement.classList.remove('open');
    }

    if (evt.target === articleFormCloseElement) {
        homeBtnElement.classList.add('open');
    } else {
        evt.target.classList.add('open');
    }
}

for (const btnElement of btnElements) {
    btnElement.addEventListener('click', openNavList);
}
