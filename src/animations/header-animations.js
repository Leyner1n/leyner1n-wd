const formSearchElement = document.getElementById('header-search');
const filterAll = document.getElementById('header-list-all');
const filterPopular = document.getElementById('header-list-popular');
const filterNew = document.getElementById('header-list-new');

const filterList = [
    filterAll,
    filterPopular,
    filterNew
]

const showChoice = () => {
    formSearchElement.classList.add('open');

    document.addEventListener('click', onOverlayClick);
}

const hideChoice = () => {
    formSearchElement.classList.remove('open');

    formSearchElement.removeEventListener('click', onOverlayClick);
}

const onOverlayClick = (evt) => {
    if (!evt.target.matches('.header-search')) {
        hideChoice()
    }
}

const openFilter = (evt) => {
    for (let filter of filterList) {
        filter.classList.remove('open');
    }

    evt.target.classList.add('open');
}

const setSortList = () => {

}

formSearchElement.addEventListener('click', showChoice)
for (let filter of filterList) {
    filter.addEventListener('click', openFilter);
}
