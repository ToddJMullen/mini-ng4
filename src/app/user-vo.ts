export class UserVo {
	imageSrc:string = "";
	username:string = "";
	role:string = "";
	checked:string = "";
	isBig:boolean = false
	isGreen:boolean = false;
	isItalic:boolean = true;

	constructor(imageSrc:string = "", username:string = "",role:string = "", checked:string = "yes"
					,isBig:boolean = false, isGreen:boolean = false, isItalic:boolean = true ){
		this.imageSrc = imageSrc;
		this.username = username;
		this.role = role;
		this.checked = checked;
		this.isBig = isBig;
		this.isGreen = isGreen;
		this.isItalic = isItalic;
	}

}
