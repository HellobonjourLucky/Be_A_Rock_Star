const userNameForm = document.querySelector('.userNameForm');
const userInput = userNameForm.querySelector('input');
const drumLetter = document.querySelectorAll('p');
const defaultName = ["l","u","c","k","y"];

userNameForm.addEventListener('submit',function(e){
    e.preventDefault();
    const userName = e.target[0].value.toLowerCase();

    if(userName.length>1){
        console.log(1);
        const nameArray = [userName.charAt(0),userName.charAt(1),userName.charAt(2),userName.charAt(3),userName.charAt(4)];
    
        userInput.value="";

        Array.from(drumLetter)
            .forEach((letter,index) => {
                letter.innerText = nameArray[index].toUpperCase();
            })
        superStar(nameArray);
    }else{
        superStar(defaultName);
    }
    
})


function superStar(nameArray){
    window.onkeydown = function(e){
        if(e.key === nameArray[0]){
            //sound Doing
            let l = new Audio('sounds/l.mp3');
            l.play();
    
            document.body.style.backgroundColor = 'yellow';
            drumLetter[0].classList.add('animation');
        }else if(e.key === nameArray[1]){
            let u = new Audio('sounds/u.mp3');
            u.play();
    
            document.body.style.backgroundColor = 'green';
            drumLetter[1].classList.add('animation');
        }else if(e.key === nameArray[2]){
            let c = new Audio('sounds/c.mp3');
            c.play();
    
            document.body.style.backgroundColor = 'blue';
            drumLetter[2].classList.add('animation');
        }
        else if(e.key === nameArray[3]){
            let k = new Audio('sounds/k.mp3');
            k.play();
    
            document.body.style.backgroundColor = 'purple';
            drumLetter[3].classList.add('animation');
        }else if(e.key === nameArray[4]){
            let y = new Audio('sounds/y.mp3');
            y.play();
    
            document.body.style.backgroundColor = 'black';
            drumLetter[4].classList.add('animation');
        }else{
    
        }
    }
}


superStar(defaultName);