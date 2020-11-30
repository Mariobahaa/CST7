//change list style type
        document.getElementById("nav").style.listStyleType = "circle";
        
        //make a copy of bear image
        var bimg = document.getElementById("header").cloneNode(true);
        
        //put bear image copy at the end of the document
        bimg.id = "bottom";
        document.body.firstElementChild.appendChild(bimg);
        
        //change alignment of first pic 
        document.getElementById("header").classList.add("right");
        
        //change alignment of second pic
        document.getElementById("bottom").classList.add("left");