let nameList = [];
let artistList = [];
let imgList = [];
let linkList = [];
let timeList = [];
let counter = -1;

function printer(a) {
  $(".imgDisplay").append(`<td><img src="${imgList[a]}"></td>`);
  $(".nameDisplay").append(`<td>${nameList[a]}</td>`);
  $(".artistDisplay").append(`<td>${artistList[a]}</td>`);
  $(".lengthDisplay").append(`<td>${timeList[a]}</td>`);
  $(".linkDisplay").append(`<td><a href="${linkList[a]}">link</a></td>`);
}

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
  counter++;
  // $(".nameDisplay").append(counter);
  printer(counter);
});

// use bob, bobby, bobert, bobara, and bobamantha to test everything out
// and also this too https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F022%2F134%2Felmo.jpg
// it's an elmo fire img
// .reduce can be used as a time counter for the entire playlist to show how long it would take to finish it