var alfaBeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function descifrar(msg, chave) {
    var words = msg.split(" ");
    var msgCifrada = "";
    
    // Desfaz a troca de letras
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words[i].length; j++) {
            if(words[i][j].charCodeAt(0) >= 65 && words[i][j].charCodeAt(0) <= 90) {
                msgCifrada += alfaBeto[alfaBeto.indexOf(words[i][j])+(parseInt(chave)%26)];
            } else if (words[i][j].charCodeAt(0) >= 97 && words[i][j].charCodeAt(0) <= 122) {
                msgCifrada += alfaBeto[alfaBeto.indexOf(words[i][j].toUpperCase())-(parseInt(chave)%26)].toLowerCase();
            } else {
                msgCifrada += words[i][j];
            }
        }

        // Separa as palavras com espaço
        msgCifrada += " ";
    }

    // Retorna a mensagem descifrada
    return msgCifrada;
}