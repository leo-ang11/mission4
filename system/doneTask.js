document.addEventListener("click", function (event) {
  if (event.target.classList.contains("task-done-button")) {
    let closestTask = event.target.closest(".task");
    if (closestTask) {
      closestTask.remove();

      // Ambil ID tugas dari elemen task-id
      let taskId = closestTask.querySelector(".task-id").textContent.trim(); // Pastikan ID yang diambil adalah string

      // Ambil data tugas yang sudah ada di localStorage
      let tasks = JSON.parse(localStorage.getItem("tasksData")) || [];

      // Temukan task dengan ID yang sesuai
      let task = tasks.find((task) => task.id == taskId); // Menggunakan '==' untuk pengecekan ID, pastikan tipe data ID konsisten

      if (task) {
        task.completed = true;
      }
      window.location.reload();

      localStorage.setItem("tasksData", JSON.stringify(tasks));
    }
  }
});
