import { Component, OnInit } from '@angular/core';
// import Author from 'src/app/entity/author';
import Book from 'src/app/entity/book';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  // author: Author =new Author();
  // authors:Author[]=[];
book:Book=new Book();
books:Book[]=[];

save(){
  const observable=this.userService.saveBook(this.book);
  observable.subscribe(
    (response: any)=>{
      console.log(response);
      alert("Book Added Succesfully!")
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
      this.books=response as Book[]; 
    })
    }

}
