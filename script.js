/**
 * ==========================================================================
 * JAVASCRIPT - PORTOFOLIO INTERAKTIF (GEN-Z TASTE)
 * ==========================================================================
 * File ini mengatur logika perpindahan halaman (tab), pengisian otomatis 
 * kemajuan bar keahlian (skill bar), dan efek interaksi halus.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // Panggil fungsi inisialisasi navigasi tab dan skill bar saat DOM selesai dimuat
    initNavigation();
    initSkillAnimations();
});

/**
 * FUNGSI 1: Navigasi Antar Halaman (Tab Switching)
 * Berfungsi untuk menyembunyikan section yang tidak aktif dan menampilkan section
 * yang dipilih oleh pengguna lewat navbar, mirip SPA (Single Page Application).
 */
function initNavigation() {
    // Mengambil semua elemen link di navbar dan semua elemen section artikel halaman
    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll(".portfolio-section");

    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault(); // Mencegah reload halaman atau jump link bawaan browser (#hash)

            // 1. Bersihkan kelas 'active' dari semua tombol navigasi terlebih dahulu
            navItems.forEach(nav => nav.classList.remove("active"));
            
            // 2. Tambahkan kelas 'active' ke tombol yang baru saja diklik pengguna
            item.classList.add("active");

            // 3. Ambil id target section dari atribut kustom 'data-target' di HTML
            const targetSectionId = item.getAttribute("data-target");

            // 4. Lakukan loop untuk menyembunyikan seluruh section, dan hidupkan section yang dipilih
            sections.forEach(section => {
                section.classList.remove("active-section");
                if (section.id === targetSectionId) {
                    section.classList.add("active-section");
                }
            });

            // 5. OPTIMALISASI ANIMASI: Jika pengguna berpindah ke tab 'resume',
            // jalankan ulang fungsi animasi pengisian skill bar secara interaktif dari nol.
            if (targetSectionId === "resume") {
                triggerSkillBars();
            }
        });
    });
}

/**
 * FUNGSI 2: Inisialisasi & Trigger Pengisian Minimum Bar Skill
 * Berfungsi mendeteksi data target progress dan mengisinya dengan efek transisi halus.
 */
function initSkillAnimations() {
    // Jalankan pertama kali saat dokumen dimuat (untuk mencegah jika default active tab adalah resume)
    triggerSkillBars();
}

/**
 * FUNGSI UTAMA ANIMASI PROGRESS BAR
 * Mengambil nilai atribut persentase dan memasukkannya ke dalam inline CSS width.
 */
let skillTimeout; // Variabel penampung timer

function triggerSkillBars() {
    const progressFills = document.querySelectorAll(".progress-bar-fill");
    
    // Pertama, reset lebar ke 0% agar saat tab dibuka kembali, animasinya memantul ulang
    progressFills.forEach(fill => {
        fill.style.width = "0%";
    });

    // Hapus timer animasi sebelumnya jika user menekan tab dengan cepat (mencegah glitch)
    clearTimeout(skillTimeout);

    // Jalankan animasi baru
    skillTimeout = setTimeout(() => {
        progressFills.forEach(fill => {
            const targetWidth = fill.getAttribute("data-progress");
            fill.style.width = targetWidth;
        });
    }, 150);
}