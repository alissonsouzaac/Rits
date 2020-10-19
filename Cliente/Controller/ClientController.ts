import { Request, Response, NextFunction } from 'express';
import logger from "../Helpers/logger";
import CriarUseCase from "../UseCases/Client/CriarUseCase";
import VerUseCase from "../UseCases/Client/VerUseCase";
import ListarUseCase from "../UseCases/Client/ListarUseCase";
import ExcluirUseCase from "../UseCases/Client/ExcluirUseCase";
import { IController } from '../Contracts/IController';


class ClientController implements IController {
    verUseCase: VerUseCase = new VerUseCase();
    criarUseCase: CriarUseCase = new CriarUseCase();
    listarUseCase: ListarUseCase = new ListarUseCase();
    excluirUseCase: ExcluirUseCase = new ExcluirUseCase();

    getAll = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting AccountController.getAll...");
    
        try {
          await this.listarUseCase
            .execute()
            .then(async (resp) => {
           //   this.hcpTools.http.response(res, true, resp || "");
            })
            .catch((err) => {
            //  this.hcpTools.http.response(res, false, err);
            });
        } catch (err) {
          logger.error(err);
        //  this.hcpTools.http.response(res, false, err);
        }
        logger.info("finishing AccountController.getAll...");
      };

      get = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting AccountController.getAll...");
    
        try {
          await this.verUseCase
            .execute(req.body)
            .then(async (resp) => {
           //   this.hcpTools.http.response(res, true, resp || "");
            })
            .catch((err) => {
           //   this.hcpTools.http.response(res, false, err);
            });
        } catch (err) {
          logger.error(err);
        //  this.hcpTools.http.response(res, false, err);
        }
        logger.info("finishing AccountController.getAll...");
      };

      save = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting AccountController.save...");
        //await this.hcpTools.auth.verifyToken(req, res, next);
    
    
          try {
            await this.criarUseCase
              .execute(req.body)
              .then(async (resp) => {
         //       this.hcpTools.http.response(res, true, resp);
              })
              .catch(async (err) => {
            //    this.hcpTools.http.response(res, false, err);
              });
          } catch (err) {
            logger.error(err);
         //   this.hcpTools.http.response(res, false, err);
          }
        logger.info("finishing AccountController.save...");
      };

      delete = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting AccountController.delete...");
        //await this.hcpTools.auth.verifyToken(req, res, next);
    
        try {
          this.excluirUseCase
            .execute(req.body)
            .then((resp) => {
         //     this.hcpTools.http.response(res, true, resp);
            })
            .catch((err) => {
         //     this.hcpTools.http.response(res, false, err);
            });
        } catch (err) {
          logger.error(err);
      //    this.hcpTools.http.response(res, false, err);
        }
        logger.info("finishing AccountController.delete...");
      };

      healthCheck = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        res.status(200).send({ success: true, data: 'service up and running...' });
    };
}

export default ClientController;



