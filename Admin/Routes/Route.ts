import { Router } from 'express';
import { IRoute } from '../Contracts/IRoute';
import AdminRoutes from './AdminRoutes';

class ApplicationRoutes implements IRoute {
    router: Router = Router();
    adminRoutes: AdminRoutes = new AdminRoutes();

    getRoutes(): Router {
        this.router.use('/admin', this.adminRoutes.getAdminRoutes());
        this.router.use('/', this.adminRoutes.getAdminNotAuthRoutes());
    }
}

export default ApplicationRoutes;