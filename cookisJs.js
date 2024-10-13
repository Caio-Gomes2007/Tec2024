// Definir a função hashString diretamente aqui
async function hashString(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    
    // Converter o ArrayBuffer para uma string hexadecinal
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

// Função para criar um cookie com o atributo SameSite
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); // Data de expiração
    const expires = "expires=" + d.toUTCString();

    document.cookie = `${cname}=${encodeURIComponent(cvalue)};${expires};path=/;SameSite=Lax`;
}

// Função para obter o valor de um cookie
function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Função para deletar todos os cookies
function deleteAllCookies() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookieName = cookies[i].split("=")[0].trim();
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax`;
    }
    console.log("Todos os cookies foram eliminados.");
}

// Função para obter o hash da senha
async function obterHash(valor) {
    const senhaCriptografada = await hashString(valor);
    return senhaCriptografada;
}

// Função de cadastro
async function Cadastro(NomeId, EmailId, SenhaId) {
    var NomeCadastro = document.getElementById(NomeId).value;
    var EmailCadastro = document.getElementById(EmailId).value;
    var SenhaCadastro = document.getElementById(SenhaId).value;

    // Obter o hash da senha
    const senhaCriptografada = await obterHash(SenhaCadastro);

    // Definir cookies
    setCookie("Nome", NomeCadastro, 7);
    setCookie("Email", EmailCadastro, 7);
    setCookie("Senha", senhaCriptografada, 7);

    console.log("Cadastro concluído com sucesso!");
}

