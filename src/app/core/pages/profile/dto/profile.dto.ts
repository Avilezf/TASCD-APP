import { AppConfiguration } from "../../login/dto/dto/app.configuration.dto";

export class Profile {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  appConfiguration: AppConfiguration | undefined;
}
