# Conexao_BD com JavaScript

Conexão simples com um banco de dados utilizando o sgbd Mysql Workbench, aonde as requisições foram feitas através do Insomnia, este que é um framework Open Source para desenvolvimento/teste de API Clients. Ele pode ser usado para envio de requisições REST, SOAP, GraphQ e etc...

Após rodarmos o código app.js, temos a confirmação de que funcionou e está disponível na porta 8080. E também somos avisados quando o cadastro de um novo atributo é feito com sucesso.
![img1](https://github.com/Ell-neto/Conexao_BD/blob/main/imgs/tela_inicial.png)
O uso do Insomnia é como dito acima, para fazer as requisições antes mesmo de implementar o código em um site específico (e sem utilizar o localhost como no exemplo).
![img2](https://github.com/Ell-neto/Conexao_BD/blob/main/imgs/util_insomnia.png)
E por fim temos o resultado final no Mysql, podendo fazer todos os tipos de comandos/consultas nos dados armazenados*.
![img3](https://github.com/Ell-neto/Conexao_BD/blob/main/imgs/vis_mysql.png)


*O código cria de forma 'automática' duas novas colunas, a createdAt e updatedAt, podendo ser utilizado para diversos fins, inclusive deletá-las também.
