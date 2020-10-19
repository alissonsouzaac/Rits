import logger from "../../Helpers/logger";
import AdminRepository from "../../Repository/admin-Repository";
import { Response } from "../../Helpers/response";

class SaveAdminUseCase {
    adminRepository: AdminRepository = new AdminRepository();

    execute = async (data: any): Promise<any> => {
        return new Promise(async (resolve, reject) => {

            const admin = await this.adminRepository.save(data);
            if (!admin) {
                
            }
            resolve(admin);
        })
    }
}

export default SaveAdminUseCase;