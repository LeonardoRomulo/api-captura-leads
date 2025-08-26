import  pool  from './conexao.js';

async function executaQuery(query, conexao) {
    const resultado_query = await conexao.query(query);
    const resposta = resultado_query[0];
    return resposta;
}

export const retornaUsuarios = async () => {
    const conexao = await pool.getConnection();

    const query = 'SELECT id, nome, email FROM leads';

    const usuarios = await executaQuery(conexao, query);

    conexao.release();

    return usuarios;
}

export async function cadastraLead(nome,email){
    const conexao = await pool.getConnection();

    const resposta = await conexao.query('INSERT INTO leads (nome, email) VALUES(?, ?)', [nome, email]);
    console.log(resposta);

    conexao.release();
}

export default cadastraLead;