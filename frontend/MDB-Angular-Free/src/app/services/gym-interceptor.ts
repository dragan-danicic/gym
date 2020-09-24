import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GymService } from './gym.service';


@Injectable()
export class GymInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        if (localStorage.getItem("jwt")) {
            req = req.clone({
                setHeaders: {
                    'Authorization':
                        "Bearer " + localStorage.getItem("jwt")
                }
            })
        }
        return next.handle(req);
    }

}







