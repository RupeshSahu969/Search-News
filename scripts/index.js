// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar";

document.getElementById("navbar").innerHTML=navbar();



import { searchNews, append } from "../scripts/fetch"
let search = (e) => 
{
    if (e.key === "Enter") 
    {
        let value = document.getElementById("search_input").value;
        searchNews(value).then((data) => 
        {
            console.log(data)
            let container = document.getElementById("results");
            container.innerHTML = null
            append(data.results, container);
            console.log(data)
        });

    }

};
document.getElementById("search_input").addEventListener("keydown", search);


let sidebar = document.getElementById("sidebar").children;
function cSearch()
 {
    console.log(this.id)
    searchNews(this.id).then((data) =>
    {
        console.log(data)
        let container = document.getElementById("results");
        container.innerHTML = null;
        append(data.results, container);
    });

}

for(const key of sidebar)

{
    key.addEventListener("click",cSearch);
}
