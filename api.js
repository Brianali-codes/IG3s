//https://github.com/rohit-chouhan/youtube-thumbnail-api/
//Author: Rohit Chouhan
var ytubethumb = {
	id:"N/A",
	set: function(url){
		var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
		var match = url.match(regExp);
		this.id = (match&&match[7].length==11)? match[7] : false;
	},
	thumb: function (){
		return "https://img.youtube.com/vi/"+this.id+"/default.jpg";
	},
	hq: function (){
		return "https://img.youtube.com/vi/"+this.id+"/hqdefault.jpg";
	},
	mq: function (){
		return "https://img.youtube.com/vi/"+this.id+"/mqdefault.jpg";
	},
	sd: function (){
		return "https://img.youtube.com/vi/"+this.id+"/sddefault.jpg";
	},
	max: function (){
		return "https://img.youtube.com/vi/"+this.id+"/maxresdefault.jpg";
	}
}