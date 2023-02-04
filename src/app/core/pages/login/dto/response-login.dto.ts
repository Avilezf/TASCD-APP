export class ResponseLoginDto {
  userId: string | undefined;
  accessToken: string | undefined;
  refreshToken: string | undefined;
  message: string | null | undefined;
}
