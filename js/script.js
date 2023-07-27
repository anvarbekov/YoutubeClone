const bars = document.querySelector('.bars');
const sidebar = document.querySelector('.sidebar');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const root = document.querySelector(':root');
const contentCloseIcon = document.querySelector('.content__close-icon');

// content remove event function
function removeContent(){
    contentCloseIcon.addEventListener('click', () => {
        contentCloseIcon.parentElement.remove();
    })
} 


// sidebar menu
bars.addEventListener('click', () => {
    sidebar.classList.toggle('add');
})
const toggleBtn = () => {
    sun.classList.toggle('icon__hidden')
    moon.classList.toggle('icon__hidden')
    root.classList.toggle('active')
}
// mode save loacl stroge
const getToggle = localStorage.getItem('mode');

if(getToggle){
    toggleBtn(); 
}

sun.addEventListener('click', () => {
    toggleBtn()
    localStorage.setItem('mode', 'icon__hidden')
})
moon.addEventListener('click', () => {
    toggleBtn()
    localStorage.setItem('mode', '')
})


function dataUIS(dataUI){
    document.getElementById('list-container').innerHTML = dataUI;
}