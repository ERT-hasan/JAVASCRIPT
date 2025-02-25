console.log('learning objects');

let product = {
    company:'myntra',
    item_name: 'cotton',
    price:700,
    numberOfRating:38,
Rating:{
    fiveStar:10,
    fourStar:1,
    threeStar:12,
    twotar:13,
    oneStar:14,
}

};
console.log('before trans',product);
console.log(product.Rating.fiveStar);

// modifying the object
product.discount = 50;
product.price =50;
console.log('after modifying',product);
