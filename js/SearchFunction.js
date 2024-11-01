const searchList [
  //{link:"https://www.banweb.mtu.edu/owassb/mtu_safety_first_alert.p_update"},
  //{link: "https://www.banweb.mtu.edu/owassb/bwgkogad.P_SelectAtypView"},
  //{link: "https://www.banweb.mtu.edu/owassb/bwgkogad.P_SelectAtypUpdate"},
  ]


const searchInput = document.querySelector('.input');

searchInput.addEventListener("input", (e) =>{

  let value = e.target.value;

  if(value && value.trim().length>0){
    value = value.trim().tolowercase();

    setList(string.filter(string =>{
      return string.link.includes(value)
    }))
  }else{
    clearList();
  }

})

const clearButton = document.getElementById('clear');

clearButton.addEventListener("click", (e) => {
  clearList();
}


function setList(results){
  clearList()
  for(const string of results){

    const resultItem = document.createElement('li');

    resultItem.classList.add('result-item');

  const text = document.createTextNode(string.links);

  resultItem.appendChild(text);

  list.appendChild(resultItem);

  if(resultItem == 0){
    noResults();
  }
  }
}

function clearList(){
  // looping through each child of the search results list and remove each child
  while (list.firstChild){
      list.removeChild(list.firstChild);
  }
})

function noResults(){
  // create an element for the error; a list item ("li")
  const error = document.createElement('li');
  // adding a class name of "error-message" to our error element
  error.classList.add('error-message');

  // creating text for our element
  const text = document.createTextNode('No results found. Sorry!');
  // appending the text to our element
  error.appendChild(text);
  // appending the error to our list element
  list.appendChild(error);
}