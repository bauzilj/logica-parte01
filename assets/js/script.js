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
function exercicio06() {
    const modeloCarro = prompt(" Digite o modelo de carro ...");
    const anoCarro = parseInt(
        prompt(" Digite ano de carro...")
    );
    const valorCarro = parseFloat(
        prompt("Digite o valor do carro ...")
    );
    const quantidadeParcelado = parseInt(
        prompt(" Digite a quantidade das parcelas")
    );
    let valorParcela = (valorCarro / quantidadeParcelado);
    const querSeguro = confirm(" Voce quer incluir seguro?");

    if (querSeguro === true) {

    }
    const valorComSeguro = valorParcela + 150;

    const valorFinal =
        "Detalhe total " + "\n" +
        "Model do carro: " + modeloCarro + "\n" +
        "Ano do carro: " + anoCarro + "\n" +
        "Valor do carro: " + valorCarro.toFixed(2) + " Reais \n" +
        "Qantidade de parcelas: " + quantidadeParcelado + " Parcelas \n" +
        "Valor de parcelas com seguro: " + valorComSeguro.toFixed(2) + " Reais \n" +
        "Valor final da parcelas sem seguro: " + valorParcela.toFixed(2) + " Reais";

    alert(valorFinal);
    console.log(valorFinal);
}

//exercicio07
function exercicio07() {
    let nomeJogo = prompt("Digite o nome do jogo");
    const horaPorDia = parseInt(
        prompt("Digite quantas horas jogadas por dia ")
    );
    const diasPorSemana = parseInt(
        prompt("Digite quantas dias jogadas por semana ")
    );
    const totalHorasPorSemana = horaPorDia * diasPorSemana;

    const jogoOnline = confirm(" O jogo esta online? ");

    if (jogoOnline === true) {
        situacao = "Online ";
    } else {
        situacao = "Offline";
    }

    const apresentarJogo =
        "Apresentacao do jogo " + "\n" +
        "Nome do jogo: " + nomeJogo + "\n" +
        "Horas por dia: " + horaPorDia + "\n" +
        "Dias por semanas " + diasPorSemana + "\n" +
        "Horas jogadas na semana: " + totalHorasPorSemana + "\n" +
        "Situacao do Jogo: " + situacao;

    alert(apresentarJogo);
    console.log(apresentarJogo);

}

//exercicio08
function exercicio08() {
    const nomeRestaurante = prompt(" Digite o nome do restaurante");
    let valorConta = parseFloat(
        prompt(" Digite o valor da conta")
    );
    let quantidadePessoas = parseInt(
        prompt(" Quantas pessoas que tem na mesa? ")
    );
    const pagarPorPessoas = valorConta / quantidadePessoas;

    const taxaServico = confirm(" Será incluída taxa de serviço? ");

    let incluirTaxaServico = valorConta / 100 * 10;

    if (taxaServico === true) {
        situacao = " Tem taxa de serviço o valor final da conta é " + (incluirTaxaServico + valorConta).toFixed(2) + "Reais";
    } else {
        situacao = " Nao tem taxa de serviço o valor total da conta é " + valorConta.toFixed(2) + "Reais";
    }

    const valorTotalPagamento =
        "Valor final da conta e o valor por pessoa: " + " \n" +
        "Nome do restaurante: " + nomeRestaurante + '\n' +
        "Valor da conta: " + valorConta.toFixed(2) + " Reais \n" +
        "Quantidade de pessoas na mesa: " + quantidadePessoas + " Pessoas \n" +
        "Pagamento por pessoas: " + pagarPorPessoas.toFixed(2) + " Reais \n" +
        "Taxa de serviço: " + situacao;




    alert(valorTotalPagamento);
    console.log(valorTotalPagamento);
}

//exercicio09

function exercicio09() {
    const nomeFuncionario = prompt(" Digite o nome do funcionario ");
    const salarioBase = parseFloat(
        prompt("Digite o salário base ")
    );
    const horaExtra = parseInt(
        prompt(" Digite o valor das horas extras no mes ")
    );
    const valorDesconto = parseFloat(
        prompt(" Digite o valor dos descontos ")
    );
    const salarioFinal = (salarioBase + horaExtra) - valorDesconto;

    if (salarioFinal > 3000) {
        situacao = " O funcionário paga imposto alto";
    } else {
        if (salarioFinal <= 3000) {
            situacao = " O funcionário paga imposto padrão";
        }
    }

    const detalheSalario =
        "Detalhe do salario  \n" +
        "Nome do funcionario: " + nomeFuncionario + "\n" +
        "Salario Base: " + salarioBase.toFixed(2) + " Reais \n" +
        "Horas extras: " + horaExtra + " Horas \n" +
        "Valor do desconto: " + valorDesconto.toFixed(2) + " Reais \n" +
        "Salario final: " + salarioFinal.toFixed(2) + " Reais \n" +
        "Situaçao do imposto: " + situacao;


    alert(detalheSalario);
    console.log(detalheSalario);
}

//exercicio10
function exercicio10() {
    const nome = prompt("Digite o nome do cliente:");
    let saldo = parseFloat(
        prompt("Digite o saldo atual da conta:")
    );
    const deposito = parseFloat(
        prompt("Digite o valor do depósito:")
    );

    saldo = saldo + deposito;

    const saque = parseFloat(
        prompt("Digite o valor do saque:")
    );

    if (saque <= saldo) {
        saldo = saldo - saque;
        alert("Saque realizado com sucesso!");
    } else {
        alert("Saldo insuficiente para realizar o saque.");
    }

    alert("Cliente: " + nome + "\nSaldo final: R$ " + saldo.toFixed(2));
}
