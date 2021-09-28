import { getManager } from "typeorm";
import { Usuario } from "../entity/Usuario";

export class UsuarioController {

    async salvar(usuario: Usuario) {
        const usuarioSalva = await getManager().save(usuario);
        return usuarioSalva;
    };

    async recuperarTodos() {
        const usuarios = await getManager().find(Usuario);
        return usuarios;
    };

    async recuperarPorId(id: number) {
        const usuario = await getManager().findOne(Usuario, id);
        return usuario;
    };

    async recuperarLancamentosDoUsuario(id: number) {
        const usuario = await getManager().findOne(Usuario, id, {
            relations: ['lancamentos']
        })
        return usuario.lancamentos;
    };
};