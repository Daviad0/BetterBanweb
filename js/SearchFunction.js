const searchList [
  {link:"https://www.banweb.mtu.edu/owassb/mtu_safety_first_alert.p_update"},
  {link: "https://www.banweb.mtu.edu/owassb/bwgkogad.P_SelectAtypView"},
  {link: "https://www.banweb.mtu.edu/owassb/bwgkogad.P_SelectAtypUpdate"}
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

  }

}

const clearButton = document.getElementById('clear');

clearButton.addEventListener("click", (e) => {

}


function setList(results){

  for(const string of results){

    const resultItem = document.createElement('li');

    resultItem.classList.add('result-item');

  const text = document.createTextNode(string.links);

  resultItem.appendChild(text);

  list.appendChild(resultItem);
  }
}
