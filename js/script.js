let nameList = [];
let artistList = [];
let imgList = [];
let linkList = [];
let timeList = [];

// for (let img of imgList) {
//   $(".imgDisplay").append(img + ",");
// }

// for (let link of linkList) {
//   $(".linkDisplay").append(link + ",");
// }

// for (let time of timeList) {
//   $(".timeDisplay").append(time + ",");
// }

$("button").click(function() {
  let nameSmth = $(".nameInput").val();
  let artistSmth = $(".artistInput").val();
  let imgSmth = $(".imgInput").val();
  let linkSmth = $(".linkInput").val();
  let timeSmth = $(".timeInput").val();
  nameList.push(nameSmth);
  artistList.push(artistSmth);
  imgList.push(imgSmth);
  linkList.push(linkSmth);
  timeList.push(timeSmth);
  for (let name of nameList) {
    $(".nameDisplay").append("<tr>" + "<td>" + name + "</td>");
  }
  for (let artist of artistList) {
    $(".artistDisplay").append("<td>" + artist + "</td");
  }
  for (let img of imgList) {
    $(".imgDisplay").append();
  }
  for (let link of linkList) {
    $(".linkDisplay").append();
  }
  for (let time of timeList) {
    $(".timeDisplay").append("<td>" + name + "</td>" + "</tr>");
  }
});

// use bob, bobby, bobert, bobara, and bobamantha to test everything out
// and also this too https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F022%2F134%2Felmo.jpg
// it's an elmo fire img
// .reduce can be used as a time counter for the entire playlist to show how long it would take to finish it