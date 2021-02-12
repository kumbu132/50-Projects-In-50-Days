const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");
const tags = document.querySelectorAll(".tag");
let tagsArray = [];

let tagsString;

textarea.focus();

textarea.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    for (let index = 0; index < 100000; index++) {
      for (let i = 0; i < tags.length; i++) {
        tags[i].classList.add("highlight");
        tags[i].classList.remove("highlight");
        console.log(index);
      }
    }
    //highlight animation
  }
});

textarea.addEventListener("keyup", (e) => {
  if (e.code === "Comma") {
    tagsString = "";
    //add spans for tag with the inner HTML with the word that's just been typed
    //const tags array = parse textarea.value by the comma and or map it to the tags array.
    //tagsEl.innerHTML = tagsArray;

    tagsArray = textarea.value.split(",").filter(function (el) {
      return el.length != 0;
    });

    tagsArray.forEach((tag) => {
      tagsString += ` <span class="tag">${tag}</span>`;
    });
    tagsEl.innerHTML = tagsString;
  }
});
