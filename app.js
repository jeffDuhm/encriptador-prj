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
    
    showResult(encryptedText);

    document.getElementById("userText").value = '';

};




function decryptText(text){
    const words = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    let decryptedText = '';
    let i = 0;

    while (i < text.length){
        let find = false;

        
        for (let word in words){
            // Busca la letra encriptada dentro del texto
            if (text.startsWith(word, i)){ 
                decryptedText += words[word]; // Intercambia por letra original
                i += word.length; // Avanza según la longitud de la palabra encriptada
                find = true;
                break;
            }
        }

        if(!find){
            decryptedText += text[i]; // Agrega la letra original
            i++;
        }
    }

    return decryptedText;
}

// Boton Desencriptar
document.getElementById('decrypt').onclick = function() {
    let userText = document.getElementById('userText').value;
    let decryptedText = decryptText(userText);
    showResult(decryptedText);
};


function showResult(text){
    document.getElementById("resultText").value = text;
    document.getElementById("resultText").style.height = "100%";
    document.getElementById("infoImg").style.display = "none";
    document.getElementById("infoText").style.display = "none";
    //document.getElementById("btnCopyResult").style.visibility = "visible";
    
}

