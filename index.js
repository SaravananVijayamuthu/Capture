
const captureVideoButton = document.querySelector('.capture-button');

const screenshotButton = document.querySelector('#screenshot-button');

const img = document.querySelector('#screenshot img');
const video = document.querySelector('#screenshot video');
const canvas = document.createElement('canvas');
// íf the user clíck on capture btn 
captureVideoButton.onclick = function () {
    navigator.mediaDevices.getUserMedia({
        video: true
    }).then(stream => {
        video.srcObject = stream;
    }).catch(err => {
        console.log(err)
    });
};
// when user clicks on the 
screenshotButton.onclick = function () {
    // set width and height
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    // draw image
    canvas.getContext('2d').drawImage(video, 0, 0);
    //create a datallrl
    let dataUrl = canvas.toDataURL('image / png');
    img.src = dataUrl;
    // for downloading the image
    var hrefElement = document.createElement('a');
    hrefElement.href = dataUrl;
    document.body.append(hrefElement);
    hrefElement.download = 'ScreenShot$.png'; // download ñame 
    hrefElement.click();
    hrefElement.remove();
};