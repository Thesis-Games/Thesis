import { Request } from "express";

interface RequestWithSession extends Request {
  session?: {
    account_id: string;
    email: string;
  };
}

export default RequestWithSession;
