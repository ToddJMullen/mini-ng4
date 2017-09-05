export class UserVo {
	imageSrc:string = "";
	username:string = "";
	role:string = "";
	checked:string = "";
	styles:object = {
		isBig:false
		,isGreen:false
		,isItalic:true
	};

	constructor(imageSrc:string = "", username:string = "",role:string =""
				,checked:string = "yes"
				,styles:object = {isBig:false,isGreen:false,isItalic:true} ){
		this.imageSrc = imageSrc;
		this.username = username;
		this.role = role;
		this.checked = checked;
		this.styles = styles;
	}

}
