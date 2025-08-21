window.addEventListener("load", function () {
  const tabs = this.document.querySelectorAll(".tabBtn");
  const tabContents = this.document.querySelectorAll(".tabContent");
  // tabs을 순서대로 반복되게
  tabs.forEach((tab, index) => {
    // tab을 "클릭"했을때
    tab.addEventListener("click", () => {
      // tabs에 있는 class를 다 지우고
      tabs.forEach((t) => {
        t.classList.remove("active");
      });
      // 클릭한 tab에만 class를 더해라
      tab.classList.add("active");

      // tabContents에 있는 class를 다지우고
      tabContents.forEach((tc) => {
        tc.classList.remove("active");
      });
      // tabs와 같은 순서에 있는 tabContent에 class를 더해라
      tabContents[index].classList.add("active");
    });
  });
}); //END
