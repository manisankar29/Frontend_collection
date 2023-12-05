const generateBtn = document.getElementById('generate');
const urlInput = document.getElementById('urlinput');
const qrCodeDiv = document.getElementById('qrcode');

generateBtn.addEventListener('click', () => {
    const url = urlInput.value;
    if(!url) {
        alert('Please enter a URL');
        return;
    }

    qrCodeDiv.innerHTML = '';

    new QRCode(qrCodeDiv, {
        text: url,
        width: 128,
        height: 128,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
});