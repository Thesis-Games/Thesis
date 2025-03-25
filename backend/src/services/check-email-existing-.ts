import { accountModel } from "../model/account-model";
import { CustomError } from "../utils/custom-error";
export const checkEmailExisting = async (email: string) => {
  const existingUser = await accountModel.findOne({ email });
  return existingUser;
};
