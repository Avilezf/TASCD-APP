import { TokenDto } from './dto/token.dto';
import { UserLoginAppDto } from './dto/userLoginApp.dto';

export class ResponseLoginDto {
  tokenDto!: TokenDto;
  userLoginDto!: UserLoginAppDto;
}
