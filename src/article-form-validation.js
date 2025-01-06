const addPostBtn = document.getElementById('add-post-btn');
const projectNameElement = document.getElementById('project-name-txt');
const shortDescriptionElement = document.getElementById('short-description-txt');
const descriptionElement = document.getElementById('description-txt');
const repositoryUrlElement = document.getElementById('repository-url');
const hostUrlElement = document.getElementById('host-url');

const PROJECT_NAME_LIMITATION = [2, 30];
const SHORT_DESCRIPTION_LIMITATION = [10, 40];
const DESCRIPTION_LIMITATION = [20, 250];

const checkProjectName = (evt) => {
    let error = 'rgb(45, 45, 45)';

    if (evt.target.value.length >  PROJECT_NAME_LIMITATION[1]) {
        error = '#5e1e1e';
    }

    evt.target.setAttribute('style', 'background-color: ' + error);
}

const checkshortDescriptionElement = (evt) => {
    let error = 'rgb(45, 45, 45)';

    if (evt.target.value.length >  SHORT_DESCRIPTION_LIMITATION[1]) {
        error = '#5e1e1e';
    }

    evt.target.setAttribute('style', 'background-color: ' + error);
}

const checkDescriptionElement = (evt)=> {
    let error = 'rgb(45, 45, 45)';


    if (evt.target.value.length >  DESCRIPTION_LIMITATION[1]) {
        error = '#5e1e1e';
    }

    evt.target.setAttribute('style', 'background-color: ' + error);
}

const checkUrl = (evt) => {
    let error = 'rgb(45, 45, 45)';

    if (evt.target.validity.typeMismatch) {
        error = '#5e1e1e';
    }

    evt.target.setAttribute('style', 'background-color: ' + error);
}

const validateBeforeClickBtn = () => {
    const formInformationArray = [
        projectNameElement,
        shortDescriptionElement,
        descriptionElement
    ];
    let colorArray = [
        'rgb(45, 45, 45)',
        'rgb(45, 45, 45)',
        'rgb(45, 45, 45)',
        'rgb(45, 45, 45)',
        'rgb(45, 45, 45)'
    ];
    let conditionArray = [
        PROJECT_NAME_LIMITATION[0],
        SHORT_DESCRIPTION_LIMITATION[0],
        DESCRIPTION_LIMITATION[0]
    ];

    let counter = 0;
    for (let info of formInformationArray) {
        if (info.value.length < conditionArray[counter]) {
            colorArray.splice(counter, 1, '#5e1e1e');
        }
        counter += 1
    }

    if (hostUrlElement.value.length === 0) {
        colorArray.splice(3, 1, '#5e1e1e');
    }
    if (repositoryUrlElement.value.length === 0) {
        colorArray.splice(4, 1, '#5e1e1e');
    }

    projectNameElement.setAttribute('style', 'background-color: ' + colorArray[0]);
    shortDescriptionElement.setAttribute('style', 'background-color: ' + colorArray[1]);
    descriptionElement.setAttribute('style', 'background-color: ' + colorArray[2]);
    hostUrlElement.setAttribute('style', 'background-color: ' + colorArray[3]);
    repositoryUrlElement.setAttribute('style', 'background-color: ' + colorArray[4]);
}

repositoryUrlElement.addEventListener('input', checkUrl);
hostUrlElement.addEventListener('input', checkUrl);
projectNameElement.addEventListener('input', checkProjectName);
shortDescriptionElement.addEventListener('input', checkshortDescriptionElement);
descriptionElement.addEventListener('input', checkDescriptionElement);
addPostBtn.addEventListener('click', validateBeforeClickBtn);
