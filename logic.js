// INTERSECTION OBSERVER

const cards=document.querySelectorAll('.project');

const observer= new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle("show",entry.isIntersecting)
        if (entry.isIntersecting){
            observer.unobserve(entry.target);
        }
    })
}, {
    threshold:0.15,
})

cards.forEach(card =>{
    observer.observe(card);
})



// Back to top

let backTOTopButton=document.querySelector('.left-content-header');

backTOTopButton.addEventListener('click',()=> {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})

let homeButton=document.querySelector('.home-button');
homeButton.addEventListener('click',(event)=>{
    event.preventDefault();
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
})

let targetBlock=document.querySelector('.project');

function updateTargetContent(){
    let windowWidth=window.innerWidth;
    if (windowWidth<1000){
        targetBlock.innerHTML=`
        <div class="project-left-area-upper">
            <h1>Weather Website</h1>
            <p>Wanna know weather? <br> It's here!</p>
        </div>
        <div class="project-right-area">
            <a style="border-radius:20px;" href="https://karunans2004.github.io/Weather-website-firsty-try/" target="_blank"><img src="project 1.jpg" alt="first-project" class="first-project-pic"></a>
        </div>
        <div class="project-left-area">
            <a href="https://karunans2004.github.io/Weather-website-firsty-try/" target="_blank" class="project-one"><h1>View <img src="in-new-tab.svg" alt=""></h1></a>
         </div>   
        `;
    }else{
        targetBlock.innerHTML=`
        <div class="project-left-area">
            <div class="project-left-area-upper">
                <h1>Weather Website</h1>
                <p>Wanna know weather? <br> It's here!</p>
            </div>
            <a href="https://karunans2004.github.io/Weather-website-firsty-try/" target="_blank" class="project-one"><h1>View <img src="in-new-tab.svg" alt=""></h1></a>
        </div>
        <div class="project-right-area">
            <a href="https://karunans2004.github.io/Weather-website-firsty-try/" target="_blank"><img src="project 1.jpg" alt="first-project" class="first-project-pic"></a>
        </div>
        `
    }
}

window.addEventListener('load', updateTargetContent);
window.addEventListener('resize', updateTargetContent);


// SMTP js

// function sendEmail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "s.karuna0074@gmail.com",
//         Password : "180D2893BC7D2DB98CD5CB1AB4B305DA8223",
//         To : 's.karuna0074@gmail.com',
//         From : document.getElementById('email').value,
//         Subject : "This is the subject",
//         Body : "And this is the body",
//     }).then(
//       message => {
//         alert(message);
//         console.log(message);
//         console.log(document.getElementById('email').value);
//     }
//     );
// }

