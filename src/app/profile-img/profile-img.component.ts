import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-profile-img',
	inputs: ['user'],//<< @ binding to/from markup
	template:`
		<div class="profile" [ngClass]="user.styles" >
			<b (click)=dump($event) >{{user.username}}</b>
			<br />

			<i *ngIf="user.role != 'Anonymous' then showImage else showNote" ></i>
			<ng-template #showImage>
				Signature
				<br />
				<i bind-title="user.username">
				{{user.imageSrc}}
				</i>
			</ng-template>
			<ng-template #showNote>Anon User <br />(no signature)</ng-template>

			<hr />
			<i>{{user.role}}</i>
			<br />
			<button [disabled]="user.role == 'User'"
				title="If the user is a 'User' this is disabled.">No Users</button>
			<br />
			<input type="checkbox" [checked]='user.checked == "Yes" ' />
			Checked? {{user.checked}}
			<br />
			<input type="checkbox" bind-checked='user.styles.isGreen'
					(click)="user.style.isGreen = !user.style.isGreen" />
			Is Green?
			<br />
			<input type="checkbox" [checked]='user.styles.isBig' />
			Is Big?
			<br />
			<input type="checkbox" [checked]='user.styles.isItalic' />
			Is Italic?
			<br />
		</div>
	`,
//	templateUrl: './profile-img.component.html',
	styleUrls: [ './profile-img.component.css' ]
	,styles:[`
		.isBig{font-size: 25px;}
		.isGreen{color:#0F0;}
		.isItalic{font-style:italic;}
	`]
})
export class ProfileImgComponent implements OnInit {

	user:object;//still not sure how to bind/move checkbox changes into the original user object.

	/* //moved into the "list" component
	MIN_NUM_USERS:number = 3;
	MIN_LENGTH_USERNAME:number = 3;

	ROLE_ARY:string[] = ["Admin","Teacher","User","Anonymous"];

	header:string;// = "Header";

	userAry: Object[] = [];
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

	buildRandomUser():Object{
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
