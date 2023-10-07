const Color = document.querySelector('#color')
const Reset = document.querySelector('.reset')

const fun = () => {
    let RandomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + RandomColor;
    Color.innerHTML = "#" + RandomColor;
    Color.style.display = 'block';
}

const fun1 = () => {
    document.body.style.backgroundColor = 'white'
    Color.style.display = 'none';
}
