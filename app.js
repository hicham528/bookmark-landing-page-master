let select_container = document.querySelectorAll(".select_container span");
let image_value = document.querySelector(".image_value");
let tettle_value = document.querySelector(".tettle_value");
let para_value = document.querySelector(".para_value");

select_container.forEach(btn => {
    btn.onclick = (e) => {
        select_container.forEach(item => item.classList.remove("select_active"));
        e.target.classList.add("select_active");

      
        image_value.style.opacity = '0';
        tettle_value.style.opacity = '0';
        para_value.style.opacity = '0';

        setTimeout(() => {
        
            if(e.target.textContent.includes(" Simple Bookmarking")){
                image_value.src="images/illustration-features-tab-1.svg";
                tettle_value.innerHTML=" Bookmark in one click";
                para_value.innerHTML="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
            }
            if(e.target.textContent.includes(" Speedy Searching")){
                image_value.src="images/illustration-features-tab-2.svg";
                tettle_value.innerHTML="  Intelligent search";
                para_value.innerHTML="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
            }
            if(e.target.textContent.includes(" Easy Sharing")){
                image_value.src="images/illustration-features-tab-3.svg";
                tettle_value.innerHTML=" Share your bookmarks";
                para_value.innerHTML="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
            }

            image_value.style.opacity = '1';
            tettle_value.style.opacity = '1';
            para_value.style.opacity = '1';
        }, 500);
    };
});


let questionsContainer = document.querySelectorAll(".questions_container .only_quetion");

questionsContainer.forEach(item => {
  let header = item.querySelector(".header_quetion");
  header.addEventListener('click', () => {
    item.classList.toggle("active");

 
    let arrow = header.querySelector(".image_btn");
    arrow.classList.toggle("rotate");

    
    let answer = item.querySelector("p");
    if (item.classList.contains("active")) {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  });
});

let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
let errors_email=document.querySelector(".errors_email");
let email_click_btn=document.querySelector(".email_click");
let email_input=document.querySelector(".email_input");

email_click_btn.onclick=()=>{
    if(!emailPattern.test(email_input.value)){
        errors_email.innerHTML="email is required";
        email_input.style.backgroundColor='var(--Soft_Red)';
        email_input.style.color="#fff"
    }else{
        errors_email.innerHTML="";
        email_input.style.backgroundColor='#fff';
        email_input.style.color="black";
        email_input.value="";
    }
}


let navbare=document.querySelector(".navbare");
let open_nav=document.querySelector(".open_nav");
open_nav.onclick=()=>{
    navbare.classList.toggle("new-navbare");
 
}