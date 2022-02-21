var category = ["Movies", "News", "Educations", "Sports", "Politics"]
var age = ["Teenager", "Adult"]
var final_arr = []
var movies_teen = 0,
    movies_adult = 0,
    news_teen = 0,
    news_adult = 0,
    edu_teen = 0,
    edu_adult = 0,
    sport_teen = 0,
    sport_adult = 0,
    pol_teen = 0,
    pol_adult = 0;
for (i = 0; i < 100; i++) {
    category_random = category[Math.floor(Math.random() * category.length)]
    age_random = age[Math.floor(Math.random() * age.length)]
    visitor_random = Math.floor(Math.random() * 100)
        //console.log(visitor_random)
    val = { age: age_random, types: category_random, visitor: visitor_random }
        //console.log(val)
    final_arr.push(val)

    if (val.age == "Teenager" && val.types == "Movies") {
        movies_teen++
    } else if (val.age == "Adult" && val.types == "Movies") {
        movies_adult++
    } else if (val.age == "Teenager" && val.types == "News") {
        news_teen++
    } else if (val.age == "Adult" && val.types == "News") {
        news_adult++
    } else if (val.age == "Teenager" && val.types == "Educations") {
        edu_teen++
    } else if (val.age == "Adult" && val.types == "Educations") {
        edu_adult++
    } else if (val.age == "Adult" && val.types == "Sports") {
        sport_adult++
    } else if (val.age == "Teenager" && val.types == "Sports") {
        sport_teen++
    } else if (val.age == "Teenager" && val.types == "Politics") {
        pol_teen++
    } else if (val.age == "Adult" && val.types == "Politics") {
        pol_adult++
    }

}
console.log(movies_teen)
console.log(final_arr)
per = [{ movies: [movies_teen, movies_adult], news: [news_teen, news_adult], education: [edu_teen, edu_adult], sports: [sport_teen, sport_adult], politics: [pol_teen, pol_adult] }]
console.log(per)