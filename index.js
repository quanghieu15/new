
var btn1 = document.getElementById("btn1")

var btn2 = document.getElementById("btn2")

btn1.addEventListener('click',function(){

    fetch('https://corona.lmao.ninja/v2/countries/vn') 
    .then(response => {
        return response.json();
    })

    .then((data) => {
        result.innerHTML = `
    <ul class="list-group list-group-flush text-center">
        <li class="list-group-item"><b>Country: ${data.country}</b></li>
        <li class="list-group-item">Cases: ${data.cases}</li>
        <li class="list-group-item">ToDayCases: ${data.todayCases}</li>
        <li class="list-group-item">Deaths: ${data.deaths}</li>    
     </ul>
         `
    })
})

btn2.addEventListener('click', function(){
    fetch('https://corona.lmao.ninja/v2/countries/')
    .then((response)=> {
        return response.json();
    })
    .then((data)=>{
        var result = document.getElementById('result');
        var template = `
        <h4 class="mt-4">Covid Cases</h4>`
        data.forEach((element)=>{
            template+=`
            <ul class="list-group list-group-flush text-center">
        <li class="list-group-item"><b>Country: ${element.country}</b></li>
        <li class="list-group-item">Cases: ${element.cases}</li>
        <li class="list-group-item">ToDayCases: ${element.todayCases}</li>
        <li class="list-group-item">Deaths: ${element.deaths}</li>    
     </ul>
            `
        })
        result.innerHTML = template;
    })
})