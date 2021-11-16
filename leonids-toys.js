//objects
const hotWheels = {
    id: 1,
    name: "Hot Wheels",
    maker: "Mattel",
    price: 4,
    inStock: true,
    color: "red"
}

const techDeck = {
    id: 2,
    name: "Tech Deck",
    maker: "Hasbro",
    price: 2.50,
    inStock: false,
    color: "blue"
}

const legoAnimeWeebSet = {
    id: 3,
    name: "Lego Set",
    maker: "Lego",
    price: 69,
    inStock: false,
    color: "pink"
}

//array of objects
const toys = [{ id: 1,
    name: "Hot Wheels",
    maker: "Mattel",
    price: 4,
    inStock: true,
    color: "red"}, {id: 2,
        name: "Tech Deck",
        maker: "Hasbro",
        price: 2.50,
        inStock: false,
        color: "blue"}, {id: 3,
            name: "Lego Set",
            maker: "Lego",
            price: 69,
            inStock: false,
            color: "pink"}]
//log out object and array of objects
            console.log(`Hot Wheels: ${JSON.stringify(hotWheels)}`)

            console.log(`tech deck: ${techDeck.maker}`)
            
            console.log(`lego set: ${legoAnimeWeebSet.maker}`)

            console.log(`array of objects: ${toys[0].maker}`)


            //for of loop print out one property of all the objects
            for (const prop of toys)
            {
                console.log("for of loop printing out one property from every object in the array: " + prop.name)
            }