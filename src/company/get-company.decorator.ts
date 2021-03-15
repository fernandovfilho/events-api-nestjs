import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Company } from "./company.entity";

export const GetCompany = createParamDecorator(
  async (data, ctx: ExecutionContext): Promise<Company> => {
    const req = ctx.switchToHttp().getRequest();
    const company = await Company.findOne({
      where: { userAdmin: req.user.id },
    });
    req.company = company;
    return req.company;
  }
);
