import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private s: ServiceService, private router: Router) {}

  logForm(donnee: any){
    // console.log(donnee.value);
    this.s.verification(donnee.value.login, donnee.value.password).subscribe(
      (valeur:any) => {
        if(valeur){
          this.s.setNom(valeur.nom);
          this.s.setPrenom(valeur.prenom);
          this.router.navigate(['bienvenue'])
        }
        else{console.log("Login ou password non valide")}
      }
    )
  }
  

}
