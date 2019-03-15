document.querySelector('input').addEventListener("keydown",actiondown);
document.querySelector('input').addEventListener("keyup",actionup);
var character = document.querySelector('img');

 x = 200;
 y = 20;
function actiondown(){
    var change = character.getAttribute('src');
    if(event.key == 'ArrowUp'){
        var fly = character.getAttribute("src");
        var a = y;
        if(fly === "standr.png"){
            var jumpr = setInterval(actionr,5);
        }else if(fly === "standl.png"){
            var jumpl = setInterval(actionl,5);
        }

        function actionr(){
            if(y == a + 15){
                clearInterval(jumpr);
            }else{
                y++;
                character.setAttribute("src","jumpr1.png");
                character.style.bottom = y + "px";
            }
        }

        function actionl(){
            if(y == a + 15){
                clearInterval(jumpl);
            }else{
                y++;
                character.setAttribute("src","jumpl1.png");
                character.style.bottom = y + "px";
            }
        }
    }else if(event.key == "ArrowDown"){
        var sit = character.getAttribute("src");
        
        if(sit === "standr.png"){
            character.setAttribute("src","sitr.png");
        }else if(sit === "standl.png"){
            character.setAttribute("src","sitl.png");
        }
    }else if(event.key == "ArrowLeft"){
        x -= 5;
        var move_left = character.getAttribute("src");
        character.setAttribute("src","standl.png");
        if(move_left === "standl.png"){
            character.setAttribute("src","runl1.png");
            character.style.left = x + "px";
        }else if(move_left === "runl1.png"){
            character.setAttribute("src","runl2.png");
            character.style.left = x + "px";
        }else if(move_left === "runl2.png"){
            character.setAttribute("src","runl3.png");
            character.style.left = x + "px";
        }else if(move_left === "runl3.png"){
            character.setAttribute("src","runl4.png");
            character.style.left = x + "px";
        }else if(move_left === "runl4.png"){
            character.setAttribute("src","runl5.png");
            character.style.left = x + "px";
        }else if(move_left === "runl5.png"){
            character.setAttribute("src","runl6.png");
            character.style.left = x + "px";
        }else if(move_left === "runl6.png"){
            character.setAttribute("src","runl1.png");
            character.style.left = x + "px";
        }
    }else if(event.key == "ArrowRight"){
        x += 5;
        var move_right = character.getAttribute("src");
        character.setAttribute("src","standr.png");
        if(move_right === "standr.png"){
            character.setAttribute("src","runr1.png");
            character.style.left = x + "px";
        }else if(move_right === "runr1.png"){
            character.setAttribute("src","runr2.png");
            character.style.left = x + "px";
        }else if(move_right === "runr2.png"){
            character.setAttribute("src","runr3.png")
            character.style.left = x + "px";
        }else if(move_right === "runr3.png"){
            character.setAttribute("src","runr4.png");
            character.style.left = x + "px";
        }else if(move_right === "runr4.png"){
            character.setAttribute("src","runr5.png");
            character.style.left = x +"px";
        }else if(move_right === "runr5.png"){
            character.setAttribute("src","runr6.png");
            character.style.left = x + "px";
        }else if(move_right === "runr6.png"){
            character.setAttribute("src","runr1.png");
            character.style.left = x + "px";
        }
    }else if(event.key == " "){
        var punch = character.getAttribute("src");
        if(punch === "standr.png"){
            character.setAttribute("src","punchr1.png");
        }else if(punch === "punchr1.png"){
            character.setAttribute("src","punchr2.png");
        }else if(punch === "standl.png"){
            character.setAttribute("src","punchl1.png");
        }else if(punch === "punchl1.png"){
            character.setAttribute("src","punchl2.png");
        }
    }
}

function actionup(){
    var change = character.getAttribute("src");
    if(event.key == "ArrowUp"){
        var fall = character.getAttribute("src");
        var a = y;
        if(fall === "jumpr1.png"){
            var jumpr = setInterval(actionr,5);
        }else if(fall === "jumpl1.png"){
            var jumpl = setInterval(actionl,5);
        }
    
        function actionr(){
            if(y == a - 15){
                clearInterval(jumpr);
                character.setAttribute("src","standr.png");
            }else{
                y--;
                character.setAttribute("src","jumpr2.png");
                character.style.bottom = y + "px";
            }
        }

        function actionl(){
            if(y == a - 15){
                clearInterval(jumpl);
                character.setAttribute("src","standl.png");
            }else{
                y--;
                character.setAttribute("src","jumpl2.png");
                character.style.bottom = y + "px";
            }
        }
    }else if(event.key == "ArrowDown"){
        var sit = character.getAttribute("src");

        if(sit === "sitr.png"){
            character.setAttribute("src","standr.png");
        }else if(sit === "sitl.png"){
            character.setAttribute("src","standl.png");
        }
    }else if(event.key == "ArrowLeft"){
        character.setAttribute("src","standl.png");
    }else if(event.key == "ArrowRight"){
        character.setAttribute("src","standr.png");               
    }else if(event.key == " "){
        var punch = character.getAttribute("src");

        if(punch === "punchr2.png"){
            character.setAttribute("src","standr.png");
        }else if(punch === "punchl2.png"){
            character.setAttribute("src","standl.png");
        }
    }
}