//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMaker{
        constructor ( brand, color, reviews, weight){
            this.brandName = brand
            this.color = color
            this.reviews = reviews
            this.weight = weight
        }
        avgReviews(){
            let fiveStars = reviews * .68
            let fourStars = reviews * .09
            let threeStars = reviews * .04
            let twoStars = reviews * .04
            let oneStar = reviews * .16
            let results = (1*oneStar+2*twoStars+3*threeStars+4*fourStars+5*fiveStars) / reviews
            console.log(`The espresso machine by ${this.brandName} has a total of ${this.reviews} reviews with an avg rating of ${results}. `)
        }
        summary(){
            console.log(`The espresso machine by ${this.brandName} comes in a beautiful ${this.color}. The average rating is ${this.reviews}`)
        }
}