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


	getUsers( start:number, count:number):object[]{
		start = +start; count = +count;
		let first = Math.max(start - 1, 0);
		let last = first + count;
		console.log("getUsers() asked for start:", start, ", count: ", count);
		if( this.totalUsers < (start + count) ){
			this.fetchMakeUsers( start + count );
		}
		let copy = this.userAry.slice( first, last );
		console.log("getUsers() returning:", copy, ", of:", this.userAry );
		return copy;
	}

	fetchMakeUsers( count:number = this.MIN_NUM_USERS ){

		this.totalUsers = count;

		do {
			//console.log("Building new user");
			this.userAry.push(this.buildRandomUser());

		} while (this.userAry.length < this.totalUsers);
		console.log("fetchMakeUsers() built:", this.userAry );
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
