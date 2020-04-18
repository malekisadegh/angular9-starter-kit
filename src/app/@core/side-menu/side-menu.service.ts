import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class SideMenuService {
  constructor(private httpClient: HttpClient) {}

  public getMenuData() {
    return this.httpClient.get('menu');
  }
}
