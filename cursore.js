document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');

   
    if (window.innerWidth >= 760) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate(${e.clientX - cursor.clientWidth / 2}px, ${e.clientY - cursor.clientHeight / 2}px)`;
        });

        document.addEventListener('scroll', () => {
            const e = window.event;
            cursor.style.transform = `translate(${e.clientX - cursor.clientWidth / 2}px, ${e.clientY + window.scrollY - cursor.clientHeight / 2}px)`;
        });
    }
});
