let newtaskbtn = document.querySelector(".new-task-btn");
let Outaddtask = document.querySelector(".out-add-task");

let closeformadd = document.getElementById('close-form-add');

newtaskbtn.addEventListener("click", function () {
  Outaddtask.classList.add("show");
});

closeformadd.addEventListener('click', function() {
    Outaddtask.classList.remove("show");
});

// validation

let Btnpickpriority = document.querySelector('.pick-priority');
        let Cardlistoptionpriority = document.querySelector('.list-option-priority');
        let PriorityOption = document.querySelectorAll('.list-option-priority p');
        let Valuepriority = document.getElementById('priority');
        let Inpdate = document.getElementById('day-schedule');
        let Inpenddate = document.getElementById('end-schedule');
        let Valpickdate = document.querySelector('.pick-date');
        let Valformatteddate = document.getElementById('formatted-date');
        let titleTask = document.getElementById('task');
        let Btnsubmitdata = document.querySelector('.submit-btn-cek');
    
        // Toggle menu opsi prioritas saat tombol dipilih
        Btnpickpriority.addEventListener('click', function() {
            Cardlistoptionpriority.classList.toggle('active');
        });
    
        // Pilih prioritas dari opsi dan set value di tombol dan input
        PriorityOption.forEach((opt) => {
            opt.addEventListener('click', function() {
                Valuepriority.value = this.textContent;  // Update input priority
                Btnpickpriority.textContent = this.textContent;  // Update tombol dengan pilihan
                Cardlistoptionpriority.classList.remove('active');  // Tutup menu opsi setelah memilih
            });
        });
    
        // Menutup opsi prioritas jika klik di luar elemen
        document.addEventListener('click', function(e) {
            if(!Btnpickpriority.contains(e.target) && !Cardlistoptionpriority.contains(e.target)) {
                Cardlistoptionpriority.classList.remove('active');
            }
        });
    
        // Menampilkan dan menyembunyikan date picker saat tombol diklik
        let Btnshowdatepicker = document.querySelector('.show-date-picker');
        let BoxDate = document.querySelector('.date-picker');
    
        Btnshowdatepicker.addEventListener('click', function() {
            BoxDate.classList.toggle('active');
        });
    
        // Menutup date picker jika klik di luar elemen
        document.addEventListener('click', function(e) {
            if(!Btnshowdatepicker.contains(e.target) && !BoxDate.contains(e.target)) {
                BoxDate.classList.remove('active');
            }
        });
    
        // Menampilkan tanggal yang dipilih di input
        Inpdate.addEventListener('input', function() {
            if(Inpdate.value.trim() !== '') {
                Valpickdate.textContent = Inpdate.value;  // Update teks yang menampilkan tanggal
            } else {
                Valpickdate.textContent = 'Due Date';  // Tampilkan placeholder jika input kosong
            }
        });
    
        // Fungsi untuk mengaktifkan tombol submit jika semua data terisi
        function enableSubmitButton() {
            if (titleTask.value.trim() !== '' && Valuepriority.value.trim() !== '' && Valformatteddate.textContent.trim() !== '' && Inpdate.value.trim() !== '' && Inpenddate.value.trim !=='') {
                Btnsubmitdata.disabled = false;
                Btnsubmitdata.classList.add('btn-allowed');
            } else {
                Btnsubmitdata.disabled = true;
                Btnsubmitdata.classList.remove('btn-allowed');
            }
        }
    
        // Memanggil fungsi enableSubmitButton saat ada perubahan pada field input
        [titleTask, Valuepriority, Inpdate, Inpenddate].forEach(input => {
            input.addEventListener('input', enableSubmitButton);
        });
    
        // Panggil enableSubmitButton pertama kali untuk cek saat halaman dimuat
        enableSubmitButton();
