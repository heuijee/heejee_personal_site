// 페이지가 로드되면 실행
document.addEventListener('DOMContentLoaded', function() {
    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', function() {
        // 스크롤이 일정 거리 이상 내려가면 네비게이션에 클래스 추가
        var nav = document.querySelector('.main-nav');
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 네비게이션 부드러운 스크롤
    document.querySelectorAll('.main-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // 페이지 로드 시 소셜 아이콘 애니메이션
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
        setTimeout(() => {
            icon.classList.add('visible');
        }, 200 * index);
    });

    // 섹션 요소들이 뷰포트에 들어올 때 페이드인 효과 적용
    const fadeElements = document.querySelectorAll('.section-title, .publications-list li, .news-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => {
        observer.observe(el);
    });
}); 
