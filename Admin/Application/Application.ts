import express, {Express} from 'express';
import ApplicationRoutes from '../Routes/Route';
import ErrorMiddleware from '../Middlewares/errorHandling';
import { IRoute } from '../Contracts/IRoute';

class Application {
    app: Express = express();

    routes: IRoute = new ApplicationRoutes();

    
    start(): void {
    
        this.app.get('/health-check', (req, res) => {
            res.json({ success: true, data: "service up and running..." })
          })

        this.app.use('/', this.routes.getRoutes());
        this.app.use(ErrorMiddleware.handleError);
        
    }

}

export default Application;