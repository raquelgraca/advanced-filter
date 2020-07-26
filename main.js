const btnFilter = document.querySelector(".btn-filter");
const btnSavedFilter = document.querySelector(".btn-saved-filter");

const savedFiltersContainer = document.querySelector(".saved-filters-container");
const savedFilterList = document.querySelectorAll(".saved-filter");

const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");

const rulesContainer = document.querySelector(".rules-container");
const rulesList = document.querySelectorAll(".rules");

const searchBox = document.querySelector(".search-box input");
const selected = document.querySelector(".selected");

const applyFilter = document.querySelector("#apply-filter");


btnFilter.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
  selected.classList.toggle("active");
  searchBox.value = "";
  filterList("");
  
  if (optionsContainer.classList.contains("active")) {
      searchBox.focus();
  }
});

btnSavedFilter.addEventListener("click", () => {
    savedFiltersContainer.classList.toggle("active");
});


optionsList.forEach(o => {
    o.addEventListener("click", () => {
        const optionSelected  = [];
        optionSelected.push(selected.innerHTML = o.querySelector("label").innerHTML);
        selected.innerHTML = optionSelected;
        optionsContainer.classList.remove("active");
        rulesContainer.classList.add("active");
            rulesList.forEach(r => {
                r.addEventListener("click", () => {
                    optionSeleted.push(selected.innerHTML = r.querySelector("label").innerHTML);
                    selected.innerHTML = optionSelected;
                    rulesList.classList.remove("active");
                    applyFilter.classList.add("active");
                    })
        })
    });
});

// search function
searchBox.addEventListener("keyup", function(e) {
  filterList(e.target.value);
});

const filterList = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};