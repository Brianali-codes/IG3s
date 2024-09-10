

async function getVideo() {

    let input = document.getElementById('display').value
    let loader = document.getElementById("output")


    loader.style.display = "flex"

    const url = `https://yt-search-and-download-mp3.p.rapidapi.com/mp3?url=${input}`
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2cfe58baa1mshff2541554fc663cp12592cjsne4abb2a42866',
            'x-rapidapi-host': 'yt-search-and-download-mp3.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        let thumbnails = document.getElementById("VDIMG")
        let details = document.getElementById("TITLE")
        let Button = document.getElementById("download")
        let OP = document.getElementById("output")

        let link = document.createElement('a');
        link.href = result.download
        OP.appendChild(link)
        link.appendChild(Button)
        
        details.textContent = result.title


//borrowed function for getting the thumbnails for the videos
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

        ytubethumb.set(input);
        thumbnails.src = ytubethumb.hq()
        thumbnails.style.borderRadius = '15px'
        thumbnails.style.width = '70%'
        console.log(ytubethumb.mq());
       
        

    

    } catch (error) {
        console.error(error);


}
}





