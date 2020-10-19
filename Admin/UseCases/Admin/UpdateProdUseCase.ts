import ProdRepository from "../../Repository/produto-Repository";
import { Response } from "../../Helpers/response";

class UpdateProdUseCase {
    prodRepository: ProdRepository = new ProdRepository();

    execute = async (data: any): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            const query = {
                id: data.id
            };
            const produtos = await this.prodRepository.search(query);
            if (produtos && produtos.length === 0) {
                return reject(
                    new Response(
                        "ProdNotFound",
                        "ProdNotFound",
                        "Produto não encontrado")
                );
            }
            const produto = produtos?.[0];
            delete data.nome;
            delete data.preco;

            resolve (await this.prodRepository)
        })
    }
}

export default UpdateProdUseCase;