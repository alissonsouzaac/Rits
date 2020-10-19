import ClientRepository from "../../Repository/client-Repository";
import Validate from "../../Helpers/Validate";
import { Response } from "../../Helpers/response"
import logger from "../../Helpers/logger";

class CriarUseCase {
    clientRepository: ClientRepository = new ClientRepository();
    validate: Validate = new Validate();

    execute = async (data: any): Promise<any> => {
        return new Promise(async (resolve, reject) => {
        
                    const pedido = await this.clientRepository.save(data);
                    resolve(pedido);
        })
    }
}

export default CriarUseCase;