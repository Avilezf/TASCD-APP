export class UserRegisterDto {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  password!: string;
  password2!: string;
}
