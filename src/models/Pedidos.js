const { Model, DataTypes } = require("sequelize");

class Pedido extends Model{
    //aqui inicializamos nossos campos na tabela
    static init(sequelize){
        super.init(
            
            {

            nome_cliente: DataTypes.STRING,
            produto: DataTypes.STRING,
            quantidade: DataTypes.INTEGER

            },
            {
                sequelize,
            }
        
        )
    }

    //aqui configuramos os relacionamentos (chave primária <-> chave estrangeira)
    static associate(models){
        
    }
}

module.exports = Pedido;