import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioLoginDTO } from '../model/UsuarioLoginDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { } // Vai liberar o GET, POST, PUT, DELETE pelo front

  entrar(usuarioLogin: UsuarioLoginDTO) : Observable<UsuarioLoginDTO> {
    return this.http.post<UsuarioLoginDTO>('https://bloggscabuzzi.herokuapp.com/usuarios/logar', usuarioLogin)
  }
}
