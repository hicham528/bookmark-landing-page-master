# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

### Primary

- Soft Blue: hsl(231, 69%, 60%)
- Soft Red: hsl(0, 94%, 66%)

### Neutral

- Grayish Blue: hsl(229, 8%, 60%)
- Very Dark Blue: hsl(229, 31%, 21%)

## Typography

### Body Copy

- Font size: 18px

### Fonts

- Family: [Rubik](https://fonts.google.com/specimen/Rubik)
- Weights: 400, 500

## Icons

For the icons in the design, you can choose between using the icons provided or a font icon library.

Some library suggestions can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)

> 💎 [Upgrade to Pro](https://www.frontendmentor.io/pro?ref=style-guide) for design file access to see all design details and get hands-on experience using a professional workflow with tools like Figma.













let select_container=document.querySelectorAll(".select_container span");
let image_value=document.querySelector(".image_value");
let tettle_value=document.querySelector(".tettle_value");
let para_value=document.querySelector(".para_value");

select_container.forEach(btn=>{
    btn.onclick=(e)=>{
        select_container.forEach(item=>item.classList.remove("select_active"))
        e.target.classList.toggle("select_active");
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
    }
})