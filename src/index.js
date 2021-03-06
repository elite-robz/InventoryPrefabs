import display_UWWC_open_customers from "./uwwcOpenCustomers";




let prefabArray = [
  "26 x 42",
  "26 x 48",
  "26 x 54",
  "26 x 58",
  "26 x 66",
  "26 x 70",
  "26 x 78",
  "26 x 82",
  "38 x 54",
  "38 x 58",
  "38 x 66",
  "38 x 70",
  "38 x 78",
  "38 x 82",
];
let prefabObjects = [];


//table = steel table
let table = document.getElementById("UWWC Steel Inventory");
//table2 = clear table
let table2 = document.getElementById("UWWC Clear Inventory");



function Prefabs(
  size,
  style,
  inv,
  open,
  confirmed,
  allocated,
  available,
  minimum,
  maximum
) {
  this.size = size;
  this.style = style;
  this.inv = inv;
  this.open = open;
  this.confirmed = confirmed;
  this.allocated = allocated;
  this.available = available;
  this.minimum = minimum;
  this.maximum = maximum;
}

function generateProducts() {
  for (let i = 0; i < prefabArray.length; i++) {
    let newPrefab = new Prefabs(prefabArray[i], "Steel", 0, 0, 0, 0, 0, 0, 0);
    prefabObjects.push(newPrefab);
  }

  for (let i = 0; i < prefabArray.length; i++) {
    let newPrefab = new Prefabs(prefabArray[i], "Clear", 0, 0, 0, 0, 0, 0, 0);
    prefabObjects.push(newPrefab);
  }
}

function displayTable() {
  for (let i = 0; i < prefabObjects.length; i++) {
    let tableRow = document.createElement("tr");

    let name = document.createElement("td");
    name.classList.add("item-qty");
    let size = document.createElement("strong");
    let style = document.createElement("span");
    let onHand = document.createElement("td");
    let open = document.createElement("td");
    let confirmed = document.createElement("td");
    let allocated = document.createElement("td");
    let available = document.createElement("td");
    let minimum = document.createElement("td");
    let maximum = document.createElement("td");
    size.textContent = prefabObjects[i].size;
    size.classList.add("productName");
    style.textContent = prefabObjects[i].style;
    style.classList.add("text-offset");
    onHand.textContent = prefabObjects[i].inv;
    onHand.classList.add("item-qty");
    open.textContent = prefabObjects[i].open;
    open.classList.add("item-qty");
    confirmed.textContent = prefabObjects[i].confirmed;
    confirmed.classList.add("item-qty");
    allocated.textContent = prefabObjects[i].allocated;
    allocated.classList.add("item-qty");
    available.textContent = prefabObjects[i].available;
    available.classList.add("item-qty");
    minimum.textContent = prefabObjects[i].minimum;
    minimum.classList.add("item-qty");
    maximum.textContent = prefabObjects[i].maximum;
    maximum.classList.add("item-qty");
    if (prefabObjects[i].size != "" && prefabObjects[i].style === "Steel") {
      table.appendChild(tableRow);
      name.appendChild(size);
      name.appendChild(style);
      tableRow.append(
        name,
        onHand,
        open,
        confirmed,
        allocated,
        available,
        minimum,
        maximum
      );
    } else if (
      prefabObjects[i].size != "" &&
      prefabObjects[i].style === "Clear"
    ) {
      table2.appendChild(tableRow);
      name.appendChild(size);
      name.appendChild(style);
      tableRow.append(
        name,
        onHand,
        open,
        confirmed,
        allocated,
        available,
        minimum,
        maximum
      );
    }
  }
}

function updateOnHand(size, style, onHand) {
  for (let i = 0; i < prefabObjects.length; i++) {
    if (prefabObjects[i].size === size && prefabObjects[i].style === style) {
      prefabObjects[i].inv += onHand;
    }
    
  }
  //saveLocal();
  clearTable();
  displayTable();
}

function clearTable() {
  let rowCount = table.rows.length;
  for (let i = 1; i < rowCount; i++) {
    table.deleteRow(1);
    table2.deleteRow(1);
  }
}



generateProducts();
//console.log(prefabObjects);
//restoreLocal();
displayTable();

//updateOnHand("38X54", "Steel", 42);

function hide() {
  let title = document.getElementById("title");
  table.style.display = "none";
  table2.style.display = "none";
  title.style.display = "none";
}

window.hide = hide;

window.updateOnHand = updateOnHand;



//function saveLocal(){
//localStorage.setItem('prefabObjects',JSON.stringify(prefabObjects));
//}
//
//function restoreLocal()
//{
//   prefabObjects = JSON.parse(localStorage.getItem("prefabObjects"));
//   if (prefabObjects === null) 
//   prefabObjects = []
//}

function uwwcOpen()
{
    hide()
    display_UWWC_open_customers()

}
window.uwwcOpen = uwwcOpen;