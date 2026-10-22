function deviceVerification() {
    const width = content.getBoundingClientRect().width;
    if (width <= 1231) {
        textChange("mobile or tablet");
    } else {
        textChange("desktop");
    }
}

function checkScrollY(n) {
    const scrollList = document.querySelectorAll('.list');
    if (scrollList.length === 0) {
        console.warn("No element found with class '.list'.");
        return;
    }

    let activeIndex = -1;

    for (let i = 0; i < n.length; i++) {
        if (window.scrollY <= n[i]) {
            activeIndex = i;
            break;
        }
    }
    if (activeIndex !== -1) {
        scrollList.forEach((item, index) => {
            console.log("O activeIndex é: " + activeIndex)
            item.classList.toggle('active', index === activeIndex);
        });
    }
}

setInterval(deviceVerification,100);
    const teste = setInterval(() => {
        console.log(window.scrollY)
    }, 50);
    
    window.addEventListener("scroll", function () {
        clearTimeout(window.scrollTimeout); // Cancela qualquer timeout anterior
        window.scrollTimeout = setTimeout(() => {
            verificarScroll();
        }, 100); // Pequeno delay para evitar execuções excessivas
    });
    
    function verificarScroll() {
        const scroll = document.querySelector("#scroll");
        const scrollAnimA = document.querySelector(".tagA");
        const scrollAnimH4 = document.querySelector("#scroll h4");
        const scrollAnimH5 = document.querySelector("#scroll h5");
        const scrollAnimI = document.querySelector("#scroll span");
        const targetDiv = document.querySelector("#contactFull");
    
        if (!scroll || !scrollAnimA || !scrollAnimH4 || !scrollAnimH5 || !scrollAnimI || !targetDiv) {
            console.warn("Algum elemento não foi encontrado.");
            return;
        }
    
        const rect = targetDiv.getBoundingClientRect();
        const windowHeight = window.innerHeight;
    
        if (rect.bottom <= windowHeight) {
            scroll.classList.remove("scrollAnim2");
            scroll.classList.add("scrollAnim");
            scrollAnimA.setAttribute("href", "#homeFull");
            console.log("True");
    
            setTimeout(() => {
                scrollAnimH4.innerHTML = "That's all";
                scrollAnimH5.innerHTML = `<i class="bi bi-mouse"></i>`;
                scrollAnimI.innerHTML = "- scroll up -";
                console.log("Animação ativada");
            }, 500);
        } else {
            scroll.classList.remove("scrollAnim");
            scroll.classList.add("scrollAnim2");
            scrollAnimA.setAttribute("href", "#contactFull");
    
            setTimeout(() => {
                scrollAnimH4.innerHTML = "|";
                scrollAnimH5.innerHTML = "scroll down";
                scrollAnimI.innerHTML = `<i class="bi bi-mouse"></i>`;
                console.log("Reverso da animação ativado");
            }, 500);
        }
    }

function textChange(deviceV) {
    const projectsFull = document.querySelector("#projectsFull");
    let device = [];

    if (deviceV == "desktop") {
        //projectsFull.innerHTML = ul1;
        device = [443, 940, 1325, 3386, 4129];
        checkScrollY(device);
    }
    // else if (deviceV == "mobile or tablet") {
    //     projectsFull.innerHTML = ul2;
    // }
}