let receiver = "caminho_do_arquivo"; // caminho vindo do admin

let type = "image_video"; // Tipo do arquivo, podendo ser imagem ou video recebido do admin

let width = document.body.clientWidth
let height = document.body.clientHeight

if(type === "image"){
    var img = document.createElement("IMG");
    
    // Adição de propriedades da img
    img.setAttribute("src",receiver);
    
    img.setAttribute("width",width)
    
    img.setAttribute("height",height)
    
    document.body.appendChild(img);
    
    console.log("Image created");
}else if(type === "video"){
    var vid = document.createElement("VIDEO");
    
    // Adição de propriedades da vid
    vid.setAttribute("src",receiver);
    
    vid.setAttribute("width",width)
    
    vid.setAttribute("height",height)
    
    vid.setAttribute("controls","controls")
    
    vid.loop = true
    
    vid.autoplay = true;

    vid.load();
    
    document.body.appendChild(vid);

    console.log("Video created");
}