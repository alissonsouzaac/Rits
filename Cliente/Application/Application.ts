import express, {Express} from 'express';
import ApplicationRoutes from '../Routes/Route';
import ErrorMiddleware from '../Middlewares/errorHandling';
import { IRoute } from '../Contracts/IRoute';
import cookieParser from 'cookie-parser';



class Application {
    app: Express = express();
    cookieParser: any = cookieParser();

    

    routes: IRoute = new ApplicationRoutes();

    middlewares(): void {
        this.app.use(express.json());
        //this.app.use(this.hcpTools.http.enableCORS);
        this.app.use(this.cookieParser);
      }
    
    
    start(): void {
        this.middlewares();
        this.app.get('/health-check', (req, res) => {
            res.json({ success: true, data: "service up and running..." })
          })

        this.app.use('/', this.routes.getRoutes());
        this.app.use(ErrorMiddleware.handleError);

    }


}

export default Application;