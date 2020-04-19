import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShortCutMenuService {
  constructor(private httpClient: HttpClient) {}

  public speedAccessMenu() {
    return this.httpClient.get('speedAccessMenu');
  }
}
