import {Component, OnInit} from '@angular/core';

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

	MIN_NUM_USERS: number = 3;
	MIN_LENGTH_USERNAME: number = 3;

	ROLE_ARY: string[] = [ "Admin", "Teacher", "User", "Anonymous" ];

	header:string;// = "Header";

	userAry: Object[] = [];


	constructor() {

		do{
			//console.log("Building new user");
			this.userAry.push( this.buildRandomUser() );

		} while ( this.userAry.length < this.MIN_NUM_USERS );
	}

	ngOnInit() {
	}




	buildRandomUser():Object{
		let user = {imageSrc:"",username:"",role:"", checked:""
				,styles: {isBig:false,isGreen:false,isItalic:true} };

		user.imageSrc = "image" + Math.round(Math.random() * 100) + ".jpg";
		do{
			user.username += this.getRandomString( false );
		} while (user.username.length < this.MIN_LENGTH_USERNAME
					 || (.8 < Math.random()) /* << semi-arbitrary exit*/ );

		user.username += this.getRandomString(true);
		user.role = this.ROLE_ARY[ Math.floor(Math.random() * this.ROLE_ARY.length) ];
		user.checked = Math.random() < .5 ? "Yes" : "No";

		return user;
	}

	getRandomString( withNums:boolean = false ):string{
		let alpha:string = "abcdefghijklmnpoqrstuxwyxz"
		,str:string = alpha[Math.floor(Math.random()*26)];
		if( withNums ){
			str += Math.round(Math.random() * 100);
		}
		return str;
	}

}
