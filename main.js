document.addEventListener("click",e => {
  if(e.target.classList.contains("accordion")){
    e.target.nextElementSibling.classList.toggle("active")
  }
})
