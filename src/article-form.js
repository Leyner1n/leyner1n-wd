import {EventType} from './enum.js';

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

const listeners = {};
listeners[EventType.Input] = [
    {
        element: projectNameInputElement,
        callback: getCheckLength(PROJECT_NAME_LENGTH[1])
    },
    {
        element: shortDescInputElement,
        callback: getCheckLength(SHORT_DESCRIPTION_LENGTH[1])
    },
    {
        element: descInputElement,
        callback: getCheckLength(DESCRIPTION_LENGTH[1])
    },
    {
        element: repositoryLinkElement,
        callback: getCheckUrl()
    },
    {
        element: websiteLinkElement,
        callback: getCheckUrl()
    },
];

listeners[EventType.Submit] = [
    {
        element: articleFormElement,
        callback: getCheckLength(PROJECT_NAME_LENGTH[0], projectNameInputElement)
    },
    {
        element: articleFormElement,
        callback: getCheckLength(SHORT_DESCRIPTION_LENGTH[0], shortDescInputElement)
    },
    {
        element: articleFormElement,
        callback: getCheckLength(DESCRIPTION_LENGTH[0], descInputElement)
    },
    {
        element: articleFormElement,
        callback: getCheckRequired(repositoryLinkElement)
    },
    {
        element: articleFormElement,
        callback: getCheckRequired(websiteLinkElement)
    },
    {
        element: articleFormElement,
        callback: getCheckUrl(repositoryLinkElement)
    },
    {
        element: articleFormElement,
        callback: getCheckUrl(websiteLinkElement)
    },
];

const changeInputColor = (inputElement, hasError) => {
    const color = hasError ? ERROR_INPUT_COLOR : DEFAULT_INPUT_COLOR;
    inputElement.setAttribute('style', `background-color: ${color}`);
};

function getCheckLength(limit, inputElement = null) {
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
}

function getCheckUrl(inputElement = null) {
    return (evt) => {
        const actualInputElement = inputElement ?? evt.target
        let isError = false;

        if (!/(https?:\/\/)?([\da-z\.-]+)\.([a-z]{2,6})([\/\w\.-]*)*\/?/.test(actualInputElement.value)) {
            isError = true;
        }

        changeInputColor(actualInputElement, isError);
    }
}

function getCheckRequired(inputElement = null) {
    return (evt) => {
        const actualInputElement = inputElement ?? evt.target
        let isError = false;

        if (actualInputElement.value.length === 0) {
            isError = true;
        }

        changeInputColor(actualInputElement, isError);
    }
}

for (const event of Object.keys(listeners)) {
    // деструктуризация и динамическая подстановка ключа
    for (const {element, callback} of listeners[event]) {
        element.addEventListener(event, callback);
    }
}
