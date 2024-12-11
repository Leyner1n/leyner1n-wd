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

const setFormSearchElement = () => {
    formSearchElement.addEventListener('click', showChoice)
}

const openFilter = (evt) => {
    for (let filter of filterList) {
        filter.classList.remove('open');
    }

    evt.target.classList.add('open');
}

const setSortList = () => {
    for (let filter of filterList) {
        filter.addEventListener('click', openFilter);
    }
}

export {
    setFormSearchElement,
    setSortList
}
