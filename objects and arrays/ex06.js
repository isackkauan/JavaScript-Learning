const sistemaCadastro = {
    usuarios: [],
    
    adicionarUsuario: function(nome, idade, email) {
        const novoUsuario = { nome, idade, email };
        this.usuarios.push(novoUsuario);
    },
    
    buscarUsuario: function(email) {
        const usuarioEncontrado = this.usuarios.find(
            function(usuario){
                return usuario.email === email;
            });
        if (usuarioEncontrado) {
            console.log(true);
        } else {
            console.log(null);
        }
    },
    
    listarUsuarios: function() {
        return this.usuarios;
    }
};

//adicionando usuários
sistemaCadastro.adicionarUsuario('João Silva', 30, 'joao.silva@example.com');
sistemaCadastro.adicionarUsuario('Maria Oliveira', 25, 'maria.oliveira@example.com');
sistemaCadastro.adicionarUsuario('Carlos Pereira', 40, 'carlos.pereira@example.com');

sistemaCadastro.buscarUsuario("joao.silva@example.com")

