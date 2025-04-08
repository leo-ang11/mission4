//  menampilkan tanggal hari ini
const today = new Date();

const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const dayName = days[today.getDay()];

const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
const monthName = months[today.getMonth()];

const date = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

const formattedDate = `${dayName}, ${date} ${monthName} ${year}`;

const infotime = document.getElementById("today-time-info");
infotime.textContent = formattedDate;
