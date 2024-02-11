const reviews = [
    {
        id: 1,
        name: "Rina Miele",
        job: "web developer",
        img: "https://assets.designhill.com/design-blog/wp-content/uploads/2014/12/Rina-Miele.png",
        text: "Rina Miele is one of the top women web designers known for great design works. She is a full-time freelance designer. Besides web designing, she creates logo and typography design. Working remotely as a freelance creative director, Rina is a fun loving girl and sees designs everywhere. She has ‘worked with some extremely influential brands in Pop Culture – ‘VH1, the NBA, Allure Magazine, and Atlantic Records just to name a few.’"
    },
    {
        id: 2,
        name: "Kate Hatchett",
        job: "web developer",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVRBLco8zX-kEylhk6KQDkoy1Bg57XOjPrZiFJgjFXYCqM6puYeB6SWc1xRRNAtRMn0tg&usqp=CAU",
        text: "Kate is a web and mobile Interface designer. She is a young freelance graphic designer who works for Hedgehog lab. She was working with the lab when still a student. An amazing design talent, she has been credited with some path breaking graphic designs."
    },
    {
        id: 3,
        name: " Rita DeRaedt",
        job: "web developer",
        img: "https://assets.designhill.com/design-blog/wp-content/uploads/2014/12/rita.jpeg",
        text: "She is a specialist in pixel. She started taking interest in Photoshop when in high school and since then web designing has been her forte. As women website designers, Rita likes to focus on the details in creating a web page and is fully immersed when designing. This is the reason that she was a finalist in the .net Awards."
    },
    {
        id: 4,
        name: "Meagan Fisher",
        job: "web developer",
        img: "https://assets.designhill.com/design-blog/wp-content/uploads/2014/12/Meagan-Fisher.png",
        text: "Meagan likes typography and textures that can be noticed clearly when we see her web design works. Viewing her latest works is a great experience and budding designers can learn a lot from those designs."
    },
    {
        id: 5,
        name: "priyanka chopra",
        job: "Indian Actor",
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ6q8DGtLl6GcOIxBAHlY0UCQMvAX3UGEFq38S2cg7WntxgHSMA",
        text: ""
    },
    {
        id: 6,
        name: "Meagan Fisher",
        job: "web developer",
        img: "https://assets.designhill.com/design-blog/wp-content/uploads/2014/12/Meagan-Fisher.png",
        text: "Priyanka Chopra Jonas (born July 18, 1982, Jamshedpur, Bihar [now in Jharkhand], India) Indian actor, model, and singer who rose to international stardom after she was crowned Miss World in 2000. Chopra was born into a Punjabi family in southern Bihar state (in the area that became Jharkhand state in 2000), in India."
    },
    {
        id: 7,
        name: "pretty zinta",
        job: "Actor",
        img: "http://t1.gstatic.com/images?q=tbn:ANd9GcQuwTeBs7FGi5xmjUM6Rtc1d073NpKETdPEQZ5uian_vtLUXhmvNd3lkd3KV4doGaa9__3j",
        text: "Preity G Zinta is an Indian entrepreneur and former actress primarily known for her work in Hindi films. After graduating with degrees in English honours .."
    },
    {
        id: 8,
        name: "Carolyn Davidson",
        job: "graphic designer",
        img: "https://wordpress.peppercontent.io/wp-content/uploads/2022/04/pasted-image-0-65.png",
        text: "Carolyn Davidson is a female architect who gained fame after designing the iconic Nike Swoosh for their logo. Nike itself is a brand that needs no introduction, and being its logo designer was a privilege that this female cherished forever. Designing the Nike logo dates back to 1971, and since then, it’s been a symbol of prestige for the renowned brand."
    }, {
        id: 9,
        name: "Neelam Munir",
        job: "pakistani Actor",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkl9qINP4t7f-2TcYZTDzC7bboRfvOQFtqbiGfJUs7ixGGL2jF3vyZ3f6dhipVXbosb3A&usqp=CAU",
        text: "Neelam Muneer Khan is a Pakistani actress and model who appears in television dramas and films. She is best known for portraying the role of Ulfat in ..."
    },
    {
        id: 10,
        name: "Jannat Mirza",
        job: "Actor",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhCJhARma96nVkx_jJHO6ST4bZ4WNTx0bBVf7sX7zwgF2XvLjU",
        text: "She is best known for her comedy video clips and TikTok lip syncs). She usually shares photos of fashionable outfits and models on Instagram. She has earned a prized badge as a TikTok comedian. She is also a style blogger."
    },


];


const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);

});
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

}
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.lenght - 1;
    }
    showPerson();
});
randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
})