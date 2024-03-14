// d. Print the total population of countries using reduce function

let xhr = new XMLHttpRequest();
let URL = 'https://restcountries.com/v3.1/all';
xhr.open('GET',URL);
xhr.onreadystatechange=()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
        // console.log( typeof xhr.responseText)
        var data = JSON.parse(xhr.responseText);
        let countryPopulation = data.map(population);
        // let countryName = countries.map(getName)
        // console.log(countryPopulation)
        let initialValue = 0;
        const sumOfPopulation = countryPopulation.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue,
          )
          console.log(sumOfPopulation)
    }
    function population(i) {
        // console.log(i['population'])
        return i['population']
    }
}
xhr.send()