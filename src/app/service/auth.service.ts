import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from '../model/LoginDTO';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { } // Vai liberar o GET, POST, PUT, DELETE pelo front

  entrar(login: LoginDTO) : Observable<LoginDTO> {
    return this.http.post<LoginDTO>('https://bloggscabuzzi.herokuapp.com/usuarios/logar', login)
  }

  cadastrar(usuario: Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>('https://bloggscabuzzi.herokuapp.com/usuarios/cadastrar', usuario)
  }
}

