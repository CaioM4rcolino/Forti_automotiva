const Pedido = require('../models/Pedidos');

const { Op } = require("sequelize");

module.exports = {

    async listarClientes(request, response){

        const {nome} = request.query;

        try {

            if(nome == null){

                const clientes = await Pedido.findAll() 
                response.send(clientes);
            }
            else{

                const nomeCliente = await Pedido.findAll({where:{
                    nome_cliente:{[Op.like]: `%${nome}%`}
                }})
    
                if(nomeCliente == null)
                    response.status(404).send({Erro: 'Cliente não encontrado.'});
                else
                    response.status(200).send(nomeCliente);

            }  
        } catch (error) {
            console.log(error);
            response.status(500).send({ error })
        }
    },


    async inserirPedido(request, response){

        const {nome_cliente, produto, quantidade, created_at } = request.body;
    
        try {

             let cliente = await Pedido.create({nome_cliente, produto, quantidade, created_at})
             response.status(201).send({ id: cliente.id});
        
        }catch (error) {

            console.log(error);
            response.status(500).send({ error })

        } 
    },
    async deletarPedido(request, response){

        //Buscar o id do aluno
        const idPedido = request.params.id;
                        //  ^(args)|^ nome do parâmetro
    
        try {

            //Deletar o id correspondente
            pedido = await Pedido.destroy({
                where: {id: idPedido}
            });
        
            if(!pedido){

                response.status(404).send({Erro: 'Pedido não encontrado. Verifique se o ID existe no banco de dados.'});
               

            }
            else{
                 //Devolver a resposta com o status
                 response.status(200).send({Sucesso: 'Pedido deletado com sucesso.'});
            }
            

            
        } catch (error) {
            response.status(500).send(error);
        }
        
    },
    async editarPedido(request, response){

        //resgatar o id do aluno
        const idPedido = request.params.id;
    
        // resgatar os dados do corpo
        const {nomeCliente, produto, quantidade} = request.body;

        try {
            //fazer a alteração
            let alteracao = await Pedido.update({nomeCliente: nomeCliente, produto: produto, quantidade: quantidade}, {where: {id: idPedido}});
    
            if(alteracao == null){

                response.status(404).send({Erro: 'Erro ao atualizar o registro, verifique se a digitação dos dados está correta.'})

            }
            else{

                response.status(200).send();

            }
            
        } catch (error) {
            response.status(500).send(error);
        }
    
        
    
    },
    
}