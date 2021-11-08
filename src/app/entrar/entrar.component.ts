// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { environment } from 'src/environments/environment.prod';
// import { LoginDTO } from '../model/LoginDTO';
// import { AuthService } from '../service/auth.service';

// @Component({
//   selector: 'app-entrar',
//   templateUrl: './entrar.component.html',
//   styleUrls: ['./entrar.component.css']
// })
// export class EntrarComponent implements OnInit {

//   usuarioLogin: LoginDTO = new LoginDTO();

//   constructor(
//     private auth: AuthService,
//     private router: Router
//   ) { }

//   ngOnInit(){
//     window.scroll(0, 0)
//   }

//   entrar() {
//     console.log(this.usuarioLogin)
//     this.auth.entrar(this.usuarioLogin).subscribe((resp: LoginDTO) => {
//       this.usuarioLogin = resp;

//       environment.id = this.usuarioLogin.idUsuario
//       environment.nome = this.usuarioLogin.nome
//       environment.foto = this.usuarioLogin.foto
//       environment.token = this.usuarioLogin.token

//       console.log(environment.id)
//       console.log(environment.nome)
//       console.log(environment.foto)
//       console.log(environment.token)

//       this.router.navigate(['/inicio'])
//     }, erro => {
//       if(erro.status == 400){
//         alert('Usuario ou senha estão incorretos!')
//       }
//     })
//   }

// }

import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoginDTO } from '../model/LoginDTO';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: LoginDTO = new LoginDTO();

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(){
    window.scroll(0, 0);
  }

  entrar(){
    this.auth.entrar(this.usuarioLogin).subscribe((resp: LoginDTO) => {
      this.usuarioLogin = resp;
      environment.token = this.usuarioLogin.token;
      environment.id = this.usuarioLogin.idUsuario;
      environment.nome = this.usuarioLogin.nome;
      environment.email = this.usuarioLogin.email;
      environment.tipo = this.usuarioLogin.tipo;
      environment.foto = this.usuarioLogin.foto;

      // console.log(environment.token)

      this.router.navigate(['/inicio']);
    }, erro => {
      if (erro.status == 400) {
        alert("Usuário ou senha inválidos!");
      }
    })
  }

}
