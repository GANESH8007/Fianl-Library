import { Component, OnInit } from '@angular/core';
import Book from 'src/app/entity/book';
import Purchase from 'src/app/entity/purchase';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  book: Book = new Book();

  books: Book[] = [];

  id: number = 0;
  searchText: string;
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    const promise = this.userService.getBooks();
    promise.subscribe((response) => {
      console.log(response);
      this.books = response as Book[];
    })
  }


  update(book) {
    console.log(book);
    const observable = this.userService.updateBook(this.book, this.id)
    observable.subscribe((response: any) => {
      console.log(response);
      alert("Book Updated Successfully!")
    },
      function (error) {
        console.log(error);
        alert("something went wrong please check!")
      }
    )
  }

  updateBook(st, j) {

    this.id = st.id;
    this.book.logo = st.logo
    this.book.title = st.title
    this.book.category = st.category
    this.book.price = st.price
    this.book.author = st.author
    this.book.publisher = st.publisher
    this.book.published_date = st.published_date
    this.book.chaptersOrContent = st.chaptersOrContent
    this.book.active = st.active
    this.book.readerName = st.readerName
    this.book.readerEmailId = st.readerEmailId

  }



  save() {
    const observable = this.userService.saveBook(this.book);
    observable.subscribe(
      (response: any) => {
        console.log(response);
        alert("Save Success")},
      function (error) {
        console.log(error);
        alert("Somthing went wrong")
      }
    )
  }
}
