let pro =document.querySelector('.products')

let products = [
    {
        id: 0,
        names: 'auba',
        image : 'download.jpeg'
    },
    {
        id: 1,
        names: 'aub',
        image : 'g.jpeg'

    }
   

]


products.forEach((product)=>{
    pro.innerHTML += `

        <img src= ${product.image} alt="">
        <p class="p">${product.names}</p>
        

`
}


)










        