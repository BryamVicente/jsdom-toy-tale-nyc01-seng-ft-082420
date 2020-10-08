let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  const toysDiv = document.querySelector("#toy-collection")
   
  const getToys = () => {
    fetch("http://localhost:3000/toys")
    .then(resp => resp.json())
    .then(toys => renderToys(toys))
  }
  
  const renderToys = toys => {
    toys.forEach(toy => {
      renderToy(toy)
    })  
   }
  

function renderToy(toyObj){
  // console.log(toyObj)
  const toyDiv = document.createElement("div")
  toyDiv.classList.add("card")
    toyDiv.innerHTML = `
    <h2>${toyObj.name}</h2>
    <img src="${toyObj.image}" class="toy-avatar" />
    <p>4 Likes </p>
    <button class="like-btn">Like <3</button>
    `
    toysDiv.append(toyDiv)
  }
  


  
    const newForm = document.querySelector(".add-toy-form")
    newForm.addEventListener("submit", function(e){
      e.preventDefault()
      const form = e.target
      const toyName = form.name.value
      const toyImage = form.name.value
    
    })
  
  

  // const newToy = () => {
  //   const brandNewToy = {
  //     name: `${toyName}`,
  //     image: `${toyImage}`
  //   }

  
      fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: 
      {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        "name": toyName,
        "image": toyName.image.value,
        "likes": 0 
      })
    })
      .then(response => response.json())
      .then((toyObj) => {
        let new_toy = renderToys(toyObj)
        toyDiv.append(toyObj)
      })
    
    
   

  submitHandler();
  getToys();
 
});




