import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-profile-img',
	template:`<div  *ngFor = "let user of userAry">
		<div class="profile">
			<b>{{user.username}}</b>
			<img src="{{user.imageSrc}}"
					title="{{user.username}}'s photo"
					alt="{{user.username}}'s photo" />
		</div>
	</div>
	`,
//	templateUrl: './profile-img.component.html',
	styleUrls: [ './profile-img.component.css' ]
})
export class ProfileImgComponent implements OnInit {

	MIN_NUM_USERS:number = 20;
	MIN_LENGTH_USERNAME:number = 4;

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
		let user = {imageSrc:"",username:""};

		user.imageSrc = "image" + Math.round(Math.random() * 100) + ".jpg";
		do{
			user.username += this.getRandomString( false );
		} while (user.username.length < this.MIN_LENGTH_USERNAME
					 || (.8 < Math.random()) /* << semi-arbitrary exit*/ );
		user.username += this.getRandomString(true);

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
