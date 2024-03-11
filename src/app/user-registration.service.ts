import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegister(user: any){
    return this.http.post("http://localhost:9090/register",user,{responseType:'text' as 'json'});
  }

  public findAllUsers(){
    return this.http.get("http://localhost:9090/getAllUsers");
  }

  public findUserByEmail(email:any){
    return this.http.get("http://localhost:9090/findUser/"+email);
  }

  public deleteById(id:number){
    return this.http.delete("http://localhost:9090/cancel/"+id);
  }
  
}
