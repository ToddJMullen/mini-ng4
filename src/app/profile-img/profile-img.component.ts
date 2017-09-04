import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-profile-img',
	template:`<div  *ngFor = "let user of userAry">
		<div class="profile">
			<b>{{user.username}}</b>
			<i *ngIf="user.role != 'Anonymous' then showImage else showNote" ></i>
			<ng-template #showImage>
				<img [src]="user.imageSrc"
					bind-title="user.username"
					alt="{{user.username}}'s photo" />
			</ng-template>
			<ng-template #showNote>Anon User</ng-template>
			<hr />
			<i>{{user.role}}</i>
		</div>
	</div>
	`,
//	templateUrl: './profile-img.component.html',
	styleUrls: [ './profile-img.component.css' ]
})
export class ProfileImgComponent implements OnInit {

	MIN_NUM_USERS:number = 10;
	MIN_LENGTH_USERNAME:number = 3;

	ROLE_ARY:string[] = ["Admin","Teacher","User","Anonymous"];

	userAry: Object[] = [];

	/**
	 * The only reason that I created this component was as an excuse to create a component
	 * that I thought would be a good example you why/where/when you might use the inline template.
	 * */

	constructor() {

		do{
			console.log("Building new user");
			this.userAry.push( this.buildRandomUser() );

		} while ( this.userAry.length < this.MIN_NUM_USERS );
	}

	ngOnInit() {
	}

	buildRandomUser():Object{
		let user = {imageSrc:"",username:"",role:""};

		user.imageSrc = "image" + Math.round(Math.random() * 100) + ".jpg";
		do{
			user.username += this.getRandomString( false );
		} while (user.username.length < this.MIN_LENGTH_USERNAME
					 || (.8 < Math.random()) /* << semi-arbitrary exit*/ );

		user.username += this.getRandomString(true);
		user.role = this.ROLE_ARY[ Math.floor(Math.random() * this.ROLE_ARY.length) ];

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
