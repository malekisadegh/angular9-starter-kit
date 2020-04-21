import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  data: any = {};

  constructor(private http: HttpClient) {}

  use(prop: string): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      const langPath = `assets/properties/${prop}.json`;
      this.http.get<{}>(langPath).subscribe(
        (properties) => {
          this.data = Object.assign({}, properties || {});
          resolve(this.data);
        },
        (error) => {
          console.log(error);
          this.data = {};
          resolve(this.data);
        }
      );
    });
  }
}
