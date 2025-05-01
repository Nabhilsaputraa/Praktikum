document.getElementById("dark").onclick = function () {
    document.body.style.backgroundColor = "#1a1a1a";
    document.getElementById("page").style.color = "white";
    document.getElementById("title").style.color = "white";
    document.getElementById("navigasi").style.backgroundColor = "black";
    document.getElementById("Galery").style.backgroundColor = "#1a1a1a";
    document.getElementById("footer").style.backgroundColor = "black";
    document.getElementById("footer").style.color = "white";
    
    const cards = document.querySelectorAll(".col .card");
    
    cards.forEach(card => {
        card.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        card.querySelector(".card-body").style.color = "white";
        card.querySelector(".card-footer").style.color = "rgba(255, 255, 255, 0.7)";
    });
};

document.getElementById("light").onclick = function () {
    document.body.style.backgroundColor = "white";
    document.getElementById("page").style.color = "black";
    document.getElementById("title").style.color = "black";
    document.getElementById("navigasi").style.backgroundColor = "darkblue";
    document.getElementById("Galery").style.backgroundColor = "white";
    document.getElementById("footer").style.backgroundColor = "darkblue";
    document.getElementById("footer").style.color = "white";

    const cards = document.querySelectorAll(".col .card");

    cards.forEach(card => {
        card.style.backgroundColor = "white";
        card.querySelector(".card-body").style.color = "black";
        card.querySelector(".card-footer").style.color = "black";
    });
};


const form = document.getElementById('jadwalForm');
const nama = document.getElementById('namaKegiatan');
const tanggal = document.getElementById('tanggalKegiatan');
const tbody = document.getElementById('scheduleTableBody');
let no = 1;

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td class="text-center">${no++}</td>
    <td>${nama.value}</td>
    <td class="text-center">${tanggal.value}</td>
    <td class="text-center"><input type="checkbox"></td>
    <td class="text-center">
      <button class="btn btn-warning btn-sm me-1 edit">Edit</button>
      <button class="btn btn-danger btn-sm hapus">Hapus</button>
    </td>
  `;
  tbody.appendChild(tr);

  nama.value = '';
  tanggal.value = '';
});

tbody.addEventListener('click', function(e) {
  if (e.target.classList.contains('hapus')) {
    e.target.closest('tr').remove();
  } else if (e.target.classList.contains('edit')) {
    const row = e.target.closest('tr');
    nama.value = row.children[1].textContent;
    tanggal.value = row.children[2].textContent;
    row.remove();
  }
});

  