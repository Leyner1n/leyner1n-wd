const articleModalElement = document.getElementById('article-form-modal');

const articleFormElement = articleModalElement.querySelector('form');
const projectNameInputElement = articleModalElement.querySelector('#project-name-txt');
const shortDescInputElement = articleModalElement.querySelector('#short-description-txt');
const descInputElement = articleModalElement.querySelector('#description-txt');
const repositoryLinkElement = articleModalElement.querySelector('#repository-url');
const websiteLinkElement = articleModalElement.querySelector('#host-url');

const PROJECT_NAME_LENGTH = [2, 15];
const SHORT_DESCRIPTION_LENGTH = [10, 40];
const DESCRIPTION_LENGTH = [20, 250];

const DEFAULT_INPUT_COLOR = 'rgb(45, 45, 45)';
const ERROR_INPUT_COLOR = '#5e1e1e';

const changeInputColor = (inputElement, hasError) => {
    const color = hasError ? ERROR_INPUT_COLOR : DEFAULT_INPUT_COLOR;
    inputElement.setAttribute('style', `background-co lor: ${color}`);
};

const getCheckLength = (limit, inputElement = null) => {
    return (evt) => {
        if (inputElement) {
            evt.preventDefault();
        }

        const actualInputElement = inputElement ?? evt.target
        const valueLength = actualInputElement.value.length;
        let isError;

        if (inputElement) {
            isError = valueLength < limit;
        } else {
            isError = valueLength > limit;
        }

        changeInputColor(actualInputElement, isError);
    };
};

const getCheckUrl = (inputElement = null) => {
    return (evt) => {
        const actualInputElement = inputElement ?? evt.target
        let isError = false;

        if (!/(https?:\/\/)?([\da-z\.-]+)\.([a-z]{2,6})([\/\w\.-]*)*\/?/.test(actualInputElement.value)) {
            isError = true;
        }

        changeInputColor(actualInputElement, isError);
    }
};

const getCheckRequired = (inputElement = null) => {
    return (evt) => {
        const actualInputElement = inputElement ?? evt.target
        let isError = false;

        if (actualInputElement.value.length === 0) {
            isError = true;
        }

        changeInputColor(actualInputElement, isError);
    }
}

projectNameInputElement.addEventListener('input', getCheckLength(PROJECT_NAME_LENGTH[1]));
shortDescInputElement.addEventListener('input', getCheckLength(SHORT_DESCRIPTION_LENGTH[1]));
descInputElement.addEventListener('input', getCheckLength(DESCRIPTION_LENGTH[1]));
repositoryLinkElement.addEventListener('input', getCheckUrl());
websiteLinkElement.addEventListener('input', getCheckUrl());

articleFormElement.addEventListener('submit', getCheckLength(PROJECT_NAME_LENGTH[0], projectNameInputElement));
articleFormElement.addEventListener('submit', getCheckLength(SHORT_DESCRIPTION_LENGTH[0], shortDescInputElement));
articleFormElement.addEventListener('submit', getCheckLength(DESCRIPTION_LENGTH[0], descInputElement));
articleFormElement.addEventListener('submit', getCheckRequired(repositoryLinkElement));
articleFormElement.addEventListener('submit', getCheckRequired(websiteLinkElement));
articleFormElement.addEventListener('submit', getCheckUrl(repositoryLinkElement));
articleFormElement.addEventListener('submit', getCheckUrl(websiteLinkElement));
