const homeBtn = document.getElementById('home-btn');
const createBtn = document.getElementById('create-card');
const notifnotificationsBtn = document.getElementById('notifications-btn');
const messageBtn = document.getElementById('message-btn');
const articleFormCloseBtn = document.getElementById('close-btn');

const btnElements = [
    homeBtn,
    createBtn,
    notifnotificationsBtn,
    messageBtn,
    articleFormCloseBtn
]

const openNavList = (evt) => {
    for (let btn of btnElements) {
        btn.classList.remove('open');
    }
    if (evt.target === articleFormCloseBtn) {
        homeBtn.classList.add('open');
    } else {
        evt.target.classList.add('open');
    }
}

for (let btn of btnElements) {
    btn.addEventListener('click', openNavList);
}
