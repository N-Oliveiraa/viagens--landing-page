 //<!-- JS Simples para Botão Voltar ao Topo (inline, sem arquivos extras) -->

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
