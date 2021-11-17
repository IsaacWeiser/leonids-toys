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

            for (let toy of toys)
            {console.log(`the ${toy.name} costs ${toy.price}`)}


            // const and let tests
           // const num =3;
            //num++

            const arr = [1,2,3]
            arr.push(4)
            console.log(arr)
           // arr = [1,2,3,4]

            //push 2 new objects into toys array

            const cabagePatchKid ={
                id:4,
                name: "Cabage Patch Doll",
                maker: "Toy Co.",
                price: 12,
                inStock: true,
                color: "ginger"
            }

            const wackyPackages = {
                id: 5,
                name: "Wacky Packages Cards",
                maker: "BAMFS",
                price: 4.2,
                inStock: false,
                color: "White"
            }

            toys.push(cabagePatchKid)
            toys.push(wackyPackages)

            console.log("toys array after a double push: " + JSON.stringify(toys))

            //more for of practice

            for (const item of toys) {
                console.log("toy names after the 2x push: " + item.name)
            }

            //print out a basic catalog of toys from the array

            for (const toyItem of toys) {
                console.log(`The ${toyItem.color} ${toyItem.name} costs $${toyItem.price}`)
            }