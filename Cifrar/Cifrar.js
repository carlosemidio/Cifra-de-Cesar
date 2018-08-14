var alfaBeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function cifrar(msg, chave) {
    var words = msg.split(" ");
    var msgCifrada = "";
    
    // Faz a troca das letras
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words[i].length; j++) {
            if(words[i][j].charCodeAt(0) >= 65 && words[i][j].charCodeAt(0) <= 90) {
                if (alfaBeto.indexOf(words[i][j])+(parseInt(chave)%26) <= 25) {
                    msgCifrada += alfaBeto[alfaBeto.indexOf(words[i][j])+(parseInt(chave)%26)];
                } else {
                    msgCifrada += alfaBeto[(alfaBeto.indexOf(words[i][j])+(parseInt(chave)%26))-26];
                }
            } else if (words[i][j].charCodeAt(0) >= 97 && words[i][j].charCodeAt(0) <= 122) {
                if ((alfaBeto.indexOf(words[i][j].toUpperCase())+(parseInt(chave)%26)) <= 25) {
                    msgCifrada += alfaBeto[alfaBeto.indexOf(words[i][j].toUpperCase())+(parseInt(chave)%26)].toLowerCase();    
                } else {
                    msgCifrada += alfaBeto[(alfaBeto.indexOf(words[i][j].toUpperCase())+(parseInt(chave)%26))-26].toLowerCase();
                }
            } else {
                msgCifrada += words[i][j];
            }
        }

        // Separa as palavras com espaço
        msgCifrada += " ";
    }

    // Retorna a mensagem cifrada
    return msgCifrada;
}