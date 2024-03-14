// a. Get all the countries from Asia continent or region using Filter function

let xhr =new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all",true);
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        console.log( typeof xhr.responseText)
        var data = JSON.parse(xhr.responseText);
        let countries = data.filter(checkRegion);
        let countryName = countries.map(getName)
        console.log(countryName)
    }
    function checkRegion(country){
        // console.log(country['region']=='Asia')
        return country['region']=='Asia'
    }
    function getName(country){
        return country['name']['official']
    }
}
xhr.send()