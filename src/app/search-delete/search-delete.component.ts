import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrl: './search-delete.component.css'
})
export class SearchDeleteComponent implements OnInit{
  users:any;
  email:string|undefined;
  message:string|undefined;

  constructor(private service:UserRegistrationService){}

public findUserByEmail(){
  if (this.email== undefined){
    this.message="the email field is empty";
  }
  let responce=this.service.findUserByEmail(this.email);
  responce.subscribe((data)=>this.users=data)
}

public deleteUser(id:number){
  let responce=this.service.deleteById(id);
  responce.subscribe((data)=>this.users=data);
}

  ngOnInit(): void {
    let responce=this.service.findAllUsers();
    responce.subscribe((data)=>this.users=data);
  }

  // we should se the angular navigation

}
