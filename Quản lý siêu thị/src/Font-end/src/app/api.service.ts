import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class ApiService {
    
    host: string = 'http://103.232.121.69:5101/';
    token: string = "";
    constructor(private router: Router, private http: Http) {
    }

    post(url: string, data: any) {
        return new Promise<Response>((resolve, reject) => {
            let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
            headers.append("Auth-SuperDev", this.token);
            this.http.post(this.host + url, data, { headers: headers })
                .toPromise()
                .then(res => {
                    if (res.status == 200) {
                        resolve(res);
                    } else {
                        reject("Có lỗi xảy ra");
                    }
                }).catch(err => {
                    if(err.status == 401) this.router.navigate(["/login"]);
                    else reject(err);
                });
        });
    }

    get(url: string) {
        return new Promise<Response>((resolve, reject) => {
            let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
            headers.append("Auth-SuperDev", this.token);
            this.http.get(this.host + url, { headers: headers })
                .toPromise()
                .then(res => {
                    resolve(res);
                }).catch(err => {
                    if(err.status == 401) this.router.navigate(["/login"]);
                    else reject(err);
                });
        });
    }
}