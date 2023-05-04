export class ResponseApiDto {
  code!: number;
  success!: boolean;
  message!: string;
  cause?: string;
  data?: any;
}
