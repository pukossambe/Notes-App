import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isAuthenticated(): boolean {
        let isAuthenticated;
        const token = localStorage.getItem("token")
        if (token != null || token != undefined) {
            isAuthenticated = true;
        } else {
            isAuthenticated = false;

        }
        return isAuthenticated
    }
}
