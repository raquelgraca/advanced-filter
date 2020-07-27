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
const selected2 = document.querySelector(".selected2");

const applyFilter = document.querySelector("#apply-filter");


btnFilter.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
  rulesContainer.classList.remove("active");
  applyFilter.classList.remove("active");
  searchBox.value = "";
  filterList("");
  selected.classList.toggle("active");
  selected.innerHTML = "Select Attribute";
  
  if (optionsContainer.classList.contains("active")) {
      searchBox.focus();
  }
});

btnSavedFilter.addEventListener("click", () => {
    savedFiltersContainer.classList.toggle("active");
});


optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
        rulesContainer.classList.add("active");
            rulesList.forEach(r => {
                r.addEventListener("click", () => {
                    selected.innerHTML = r.querySelector("label").innerHTML;
                    rulesContainer.classList.remove("active");
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