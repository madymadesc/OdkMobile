import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
   list: any[] = [];

  constructor(public http: HttpClient) {
  //   this.http.get('http://localhost:8080/apprenantOdk/apprenant')
  //   .subscribe(data => {
  //     this.list.push(data);
  //     }
  //   );
  // }

  // getList(){
  //     return this.list;
  }

listApprenant(){
  return this.http.get('http://localhost:8080/apprenantOdk/apprenant');
}

verification(login: string, password: string){
  return this.http.get('http://localhost:8080/apprenantOdk/verifier/'+login+'/'+password)
            
}
//Recuperation des attributs saisis dans le champ

public setNom(name){
  localStorage.setItem('nom', name)
}

public setPrenom(name){
  localStorage.setItem('prenom', name)
}

public setApp(name){
  localStorage.setItem('apprenant', name)
}

public getApp(){
  localStorage.getItem('apprenant')
}
public getNom(){
  return localStorage.getItem('nom');
}
public getPrenom(){
  return localStorage.getItem('prenom');
}

public logout(){
  localStorage.removeItem('nom');
  localStorage.removeItem('prenom');
  localStorage.clear;
  console.log("OKKK "+localStorage.getItem('nom'));

}

}
