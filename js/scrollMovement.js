function textChange(deviceV) {
    const projectsFull = document.querySelector("#projectsFull");
    let device;
    const ul1 = `
        <h2>Projects</h2>
        <ul>
            <li class="projectList" style="--number: '1'">
                <div class="left hidden1">
                    <h2>Music Player</h2>
                    <p>I created this project with the aim of learning new things<br>
                        and also for personal use, where initially I would include<br>
                        songs that I like to listen to, but I changed some songs to<br>
                        others that would not require copyright.<br><br>

                        <span>Programming languages and frameworks used:</span>
                    </p>
                    <div class="programming_languages_used">
                        <img src="./img/html.png" alt="HTML">
                        <img src="./img/css.png" alt="CSS">
                        <img src="./img/javaScript.png" alt="JavaScript">
                        <img src="./img/bootstrap.png" alt="Bootstrap">
                    </div>
                </div>
                <div class="right hidden3">
                    <div class="video">
                        <video src="./video/musicPlayer.mp4" autoplay loop muted></video>
                    </div>
                </div>
            </li>
            <li class="projectList" style="--number: '2'">
                <div class="left hidden3">
                    <div class="video">
                        <video src="./video/portfolio.mp4" autoplay loop muted></video>
                    </div>
                </div>
                <div class="right hidden2">
                    <h2>Portfolio</h2>
                    <p>
                        The "Portifólio" project was created to test my skills<br>
                        with the Angular framework along with other programming<br>
                        languages.<br><br>

                        <span>Programming languages and frameworks used:</span>
                    </p>

                    <div class="programming_languages_used">
                        <img src="./img/html.png" alt="HTML">
                        <img src="./img/css.png" alt="CSS">
                        <img src="./img/javaScript.png" alt="JavaScript">
                        <img src="./img/angular.png" alt="Angular">
                    </div>
                </div>
            </li>
            <li class="projectList" style="--number: '3'">
                <div class="left hidden1">
                    <h2>Coffee Cup</h2>
                    <p>In this project I created a coffee cup made entirely in the<br>
                        CSS style sheet language, from the cup itself to the smoke.<br><br>

                        <span>Programming languages and frameworks used:</span>
                    </p>

                    <div class="programming_languages_used">
                        <img src="./img/html.png" alt="HTML">
                        <img src="./img/css.png" alt="CSS">
                        <img src="./img/javaScript.png" alt="JavaScript">
                        <img src="./img/bootstrap.png" alt="Bootstrap">
                    </div>
                </div>
                <div class="right hidden3">
                    <div class="video">
                        <video src="./video/coffeeCup.mp4" autoplay loop muted></video>
                    </div>
                </div>
            </li>
            <li class="projectList" style="--number: '4'">
                <div class="left hidden3">
                    <div class="video">
                        <video src="./video/turPyunRI.mp4" autoplay loop muted></video>
                    </div>
                </div>
                <div class="right hidden2">
                    <h2>Video Background</h2>
                    <p>This project consisted of creating a website for a fictional<br>
                        gaming company, marking the first time I used a video as<br>
                        a background.<br><br>

                        <span>Programming languages and frameworks used:</span>
                    </p>

                    <div class="programming_languages_used">
                        <img src="./img/html.png" alt="HTML">
                        <img src="./img/css.png" alt="CSS">
                        <img src="./img/javaScript.png" alt="JavaScript">
                        <img src="./img/bootstrap.png" alt="Bootstrap">
                    </div>
                </div>
            </li>
            <li class="btn_more_projects">
                <a href="https://github.com/Shoffya?tab=repositories" target="_blank">More Projects</a>
            </li>
        </ul>
        `;

    const ul2 = `
        <h2>Projects</h2>
        <ul>
            <li class="projectList" style="--number: '1'">
                <div class="left hidden1">
                    <h2>Music Player</h2>
                    <p>I created this project with the aim of learning new things<br>
                        and also for personal use, where initially I would include<br>
                        songs that I like to listen to, but I changed some songs to<br>
                        others that would not require copyright.<br><br>

                        <span>Programming languages and frameworks used:</span>
                    </p>
                    <div class="programming_languages_used">
                        <img src="./img/html.png" alt="HTML">
                        <img src="./img/css.png" alt="CSS">
                        <img src="./img/javaScript.png" alt="JavaScript">
                        <img src="./img/bootstrap.png" alt="Bootstrap">
                    </div>
                </div>
                <div class="right hidden3">
                    <div class="video">
                        <video src="./video/musicPlayer.mp4" autoplay loop muted></video>
                    </div>
                </div>
            </li>
            <li class="projectList" style="--number: '2'">
                <div class="left hidden3">
                    <h2>Portfolio</h2>
                    <p>
                        The "Portifólio" project was created to test my skills<br>
                        with the Angular framework along with other programming<br>
                        languages.<br><br>

                        <span>Programming languages and frameworks used:</span>
                    </p>

                    <div class="programming_languages_used">
                        <img src="./img/html.png" alt="HTML">
                        <img src="./img/css.png" alt="CSS">
                        <img src="./img/javaScript.png" alt="JavaScript">
                        <img src="./img/angular.png" alt="Angular">
                    </div>
                </div>
                <div class="right hidden2">
                    <div class="video">
                        <video src="./video/portfolio.mp4" autoplay loop muted></video>
                    </div>
                </div>
            </li>
            <li class="projectList" style="--number: '3'">
                <div class="left hidden1">
                    <h2>Coffee Cup</h2>
                    <p>In this project I created a coffee cup made entirely in the<br>
                        CSS style sheet language, from the cup itself to the smoke.<br><br>

                        <span>Programming languages and frameworks used:</span>
                    </p>

                    <div class="programming_languages_used">
                        <img src="./img/html.png" alt="HTML">
                        <img src="./img/css.png" alt="CSS">
                        <img src="./img/javaScript.png" alt="JavaScript">
                        <img src="./img/bootstrap.png" alt="Bootstrap">
                    </div>
                </div>
                <div class="right hidden3">
                    <div class="video">
                        <video src="./video/coffeeCup.mp4" autoplay loop muted></video>
                    </div>
                </div>
            </li>
            <li class="projectList" style="--number: '4'">
                <div class="left hidden3">
                    <h2>Video Background</h2>
                    <p>This project consisted of creating a website for a fictional<br>
                        gaming company, marking the first time I used a video as<br>
                        a background.<br><br>

                        <span>Programming languages and frameworks used:</span>
                    </p>

                    <div class="programming_languages_used">
                        <img src="./img/html.png" alt="HTML">
                        <img src="./img/css.png" alt="CSS">
                        <img src="./img/javaScript.png" alt="JavaScript">
                        <img src="./img/bootstrap.png" alt="Bootstrap">
                    </div>
                </div>
                <div class="right hidden2">
                    <div class="video">
                        <video src="./video/turPyunRI.mp4" autoplay loop muted></video>
                    </div>
                </div>
            </li>
            <li class="btn_more_projects">
                <a href="https://github.com/Shoffya?tab=repositories" target="_blank">More Projects</a>
            </li>
        </ul>
        `;

    if (deviceV == "desktop") {
        projectsFull.innerHTML = ul1;
        device = [269, 940, 2986, 3520, 3595];
        checkScrollY(device);
    }
    else if (deviceV == "mobile or tablet") {
        projectsFull.innerHTML = ul2;

        const projectLists = document.querySelectorAll('#content #projectsFull ul .projectList');

// Modifica a altura e o layout de todos os elementos .projectList
projectLists.forEach(projectList => {
    projectList.style.height = '700px';
    projectList.style.flexDirection = 'column';  // Alterando para coluna, por exemplo
});

// Seleciona todos os elementos .left e .right
const leftItems = document.querySelectorAll('#content #projectsFull ul .projectList .left');
const rightItems = document.querySelectorAll('#content #projectsFull ul .projectList .right');

// Modifica a largura de todos os elementos .left e .right
leftItems.forEach(item => item.style.width = '100%');
rightItems.forEach(item => item.style.width = '100%');
    }
}

