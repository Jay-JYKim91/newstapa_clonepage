var modals = document.getElementsByClassName("modal");
var clicks = document.getElementsByClassName("img-click");
var closes = document.getElementsByClassName("close");
var funcs = [];

// Modal을 띄우고 닫는 클릭 이벤트를 정의한 함수
function Modal(num) {
  return function() {
    clicks[num].onclick =  function() {
      modals[num].style.display = "block";
      console.log(num);
    };
    closes[num].onclick = function() {
      modals[num].style.display = "none";
    };
  };
}

// 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의합니다.
for(var i = 0; i < clicks.length; i++) {
  funcs[i] = Modal(i);
}

// 원하는 Modal 수만큼 funcs 함수를 호출합니다.
for(var j = 0; j < clicks.length; j++) {
  funcs[j]();
}

// Modal 영역 밖을 클릭하면 Modal을 닫습니다.
// window.onclick = function(event) {
//   if (event.target.className == "modal") {
//       event.target.style.display = "none";
//   }
// };
