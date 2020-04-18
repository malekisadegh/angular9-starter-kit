import { ServerErrorInterceptor } from './server-error.interceptor';

describe('ServerError.Interceptor', () => {
  it('should create an instance', () => {
    expect(new ServerErrorInterceptor()).toBeTruthy();
  });
});
