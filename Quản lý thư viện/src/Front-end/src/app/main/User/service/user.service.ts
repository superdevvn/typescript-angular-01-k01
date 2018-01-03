import { Injectable } from '@angular/core';

import { ApiService } from './../../../api.service';
import { User } from '../shared/user.model';

@Injectable()// dùng để chưa sẽ tài nguyên khác dùng chung ví dụ: Role,.
export class UserService {
    constructor(private apiService: ApiService) { }
    saveUser(user: User) {
        return new Promise<User>((resolve, reject) => {
<<<<<<< HEAD
            this.apiService.post('api/saveUser', user).then(res => {
=======
            this.apiService.post('api/saveUser', user).then((res) => {
>>>>>>> origin/quan-ly-tap-hoa
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    getList() {
        return new Promise<User[]>((resolve, reject) => {
<<<<<<< HEAD
            this.apiService.post('api/getUsers', {}).then(res => {
=======
            this.apiService.post('api/getUsers',{}).then((res) => {
>>>>>>> origin/quan-ly-tap-hoa
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    getUser(id) {
        return new Promise<User>((resolve, reject) => {
            this.apiService.get(`api/getUser/${id}`).then((res:Response) => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
}
