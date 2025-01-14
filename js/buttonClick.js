const list = document.querySelectorAll('.list');
const listAbout = document.querySelectorAll('.listAbout');
const imgAnim = document.querySelector('.img_and_texts .img');
const imgElement = document.querySelector('.img_and_texts .img img');
const textElement = document.querySelector('.img_and_texts .textAbout');
const textH2_Element = document.querySelector('.img_and_texts .textAbout h2');
const textP_Element = document.querySelector('.img_and_texts .textAbout p');
const copyEmail = document.querySelector("#contactFull .email");

list.forEach((item) => item.addEventListener('click', function () {
    activeLink(list, this);
}));

listAbout.forEach((item) => item.addEventListener('click', function () {
    activeLink(listAbout, this);

    animateImage();

    updateImage(this);
}));

copyEmail.addEventListener('click', function () {
    copyText();
});

function activeLink(listGroup, clickedItem) {

    listGroup.forEach((item) => item.classList.remove('active'));

    clickedItem.classList.add('active');
}

function animateImage() {
    imgAnim.classList.add('imgAnim');

    setTimeout(() => {
        imgAnim.classList.remove('imgAnim');
    }, 1000);
}

function updateImage(clickedItem) {

    const newImage = clickedItem.getAttribute('data-image');
    setTimeout(() => {
        if (newImage) {
            imgElement.src = newImage;
            imgElement.alt = clickedItem.textContent.trim();

            changeText(newImage)
        }
    }, 500);
}

function changeText(img) {
    textElement.classList.remove('show');
    textElement.classList.remove('show2');
    textElement.classList.remove('show3');

    setTimeout(() => {
        if (img == "./img/hobbies.png") {
            textH2_Element.innerHTML = "Hobbies";
            textP_Element.innerHTML = "In my free time I like to study and create new<br>projects, watch videos, series and films, listen<br>to music and sometimes draw.";
        }
        else if (img == "./img/career.png") {
            textH2_Element.innerHTML = "Career";
            textP_Element.innerHTML = "From January to May 2024 I worked as an intern in the<br>development of the LigLight company website, using my<br>knowledge in HTML, CSS and JavaScript to implement<br>new functionalities and maintain existing ones. The website<br>I developed directly contributed to increasing<br>the company's earnings. Additionally, I had the<br>opportunity to expand my knowledge about website<br>hosting platforms, such as TRAY.";
        }
        else if (img == "./img/qualification.png") {
            textH2_Element.innerHTML = "Qualification";
            textP_Element.innerHTML = "I'm enrolled in a Bachelor of Science in Computer Science<br>course from Faculdade Digital Descomplica, which is set<br>to conclud in 2026. I have certificates infull-stack<br>development, .Net, JavaScript and more.";
        }
        else {
            textH2_Element.innerHTML = "Future";
            textP_Element.innerHTML = "In the future, I see myself working in a reputable company<br>that values growth and provides opportunities for me to<br>contribute my skills while continuing to learn and develop<br>professionally. On a personal level, I aspire to establish a<br>non-profit organization dedicated to rescuing animals<br>in situations of neglect, abuse, or abandonment.";
        }
        textElement.classList.add('show');
        textElement.classList.add('show2');
        textElement.classList.add('show3');
    }, 1000)
}

function copyText() {
    const teste = "inguinha.fenandes@gmail.com";

    navigator.clipboard.writeText(teste).then(() => {
        copyEmail.innerHTML = `<i class="bi bi-envelope-check"></i>`;

        setTimeout(() => {
            copyEmail.innerHTML = `<i class="bi bi-envelope"></i>`;
        }, 3000);
    }).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
}