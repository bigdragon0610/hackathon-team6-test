"use strict";

const imagesAndTexts = [
  ["https://pon-design.netlify.app/img/works/smoothiesta.jpg", "Smoothiesta 様",],
  ["https://pon-design.netlify.app/img/works/web-conference.jpg", "Web Conference 様",],
  ["https://pon-design.netlify.app/img/works/lamina.jpg", "LAMINA 様"],
  ["https://pon-design.netlify.app/img/works/citylab.jpg", "CITYLab 様"],
  ["https://pon-design.netlify.app/img/works/tabilog.jpg", "TABILOG 様"],
];

for (let i = 0; i < imagesAndTexts.length; i++) {
  // let Set =
  // `<div class="container">`+
  //   `<div class="box" id="box${i}">` +
  //      `<img src="${imagesAndTexts[i][0]}" alt="" class = "image" id="image${i}">` +
  //      `<div class="text" id="text${i}">${imagesAndTexts[i][1]}</div>` +
  //   `</div>`+
  //   `</div>`;
  // document.write(Set);

  document
    .getElementById(`box${i}`)
    .addEventListener("mouseover", function (event) {
      document.getElementById(`text${i}`).style.textDecoration = "underline #391e88";
    });

  document
    .getElementById(`box${i}`)
    .addEventListener("mouseout", function (event) {
      document.getElementById(`text${i}`).style.textDecoration = "none";
    });
}