function webSiteScroll(trueOrFalse) {
    const scroll = document.querySelector("#scroll");
    const scrollAnimA = scroll.querySelector("#scroll a");
    const scrollAnimH4 = scroll.querySelector("#scroll.scrollAnim a h4");
    const scrollAnimH5 = scroll.querySelector("#scroll.scrollAnim a h5");
    const scrollAnimI = scroll.querySelector("#scroll.scrollAnim a span");


    if (trueOrFalse == true) {
        scroll.classList.remove("scrollAnim2");
        scroll.classList.add("scrollAnim");

        scrollAnimA.setAttribute('href', '#homeFull');

        setTimeout(() => {
            scroll.style.width = "150px";
            scroll.style.height = "120px";
            scroll.style.bottom = "10px";
            scroll.style.right = "calc(50% - 70px)";
            scrollAnimH5.style.writingMode = "horizontal-tb";
            scrollAnimH5.style.transform = "rotate(0deg)";

            scrollAnimH4.innerHTML = "That's all";
            scrollAnimH5.innerHTML = `<i class="bi bi-mouse"></i>`;
            scrollAnimI.innerHTML = "- scroll up -"

        }, 500);
    }
    else if (trueOrFalse == false) {
        scroll.classList.remove("scrollAnim");
        scroll.classList.add("scrollAnim2");

        scrollAnimA.setAttribute('href', '#contactFull');

        setTimeout(() => {
            scroll.style.width = "50px";
            scroll.style.height = "200px";
            scroll.style.bottom = "150px";
            scroll.style.right = "15px";
            scrollAnimH5.style.writingMode = "vertical-lr";
            scrollAnimH5.style.transform = "rotate(360deg)";

            scrollAnimH4.innerHTML = "|";
            scrollAnimH5.innerHTML = `scroll down`;
            scrollAnimI.innerHTML = `<i class="bi bi-mouse"></i>`

        }, 500);
    }
}

function checkScrollY(n) {
    const scrollList = document.querySelectorAll('.list');

    if (scrollList.length === 0) {
        console.warn("No element found with class '.list'.");
        return;
    }

    let activeIndex = -1;

    if (window.scrollY <= n[0]) {
        activeIndex = 0;
    } else if (window.scrollY <= n[1]) {
        activeIndex = 1;
    } else if (window.scrollY <= n[2]) {
        activeIndex = 2;
    } else if (window.scrollY <= n[3]) {
        activeIndex = 3;
    } else if (window.scrollY <= n[4]) {
        activeIndex = 4;
        webSiteScroll(false);
    } else {
        webSiteScroll(true);
    }

    if (activeIndex !== -1) {
        scrollList.forEach((item, index) => {
            item.classList.toggle('active', index === activeIndex);
        });
    }
}

// const teste = setInterval(() => {
//     console.log(window.scrollY)
// }, 50);

function deviceVerification() {
    const userAgent = navigator.userAgent.toLowerCase();

    if (/mobile|tablet|ip(ad|hone|od)|android/i.test(userAgent)) {
        textChange("mobile or tablet");
    }
    else {
        textChange("desktop");
    }
}

deviceVerification();