import logger from "../../Helpers/logger";
import ProdRepository from "../../Repository/produto-Repository";
import { Response } from "../../Helpers/response";

class VerProdUseCase {
    prodRepository: ProdRepository = new ProdRepository();

    execute = async (data: any): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            const query = {
                name: data.name
            };
            try {
                const produto = await this.prodRepository.getByName(query);
                if (!produto) {
                    return reject (
                        new Response(
                            "ProdNotFound",
                            "ProdNotFound",
                            "Produto não encontrado"
                        )
                    )
                } 
                resolve(produto?.[0]) 
            } catch (err) {
                logger.error(err);
                reject(err);
            }
        })
    }

}

export default VerProdUseCase;