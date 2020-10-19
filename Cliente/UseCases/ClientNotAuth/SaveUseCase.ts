import { v4 as uuid } from "uuid";
import Repository from "../../Repository/Repository";
import Validate from "../../Helpers/Validate";
import { Response } from "../../Helpers/response"
import logger from "../../Helpers/logger";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;



class CriarUseCase {
    repository: Repository = new Repository();
    validate: Validate = new Validate();
    const ClientController = {};
    
    ClientController.allUsers = (req, res) => {

        modelUser.find().then(results => res.json(results)).catch(err => res.send(err));
    }
    

    execute = async (data: any): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            await this.validate
                .isValid(data)
                .then(async (resp) => {
                    data.id = uuid();

                    const cliente = await this.repository.save(data);
                    if (!cliente) {
                        return reject (
                            new Response(
                                "UserSignupException",
                                 "UserSignupException",
                                 "Usuário não cadastrado"
                            )
                        )
                    }
                })
                .catch((err) => {
                    logger.error(err);
                    reject(err);
                  });
        })
    }
}

export default CriarUseCase;