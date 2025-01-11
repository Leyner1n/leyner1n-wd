import { HTTPResponseStatus as Response } from '../enum.js';

const signupFormElement = document.querySelector('#signup-modal form');

const SIGNUP_URL = 'https://kekstagram.webdot.pro/api/v1/register';

const setSignupFormSubmit = () => {
    signupFormElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        const xhr = new XMLHttpRequest();

        xhr.addEventListener('load', () => {
            // if (xhr.status === Response.CREATED || xhr.status === Response.UNPROCESSABLE_CONTENT) {
            //     console.log(JSON.parse(xhr.response));
            // }
            if ([Response.CREATED, Response.UNPROCESSABLE_CONTENT].includes(xhr.status)) {
                console.log(JSON.parse(xhr.response))
            }
        });

        xhr.open('POST', SIGNUP_URL);
        xhr.setRequestHeader('Accept', 'application/json');

        const data = new FormData(signupFormElement);
        xhr.send(data);
    });
}

export {
    setSignupFormSubmit
}
