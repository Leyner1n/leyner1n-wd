const uploadFile = document.getElementById('upload-file');
const uploadBtn = document.getElementById('upload-btn');

const openConductor = () => {
    uploadFile.click();
}

const addPostFile = () => {
    uploadBtn.addEventListener('click', openConductor);
}

export {
    addPostFile
}
