const homeBtn = document.getElementById('home-btn');
const createBtn = document.getElementById('create-card');
const notifnotificationsBtn = document.getElementById('notifications-btn');
const messageBtn = document.getElementById('message-btn');
const articleFormCloseBtn = document.getElementById('close-btn');

const btnsArray = [
    homeBtn,
    createBtn,
    notifnotificationsBtn,
    messageBtn,
    articleFormCloseBtn
]

const openNavList = (evt) => {
    for (let btn of btnsArray) {
        btn.classList.remove('open');
    }
    if (evt.target === articleFormCloseBtn) {
        homeBtn.classList.add('open');
    } else {
        evt.target.classList.add('open');
    }
}

const setAsideNavList = () => {
    for (let btn of btnsArray) {
        btn.addEventListener('click', openNavList);
    }

}

export {
    setAsideNavList
}
