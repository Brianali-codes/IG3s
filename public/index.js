

async function getVideo() {

    let input = document.getElementById('display').value
    let loader = document.getElementById("output")
    let Button = document.getElementById("download")
    let Button2 = document.getElementById("download2")

    loader.style.display = "flex"
    Button.style.display = "flex"
    Button2.style.display = "none"

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

async function getIgVideo(){
    let input = document.getElementById("display2").value
    let Button = document.getElementById("download")
    let Button2 = document.getElementById("download2")
    let OP = document.getElementById("output")


    OP.style.display = "flex"
    Button.style.display = "none"
    Button2.style.display = "flex"
    



    const url = `https://instagram-downloader32.p.rapidapi.com/instagram-new?instaUrl=${input}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2cfe58baa1mshff2541554fc663cp12592cjsne4abb2a42866',
            'x-rapidapi-host': 'instagram-downloader32.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        let thumbnail = document.getElementById("VDIMG")
        thumbnail.style.display = "flex"
        thumbnail.src = result[0].cover
        thumbnail.style.width = "300px"
        let link = document.createElement("a")
        link.appendChild(Button2)
        link.href = result[0].download_link
        thumbnail.style.borderRadius = "10px"
        OP.appendChild(link)


    } catch (error) {
        console.error(error);
}
}

function toggleDownloader(){
    let YTM3 = document.getElementById("YTM")
    let IGTM = document.getElementById("IGdownloader")
    let img = document.getElementById("VDIMG")

    if (IGTM.style.display === "none" || IGTM.style.display === ""){
        YTM3.style.display ="none"
        IGTM.style.display = "flex"
        img.innerHTML = ""
    }
    else{
        IGTM.style.display = "none"
        YTM3.style.display ="flex"
        img.innerHTML = ""
    }


}
