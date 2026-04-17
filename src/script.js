 //<!-- JS Simples para Botão Voltar ao Topo (inline, sem arquivos extras) -->
document.addEventListener("DOMContentLoaded", () => {

        const backToTopBtn = document.getElementById('back-to-top');
        
        
        // Mostra/esconde botão após scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.visibility = 'visible';
            } else {
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.visibility = 'hidden';
            }
        });
        
        // Scroll suave ao clicar
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

    
    const navLinksItems = document.querySelectorAll("#nav-links a");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    if(hamburger && navLinks){
        hamburger.addEventListener("click", () => {
            console.log("Clicou no hamburger");
            navLinks.classList.toggle("active");
        });
    }


    navLinksItems.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });


});   


document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


