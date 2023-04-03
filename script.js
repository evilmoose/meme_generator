document.addEventListener("DOMContentLoaded", () => {
    const DataForm = document.getElementById("dataForm");
    const MemeImage = document.getElementById("memeImage");
  
    DataForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      let removeButton = document.createElement("button");
      removeButton.id = "removeButton";
      removeButton.innerText = "X";
  
      let Header = document.createElement("p");
      Header.id = "topText";
      Header.innerText = document.getElementById("header").value;
  
      let Footer = document.createElement("p");
      Footer.id = "bottomText";
      Footer.innerText = document.getElementById("footer").value;
  
      let Image = document.createElement("img");
      Image.src = document.getElementById("image").value;
      Image.alt = null;
      Image.title = null;
  
      let MemeImageContainer = document.createElement("div");
      MemeImageContainer.id = "memeContainer";
  
  
  
      MemeImageContainer.appendChild(Header);
      MemeImageContainer.appendChild(Image);
      MemeImageContainer.appendChild(Footer);
      MemeImageContainer.appendChild(removeButton);
      MemeImage.appendChild(MemeImageContainer);
  
      removeButton.addEventListener("click", (event) => {
        event.target.parentNode.remove();
      });
  
      DataForm.reset();
    });
  
  });