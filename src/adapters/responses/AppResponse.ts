export class AppResponse {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = 200) {
    Object.assign(this, {
      message,
      statusCode,
    });
  }
}
