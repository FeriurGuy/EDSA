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
            
        ]
    };

    const currentYear = carouselElement.getAttribute('data-year');
    const currentData = edsaEventsData[currentYear] || [];
    
    if (currentData.length === 0) {
        carouselElement.innerHTML = `<p style="color: white; text-align: center; width: 100%;">Data event tahun ${currentYear} belum ditambahkan.</p>`;
        return;
    }

    let currentIndex = 0;

    function createCarouselItem(data, index) {
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
                <div class="mt-auto pt-3">
                    <a href="${data.link}" target="_blank" class="card-cta" style="position: relative !important; bottom: auto !important; width: 100% !important;">Baca Selengkapnya</a>
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