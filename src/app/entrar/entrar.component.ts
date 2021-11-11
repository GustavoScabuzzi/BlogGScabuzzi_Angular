import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoginDTO } from '../model/LoginDTO';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css'],
})
export class EntrarComponent implements OnInit {
  usuarioLogin: LoginDTO = new LoginDTO();

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  entrar() {
    this.auth.entrar(this.usuarioLogin).subscribe(
      (resp: LoginDTO) => {
        this.usuarioLogin = resp;
        environment.token = this.usuarioLogin.token;
        environment.id = this.usuarioLogin.idUsuario;
        environment.nome = this.usuarioLogin.nome;
        environment.email = this.usuarioLogin.email;
        environment.tipo = this.usuarioLogin.tipo;

        if (this.usuarioLogin.foto == null) {
          environment.foto ='https://cdn-icons-png.flaticon.com/512/74/74472.png';
        } else {
          environment.foto = this.usuarioLogin.foto;
        }

        // console.log(environment.token)
        // console.log(environment.id)
        // console.log(environment.nome)
        // console.log(environment.email)
        // console.log(environment.tipo)
        // console.log(environment.foto)

        this.router.navigate(['/inicio']);
      },
      (erro) => {
        if (erro.status == 400) {
          alert('Usuário ou senha inválidos!');
        }
      }
    );
  }
}
