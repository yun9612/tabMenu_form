window.addEventListener("load", function () {
  const popupBtn = this.document.querySelector(".popUpBtn");
  const popupText = this.document.querySelector(".popupText");
  const popupLink = this.document.querySelector(".popUpBtn .inner a");
  popupBtn.addEventListener("click", function () {
    // 삼항연산자, if문으로 써도 됨
    // popupText.style.display = popupText.style.display === "none" ? "block" : "none";
    if (popupText.style.display === "none") {
      popupText.style.display = "block";
      popupLink.classList.remove("active");
    } else {
      popupText.style.display = "none";
      popupLink.classList.add("active");
    }
  });
  // 탭기능
  const tabTitles = this.document.querySelectorAll(".tabNav > li > a");
  const tabItems = this.document.querySelectorAll(".tabItem");
  // 첫번째 탭 활성화
  tabTitles[0].classList.add("active");
  tabItems[0].style.display = "block";
  // 탭 기능 코드
  tabTitles.forEach((tabTitle, index) => {
    tabTitle.addEventListener("click", () => {
      // 모든 탭과 내용을 초기화하는 코드
      tabTitles.forEach((title) => {
        title.classList.remove("active");
      });
      tabItems.forEach((item) => {
        item.style.display = "none";
      });
      // 모든 탭과 내용을 보이게하는 코드
      tabTitle.classList.add("active");
      tabItems[index].style.display = "block";
    });
  });

  // gotop 버튼
  const gotopBtn = this.document.querySelector("#goTop");
  gotopBtn.addEventListener("click", () => {
    this.window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}); //END
