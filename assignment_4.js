ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
    ]

   /* [{ restaurant: 'KFC', averageRating: 4},
    { restaurant: 'Burger King', averageRating: 4},
    { restaurant: 'Domino', averageRating: 1.5},
    { restaurant: 'Subway', averageRating: 3.5},
    { restaurant: 'Pizza Hut', averageRating: 5}]*/

let sumData = {};

for (let element of ratingData) {
    if (sumData[element.restaurant]) {
        sumData[element.restaurant].sum = sumData[element.restaurant].sum + element.rating;
        sumData[element.restaurant].n++;
    } else {
        sumData[element.restaurant] = {
            sum: element.rating,
            n: 1
        };
    }
}

console.log('sumData: ' + JSON.stringify(sumData));

let averageData = [];

for (let element of Object.keys(sumData)) {
    averageData.push({
        restaurant: element,
        averageRating: sumData[element].sum / sumData[element].n
    });
}

console.log('averageData: ' + JSON.stringify(averageData));

console.log("The Restaurant names with average rating greater than or equal to 4 are displayed below :")

let filteredAverageRating = averageData.filter(x=>{
    return x.averageRating>=4
})

console.log(filteredAverageRating)