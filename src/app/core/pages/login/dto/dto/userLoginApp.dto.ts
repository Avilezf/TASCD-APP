import { AppConfiguration } from './app.configuration.dto';

export class UserLoginAppDto {
  id: string | undefined;
  email: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  appConfiguration: AppConfiguration | undefined;
  accessToken: string | undefined;
  refreshToken: string | undefined;
}
