<script>
    document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    var valor = document.getElementById('valor').value;
    var mensagem = document.getElementById('mensagem');

    if (valor) {
        mensagem.textContent = "Valor recebido: " + valor +  <img src="png-clipart-green-correct-sign-correct-green.png" alt=""> ;
    } else {
        mensagem.textContent = "Nenhum valor foi recebido. "+" <img src="pngtree-wrong-number-image_2248568.png" alt="">";
    }
});
</script>