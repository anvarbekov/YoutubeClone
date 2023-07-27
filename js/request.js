// const API = 'https://jsonplaceholder.typicode.com/posts';
const API = "http://95.130.227.186/api/courses?page=1";

// get data
const getPosts = async (resource) => {
  try {
    const request = await fetch(resource);
    if (request.status !== 200) {
      throw new Error(`Some Error, Status code: ${request.status}`);
    }
    const data = await request.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// get data
document.addEventListener("DOMContentLoaded", async () => {
  const datas = await getPosts(API);
  if (datas) {
    const dataUI = `
     ${datas
       .map(
         (data) => `
        <div class="card__content ">
        <div class="card__img-box">
            <a href="cource.html"><img class="card__img" src="http://95.130.227.186/${data.imagePath}"></a>
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
       )
       .join("\n")}`;

    dataUIS(dataUI);
  }
});

// Video page request
document.addEventListener("DOMContentLoaded", async () => {
  const JSONDatas = await getPosts("http://gettalim.uz/api/videos?page=1");
  if (JSONDatas) {
    JSONDatas.map((JSONData) => {
      document.getElementById("iframe").src = JSONData.videoPath;
      document.getElementById("lesson__title").textContent =
        JSONData.id < 10
          ? "#0" + JSONData.id + " " + JSONData.name
          : "#" + JSONData.id + " " + JSONData.name;
    });
  }
});

// Mentor page request
document.addEventListener("DOMContentLoaded", async () => {
  const JSONDatasArr = await getPosts("http://gettalim.uz/api/mentors?page=1");
  const JSONData = JSONDatasArr[0]
  if (JSONData) {
    console.log(JSONData);
    const mentor = `
    <h1>Mentor</h1>
    <div class="mentors">

        <div class="mentor__avatar-box">
            <img src="http://95.130.227.186/${JSONData.imagePath}" alt="" class="mentor__avatar">
        </div>
        <div class="mentor__info-box">
            <h2 class="mentor__name">${JSONData.firstName} ${JSONData.lastName}</h2>
            <h3 class="mentor__subtitle">Frontend Developer & Backend Developer</h3>
            <div class="mentor__comments">
                <div class="mentor__comment">
                    <i class='bx bxs-star'></i>
                    <p>4.8 Reyting</p>
                </div>
                <div class="mentor__comment">
                    <i class="fa-solid fa-user-graduate"></i>
                    <p>+7,000 O'quvchi</p>
                </div>
                <div class="mentor__comment">
                    <i class="fa-regular fa-circle-play"></i>
                    <p>13 Kurslar</p>
                </div>
            </div>
        </div>

    </div>

    <div class="mentor__infos">
        <p class="mentor__info">
            <span>${JSONData.firstName} ${JSONData.lastName}</span> - ${(JSONData.description).slice(20)}
        </p>
        <p class="mentor__info">
            <span>Stack</span> - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga molestiae quaerat beatae eveniet provident exercitationem nobis culpa ipsam adipisci voluptatem, delectus enim a tenetur sunt?
        </p>
    </div>
    
    `

    document.getElementById('course__info').innerHTML = mentor

  }
});

// Course page request
document.addEventListener("DOMContentLoaded", async () => {
  const JSONDatas = await getPosts("http://gettalim.uz/api/courses?page=1");
  if (JSONDatas) {
    const courseCard = `
    <div class="content__box cource__box">
    <div class="course__content">
        <h1 class="cource__title">${JSONDatas[2].name}</h1>
        <p class="cource__subtitle">
            ${JSONDatas[2].description}
        </p>
        <div class="cource__info-box">
            <div class="stars__box">
                <i class='bx bx-alarm'></i>
                <span>Oxirgi yangilanish 11 Fevral, 2023</span>
            </div>
        </div>

        <div class="cource__card">
            <div class="card__img-box">
                <a href="cource.html"><img class="card__img" src="http://95.130.227.186/${JSONDatas[2].imagePath}"></a>
                <div class="new">New</div>
            </div>
            <div class="card__footer remove__border">
                <div class="card__footer-left"><span class="price">Bepul</span></div>
                <div class="card__footer-right">
                    <del>250.000 So'm</del>
                </div>
            </div>
            <div class="card__body">
                <a href="video.html" class="watching__cource" id="watching__cource">Kursni Ko'rish</a>
            </div>

            <div class="card__footer">
                <div class="card__footer-left"><span class="price"><i class="fa-solid fa-person-chalkboard"></i> Darslar</span></div>
                <div class="card__footer-right">
                    <span>${JSONDatas[2].lessons} ta</span>
                </div>
            </div>
            
            <div class="card__footer">
                <div class="card__footer-left"><span class="price"><i class='bx bx-alarm'></i> Umumiy soat</span></div>
                <div class="card__footer-right">
                    <span>${JSONDatas[2].hours} Soat</span>
                </div>
            </div>

            <div class="card__footer">
                <div class="card__footer-left"><span class="price"><i class="fa-solid fa-signal"></i> Darajasi</span></div>
                <div class="card__footer-right">
                    <span>${JSONDatas[2].level}</span>
                </div>
            </div>

            <div class="card__footer">
                <div class="card__footer-left"><span class="price"><i class="fa-solid fa-language"></i> Til</span></div>
                <div class="card__footer-right">
                    <span>${JSONDatas[2].language}</span>
                </div>
            </div>

            <div class="card__footer">
                <div class="card__footer-left"><span class="price"><i class="fa-solid fa-certificate"></i> Sertifikat</span></div>
                <div class="card__footer-right">
                    <span>Yo'q</span>
                </div>
            </div>

            <div class="card__footer">
                <div class="card__footer-left"><span class="price"><i class="fa-solid fa-infinity"></i> Dostup</span></div>
                <div class="card__footer-right">
                    <span>Umrbod</span>
                </div>
            </div>

            <div class="card__footer">
                <div class="card__footer-left"><span class="price"><i class="fa-solid fa-chalkboard-user"></i> Mentor</span></div>
                <div class="card__footer-right">
                    <span>Muhammadnozim</span>
                </div>
            </div>

        </div>
    </div>
</div>
    
    `;

const pageContent = `
    <div class="course__nav-list">
    <div class="course__nav-links active"> <a class="course__nav-link" href="cource.html"><i class='bx bxl-meta'></i> Tavsif</a></div>
    <div class="course__nav-links"> <a class="course__nav-link" href="dastur.html"><i class='bx bx-book'></i> Dastur</a></div>
    <div class="course__nav-links"> <a class="course__nav-link" href="sharh.html"><i class='bx bxs-star'></i> Sharh</a></div>
    <div class="course__nav-links"> <a class="course__nav-link" href="mentor.html"><i class="fa-solid fa-user-tie"></i> Mentor</a></div>
    </div>
    <div class="course__info">
    <h1>Ma'lumot</h1>
    <p class="course__subtitle">
        ${JSONDatas[2].information}
    </p>

    <h1 class="course__learn">Nimani o'rganasiz</h1>
    <div class="list__learn">
        <div class="learn__left">
            <p><i class="fa-solid fa-check"></i> HTML</p>
            <p><i class="fa-solid fa-check"></i> HTML</p>
            <p><i class="fa-solid fa-check"></i> HTML</p>
            <p><i class="fa-solid fa-check"></i> HTML</p>
            <p><i class="fa-solid fa-check"></i> HTML</p>
        </div>
        <div class="learn__left">
            <p><i class="fa-solid fa-check"></i> HTML</p>
            <p><i class="fa-solid fa-check"></i> HTML</p>
            <p><i class="fa-solid fa-check"></i> HTML</p>
            <p><i class="fa-solid fa-check"></i> HTML</p>
            <p><i class="fa-solid fa-check"></i> HTML</p>
        </div>
    </div>

    <h1 class="course__learn">Talablar</h1>
    <div class="learn__left">
        <p><i class="fa-solid fa-circle"></i> Notebook yokida Kompyuter</p>
        <p><i class="fa-solid fa-circle"></i> Web dasturlash o'rganish istagi</p>
    </div>

</div>
`;

    document.getElementById("cource__content").innerHTML = courseCard;
    document.getElementById('page__content').innerHTML = pageContent;
  }
});
