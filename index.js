
(async () => {
    const bancoDados = require('./db');
    const cadastro = require('./cadastro');

    try {
        const resultado = await bancoDados.sync();
        console.log('Conexão feita com sucesso!', resultado);
    } catch (error) {
        console.log('Conexão mal sucedida.', error);
    }

    const retorno = await cadastro.create({
        
        nome_produto: 'feijao',
        valor_produto: 5.2
    })
})();