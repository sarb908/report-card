// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks
var tbody = document.querySelector("tbody");
var form = document.querySelector("form");

form.addEventListener("submit", userList);

function userList(){
    event.preventDefault();
    var fotoUrl = document.querySelector("#image").value;
    var name1 = document.querySelector("#name").value;
    var batch =  document.querySelector("#batch").value;
    var dsa =  Number(document.querySelector("#dsa").value);
    var cs =  Number(document.querySelector("#cs").value);
    var coding =  Number(document.querySelector("#coding").value);
    

    var tr = document.createElement("tr");
    
    var td1 = document.createElement("td");
    var img = document.createElement("img");
    img.setAttribute("src", fotoUrl);
    td1.append(img);

    var td2 = document.createElement("td");
    td2.innerText = name1;

    var td3 = document.createElement("td");
    td3.innerText = batch;

    var td4 = document.createElement("td");
    td4.innerText = dsa;

    var td5 =document.createElement("td");
    td5.innerText = cs;

    var td6 = document.createElement("td");
    td6.innerText = coding;
    
    var td7 = document.createElement("td");
    var perc =Math.floor(((dsa+ cs+ coding)/30)*100);
   
    td7.innerText = perc;

    var td8 = document.createElement("td");
    if(perc> 50){
        td8.innerText = "Regular";
        td8.style.backgroundColor = "green"
    }else{
        td8.innerText = "Async";
        td8.style.backgroundColor = "red";
    }

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
    tbody.append(tr);
}