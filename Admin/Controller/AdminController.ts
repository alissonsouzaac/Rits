import logger from "../Helpers/logger";
import { Request, Response, NextFunction } from "express";
import { IAdminController } from "../Contracts/IAdminController";
import ListClientUseCase from "../UseCases/Admin/ListClientUseCase";
import ListProdUseCase from "../UseCases/Admin/ListProdUseCase";
import SaveProdUseCase from "../UseCases/Admin/SaveProdUseCase";
import SaveClientUseCase from "../UseCases/Admin/SaveClientUseCase";
import UpdateProdUseCase from "../UseCases/Admin/UpdateProdUseCase";
import VerProdUseCase from "../UseCases/Admin/VerProdUseCase";
import VerClientUseCase from "../UseCases/Admin/VerClientUseCase";


class AdminController implements IAdminController {
   
    listClientUseCase: ListClientUseCase = new ListClientUseCase();
    listProdUseCase: ListProdUseCase = new ListProdUseCase();
    saveProdUseCase: SaveProdUseCase = new SaveProdUseCase();
    saveClientUseCase: SaveClientUseCase = new SaveClientUseCase();
    updateProdUseCase: UpdateProdUseCase = new UpdateProdUseCase();
    verProdUseCase: VerProdUseCase = new VerProdUseCase();
    verClientUseCase: VerClientUseCase = new VerClientUseCase();

    listClient = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting AdminController.listClient...");
        //await this.hcpTools.auth.verifyToken(req, res, next);
    
        try {
          await this.listClientUseCase
            .execute()
            .then(async (resp) => {
              
            })
            .catch((err) => {
            
            });
        } catch (err) {
          logger.error(err);
          
        }
        logger.info("finishing AdminController.listClient...");
      };

      listProd = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting AdminController.listProd...");
        //await this.hcpTools.auth.verifyToken(req, res, next);
    
        try {
          await this.listProdUseCase
            .execute()
            .then(async (resp) => {
              
            })
            .catch((err) => {
              
            });
        } catch (err) {
          logger.error(err);
         
        }
        logger.info("finishing AdminController.listProd...");
      };

      saveClient = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting AdminController.saveClient...");
        //await this.hcpTools.auth.verifyToken(req, res, next);
    
        try {
          await this.saveClientUseCase
            .execute(req.body)
            .then(async (resp) => {
         
            })
            .catch((err) => {
             
            });
        } catch (err) {
          logger.error(err);
         
        }
        logger.info("finishing AdminController.saveClient...");
      };

      saveProd = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting AdminController.saveProd...");
        //await this.hcpTools.auth.verifyToken(req, res, next);
    
        try {
          await this.saveProdUseCase
            .execute(req.body)
            .then(async (resp) => {
            
            })
            .catch((err) => {
            
            });
        } catch (err) {
          logger.error(err);
        
        }
        logger.info("finishing AdminController.saveProd...");
      };

      updateProd = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting AdminController.updateProd...");
        //await this.hcpTools.auth.verifyToken(req, res, next);
    
        try {
          await this.updateProdUseCase
            .execute(req.body)
            .then(async (resp) => {
             
            })
            .catch((err) => {
             
            });
        } catch (err) {
          logger.error(err);
         
        }
        logger.info("finishing AdminController.updateProd...");
      };

      verProd = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting AdminController.verProd...");
        //await this.hcpTools.auth.verifyToken(req, res, next);
    
        try {
          await this.verProdUseCase
            .execute(req.body)
            .then(async (resp) => {
           
            })
            .catch((err) => {
              
            });
        } catch (err) {
          logger.error(err);
          
        }
        logger.info("finishing AdminController.verProd...");
      }; 

      verClient = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting AdminController.verClient...");
        //await this.hcpTools.auth.verifyToken(req, res, next);
    
        try {
          await this.verClientUseCase
            .execute(req.body)
            .then(async (resp) => {
              
            })
            .catch((err) => {
             
            });
        } catch (err) {
          logger.error(err);
        
        }
        logger.info("finishing AdminController.verClient...");
      };

      healthCheck = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        res.status(200).send({ success: true, data: 'service up and running...' });
    };
      
}

export default AdminController;