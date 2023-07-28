const dq = (ele)=>document.querySelector(ele)
const dqa = (ele)=>document.querySelectorAll(ele)

pizzaJson.map((pizza, index) => {
    let pizzaItem = dq('.models .pizza-item').cloneNode(true);

    pizzaItem.querySelector('.pizza-item--img img').src = pizza.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${pizza.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = pizza.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = pizza.description;

    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();

        dq('.pizzaWindowArea').style.opacity = 0
        dq('.pizzaWindowArea').style.display = 'flex';
        setTimeout(() => {
            dq('.pizzaWindowArea').style.opacity = 1
        }, 200)

        dq('.pizzaWindowArea .pizzaBig img').src = pizza.img;
        dq('.pizzaWindowArea .pizzaInfo h1').innerHTML = pizza.name;
        dq('.pizzaWindowArea .pizzaInfo--desc').innerHTML = pizza.description;
    })

    dq('.pizza-area').append( pizzaItem )
})

