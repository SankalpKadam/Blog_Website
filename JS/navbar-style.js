/*const sections=document.querySelector("section");
const brandimg = document.querySelector("#inside-navbar-brand")
//const mainmenu=document.querySelector("#Main-Menu")
//const hiddenmenu = document.querySelector("#Main-Menu-scrolled")
const options={
  threshold:0.45,
  root:null
}
const observer= new IntersectionObserver(function (entries,observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      brandimg.classList.remove("d-none")
      console.log(entry);
    }
    else {
    brandimg.classList.add("d-none")
    }
  });

},options);
observer.observe(sections);*/
window.addEventListener("scroll",function () {
  const header=document.querySelector("#inside-navbar-brand");
  const mainmenu=document.querySelector("#MenuBar")
  if(window.scrollY>150){
  header.classList.remove('d-none')
  header.classList.add('inside-navbar-brand')
  mainmenu.classList.add('navbaranim')
  }
  else{
    header.classList.add('d-none')
    mainmenu.classList.remove('navbaranim')
  }
})
