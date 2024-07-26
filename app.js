function encryptText(text) {
    const letters = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    let encryptedText = '';

    // Recorre cada letra del texto
    for (let i = 0; i < text.length; i++) {
        if (letters[text[i]]) {
            encryptedText += letters[text[i]]; // Intercambia letra
        } else {
            encryptedText += text[i];
        }
    }
    return encryptedText;
}

// Boton Encriptar
document.getElementById("encrypt").onclick = function() {
    let userText = document.getElementById("userText").value;
    let encryptedText = encryptText(userText);
    console.log(encryptedText);
};
