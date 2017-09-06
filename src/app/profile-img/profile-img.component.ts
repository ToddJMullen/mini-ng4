import {Component, OnInit} from '@angular/core';

import {trigger, transition, state, style, animate, keyframes} from "@angular/animations";

import {UserVo} from "../user-vo";

@Component({
	selector: 'app-profile-img'
	,inputs: ['user']//<< @ binding to/from markup
	,templateUrl: './profile-img.component.html'
	,styleUrls: [ './profile-img.component.css' ]
	,styles:[`
		.isBig{font-size: 25px;}
		.isGreen{color:#0F0;}
		.isItalic{font-style:italic;}
	`]
	,animations: [
		trigger("triggerLR",[
			//states list
			state("left", style({transform: "translateX(-0px)"}) )
			,state("middle", style({transform: "translateX(0px)"}) )
			,state("right", style({transform: "translateX(50px)"}) )
			//state transitions
			,transition("left <=> middle, right <=> middle, left <=> right"
				,animate("500ms ease-in")
			)
		])
	]
})
export class ProfileImgComponent implements OnInit {
	STATE_LEFT		= "left";
	STATE_MIDDLE	= "middle";
	STATE_RIGHT		= "right";

	user:UserVo;//still not sure how to bind/move checkbox changes into the original user object.

	profilePosition:string = this.STATE_MIDDLE;

	shiftProfile():void{
		console.log("shiftProfile() from:", this.profilePosition );
		switch( this.profilePosition ){
			case this.STATE_LEFT:
					this.profilePosition = this.STATE_MIDDLE; break;
			case this.STATE_MIDDLE:
					this.profilePosition = this.STATE_RIGHT; break;
			case this.STATE_RIGHT:
					this.profilePosition = this.STATE_LEFT; break;
		}
		console.log("shiftProfile() to:", this.profilePosition );
	}

	/* //moved into the "list" component
	MIN_NUM_USERS:number = 3;
	MIN_LENGTH_USERNAME:number = 3;

	ROLE_ARY:string[] = ["Admin","Teacher","User","Anonymous"];

	header:string;// = "Header";

	userAry: UserVo[] = [];
	*/

	/**
	 * The only reason that I created this component was as an excuse to create a component
	 * that I thought would be a good example you why/where/when you might use the inline template.
	 * */

	constructor() {

		/* //moved into the "list" component
		do{
			//console.log("Building new user");
			this.userAry.push( this.buildRandomUser() );

		} while ( this.userAry.length < this.MIN_NUM_USERS );
		*/
	}

	ngOnInit() {
	}

	dump( event:Event ):void{
		console.log("Event:", event );
	}

	/* //moved into the "list" component
	dump( event:Event ):void{
		console.log("Event:", event );
	}

	buildRandomUser():UserVo{
		let user = {imageSrc:"",username:"",role:"", checked:""
				,styles: {isBig:false,isGreen:false,isItalic:true} };

		user.imageSrc = "image" + Math.round(Math.random() * 100) + ".jpg";
		do{
			user.username += this.getRandomString( false );
		} while (user.username.length < this.MIN_LENGTH_USERNAME
					 || (.8 < Math.random())  );

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
	*/

}
