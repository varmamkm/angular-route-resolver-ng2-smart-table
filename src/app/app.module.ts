import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { Routes, RouterModule } from '@angular/router';
import { LoadUsersWithoutResolverComponent } from './load-users-without-resolver/load-users-without-resolver.component';
import { LoadUsersWithResolverComponent } from './load-users-with-resolver/load-users-with-resolver.component';
import { UserResolver } from './load-users-with-resolver/user-resolver.ts';

const approutes: Routes = [
  { path: 'userswithoutresolver', component: LoadUsersWithoutResolverComponent },
  { path: 'userswithresolver', component: LoadUsersWithResolverComponent, resolve: { users: UserResolver } },
  { path: '', component: LoadUsersWithoutResolverComponent }
]

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(approutes) ],
  declarations: [ AppComponent, HelloComponent, LoadUsersWithoutResolverComponent, LoadUsersWithResolverComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserService, UserResolver]
})
export class AppModule { }
