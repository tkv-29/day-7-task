// b. Get all the countries with a population of less than 2 lakhs using Filter function


let xhr = new XMLHttpRequest();
let URL = 'https://restcountries.com/v3.1/all';
xhr.open('GET',URL);
xhr.onreadystatechange=()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
        // console.log( typeof xhr.responseText)
        var data = JSON.parse(xhr.responseText);
        let countries = data.filter(checkPopulation);
        let countryName = countries.map(getName)
        console.log(countryName.join('\n'))
    }
    function checkPopulation(i) {
        // console.log(i['population'])
        return i['population']<200000 
    }  
    function getName (country){
        return country["name"]["official"]+'   ==>   '+country['population']}
}
xhr.send()