const listElement = document.getElementById("faq-list")
const articlesContainer = document.querySelectorAll(".article__container")


const removeClass = targetElement =>{ 
  if(targetElement.nextElementSibling.classList.contains("article__container--show")){
    targetElement.nextElementSibling.classList.remove("article__container--show")
    targetElement.classList.remove("article__title--rotate","article__title--bold")
    targetElement.classList.add("article__hover")
  } else {

  articlesContainer.forEach((item) =>{
    item.classList.remove("article__container--show");
    item.previousElementSibling.classList.add("article__hover")
    item.previousElementSibling.classList.remove("article__title--rotate","article__title--bold");
    
  })

  targetElement.classList.add("article__title--rotate","article__title--bold")
  targetElement.classList.remove("article__hover")
  targetElement.nextElementSibling.classList.add("article__container--show",".article__container--show::after")
  }
}

listElement.addEventListener("click", e => {
  if(e.target.classList.contains("article__title")){
    removeClass(e.target)
  }
})

