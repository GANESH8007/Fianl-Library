import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './Comp/create-book/create-book.component';
import { RegesterUserComponent } from './Comp/regester-user/regester-user.component';
import { SearchBookComponent } from './Comp/search-book/search-book.component';
import { ReaderComponent } from './Comp/reader/reader.component';
// import { UserformComponent } from './Components/userform/userform.component';
// import { AboutComponent } from './Components/about/about.component';
//import User from './entity/User';

const routes: Routes = [{path:'searchBook', component:SearchBookComponent},
                        {path:'createBook', component:CreateBookComponent},
                        {path:'regesterUser',component:RegesterUserComponent},
                        {path:'reader',component:ReaderComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
