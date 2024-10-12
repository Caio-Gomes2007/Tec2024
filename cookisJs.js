//import { encryptPassword } from './HashSenha.js';
//pegando os dados

//Variaveis de cadastro
var NomeCadastro = document.getElementById("NomeCadastro").value;
var EmailCadastro = document.getElementById("EmailCadastro").value;
var SenhaCadastro = document.getElementById("SenhaCadastro").value;

//variaveis de Login

var NomeLogin = document.getElementById("NomeLogin").value;
//var SenhaLogin = document.getElementById("SenhaLogin").value;

//funções de cookie

// Função para criar um cookie com o atributo SameSite
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); // Data de expiração
    const expires = "expires=" + d.toUTCString();

    // Verifica se o cookie já existe
    const existingValue = getCookie(cname);
    if (existingValue) {
        console.log(`Cookie ${cname} já existe com o valor: ${existingValue}`);
    }

    // Define ou redefine o cookie
    document.cookie = `${cname}=${encodeURIComponent(cvalue)};${expires};path=/;SameSite=Lax`;
}

  

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
function deleteAllCookies() {
    const cookies = document.cookie.split(";"); // Divide os cookies em um array
    for (let i = 0; i < cookies.length; i++) {
        const cookieName = cookies[i].split("=")[0].trim(); // Obtém o nome do cookie
        // Define o cookie com uma data de expiração no passado para excluí-lo
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax`;
    }
    console.log("Todos os cookies foram eliminados.");
}

function Cadastro(NomeId,EmailId){
//setCookie("Nome",NomeCadastro,7);
//setCookie("Email",EmailCadastro,7);
var NomeCadastro = document.getElementById(NomeId).value;
var EmailCadastro = document.getElementById(EmailId).value;
setCookie("Nome",NomeCadastro,7);
setCookie("Email",EmailCadastro,7);



}
// main.js

//const senhaCriptografada = encryptPassword(SenhaCadastro);
//setCookie("senha",senhaCriptografada)





