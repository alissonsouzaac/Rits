import logger from "../../Helpers/logger";
import ClientRepository from "../../Repository/client-Repository";
import { Response } from "../../Helpers/response"


class verUseCase {
    clientRepository: ClientRepository = new ClientRepository();

    execute = async (phone): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            try {
                const client = await this.clientRepository.searchByPhone(phone);
                if (client && client.length === 0 ) {
                    return reject (
                        new Response(
                            "ClientNotFound",
                            "ClientNotFound",
                            "Cliente não encontrado"
                        )
                    )
                }
                resolve(client);

            } catch (err) {
                logger.error(err);
                reject(err);
            }
        })
    }
}

export default verUseCase;