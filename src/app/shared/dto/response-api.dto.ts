export class ResponseApiDto {
  code: number | undefined;
  status: boolean | undefined;
  message: string | undefined;
  cause?: string;
  data?: any;
}
