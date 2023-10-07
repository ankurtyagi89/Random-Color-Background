const Color = document.querySelector('#color')
const Reset = document.querySelector('.reset')
// console.log(btn1)

const fun = () => {
    // let RandomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    Color.innerHTML = "#" + RandomColor;
    Color.style.display = 'block';
}

const fun1 = () => {
    document.body.style.backgroundColor = 'white'
    Color.style.display = 'none';
}
