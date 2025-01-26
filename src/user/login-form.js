import { HTTPResponseStatus as Response } from '../enum.js';

const loginFormElement = document.querySelector('#login-modal form');

const LOGIN_URL = 'https://kekstagram.webdot.pro/api/v1/login';

const setLoginFormSubmit = () => {
    loginFormElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        const xhr = new XMLHttpRequest();

        xhr.addEventListener('load', () => {
            if (xhr.status === Response.CREATED) {
                const data = JSON.parse(xhr.response);
                const token = data.data.plainTextToken;

                localStorage.setItem('token', token);
            }
        });

        xhr.open('POST', LOGIN_URL);
        xhr.setRequestHeader('Accept', 'aplication/json');

        const data = new FormData(loginFormElement);
        xhr.send(data);
    });
};

export {
    setLoginFormSubmit
};
