import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import purchase from './entity/purchase';

const BOOK_URL="http://localhost:8080/"
//const BOOK_URL="http://ec2-35-90-125-59.us-west-2.compute.amazonaws.com:8080/"

const USER_URL="http://localhost:8081/"
//const USER_URL="http://ec2-34-214-247-15.us-west-2.compute.amazonaws.com:8081/"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getAll() {
  //  return this.http.get<User[]>(`/users`);
}

    getUsers(){
      return this.http.get(USER_URL)
    }

    getBooks(){
      return this.http.get(BOOK_URL+"allBook")
    }


    updateBook(book, id) {
      return this.http.put(BOOK_URL+"updateBookById/"+id,book)
    }

    deleteBook(book:any)
    {
      return this.http.delete(BOOK_URL+"DeleteBookById/"+book.id)
    }

    saveBook(book:{
        logo:string;
        title:string;
        category:string;
        price:string;
        author:string;
        publisher:string;
        published_date:string;
        chaptersOrContent:string;
        active:string;
        readerName:string;
        readerEmailId:string;
    }){
      return this.http.post(BOOK_URL+"saveBook",book);
    }

    saveUser(user:{
      name:string;
      emailId:string;
      phone:string;
      password:string;
      type:string;
  }){
    return this.http.post(USER_URL+"saveUser",user);
  }
  constructor(public http :HttpClient) { }


}
