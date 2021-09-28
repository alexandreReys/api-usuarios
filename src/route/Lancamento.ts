import { Router } from 'express';
import { LancamentoController } from '../controller/LancamentoController';
import { UsuarioController } from '../controller/UsuarioController';
import { Lancamento } from '../entity/Lancamento';


export const routerLancamento = Router();
const lancamentoCtrl = new LancamentoController();
const usuarioCtrl = new UsuarioController();

routerLancamento.post('/', async (req, res) => {
    const { idUsuario, valor, descricao, data } = req.body;
    const usuario = await usuarioCtrl.recuperarPorId(idUsuario);
    if (usuario) {
        const lancamento = new Lancamento(valor, descricao, data, usuario);
        const lancamentoSalvo = await lancamentoCtrl.salvar(lancamento);
        res.json(lancamentoSalvo);
    } else {
        res.status(404).json({mensagem: 'Usuário do lançamento não encontrado'});
    };
});

// routerLancamento.get('/', async (req, res) => {
//     const usuarios = await lancamentoCtrl.recuperarTodos();
//     res.json(usuarios);
// });
