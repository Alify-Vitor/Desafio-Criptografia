

function Funçao_criptografia() {
    
    document.getElementById("div__resultado").style.display = "none";
    document.getElementById("nome2").style.display = "block";
    document.getElementById("buttonCopiar").style.display = "block";
    
    /*Aparece texto criptografado*/
    let texto = document.getElementById("nome");
    let texto2 = document.getElementById("nome2");

    let textoAtual = texto.value;

    let novoTexto = textoAtual
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")     
            .replace(/u/g, "ufat");

    texto2.value = novoTexto;
    
}

function Funçao_descriptografia() {
    /*Imagme Retirada*/
    document.getElementById("div__resultado").style.display = "none";
    document.getElementById("nome2").style.display = "block";

    
    /*Aparece texto criptografado*/
    let texto = document.getElementById("nome");
    let texto2 = document.getElementById("nome2");

    let textoAtual = texto.value;

    let novoTexto = textoAtual
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")     
            .replace(/ufat/g, "u");
            

    texto2.value = novoTexto;
    
}

function copiarTexto() {
    // Obtém o valor da textarea
    var texto = document.getElementById("nome2").value;
    
    // Copia o texto para a área de transferência usando a API Clipboard
    navigator.clipboard.writeText(texto).then(function() {
        // Mensagem de sucesso opcional
        alert("Texto copiado com sucesso!");
    }).catch(function(error) {
        // Trata o erro, se ocorrer
        alert("Falha ao copiar o texto: ", error);
    });
}