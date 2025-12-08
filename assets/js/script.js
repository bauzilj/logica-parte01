//Exercico 03

function exercicio03() {

    const nomeFilme = prompt("Digite o nome do filme:");

    const anoLancamento = parseInt(
        prompt("Digite o ano de lançamento do filme (apenas números):")
    );

    const duracaoMinutos = parseInt(
        prompt("Digite a duração do filme em minutos (apenas números):")
    );

    const genero = prompt("Digite o gênero do filme (ex: Ação, Comédia, Drama):");

    const jaAssistido = confirm("Você já assistiu a esse filme?");


    const detalheDoFilme =
        "Dados do filme:\n" +
        "Nome: " + nomeFilme + "\n" +
        "Ano de lançamento: " + anoLancamento + "\n" +
        "Duração: " + duracaoMinutos + " minutos\n" +
        "Gênero: " + genero + "\n" +
        "Já assistido: " + (jaAssistido ? "Sim" : "Não");


    alert(detalheDoFilme);
    console.log(detalheDoFilme);
}

//Exercicio 04

function exercicio04() {
    const nomeProduto = prompt("Digite o nome de producto");

    const precoUnitario = parseFloat(
        prompt("Digite  o preço unitário")
    );
    const quantidadeComprada = parseInt(
        prompt("Digite a quantidade comprada")
    );
    const valorTotal = precoUnitario * quantidadeComprada;
    const assinantePremium = confirm("Voce é assinante Premium?");


    const clientePremium = parseFloat(valorTotal / 100 * 10);

    const descontoPremium = parseFloat(valorTotal - clientePremium);

    if (assinantePremium === true) {
        alert("Voce é cliente Premium , o se desconto é " +
            clientePremium.toFixed(2) + " Reais, o seu valor total é " +
            descontoPremium.toFixed(2) + " Reais");
    } else {
        alert("Voce nao e premium, voce nao tem desconto")
    }

    const valorFinalCompra =
        "Valor final da compra: \n" +
        "Nome: " + nomeProduto + "\n" +
        "Preço unitário: " + precoUnitario + " Reais \n" +
        "Quantidade Comprada: " + quantidadeComprada + "\n" +
        "Valor Total da Compra: " + valorTotal.toFixed(2) + " Reais \n" +
        "Valor do cliente premium: " + descontoPremium.toFixed(2) + " Reais \n";


    alert(valorFinalCompra);
    console.log(valorFinalCompra);

}

//exercicio05

function exercicio05() {
    const nomeAluno = prompt("Qual é o nome do aluno? ");
    const primeiraNota = parseFloat(
        prompt(" Digite a primeira nota ...")
    );
    const segundaNota = parseFloat(
        prompt("Digite a segunda nota ...")
    );
    const terceiraNota = parseFloat(
        prompt(" Digite a terceira nota ...")
    );

    media = (primeiraNota + segundaNota + terceiraNota) / 3;


    let situacao;
    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5 && media < 6.99) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }


    const resuldadoFinal =
        "Aluno: " + nomeAluno + "\n" +
        "Nota 1: " + primeiraNota + "\n" +
        "Nota 2: " + segundaNota + "\n" +
        "Nota 3: " + terceiraNota + "\n" +
        "Média: " + media.toFixed(2) + "\n" +
        "Situação: " + situacao;


    alert(resuldadoFinal);
    console.log(resuldadoFinal);
}

//exercicio06
function exercicio06(){
    const modeloCarro = prompt(" Digite o modelo de carro ...");
    const anoCarro = parseInt(
        prompt(" Digite ano de carro...")
    );
}