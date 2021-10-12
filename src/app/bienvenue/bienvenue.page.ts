import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.page.html',
  styleUrls: ['./bienvenue.page.scss'],
})
export class BienvenuePage implements OnInit {
 nom: String;
 prenom:String;
 myDate: String = new Date().toISOString();

  constructor(private s: ServiceService,private router: Router) { }
private servic:ServiceService
  ngOnInit() {
    this.nom = this.s.getNom();
     this.prenom = this.s.getPrenom(); 
  }

  Deconnecter(){
    this.s.logout();
    this.router.navigateByUrl("/home");
  }

}
