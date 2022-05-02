let searchNews= async(value) =>
{

    // let value = document.getElementById("query").value ;
    try 
    {
        // let res = await fetch(` https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=aJw9pf8UXOT6BHGVZm26PeMipJcXfn8scuSkI_LDbsU`)

        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`)
        let data = await res.json();
        console.log(data);
        return data;
    } 
    catch (err) 
    {
        console.log(err)
    }
}

let append = (data, container) => {
    data.forEach(({description, urls: {image}}) => {
        let div = document.createElement("div");
        div.setAttribute("class","image")
        let img = document.createElement("img");
        let h3 = document.createElement("h3");
        img.src = image;
        h3.innerText = description;
        div.append(img,h3)
        container.append(div)
    })
}

export { searchImages,append };