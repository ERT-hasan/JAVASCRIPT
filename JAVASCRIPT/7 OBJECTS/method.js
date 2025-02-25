console.log('learning objects');

let product = {
    avgRating:4.5,
    company:'myntra',
    item_name: 'cotton',
    price:700,
    numberOfRatings:38,
rating:{
    fiveStar:10,
    fourStar:1,
    threeStar:12,
    twotar:13,
    oneStar:14,
    showRating:function(){
       let totalRating = this.fiveStar +this.fourStar + this.threeStar +this.twotar + this.oneStar;

       let averageRating = (5 * this.fiveStar +4 * this.fourStar +3 * this.threeStar + 2 * this.twotar + 1 * this. oneStar)/totalRating; 
       console.log('total rating:',totalRating);
       console.log('averagerating:',averageRating);
    }
 }

};
function showRating(rating){
    let totalRating = rating.fiveStar + rating.fourStar + rating.threeStar + rating.twoStar + rating.oneStar;

    let averageRating = (5 * rating.fiveStar +4* rating.fourStar +3 * rating.threeStar + 2* rating.twoStar + 1* rating.oneStar)/totalRating;


    console.log('totalRating:', totalRating);
    console.log('average Rating:',averageRating);
}
showRating(product.rating);
product.rating.showRating();