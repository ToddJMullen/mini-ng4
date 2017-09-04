import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-profile-img',
	template:`
		<div class="profile">
			<b>{{username}}</b>
			<img src="{{imageSrc}}"
					title="{{username}}'s photo"
					alt="{{username}}'s photo" />
		</div>
	`,
//	templateUrl: './profile-img.component.html',
	styleUrls: [ './profile-img.component.css' ]
})
export class ProfileImgComponent implements OnInit {

	imageSrc: string = "";
	username: string = "";

	/**
	 * The only reason that I created this component was as an excuse to create a component
	 * that I thought would be a good example you why/where/when you might use the inline template.
	 * */

	constructor() {
		this.imageSrc = "image" + Math.round(Math.random() * 100) + ".jpg";
		do{
			this.username += this.getRandomString( false );
		} while (this.username.length < 6 && (.9 > Math.random()) );
		this.username += this.getRandomString(true);
	}

	ngOnInit() {
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
