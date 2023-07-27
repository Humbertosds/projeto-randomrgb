const dq = (ele)=>document.querySelector(ele)
const dqa = (ele)=>document.querySelectorAll(ele)

pizzaJson.map((pizza, index) => {
    let pizzaItem = dq('.models .pizza-item').cloneNode(true)

    dq('.pizza-area').append( pizzaItem )
})

