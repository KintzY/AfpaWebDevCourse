//Yann

// add row
/* verifie si l'utilisateur clique sur le bouton "Ajouter" puis 
ajoute une ligne crée a la table identifié et y insert des cellule
avec les valeurs entrés*/
document.getElementById("button-add").addEventListener("click", function () {
  var table = document.getElementById("customers");
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);
  // verifie pour chaque cellule crée si une donné a ete ajouté et dans le cas contraire met n/a
  if (document.getElementById("name").value !== "") {
    cell1.innerHTML = document.getElementById("name").value;
  } else {
    cell1.innerHTML = "n/a";
  }
  if (document.getElementById("type").value !== "") {
    cell2.innerHTML = document.getElementById("type").value;
  } else {
    cell2.innerHTML = "n/a";
  }
  if (document.getElementById("domaine").value !== "") {
    cell3.innerHTML = document.getElementById("domaine").value;
  } else {
    cell3.innerHTML = "n/a";
  }
  if (document.getElementById("adresse").value !== "") {
    cell4.innerHTML = document.getElementById("adresse").value;
  } else {
    cell4.innerHTML = "n/a";
  }
  if (document.getElementById("contact").value !== "") {
    cell5.innerHTML = '<a href="mailto:' + document.getElementById("contact").value + '">' + document.getElementById("contact").value + "</a>";
  } else {
    cell5.innerHTML = "n/a";
  }
  if (document.getElementById("nature").value !== "") {
    cell6.innerHTML = document.getElementById("nature").value;
  } else {
    cell6.innerHTML = "n/a";
  }
  if (document.getElementById("chiffre-affaire").value !== "") {
    cell7.innerHTML = document.getElementById("chiffre-affaire").value;
  } else {
    cell7.innerHTML = "n/a";
  }
  if (document.getElementById("effectif").value !== "") {
    cell8.innerHTML = document.getElementById("effectif").value;
  } else {
    cell8.innerHTML = "n/a";
  }
  cell9.innerHTML = '<input class="delete-button" type= "button" value="&#10060;" onClick="Javacsript:deleteRow(this)">';
});

// remove row
function deleteRow(obj) {
  var index = obj.parentNode.parentNode.rowIndex;
  var table = document.getElementById("customers");
  table.deleteRow(index);
}

// search cell
document.getElementById("search-table").addEventListener("keyup", function () {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search-table");
  filter = input.value.toUpperCase();
  table = document.getElementById("customers");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
});
