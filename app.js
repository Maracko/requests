const requests = new Requests;

// HTTP method button event listener
document.querySelector("#method-dropdown-button").addEventListener("click", e => {
  const dropdown = document.getElementById("method-dropdown-menu");
  dropdown.style.display = "block";
})

// Change HTTP method button text to be selected option
document.querySelector(".dropdown-menu").addEventListener("click", e => {
  document.querySelector("#method-dropdown-button").innerHTML = e.target.innerHTML;
});

// Hide dropdown when clicked out of it
window.addEventListener("click", e => {
  if (e.target.id != "method-dropdown-button") {
    document.getElementById("method-dropdown-menu").style.display = "none";
  }
})

//Event listener for submit button
document.querySelector("#submit-form").addEventListener("click", e => {
  let req;
  const url = document.querySelector("#url-form-input").value;
  const data = document.querySelector("#data-form-input").value;
  const resText = document.querySelector("#response-text");
  const resBox = document.querySelector("#response-container");

  // Reset the color of box to default on new request
  resBox.style.border = "1px solid #007BFF", 2000;

  switch (document.querySelector("#method-dropdown-button").innerHTML) {
    case "GET":
      req = requests.get(url);
      req.then(data => {
        resText.innerHTML = data;
        hljs.highlightBlock(resText);
      })
        .catch(e => handleResponseError(e));
      break;
    case "POST":
      req = requests.post(url, data);
      req.then(data => {
        resText.innerHTML = data;
        hljs.highlightBlock(resText);
      })
        .catch(e => handleResponseError(e));
      break;
    case "PUT":
      req = requests.put(url, data);
      req.then(data => {
        resText.innerHTML = data;
        hljs.highlightBlock(resText);
      })
        .catch(e => handleResponseError(e));
      break;
    case "PATCH":
      req = requests.patch(url, data);
      req.then(data => {
        resText.innerHTML = data;
        hljs.highlightBlock(resText);
      })
        .catch(e => handleResponseError(e));
      break;
    case "DELETE":
      req = requests.delete(url, data);
      req.then(data => {
        resText.innerHTML = data;
        hljs.highlightBlock(resText);
      })
        .catch(e => handleResponseError(e));
      break;
    default:
      alert("Please select HTTP method first");
      break;
  }
})

function handleResponseError(error) {
  const resText = document.querySelector("#response-text");
  const resBox = document.querySelector("#response-container");
  resText.innerHTML = `Error: ${error.message}`;
  resBox.style.border = "1px solid red";
}
