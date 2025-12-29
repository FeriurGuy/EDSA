# 🇬🇧 EDSA UIN Ar-Raniry - Official Web Profile

![EDSA Banner](images/edsaa.png) > **"Driving Change, Building Legacy."**

Website profil resmi untuk **English Department Student Association (EDSA)** UIN Ar-Raniry Banda Aceh. Website ini berfungsi sebagai pusat informasi kegiatan, struktur organisasi, dan galeri dokumentasi mahasiswa PBI.

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

---

## 🌟 Fitur Utama

Website ini dibangun dengan fokus pada desain modern, responsif, dan interaktif:

* **🏠 Homepage Modern:** Hero section dengan animasi, counter statistik kegiatan (JS animated), dan highlight video terbaru.
* **🖼️ Gallery Interaktif (Masonry Layout):** * Tampilan galeri menyusun foto secara otomatis (seperti Pinterest) menyesuaikan orientasi potrait/landscape.
    * **Focus Mode:** Modal pop-up dengan efek *backdrop blur* saat foto diklik untuk tampilan lebih detail.
    * **Caption Support:** Mendukung deskripsi kegiatan di setiap foto.
* **📱 Fully Responsive:** Tampilan menyesuaikan sempurna di Desktop, Tablet, dan Mobile.
* **🎬 Video & Podcast Integration:** Bagian khusus untuk menampilkan konten kreatif dari EDSA.
* **👥 Divisi & Struktur:** Halaman informasi lengkap mengenai divisi-divisi di EDSA (HRD, ECO, IT, dll).

## 🛠️ Teknologi yang Digunakan

* **Core:** HTML5, CSS3, JavaScript (Vanilla & jQuery).
* **Framework CSS:** Bootstrap 5.
* **Plugins:**
    * `Owl Carousel` (untuk slider video/berita).
    * `Bootstrap Icons` (untuk ikon UI).
* **Fonts:** Google Fonts (Montserrat & Sono).

## 📂 Struktur Folder

```text
edsa-web/
├── css/
│   ├── bootstrap.min.css
│   ├── templatemo-pod-talk.css  # Custom Styles
│   └── ...
├── js/
│   ├── custom.js                # Logic Video & Scroll
│   └── ...
├── images/
│   ├── favicon.png
│   └── ...
├── index.html                   # Halaman Utama
├── gallery.html                 # Halaman Galeri
├── about.html                   # Halaman Tentang Kami
└── README.md