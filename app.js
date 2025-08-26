import express from 'express';
import cors from 'cors';
import pool from './service/conexao.js';
import { cadastraLead, retornaUsuarios } from './service/service.js';

const app = new express();
app.use(cors());

app.get('/usuarios', async (req,res) => {

});

app.post('/usuarios', async (req,res) => {

});

app.listen(9000, async () => {
    const date= new Date();
    console.log(`Servidor iniciado em: ${date}`);

    const conexao = await pool.getConnection();
    console.log(conexao.threadId);
});