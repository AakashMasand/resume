window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = "https://getresumecounterakash.azurewebsites.net/api/GetReumeCounter?code=lFxIUJ4tnOp9xpPFBlpPHfgKgoIVI7dxngo-LZ9UCWO-AzFu3kMKlQ==";
const functionApi = '';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}