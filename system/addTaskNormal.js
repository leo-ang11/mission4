let Containeralltaskhere = document.getElementById("all-task-here");
let Btnsubmit = document.getElementById("submit");
let Taskinput = document.getElementById("task");
let Priorityinput = document.getElementById("priority");
let Dayschedule = document.getElementById("day-schedule");
let Startschedule = document.getElementById("start-schedule");
let Endschedule = document.getElementById("end-schedule");
let formatteddate = document.getElementById("formatted-date");
const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

// Ambil data tugas yang sudah ada di localStorage, atau buat array kosong jika belum ada
let tasks = JSON.parse(localStorage.getItem("tasksData")) || [];

// mengubah format tanggal
Dayschedule.addEventListener("change", function () {
  const dateValue = this.value;
  if (dateValue) {
    const date = new Date(dateValue);
    const dayName = hari[date.getDay()]; // getDay() mengembalikan angka 0-6 (Minggu=0, Senin=1, dst)

    const day = date.getDate();
    const month = date.toLocaleString("id-ID", { month: "long" });
    const year = date.getFullYear();

    const formattedDate = `${dayName}, ${day} ${month} ${year}`;

    document.getElementById("formatted-date").textContent = formattedDate;
  }
});

Btnsubmit.addEventListener("click", function () {
  let task = Taskinput.value.trim();
  let priority = Priorityinput.value.trim();
  let dayschedule = formatteddate.textContent.trim();
  let startschedule = Startschedule.value.trim();
  let endschedule = Endschedule.value.trim();
  // Cek apakah tasklist sudah ada di localStorage
  let tasks = JSON.parse(localStorage.getItem("tasksData")) || [];

  // Generate ID baru yang unik
  let id = Math.floor(Math.random() * 1000000000) + 1; // ID acak

  // Pastikan ID yang dihasilkan unik
  while (tasks.some((task) => task.id === id)) {
    id = Math.floor(Math.random() * 1000000000) + 1;
  }

  // Menyimpan ID yang unik
  let getidresult = id;

  if (task !== "") {
    let newtask = document.createElement("div");
    newtask.className = "task active";
    if (priority === "Urgent") {
      newtask.classList.add("task-urgent");
    } else if (priority === "Normal") {
      newtask.classList.add("task-normal");
    } else if (priority === "Low") {
      newtask.classList.add("task-low");
    }

    newtask.innerHTML = `
    <div>
    <span class="task-id hide">${getidresult}</span>
    <h2>${task}</h2>
    <p>${dayschedule} | ${startschedule} - ${endschedule}</p>
    <p id="pr-s"> Priority: ${priority}</p>
    </div>
    <div class="status">
    <button type="button" title="done" class="task-done-button"></button>
    </div>
    `;

    if (priority === "Urgent") {
        // redirect page 
        window.location.href = "/today-task/urgent/";
      } else if (priority === "Normal") {
        // redirect page
        window.location.href = "/today-task/normal/";
      } else if (priority === "Low") {
        // redirect page
        window.location.href = "/today-task/low/";
      }
    
    saveTaskToLocalStorage(getidresult, task, dayschedule, startschedule, endschedule, priority);
    shownormalData();
  }
});

// Fungsi untuk menyimpan tugas ke localStorage
function saveTaskToLocalStorage(getidresult, task, dayschedule, startschedule, endschedule, priority) {
  
  // Buat objek tugas baru dengan menambahkan status completed
  let newTask = {
    id: getidresult,
    title: task,
    dayschedule: dayschedule,
    startschedule: startschedule,
    endschedule: endschedule,
    priority: priority,
    completed: false,
  };

  // Tambahkan tugas baru ke array
  tasks.push(newTask);

  // Simpan kembali array tugas ke localStorage
  localStorage.setItem("tasksData", JSON.stringify(tasks));
}
