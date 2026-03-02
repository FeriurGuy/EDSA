document.addEventListener("DOMContentLoaded", function() {
    const carouselElement = document.getElementById('edsa3DCarousel');
    const prevBtn = document.getElementById('prevCarouselBtn');
    const nextBtn = document.getElementById('nextCarouselBtn');
    
    if (!carouselElement) return;

    carouselElement.className = 'edsa-carousel-wrapper';

    const edsaEventsData = {
        "2019": [
            {
                title: 'COACH, Alumni Lulusan Australia Isi Diskusi Maba PBI',
                image: 'https://sumberpost.com/wp-content/uploads/2019/08/IMG_20190828_102946.jpg',
                tech: ['August 28', 'Sumber Post'],
                link: 'https://sumberpost.com/2019/08/28/coach-alumni-lulusan-australia-isi-diskusi-maba-pbi/'
            },
            {
                title: 'Ketua Prodi PBI: Calon Sarjana Bersiaplah untuk Kehidupan Sesungguhnya',
                image: 'https://sumberpost.com/wp-content/uploads/2019/02/IMG_0533.jpg',
                tech: ['February 07', 'Sumber Post'],
                link: 'https://sumberpost.com/2019/02/07/ketua-prodi-pbi-calon-sarjana-bersiaplah-untuk-kehidupan-sesungguhnya/'
            },
            {
                title: 'Mahasiswa PBI BBG Raih Juara III Lomba Debat EDSA Fair 2019',
                image: 'https://lldikti13.kemdikbud.go.id/wp-content/uploads/2019/12/bbg.jpg',
                tech: ['December 03', 'Fitria Larasati'],
                link: 'https://lldikti13.kemdikbud.go.id/2019/12/03/mahasiswa-pbi-bbg-raih-juara-iii-lomba-debat-edsa-fair-2019/'
            },
            {
                title: 'Ramadhan Journey with EDSA, Cara Mahasiswa Sambut Bulan Suci',
                image: 'https://sumberpost.com/wp-content/uploads/2019/05/IMG-20190514-WA0013.jpg',
                tech: ['May 20', 'Sumber Post'],
                link: 'https://sumberpost.com/2019/05/20/ramadhan-journey-with-edsa-cara-mahasiswa-sambut-bulan-suci/'
            }
        ],
        "2020": [
            {
                title: 'Menjawab Kebosanan Mahasiswa melalui Aksi Gardening di Masa NewNormal',
                image: 'https://sumberpost.com/wp-content/uploads/2020/07/IMG_20200718_084839-2048x1536.jpg',
                tech: ['July 18', 'Sumber Post'],
                link: 'https://sumberpost.com/2020/07/18/menjawab-kebosanan-mahasiswa-melalui-aksi-gardening-di-masa-newnormal/'
            },
            {
                title: 'Online Seminar PBI UIN Ar-Raniry Series III',
                image: 'http://padebooks.com/wp-content/uploads/2020/09/PBI-Webinar-215x300.jpeg',
                tech: ['September 15', 'Redaksi'],
                link: 'https://padebooks.com/2020/09/15/online-seminar-pbi-uin-ar-raniry-series-3/'
            },
            {
                title: 'Mahasiswa IAIN Bengkulu Raih Penghargaan di Banda Aceh',
                image: 'https://tuntasonline.id/sites/default/files/articles/IMG-20200213-WA0007.jpg',
                tech: ['February 13', 'Tuntas Online'],
                link: 'https://tuntasonline.id/2020/02/13/mahasiswa-iain-bengkulu-raih-penghargaan-di-banda-aceh/'
            },
            {
                title: 'Prodi PBI bersama EDSA Salurkan Donasi untuk Tenaga Medis',
                image: 'https://sumberpost.com/wp-content/uploads/2020/04/IMG-20200422-WA0034.jpg',
                tech: ['April 22', 'Sumber Post'],
                link: 'https://sumberpost.com/2020/04/22/prodi-pbi-bersama-edsa-salurkan-donasi-untuk-tenaga-medis/'
            },
            {
                title: 'PBI UINAR Adakan Webinar Internasional',
                image: 'http://padebooks.com/wp-content/uploads/2020/07/JPG-PBI-214x300.jpeg',
                tech: ['July 13', 'Redaksi'],
                link: 'https://padebooks.com/2020/07/18/pbi-uinar-adakan-webinar-internasional/'
            },
            {
                title: 'EDSA Kolaborasi dengan Kophi Aceh dan Zero Waste Bersihkan Pantai Ulee Lheue',
                image: 'https://sumberpost.com/wp-content/uploads/2020/06/IMG_20200627_092430-2048x1536.jpg',
                tech: ['June 28', 'Sumber Post'],
                link: 'https://sumberpost.com/2020/06/28/edsa-kolaborasi-dengan-kophi-aceh-dan-zero-waste-bersihkan-pantai-ulee-lheue/"'
            },
            {
                title: 'Prodi PBI UIN Ar Raniry dan EDSA Kembali Salurkan Sembako Untuk Masyarakat Terdampak Covid-19',
                image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhxe1hyphenhyphenqMQ4C6XErEkStFPtXYJMm08Rb92EO0gIFFfIVt3hKsVyIKPaZkJ1aMVGxwYzZaohi_FvzLR3QMWowMDP-a4B4XRrgzlJhBLwPJYdPXik5ArQpC3k_0OgrT646nOpUQgfotZ4AqYF/s1600/IMG-20200516-WA0018.jpg',
                tech: ['May 16', 'Wasatha'],
                link: 'https://www.wasatha.com/2020/05/prodi-pbi-uin-ar-raniry-dan-edsa.html'
            },
        ],
        "2021": [
            {
                title: 'PBI dan EDSA Lantik Kepengurusan Baru Periode 2021/2022',
                image: 'https://sumberpost.com/wp-content/uploads/2021/06/IMG-20210607-WA0010.jpg',
                tech: ['June 7', 'Sumber Post'],
                link: 'https://sumberpost.com/2021/06/07/pbi-dan-edsa-lantik-kepengurusan-baru-periode-2021-2022/'
            },
            {
                title: 'EDSA League Kembali Digelar Bulan Ini',
                image: 'https://sumberpost.com/wp-content/uploads/2021/02/DSCF5495.jpg',
                tech: ['February 8', 'Sumber Post'],
                link: 'https://sumberpost.com/2021/11/08/edsa-league-kembali-digelar-bulan-ini/'
            },
            {
                title: 'Prodi PBI Bersama EDSA Inisiasi Agenda Training Tajhiz Mayit',   
                image: 'https://dialeksis.com/images/web/2021/01/e4464615-4c63-4edd-bced-8a1e9797faa7.jfif',
                tech: ['January 14', 'Dialeksis'],
                link: 'https://sumberpost.com/2021/01/14/prodi-pbi-bersama-edsa-inisiasi-agenda-training-tajhiz-mayit/'
            },
            {
                title: 'EDSA Goes to Mahad, Program Baru PBI UIN Ar-Raniry dan EDSA',
                image: 'https://sumberpost.com/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-23-at-21.04.49.jpeg',
                tech: ['January 23', 'Sumber Post'],
                link: 'https://sumberpost.com/2021/01/23/edsa-goes-to-mahad-program-baru-pbi-uin-ar-raniry-dan-edsa/'
            },
            {
                title: 'Program Studi Bahasa Inggris UIN Ar-Raniry Gelar BSC 2021 untuk Mahasiswa Baru',
                image: 'https://i0.wp.com/masakini.co/wp-content/uploads/2022/02/IMG-20220212-WA0020.jpg?resize=750%2C536&ssl=1',
                tech: ['February 12', 'Masa Kini'],
                link: 'https://masakini.co/2022/02/12/program-studi-bahasa-inggris-uin-ar-raniry-gelar-bsc-2022-untuk-mahasiswa-baru/'
            },
            {
                title: 'Prodi Pendidikan Bahasa Inggris UIN Ar-Raniry Gelar BSC 2021',
                image: 'https://sumberpost.com/wp-content/uploads/2022/02/20220211144045_IMG_2162.jpg',
                tech: ['February 12', 'Sumber Post'],
                link: 'https://sumberpost.com/2022/02/11/prodi-pendidikan-bahasa-inggris-uin-ar-raniry-gelar-bsc-2022/'
            }
        ],
        "2022": [
            {
                title: 'Prodi Bahasa Inggris Bersama EDSA Adakan EGS 2022',
                image: 'https://sumberpost.com/wp-content/uploads/2022/03/IMG-20220311-WA0006.jpg',
                tech: ['March 11', 'Sumber Post'],
                link: 'https://sumberpost.com/2022/03/11/prodi-bahasa-inggris-bersama-edsa-adakan-egs/'
            },
            {
                title: 'EDSA Kembali Gelar EDSA League 2022',
                image: 'https://sumberpost.com/wp-content/uploads/2022/03/IMG-20220327-WA0076.jpg',
                tech: ['March 27', 'Sumber Post'],
                link: 'https://sumberpost.com/2022/03/27/edsa-kembali-gelar-edsa-league-2022/'
            },
            {
                title: 'Pergantian dan Pelantikan Pengurus Baru EDSA Periode 2022-2023',
                image: 'https://sumberpost.com/wp-content/uploads/2022/07/IMG-20220721-WA0035.jpg',
                tech: ['July 21', 'Sumber Post'],
                link: 'https://sumberpost.com/2022/07/21/pergantian-dan-pelantikan-pengurus-baru-edsa-periode-2022-2023/'
            },
            {
                title: 'Fathun Mubin Agusni, Presiden EDSA Periode 2022-2023',
                image: 'https://sumberpost.com/wp-content/uploads/2022/03/IMG-20220311-WA0006.jpg',
                tech: ['June 06', 'Sumber Post'],
                link: 'https://sumberpost.com/2022/06/06/fathun-mubin-agusni-presiden-edsa-periode-2022-2023/' 
            }
        ],
        "2023": [
            {
                title: 'PBI Dan EDSA Gelar Alumnitalk, Bahas Peluang Bekerja dan Belajar di Qatar',
                image: 'https://dialeksis.com/images/web/2023/06/PBI-EDSA-Alumnitalk.jpg',
                tech: ['June 14', 'Dialeksis'],
                link: 'https://dialeksis.com/2023/06/pbi-edsa-gelar-alumnitalk-bahas-peluang-bekerja-dan-belajar-di-qatar/'
            },
            {
                title: 'Akan Sambut Fair ke-4, EDSA Gelar Konferensi Pendidikan Internasional',
                image: 'https://sumberpost.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-12-at-22.16.41-1536x1024.jpeg',
                tech: ['October 12', 'Sumber Post'],
                link: 'https://sumberpost.com/2023/10/12/akan-sambut-fair-ke-4-edsa-gelar-konferensi-pendidikan-internasional/'
            },
            {
                title: 'PBI Gelar Alumnitalk',
                image: 'https://sumberpost.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-14-at-18.22.44.jpeg',
                tech: ['June 14', 'Sumber Post'],
                link: 'https://sumberpost.com/2023/06/14/pbi-gelar-alumnitalk/'
            },
            {
                title: 'Prodi PBI Kembali Adakan BSC Tahun 2023',
                image: 'https://sumberpost.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-24-at-20.38.16-1536x1152.jpeg',
                tech: ['September 24', 'Sumber Post'],
                link: 'https://sumberpost.com/2023/09/prodi-pbi-kembali-adakan-bsc-tahun-2023/'
            },
            {
                title: 'Persiapkan Mahasiswa Ke Luar Negeri, PBI dan EDSA Gelar Seminar International',
                image: 'https://sumberpost.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-27-at-12.40.01-1536x864.jpeg',
                tech: ['March 27', 'Sumber Post'],
                link: 'https://sumberpost.com/2023/03/persiapkan-mahasiswa-ke-luar-negeri-pbi-dan-edsa-gelar-seminar-international-studi-generale/'
            },
            {
                title: 'Sempat Vakum 4 Tahun, EDSA Kembali Gelar Fair Ke-4',
                image: 'https://sumberpost.com/wp-content/uploads/2023/11/IMG_8769-1536x1024.jpg',
                tech: ['November 02', 'Sumber Post'],
                link: 'https://sumberpost.com/2023/11/02/vakum-4-tahun-edsa-kembali-gelar-fair-ke-4/'
            },
            {
                title: 'Humam Asrawi, Presiden EDSA Periode 2023-2024',
                image: 'https://sumberpost.com/wp-content/uploads/2023/02/IMG_1750-1536x1023.jpg',
                tech: ['February 09', 'Sumber Post'],
                link: 'https://sumberpost.com/2023/02/humam-asrawi-presiden-edsa-periode-2023-2024/'
            },
            {
                title: 'Hindari Culture Shock, EDSA Adakan “Around The World Podcast”',
                image: 'https://sumberpost.com/wp-content/uploads/2023/05/IMG_8445-1536x864.jpg',
                tech: ['May 19', 'Sumber Post'],
                link: 'https://sumberpost.com/2023/05/hindari-culture-shock-edsa-adakan-around-the-world-podcast/'
            },
            {
                title: 'M. Qaid Al-Aufa Terpilih sebagai Presiden EDSA 2024/2025',
                image: 'https://sumberpost.com/wp-content/uploads/2023/12/IMG_4115-1536x1152.jpg',
                tech: ['Desember 12', 'Sumber Post'],
                link: 'https://sumberpost.com/2023/12/m-qaid-al-aufa-terpilih-sebagai-presiden-edsa-2024-2025/'
            },
            {
                title: 'Meriahkan Fair ke-4, EDSA Adakan Seminar Beasiswa Studi Mancanegara',
                image: 'https://sumberpost.com/wp-content/uploads/2023/10/IMG-20231016-WA0002.jpg',
                tech: ['October 16', 'Sumber Post'],
                link: 'https://sumberpost.com/2023/10/meriahkan-fair-ke-4-edsa-adakan-seminar-beasiswa-studi-mancanegara/'
            },
            {
                title: 'EDSA FTK UIN Ar-Raniry Adakan Mega Iftar dan Santuni Anak Yatim',
                image: 'https://kabardaily.com/wp-content/uploads/2023/04/FB_IMG_1680450070013-768x512.jpg',
                tech: ['April 02', 'Kabar Daily'],
                link: 'https://kabardaily.com/2023/06/edsa-ftk-uin-ar-raniry-adakan-mega-iftar-dan-santuni-anak-yatim/'
            },
        ],
    };

    const currentYear = carouselElement.getAttribute('data-year');
    const currentData = edsaEventsData[currentYear] || [];
    
    if (currentData.length === 0) {
        carouselElement.innerHTML = `<p style="color: white; text-align: center; width: 100%;">Data event tahun ${currentYear} belum ditambahkan.</p>`;
        return;
    }

    let currentIndex = 0;

    function createCarouselItem(data, _index) {
        const item = document.createElement('div');
        item.className = 'edsa-3d-item';
        
        const techBadges = data.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('');
        
        item.innerHTML = `
            <div class="card d-flex flex-column h-100" style="padding: 25px;">
                <div class="card-content flex-grow-1">
                    <div class="card-image">
                        <img src="${data.image}" alt="Event Image">
                    </div>
                    <h3 class="card-title">${data.title}</h3>
                    <div class="card-tech">${techBadges}</div>
                </div>
                <div class="mt-auto pt-auto">
                    <a href="${data.link}" target="_blank" class="card-cta" style="position: relative !important; bottom: auto !important; width: 100% !important;">Learn More</a>
                </div>
            </div>
        `;
        return item;
    }

    function initCarousel() {
        currentData.forEach((data, index) => {
            carouselElement.appendChild(createCarouselItem(data, index));
        });
        
        setTimeout(updateCarousel, 100);
    }

    function updateCarousel() {
        const items = document.querySelectorAll('.edsa-3d-item');
        const totalItems = items.length;
        const isMobile = window.innerWidth <= 768;
        
        items.forEach((item, index) => {
            let offset = index - currentIndex;
            
            if (offset > totalItems / 2) offset -= totalItems;
            else if (offset < -totalItems / 2) offset += totalItems;
            
            const absOffset = Math.abs(offset);
            const sign = offset < 0 ? -1 : 1;
            
            let spacing1 = isMobile ? 220 : 350;
            let spacing2 = isMobile ? 320 : 500;
            
            if (absOffset === 0) {
                item.style.transform = 'translate(-50%, -50%) translateZ(0) scale(1)';
                item.style.opacity = '1';
                item.style.zIndex = '10';
            } else if (absOffset === 1) {
                const translateX = sign * spacing1;
                const rotation = isMobile ? 15 : 25;
                item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-200px) rotateY(${-sign * rotation}deg) scale(0.85)`;
                item.style.opacity = '0.8';
                item.style.zIndex = '5';
            } else if (absOffset === 2) {
                const translateX = sign * spacing2;
                const rotation = isMobile ? 25 : 35;
                item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-400px) rotateY(${-sign * rotation}deg) scale(0.65)`;
                item.style.opacity = '0.5';
                item.style.zIndex = '3';
            } else {
                item.style.transform = 'translate(-50%, -50%) translateZ(-600px) scale(0.4)';
                item.style.opacity = '0';
                item.style.zIndex = '1';
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % currentData.length;
            updateCarousel();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + currentData.length) % currentData.length;
            updateCarousel();
        });
    }

    window.addEventListener('resize', () => {
        updateCarousel();
    });

    initCarousel();

    function initParticles() {
        const particlesContainer = document.getElementById('edsaParticles');
        if (!particlesContainer) return;
        
        const particleCount = 25;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (15 + Math.random() * 10) + 's';
            
            particlesContainer.appendChild(particle);
        }
    }

    initParticles();
});