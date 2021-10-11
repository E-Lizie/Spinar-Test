import {UsersService} from './services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Spinar Test App';
  userList: any = [];
  
  constructor(private usersService: UsersService) {
	  console.log('El componente se ha creado');
  }

  ngOnInit(): void {
    console.log('El componente se ha inicializado');
	this.usersService.getUsers()
	.subscribe(response => this.userList = response);
  } 

  
}