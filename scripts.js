let pageno=1;
let orderedList = document.getElementById("orderdlist")
let number = document.getElementById("pageno")
function gitHubIssues(page){
//console.log(page);
orderedList.textContent=''
let url=`https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`
fetch(url).then((resp) =>resp.json()).then((data)=>data.forEach(element => {
    //console.log(element.title) 
    // let h1 = document.createElement('h1')
    // h1.textContent="dhananjai"
    // orderedList.appendChild(h1)
    number.textContent = `PAGE NUMBER ${pageno}`
    let list = document.createElement('li')
    list.textContent= element.title
    orderedList.appendChild(list)
})
)

}

gitHubIssues(pageno);

function prev(){
    if(pageno >1){
        pageno--;
        gitHubIssues(pageno)
    }
}

function next(){
        pageno++;
        gitHubIssues(pageno)
    
}