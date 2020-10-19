import { IProduto } from '../Contracts/IProduto';
import { IProdutoRepository } from '../Contracts/IProdutoRepository';
import Produto from '../Models/Produto';

class ProdRepository implements IProdutoRepository<IProduto> {
    save = async (data: IProduto): Promise<any> => {
        return Produto.create(data)
      };  

    getAll = async (): Promise<IProduto[] | undefined> => Produto.scan().all(30).exec();

    getByName = async (name: Object): Promise<IProduto | undefined> => Produto.get(name);
    
    search = async (search: Object): Promise<IProduto[]> => 
    Produto.scan(search).all(30).exec();

    searchByName = async (name: Object): Promise<IProduto[]> => 
    Produto.scan(name).all(30).exec();

    update = async (nid: String, fields: Object): Promise<IProduto | undefined> => 
    Produto.update(nid, fields);

    delete = async (nome: String): Promise<IProduto | undefined> => Produto.delete(nome);

}

export default ProdRepository;