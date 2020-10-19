import { Request, Response, NextFunction } from 'express';
import logger from "../Helpers/logger";
import SaveUseCase from "../UseCases/ClientNotAuth/SaveUseCase";
import { INotController } from "../Contracts/INotController"
//import hcpTools from "hcp-tools";


class notClientController implements INotController {
    saveUseCase: SaveUseCase = new SaveUseCase();
 //   hcpTools: hcpTools = new hcpTools();


    save = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
     //   logger.info("starting AccountController.save...");
        //await this.hcpTools.auth.verifyToken(req, res, next);
    
    
          try {
            await this.saveUseCase
              .execute(req.body)
              .then(async (resp) => {
           //     this.hcpTools.http.response(res, true, resp);
              })
              .catch(async (err) => {
          //      this.hcpTools.http.response(res, false, err);
              });
          } catch (err) {
            logger.error(err);
        //    this.hcpTools.http.response(res, false, err);
          }
        logger.info("finishing AccountController.save...");
      };

      login = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
     //   logger.info("starting AccountController.save...");
        //await this.hcpTools.auth.verifyToken(req, res, next);
    
    
          try {
            await this.saveUseCase
              .execute(req.body)
              .then(async (resp) => {
       //         this.hcpTools.http.response(res, true, resp);
              })
              .catch(async (err) => {
      //          this.hcpTools.http.response(res, false, err);
              });
          } catch (err) {
            logger.error(err);
      //      this.hcpTools.http.response(res, false, err);
          }
        logger.info("finishing AccountController.save...");
      };


      healthCheck = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        res.status(200).send({ success: true, data: 'service up and running...' });
    };
}

export default notClientController;