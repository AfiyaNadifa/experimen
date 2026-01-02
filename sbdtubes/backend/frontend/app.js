const API_URL = "http://localhost:3000/dashboard";
const tableBody = document.getElementById("table-body");

async function loadData(paged) {
  try {
    const res = await fetch(`${API_URL}?paged=${paged}`, {
      headers: {
        role: "Viewer"   // 🔑 WAJIB UNTUK RBAC
      }
    });

    if (!res.ok) throw new Error("API error");

    const data = await res.json();
    tableBody.innerHTML = "";

    data.forEach(emp => {
      tableBody.innerHTML += `
        <tr>
          <td>${emp.id}</td>
          <td>${emp.name}</td>
          <td>${emp.department}</td>
          <td>${emp.status}</td>
        </tr>
      `;
    });
  } catch (err) {
    alert("Gagal mengambil data");
  }
}

// BUTTON
document.getElementById("btnPagination").onclick = () => loadData(true);
document.getElementById("btnAll").onclick = () => loadData(false);

// AUTO LOAD (10 DATA)
loadData(true);
