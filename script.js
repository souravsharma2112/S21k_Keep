console.log("Welcome to S21k Keep");

const updateLSData = () => {
    const textAreaData = document.querySelectorAll("textarea");
    const notes = [];
    textAreaData.forEach((note) => {
        return notes.push(note.value);
    })
    localStorage.setItem('notes', JSON.stringify(notes));
}


const addBtn = document.getElementById("addBtn");
const showNotes = (text = '') => {
    const main = document.getElementById("main");
    const box = document.createElement("div");
    box.classList.add("box");
    const addHTML = `
        <div class="operation">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="text__box ${text ? "" : "hidden"}"></div>
        <textarea placeholder = "S21k Keep" class="text__area ${text ? "hidden" : ""}"></textarea>

    `
    box.insertAdjacentHTML("afterbegin", addHTML);

    // Reference buttons

    const editBtn = box.querySelector(".edit");
    const deleteBtn = box.querySelector(".delete");
    const mainDiv = box.querySelector(".text__box");
    const textArea = box.querySelector("textarea");



    deleteBtn.addEventListener("click", () => {
        box.remove();
        updateLSData();
    });

    textArea.value = text;
    mainDiv.innerHTML = text;
    editBtn.addEventListener("click", () => {
        mainDiv.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    textArea.addEventListener("change", (event) => {
        const textValue = event.target.value;
        mainDiv.innerHTML = textValue;
        updateLSData();

    });


    const moonBtn = document.getElementById("moon");
    const sunBtn = document.getElementById("sun");

    // Theme Reference

    const bodyTheme = document.querySelector(".body");

    sunBtn.addEventListener("click", () => {
        moonBtn.classList.remove("hidden");
        sunBtn.classList.add("hidden");
        bodyTheme.classList.remove("body-dt");
        textArea.classList.remove("dark__textArea");
        box.classList.remove("dark__box");
    });

    moonBtn.addEventListener("click", () => {
        moonBtn.classList.add("hidden");
        sunBtn.classList.remove("hidden");
        bodyTheme.classList.add("body-dt");  
        box.classList.add("dark__box"); 
        textArea.classList.add("dark__textArea");
    });
    if (moonBtn.className == "hidden") {
        textArea.classList.toggle("dark__textArea");
        box.classList.toggle("dark__box");
    }
    main.appendChild(box);

}
const notes = JSON.parse(localStorage.getItem('notes'));
if (notes) { notes.forEach((note) => showNotes(note)) };
addBtn.addEventListener("click", () => {
    showNotes();
});




