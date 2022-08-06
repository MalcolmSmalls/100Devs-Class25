//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMaker{
        constructor ( brand, color, reviews, weight){
            this.brandName = brand
            this.color = color
            this.reviews = reviews
            this.weightInLBS = weight
            let fiveStars = this.reviews * .68
            let fourStars = this.reviews * .09
            let threeStars = this.reviews * .04
            let twoStars = this.reviews * .04
            let oneStar = this.reviews * .16
            this.results = (1*oneStar+2*twoStars+3*threeStars+4*fourStars+5*fiveStars) / this.reviews
        }
        avgReviews(){

            console.log(`The espresso machine by ${this.brandName} has a total of ${this.reviews} reviews with an avg rating of ${this.results}. out of 5 stars.`)
        }
        summary(){
            console.log(`The espresso machine by ${this.brandName} comes in a beautiful ${this.color}. The average rating is ${this.results} out of 5 stars. Sturdy, the weight comes in at ${this.weightInLBS} lbs.`)
        }
        weightToKilos(){
            let kiloConversion = (this.weightInLBS * 0.453592).toFixed(2)
            console.log(`This espresso machine by ${this.brandName} weighs in at ${this.weightInLBS} lbs or ${kiloConversion} in kg.`)
        }
}

let LaSpecialista = new EspressoMaker(`De'Longhi`,'stainless steel', 1543, 29.7)

LaSpecialista.avgReviews()
LaSpecialista.summary()
LaSpecialista.weightToKilos()