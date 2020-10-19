import { Router } from 'express';
import AdminController from '../Controller/AdminController';
import AdminNotAuthController from "../Controller/AdminNotAuthController";

class AdminRoutes {
    adminController: AdminController = new AdminController();
    adminNotAuthController: AdminNotAuthController = new AdminNotAuthController();

    getAdminRoutes(): Router {
        const router: Router = Router();

        router.get('/produtos', this.adminController.listProd);
        router.get('/clientes', this.adminController.listClient);
        router.get('/produto', this.adminController.verProd);
        router.get('/cliente', this.adminController.verClient);
        router.post('/produto', this.adminController.saveProd);
        router.post('/cliente', this.adminController.saveClient);
        router.put('/produto', this.adminController.updateProd);

    }

    getAdminNotAuthRoutes(): Router {
        const router: Router = Router();

        router.post('/', this.adminNotAuthController.saveAdmin);
        router.post('/login', this.adminNotAuthController.loginAdmin);
    }
}

export default AdminRoutes;