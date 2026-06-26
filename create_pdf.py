from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_font("helvetica", "B", 14)
        self.cell(0, 10, "Naskah Presentasi Sidang Project - Website Portofolio Personal", border=False, align="C", new_x="LMARGIN", new_y="NEXT")
        self.ln(5)

    def footer(self):
        self.set_y(-15)
        self.set_font("helvetica", "I", 10)
        self.cell(0, 10, f"Halaman {self.page_no()}/{{nb}}", align="C")

pdf = PDF()
pdf.add_page()

# Setup fonts
# Need to use a unicode font if we have arabic text, but fpdf2 by default only supports latin-1 for built-in fonts.
# Instead of embedding a ttf font for arabic which might not be present, we can provide the transliteration for the arabic part and omit the arabic script if it errors out, or we can just stick to the transliteration.
# To be safe, we will just use the transliteration and the translation for the arabic part.

pdf.set_font("helvetica", size=11)

script_content = """
Slide 1: Judul Presentasi (Cover)
[Saat Slide Tampil]
"Assalamu'alaikum warahmatullahi wabarakatuh, selamat pagi/siang Bapak/Ibu Dosen Penguji serta audiens yang hadir.

Perkenalkan, nama saya [Nama Anda] dengan NIM [NIM Anda]. Pada kesempatan kali ini, saya akan mempresentasikan hasil proyek akhir saya yang berjudul: 'Rancang Bangun Website Portofolio Personal Interaktif Sebagai Media Personal Branding', dengan studi kasus pada portofolio saya sendiri sebagai Frontend Developer dan Graphic Designer."


Slide 2: Mutiara Al-Qur'an (Nilai Dasar)
[Pindah ke Slide 2]
"Sebagai landasan spiritual dan motivasi utama dalam penyelesaian proyek ini, saya mengutip firman Allah Subhanahu wa Ta'ala dalam Al-Qur'an Surah Al-Mujadilah ayat 11 yang berbunyi:

'Yarfa'illahulladzina aamanu minkum walladzina uutul 'ilma darojaat.'

Yang artinya: '...Niscaya Allah akan mengangkat (derajat) orang-orang yang beriman di antaramu dan orang-orang yang diberi ilmu pengetahuan beberapa derajat...'

Ayat ini menjadi pengingat yang sangat kuat bagi saya. Bahwa di era digital yang bergerak sangat cepat ini, ilmu pengetahuan—khususnya di bidang teknologi dan pengembangan web—adalah sebuah keharusan. Proyek website portofolio ini bukan sekadar tugas akhir, melainkan bentuk ikhtiar saya dalam menuntut ilmu dan mempraktikkan ilmu tersebut agar kelak bisa bermanfaat secara profesional."


Slide 3: Latar Belakang Masalah
[Pindah ke Slide 3]
"Memasuki era transformasi digital, seorang profesional sangat dituntut untuk memiliki rekam jejak digital yang kuat. Namun, saya menemukan beberapa masalah pada metode konvensional:

Pertama, karya-karya desain dan code yang kita miliki sering kali tersebar di platform yang berbeda—misalnya desain di Instagram, kodingan di GitHub, dan video di Google Drive. Ini menyulitkan rekruter untuk melihat secara komprehensif.

Kedua, penggunaan CV berbentuk dokumen statis seperti PDF sangat terbatas. CV statis tidak bisa menampilkan interaktivitas secara langsung, apalagi untuk seorang Frontend Developer.

Oleh karena itu, dibutuhkan sebuah platform terpusat yang interaktif, dinamis, dan representatif."


Slide 4: Rumusan Masalah
[Pindah ke Slide 4]
"Dari latar belakang tersebut, muncul beberapa rumusan masalah utama:
1. Bagaimana kondisi penyebaran portofolio karya saat ini dan apa kebutuhannya?
2. Bagaimana merancang serta membangun website portofolio yang interaktif dan responsif?
3. Serta, bagaimana hasil pengujian antarmuka dan fungsionalitas fitur interaktif pada website tersebut?"


Slide 5: Batasan Masalah
[Pindah ke Slide 5]
"Agar proyek ini lebih terarah, saya menetapkan beberapa batasan:
* Pertama, pengembangan ini berfokus pada sisi Frontend, murni menggunakan HTML5, CSS3, dan Vanilla JavaScript, tanpa menggunakan database backend.
* Kedua, website ini dirancang responsif, artinya tampilan akan menyesuaikan secara otomatis baik diakses lewat smartphone, tablet, maupun PC.
* Ketiga, fitur fungsionalnya difokuskan pada pengujian elemen interaktif seperti mode gelap-terang (Dark Mode), pergantian bahasa (Language Switcher), dan formulir kontak."


Slide 6: Analisis Sistem Berjalan
[Pindah ke Slide 6]
"Sebelum sistem ini dibuat, begini alur yang biasanya terjadi:
Seorang klien atau rekruter yang ingin melihat karya kita harus meminta file CV secara manual, lalu berpindah-pindah membuka tautan media sosial satu per satu. Selain kurang efisien, ini juga membatasi audiens global karena tidak ada opsi bahasa lain. Dan yang paling penting, tidak ada demonstrasi skill web development secara langsung pada dokumen kertas atau PDF."


Slide 7: Perancangan Sistem (Bagan Use Case)
[Pindah ke Slide 7]
"Untuk memecahkan masalah tersebut, saya merancang sebuah sistem yang dapat dilihat pada Use Case di slide ini. 

Pengunjung atau rekruter sebagai aktor utama, dapat melakukan 9 interaksi krusial di dalam website ini secara terpusat. Mulai dari melihat profil, mengunduh CV, mengatur kenyamanan visual dengan Dark/Light Mode, mengganti bahasa antarmuka (Indonesia, Inggris, dan Arab), melihat progres keahlian, mengakses galeri proyek beserta demonya, hingga mengirim pesan langsung lewat Contact Form."


Slide 8: Modul Sistem (Waktu Pengerjaan)
[Pindah ke Slide 8]
"Proyek ini saya selesaikan dalam estimasi waktu sekitar 16 Hari kerja. Pengerjaannya dibagi ke dalam beberapa modul utama. Mulai dari pembuatan Layout Dashboard dan navigasi, integrasi slider sertifikat, pengembangan galeri proyek, integrasi sistem kontak menggunakan Formspree, hingga tahap akhir yaitu penerapan logika JavaScript untuk interaktivitas tema dan bahasa, lalu diakhiri dengan pengujian responsivitas."


Slide 9 & 10: Development Sistem (Implementasi & Mockup)
[Pindah ke Slide 9 & 10]
"Berikut adalah hasil akhir (interface) dari proyek yang saya bangun.

Di sini kita bisa melihat desain UI/UX yang clean dan modern. Fitur Theme Toggle bekerja dengan baik, mengubah estetika website sesuai preferensi mata pengguna.

Lalu di bagian Featured Projects, setiap kartu proyek sudah dilengkapi dengan tombol demonstrasi—baik menuju repository kodingan maupun galeri visual, menggunakan icon yang intuitif."


Slide 11 & 12: Pengujian Fungsional (Black Box)
[Pindah ke Slide 11 & 12]
"Untuk memastikan kelayakan, saya melakukan pengujian fungsional dengan metode Black Box Testing.

Hasilnya:
1. Tombol navigasi menu berhasil scroll secara otomatis dengan mulus (smooth).
2. Toggle Dark/Light Mode merubah seluruh variabel warna (CSS variables) dengan sempurna.
3. Fitur Language Switcher menerjemahkan bahasa real-time tanpa perlu me-refresh halaman web.
4. Slider sertifikat bergeser secara rapi dan proporsional.
5. Serta formulir kontak terbukti valid memproses pesan dari pengunjung langsung ke kotak masuk email saya melalui Formspree.

Semua komponen kunci dinyatakan Valid."


Slide 13: Kesimpulan dan Saran
[Pindah ke Slide terakhir]
"Sebagai kesimpulan dari proyek ini:
Website portofolio personal telah berhasil dirancang dan dibangun menjadi sebuah wadah personal branding yang interaktif. Portofolio kini terpusat, mempermudah calon klien melihat karya secara menyeluruh. Dan seluruh fungsi utama telah diuji berjalan sempurna di berbagai jenis perangkat keras.

Saran Pengembangan Kedepan:
Sistem ini masih sangat terbuka untuk dikembangkan. Saran saya ke depannya adalah menambahkan Content Management System (CMS) agar update proyek bisa dilakukan melalui dashboard tanpa perlu menyentuh kodingan lagi, serta menambahkan modul artikel atau blog untuk sarana literasi digital.

Demikian presentasi dari saya. Terima kasih atas waktu dan perhatian Bapak/Ibu Dosen Penguji serta teman-teman sekalian. Waktu dan tempat saya kembalikan, wassalamu'alaikum warahmatullahi wabarakatuh."
"""

script_content = script_content.replace("—", "-").replace("–", "-").replace("’", "'").replace("”", '"').replace("“", '"')
pdf.multi_cell(0, 7, script_content)
pdf.output("Naskah_Presentasi_Sidang.pdf")
print("PDF created successfully!")
