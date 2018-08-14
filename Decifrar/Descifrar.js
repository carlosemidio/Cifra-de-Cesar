var alfaBeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function descifrar(msg, chave) {
    var words = msg.split(" ");
    var msgDescifrada = "";
    
    // Desfaz a troca de letras
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words[i].length; j++) {
            if(alfaBeto.indexOf(words[i][j].toUpperCase()) >= 0) {
                if((alfaBeto.indexOf(words[i][j].toUpperCase()) - parseInt(chave)) >= 0) {
                    if (alfaBeto.indexOf(words[i][j]) >= 0) {
                        msgDescifrada += alfaBeto[alfaBeto.indexOf(words[i][j].toUpperCase())-parseInt(chave)];
                    } else {
                        msgDescifrada += alfaBeto[alfaBeto.indexOf(words[i][j].toUpperCase())-parseInt(chave)].toLowerCase();
                    }

                } else {
                    if (alfaBeto.indexOf(words[i][j]) >= 0) {
                        msgDescifrada += alfaBeto[26 +(alfaBeto.indexOf(words[i][j].toUpperCase())-parseInt(chave))];    
                    }else {
                        msgDescifrada += alfaBeto[26 +(alfaBeto.indexOf(words[i][j].toUpperCase())-parseInt(chave))].toLowerCase();
                    }
                }
            } else {
                msgDescifrada += words[i][j];
            }
        }

        // Separa as palavras com espaço
        msgDescifrada += " ";
    }

    // Retorna a mensagem descifrada
    return msgDescifrada;
}