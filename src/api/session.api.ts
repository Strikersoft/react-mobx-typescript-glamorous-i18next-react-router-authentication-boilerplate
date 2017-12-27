import { AxiosInstance } from 'axios';

export class SessionAPI {
  http: AxiosInstance;

  constructor(http: AxiosInstance) {
    this.http = http;
  }

  async getToken(username: string, password: string) {
    // FIXME: just for example
    return await this.http.get('/posts');
  }
}
