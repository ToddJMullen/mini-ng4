import {Component} from '@angular/core';

import {trigger, state, style, transition, animate, keyframes} from "@angular/animations";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
	, animations: [
		trigger("scaleSize", [
			state('small', style({
				transform: "scale(.2) rotate(30deg)"
			}))
			, state("big", style({
				transform: "scale(2) rotate(-30deg)"
			}))
			, state("normal", style({
				transform: "scale(1) rotate(0)"
			}))
			, transition("* <=> cooky", animate("1500ms ease-out", keyframes([
				style({opacity: 1, transform: "rotate(0deg) translateY(0px) translateX(0px)", offset: 0})
				, style({opacity: .2, transform: "rotate(-270deg) translateY(-30px) translateX(10px)", offset: .3})
				, style({opacity: .7, transform: "rotate(70deg) translateY(30px) translateX(50px)", offset: .7})
				, style({opacity: 1, transform: "rotate(-360deg) translateY(0px) translateX(0px)", offset: 1})
			])))
			, transition("small => big", animate("300ms ease-in", style({})))
			, transition("big => small", animate("500ms ease-in-out"))
			, transition("small <=> normal, normal <=> big", animate("300ms ease-out"))
		])
		,
	]
})
export class AppComponent {

	STATE_BIG: string = "big";
	STATE_SMALL: string = "small";
	STATE_NORMAL: string = "normal"
	STATE_COOKY: string = "cooky";

	title: string = 'My Ng4 App';

	imageState: string;

	constructor() {
		this.imageState = this.STATE_NORMAL;
	}

	toggleImage(): void {
		switch (this.imageState) {
			case this.STATE_BIG: this.scaleDown(); break;
			case this.STATE_SMALL: this.scaleNormal(); break;
			case this.STATE_NORMAL: this.scaleUp(); break;
		}
	}

	scaleUp() {
		this.imageState = this.STATE_BIG;
	}

	scaleDown() {
		this.imageState = this.STATE_SMALL;
	}

	scaleNormal() {
		this.imageState = this.STATE_NORMAL;
	}

	animateCooky(){
		console.log("animateCooky()");
		this.imageState = this.STATE_COOKY;
	}
}
