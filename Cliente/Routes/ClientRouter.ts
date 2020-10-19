import { Router } from 'express';
import ClientController from '../Controller/ClientController';
import NotClientController from '../Controller/NotClientController';

class clientRoutes {
    clientController: ClientController = new ClientController;
    notClientController: NotClientController = new NotClientController;

    getClientRoutes(): Router {
        const router: Router = Router();

        router.get('/ver', this.clientController.get);
        router.get('/listar', this.clientController.getAll);
        router.get('/criar', this.clientController.save);
        router.get('/deletar', this.clientController.delete);

    }

    getNotClientRoutes(): Router {
        const router: Router = Router();

        router.get('/', this.notClientController.save);
    }
}

export default clientRoutes;