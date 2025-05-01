// DARK MDODE
document.getElementById("dark").onclick = function () {
    document.getElementById("nav").style.backgroundColor = "black";   
    document.body.style.backgroundColor = "#1a1a1a";  
};

// LIGHT MODE
document.getElementById("light").onclick = function () {
    document.getElementById("nav").style.backgroundColor = "darkblue";
    document.body.style.backgroundColor = "white";
};

// TO DO LIST SECTION
const form = document.getElementById('jadwalForm');
const nama = document.getElementById('namaKegiatan');
const tanggal = document.getElementById('tanggalKegiatan');
const tbody = document.getElementById('scheduleTableBody');
let no = 1;

// FUNGSI UNTUK MENGURUTKAN TANGGAL
function sortTableByDate() {
  const rowsArray = Array.from(tbody.querySelectorAll('tr'));
    
  rowsArray.sort((a, b) => {
    const dateA = new Date(a.children[2].textContent);
    const dateB = new Date(b.children[2].textContent);
    return dateA - dateB; // urut dari tanggal paling dekat ke jauh
  });
  
  tbody.innerHTML = '';
  rowsArray.forEach(row => tbody.appendChild(row));
}

// FUNGSI UNTUK MENGUBAH URUTAN NOMOR 
function updateNo() {
    const rows = tbody.querySelectorAll('tr');
    let nomor = 1;
    rows.forEach(row => {
      row.children[0].textContent = nomor++;
    });
}
  
// FUNGSI UNTUK INPUT TANGGAL DAN WAKTU
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // CEK APAKAH BAGIAN KEGIATAN SUDAH TERISI
    if (!nama.value || nama.value.trim() === '') {
      nama.focus();
      return;
    }
    // CEK APAKAH BAGIAN WAKTU SUDAH TERISI
    if (!tanggal.value) {
      tanggal.focus();
      return;
    }
    
    // UNTUK MENAMBAHKAN NAMA DAN TANGGAL DI DALAM TABEL 
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="text-center"></td>
      <td>${nama.value}</td>
      <td class="text-center">${tanggal.value}</td>
      <td class="text-center"><input type="checkbox"></td>
      <td class="text-center">
        <button class="btn btn-info btn-sm me-1 edit">Edit</button>
        <button class="btn btn-danger btn-sm hapus">Hapus</button>
      </td>`;
    tbody.appendChild(tr);
  
    nama.value = '';
    tanggal.value = '';
  
    sortTableByDate(); 
    updateNo(); 
});
  
// MEGHAPUS DAN EDIT BAGIAN AKSI
tbody.addEventListener('click', function(e) {
  if (e.target.classList.contains('hapus')) {
    e.target.closest('tr').remove();
    updateNo();
  } else if (e.target.classList.contains('edit')) {
    const row = e.target.closest('tr');
    nama.value = row.children[1].textContent;
    tanggal.value = row.children[2].textContent;
    row.remove();
    updateNo();
  }
});
  

// FUNGSI UNTUK MENGUPDATE NOMOR
function updateNo() {
  const rows = tbody.querySelectorAll('tr');
  let nomor = 1;
  rows.forEach(row => {
  row.children[0].textContent = nomor++;
  });
}
  
