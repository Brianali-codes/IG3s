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
