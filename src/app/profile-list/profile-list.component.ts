import {Component, OnInit} from '@angular/core';

import {UserService} from "../user.service";

@Component({
	selector: 'app-profile-list',
	inputs: [ 'header' ]
	, template: `
	<h2>{{header}}</h2>
	<div class="profile list">
		<app-profile-img *ngFor='let current of userAry'
							 bind-user="current"></app-profile-img>
	</div>
  `
	, styleUrls: [ './profile-list.component.css' ]
})
export class ProfileListComponent implements OnInit {

	header:string;// = "Header";

	userAry:object[];


	constructor( private _userService:UserService ) {
	}

	ngOnInit() {
		this.userAry = this._userService.getUsers(0,5);
	}



}
