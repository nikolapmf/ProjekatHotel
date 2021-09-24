import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class TokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const korisnikJson = localStorage.getItem('korisnik')
        const adminJson= localStorage.getItem('admin')
        if(localStorage.getItem("korisnik")){
            const authHeader=req.clone(
                {
                    headers: req.headers.set("X-AUTH-HEADER", korisnikJson)
                }
            )
            req = authHeader;
        }
        else if (localStorage.getItem('admin')) {
            const authHeader=req.clone(
                {
                    headers: req.headers.set("X-AUTH-HEADER", adminJson)
                }
            )
            req = authHeader;
        }
        return next.handle(req);
    }
}