
// c. Print the following details name, capital, flag, using forEach function

let xhr =new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all",true);
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        console.log( typeof xhr.responseText)
        var data = JSON.parse(xhr.responseText);
   data.forEach(element => {
    console.log(`countryName  ==>  ${element['name']['official']},Capital  ==>  ${element['capital']},Flag  ==> ${element['flags']['png']}`)    
   });
}}
xhr.send()

