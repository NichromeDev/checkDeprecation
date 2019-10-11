let but = document.getElementById('but');
let but1 = document.getElementById('but1');
let body = document.querySelector('body');
let meter = 0;
but.onclick = e => {
    e.preventDefault;
    let script = document.createElement('script');
    script.classList.add('script');
    let color;
    if (meter % 2 === 0) color = '"red"';
    else color = '"green"';
    script.innerHTML = 'body.style.background = ' + color;
    body.appendChild(script);
}
but1.onclick = e => {
    e.preventDefault;
    let script = document.querySelector('.script');
    script.remove();
    meter++;
    console.log(meter);
}
