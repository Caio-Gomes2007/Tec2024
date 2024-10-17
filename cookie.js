// Função para gerar o hash da string (criptografia)
async function hashString(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);

    // Converter o ArrayBuffer para uma string hexadecimal
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

// Função para obter o hash de uma senha
async function obterHash(valor) {
    const senhaCriptografada = await hashString(valor); 
    return senhaCriptografada; 
}

// Funções para cookies

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

// Função de cadastro
async function Cadastro(NomeId, EmailId, SenhaId) {
    var NomeCadastro = document.getElementById(NomeId).value;
    var EmailCadastro = document.getElementById(EmailId).value;
    var SenhaCadastro = document.getElementById(SenhaId).value;

    // Criptografar a senha e definir cookies
    const senhaCriptografada = await obterHash(SenhaCadastro);
    
    setCookie("Nome", NomeCadastro, 7);
    setCookie("Email", EmailCadastro, 7);
    setCookie("Senha", senhaCriptografada, 7);
    
    alert("Cadastro realizado com sucesso!");
}

// Função de login
function Login(NomeId, SenhaId) {
    var NomeLogin = document.getElementById(NomeId).value;
    var SenhaLogin = document.getElementById(SenhaId).value;

    // Obter cookies
    var nomeCadastrado = getCookie("Nome");
    var senhaCadastrada = getCookie("Senha");

    // Criptografar a senha digitada e comparar com o hash armazenado
    obterHash(SenhaLogin).then(senhaCriptografada => {
        if (NomeLogin === nomeCadastrado && senhaCriptografada === senhaCadastrada) {
            alert("Login bem-sucedido!");
        } else {
            alert("Nome ou senha incorretos!");
        }
    });
}

