import {Injectable} from '@angular/core';

@Injectable()
export class UserService {


	MIN_NUM_USERS: number = 3;
	MIN_LENGTH_USERNAME: number = 3;

	ROLE_ARY: string[] = [ "Admin", "Teacher", "User", "Anonymous" ];

	totalUsers:number;

	userAry: Object[] = [];


	constructor() {
		this.fetchMakeUsers();
	}


	getUsers( start:number, total:number):object[]{
		if( this.totalUsers < total ){
			this.fetchMakeUsers( total );
		}
		return this.userAry.slice(start, total );
	}

	fetchMakeUsers( total:number = this.MIN_NUM_USERS ){

		this.totalUsers = total;

		do {
			//console.log("Building new user");
			this.userAry.push(this.buildRandomUser());

		} while (this.userAry.length < this.totalUsers);
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
