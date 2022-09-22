import { Component, OnInit } from '@angular/core';
import Book from 'src/app/entity/book';
import { UserService } from 'src/app/user.service';
import User from 'src/app/entity/user';
@Component({
  selector: 'app-regester-user',
  templateUrl: './regester-user.component.html',
  styleUrls: ['./regester-user.component.css']
})
export class RegesterUserComponent implements OnInit {

user:User=new User();
users:User[]=[];

save(){
  const observable=this.userService.saveUser(this.user);
  observable.subscribe(
    (response: any)=>{
      console.log(response);
    },
    function(error){
      console.log(error);
      alert("Somthing went wrong")
    }
  )
}

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    const promise =this.userService.getUsers();
    promise.subscribe((response)=>{
      console.log(response);
      this.users=response as User[]; 
    })
    }
}
