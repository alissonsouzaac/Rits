import { IPedido } from '../Contracts/IPedido';
import { IClientRepository } from '../Contracts/IClientRepository';
import Pedido from '../Models/Pedido';


class ClientRepository implements IClientRepository<IPedido> {
    save = async (data: IPedido): Promise<any> => {
        return Pedido.create(data)
      };

    getAll = async (): Promise<IPedido[] | undefined> => Pedido.scan().all(30).exec();
    
    getById = async (id: Object): Promise<IPedido | undefined> => Pedido.get(id);

    search = async (search: Object): Promise<IPedido[]> => 
    Pedido.scan(search).all(30).exec();

    searchByPhone = async (phone: Object): Promise<IPedido[]> => 
    Pedido.scan(phone).all(30).exec();

    searchByEmail = async (email: Object): Promise<IPedido[]> => 
    Pedido.scan(email).all(30).exec();

    delete = async (nome: String): Promise<IPedido | undefined> => Pedido.delete(nome);
}

export default ClientRepository