let loader = document.querySelector('.pre-loder');
let body = document.querySelector('.no-scroll');



// for pre-loder......


window.addEventListener("load" , () => 
{
    const delay = 3000;
    setTimeout( () => 
    {
        loader.style.display = "none";
        body.classList.remove("no-scroll");
        
    } , delay);
    
});

// for open cv......


let btnCv = document.querySelector('.cv-btn');

btnCv.onclick = () =>
    {
        window.open("./cv/GautamDewasi.pdf", "_blank")
    }


// for play videos......


const vid1 = document.querySelectorAll('.pro-vid');

vid1.forEach(video => 
    {
        video.addEventListener("mouseenter", () => 
            {
                video.play();
            });

        video.addEventListener("mouseleave", () => 
            {
                video.pause();
                video.currentTime = 0;
            });
    });



// for mini nav bar......


let bar = document.querySelector('.barIcon');
let miniBar = document.querySelector('.nav-bar-mini');
let cross = document.querySelector('.fa-square-xmark');

bar.onclick = () =>
{
    miniBar.classList.add("navBar-mini");
    bar.classList.add("crossBar");
    cross.classList.add("crossIcon");
    cross.classList.remove("cross");
}

cross.onclick = () =>
{
    miniBar.classList.remove("navBar-mini");
    bar.classList.remove("crossBar");
    cross.classList.remove("crossIcon");
    cross.classList.add("cross");
}

let navMini = document.querySelectorAll(".hide");

navMini.forEach ( item =>
{
    item.onclick = () =>
    {
        miniBar.classList.remove("navBar-mini");
        bar.classList.remove("crossBar");
        cross.classList.remove("crossIcon");
        cross.classList.add("cross");
    }
});


// for sound effect......

const clickSound = document.getElementById('clickSound');

document.addEventListener('mousedown', (event) => 
{
    // Check if the target is a button or an anchor tag and if the left mouse button is clicked

    if ((event.target.tagName === 'BUTTON' || event.target.tagName === 'A' || event.target.tagName === 'I') && event.button === 0) 
        {
            clickSound.currentTime = 0; // Rewind to start
            clickSound.play();
        }
});