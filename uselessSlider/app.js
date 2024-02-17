const objData = [
  {
    name: "Title 1",
    Descriptions: "Description 1",
    image:
      "https://i.pinimg.com/564x/b3/c8/4f/b3c84f91fb9b0e2c6d029e3c28f88069.jpg",
  },
  {
    name: "Title 2",
    Descriptions: "Description 2",
    image:
      "https://i.pinimg.com/564x/cf/55/2d/cf552de6e2abbbf8f3c9c5825cd0cedf.jpg",
  },
  {
    name: "Title 3",
    Descriptions: "Description 3",
    image:
      "https://i.pinimg.com/564x/11/60/28/116028d07c65b81045ef8b7c68705a4d.jpg",
  },
];

let count = 0;
let cnt = 1;

function displays() {
  const lol = objData[count];
  let yo = document.querySelector(`.div${cnt}`);
  console.log(yo);
  try {
    yo.classList.add("bg");
  } catch (err) {
    console.log(err);
  }

  document.querySelector(".container").innerHTML = `
  <div class="left">
        <div class="div1 lol"></div>
        <div class="div2 lol"></div>
        <div class="div3 lol"></div>
      </div>
    <img src="${lol.image}" alt="image gone"/>
    <div class="text">
      <h1>${lol.name}</h1>
      <p>${lol.Descriptions}</p>
    </div>
  `;

  count++;
  cnt++;
  if ((count || cnt) == objData.length) {
    count = 0;
    cnt = 1;
  }
}

displays();

setInterval(displays, 3000);
