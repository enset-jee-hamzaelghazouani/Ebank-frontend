import { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { AuthService } from '../service/auth.service'
import { LocalStorageService } from '../service/local-storage.service'

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const storage = inject(LocalStorageService)
  const auth = inject(AuthService)
  const token = storage.getData('token')
  
  if (auth.checkToken(token)) {
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token.access_token}`),
    })
    return next(modifiedReq)
  }
  return next(req)
}