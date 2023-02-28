import { AppConfiguration } from './app.configuration.dto';

export class UserLoginAppDto {
  userId: string | undefined;
  email: string | undefined;
  name: string | undefined;
  appConfiguration: AppConfiguration | undefined;
}
