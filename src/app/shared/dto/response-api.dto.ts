export class ResponseApiDto {
  code!: number;
  status!: boolean;
  message!: string;
  cause?: string;
  data?: any;
}
