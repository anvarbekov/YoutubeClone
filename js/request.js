// const API = 'https://jsonplaceholder.typicode.com/posts';
const API = 'http://95.130.227.186/api/courses?page=1'

// get data
const getPosts = async () => {
    try {
      const request = await fetch(API)
      if(request.status !== 200){
        throw new Error(`Some Error, Status code: ${request.status}`);
      } 
      const data = await request.json();
      console.log(data[0]);
      return data;
    } catch (error) {
      console.log(error.message);
    }
}

getPosts()


// get Btn Clicked
document.addEventListener('DOMContentLoaded', async () => {
    const datas = await getPosts();
    if(datas){
     const dataUI =  `
     ${datas.map((data) =>  `
        <div class="card__content ">
        <div class="card__img-box">
            <a href="cource.html"><img class="card__img" src=${data.imagePath}></a>
            <div class="new">New</div>
        </div>
        <h3 class="card__title">${data.name}</h3>
        <hr>
        <div class="card__footer">
            <div class="card__footer-left"><a href="cource.html">Batafsil</a></div>
            <div class="card__footer-right">
                <del>${data.price}</del>
                <span>Bepul</span>
            </div>
        </div>
        </div>`
        ).join('\n')}`
      
        document.getElementById('list-container').innerHTML = dataUI;
    }
  })


