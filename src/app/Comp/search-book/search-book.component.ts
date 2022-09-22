import { Component, OnInit } from '@angular/core';
import Book from 'src/app/entity/book';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})


export class SearchBookComponent implements OnInit {
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
      alert("Book Updated Sucessfully!")
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


  deleteRow(book, index) {
    const observable = this.userService.deleteBook(book);
    observable.subscribe((response: any) => {
      console.log(response);
      this.books.splice(index, 1)
    })
    alert("Book deleted Successfully!")
  }



}
