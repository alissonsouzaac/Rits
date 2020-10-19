import { IAdmin } from '../Contracts/IAdmin';
import { IAdminRepository } from '../Contracts/IAdminRepository';
import Admin from '../Models/Admin';


class AdminRepository implements IAdminRepository<IAdmin> {
    save = async (data: IAdmin): Promise<any> => {
        return Admin.create(data)
      };

}

export default AdminRepository;