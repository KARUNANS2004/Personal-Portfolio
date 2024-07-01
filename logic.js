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

