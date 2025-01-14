const myObserver = new IntersectionObserver((e) => {
    e.forEach((element) => {
        if(element.isIntersecting){
            element.target.classList.add('show');
            element.target.classList.add('show2');
            element.target.classList.add('show3');
        }
        else {
            element.target.classList.remove('show');
            element.target.classList.remove('show2');
            element.target.classList.remove('show3');
        }
    })
});

const hidden1 = document.querySelectorAll('.hidden1');
const hidden2 = document.querySelectorAll('.hidden2');
const hidden3 = document.querySelectorAll('.hidden3');

hidden1.forEach((hidden1)=> myObserver.observe(hidden1));
hidden2.forEach((hidden2)=> myObserver.observe(hidden2));
hidden3.forEach((hidden3)=> myObserver.observe(hidden3));