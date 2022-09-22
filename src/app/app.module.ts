import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Comp/navbar/navbar.component';
import { SearchBookComponent } from './Comp/search-book/search-book.component';
import { CreateBookComponent } from './Comp/create-book/create-book.component';
import { LoginComponent } from './Comp/login/login.component';
import { RegesterUserComponent } from './Comp/regester-user/regester-user.component';
import { LoginUserComponent } from './Comp/login-user/login-user.component';
import { AboutComponent } from './Comp/about/about.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthorComponent } from './Comp/author/author.component';
import { ReaderComponent } from './Comp/reader/reader.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchBookComponent,
    CreateBookComponent,
    LoginComponent,
    RegesterUserComponent,
    LoginUserComponent,
    AboutComponent,
    AuthorComponent,
    ReaderComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
