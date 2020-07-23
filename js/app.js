// Global Variables 

const navList = document.querySelector('#navbar__list');
const sectionBlocks = document.querySelectorAll('section')
let newListItem = document.createElement('li');

// creating new element of items

sectionBlocks.forEach(elm => {
    let navlistElement = `<li class=' ${elm.className}' data-link=${elm.id}><a href="#${elm.id}" class='menu__link'>${elm.dataset.nav}</li>`
    navList.insertAdjacentHTML('beforeend', navlistElement)
});

// add active class a

let listItem = navList.querySelectorAll('li');
for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener("click", 
    function() {
        let current = document.getElementsByClassName("active");
        if(current[0] !== undefined) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
};

// change active class when scrolling

window.addEventListener('scroll', activeSection = () => {
        let i = sectionBlocks.length;    
        while(--i && window.scrollY + 100 < sectionBlocks[i].offsetTop) {}
        listItem.forEach((listItem) => listItem.classList.remove('active'));
        listItem[i].classList.add('active');
        sectionBlocks.forEach((sectionBlock) => sectionBlock.classList.remove('active'));
        sectionBlocks[i].classList.add('active');
        
        if(window.scrollY <= 200 ) {
            listItem[i].classList.remove('active');
            sectionBlocks[i].classList.remove('active');
        }
    }
);

// smooth scrolling

window.scroll({
    block: "end",
    behavior: 'smooth'
  });
  
window.scrollBy({ 
    block: "end",
    behavior: 'smooth' 
});

