const modal = document.getElementById("myModal");
const modalCloseBtn = document.querySelector(".close");
const floorsShow = document.querySelector("#floors-show");
const flatsShow = document.querySelector("#flats-show");
const buildHide = document.querySelectorAll('[data-flats-quantity="0"]');
const floorsItem = document.querySelectorAll(".floors-item");

floorsItem.forEach((item) => {
  const dataFlatsQuantity = item.getAttribute("data-flats-quantity");
  if (dataFlatsQuantity === "0") {
    item.classList.add("build-hide");
    item.setAttribute("data-flats-quantity", "Квартир нет");

    return;
  }

  item.addEventListener("click", () => {
    modal.style.display = "flex";

    const apartmentNumber = modal.querySelector("#apartment-number");
    const apartmentStatus = modal.querySelector("#apartment-status");
    const apartmentItem = modal.querySelectorAll(".apartment-item");

    apartmentItem.forEach((item) => {
      const status = item.getAttribute("data-status-apartment");

      item.addEventListener("mouseover", () => {
        const number = item.getAttribute("data-number-apartment");
        apartmentNumber.innerText = `Квартира №${number}`;
        apartmentStatus.innerText = `${status}`;

        switch (status) {
          case "Продано":
            item.style.fill = "rgba(255, 0, 0, 0.5)";
            item.style.stroke = "rgba(255, 0, 0, 1)";
            apartmentStatus.style.color = "red";
            break;
          case "Бронь":
            item.style.fill = "rgba(0, 0, 255, 0.5)";
            item.style.stroke = "rgba(0, 0, 255, 1)";
            apartmentStatus.style.color = "blue";
            break;
          case "Акция":
            item.style.fill = "rgba(0, 255, 0, 0.5)";
            item.style.stroke = "rgba(0, 255, 0, 1)";
            apartmentStatus.style.color = "green";
            break;
          default:
            item.style.fill = "";
            apartmentStatus.style.color = "";
        }
      });

      item.addEventListener("mouseout", () => {
        item.style.fill = "";
        item.style.strokeWidth = "3px";
        item.style.stroke = "";
        apartmentStatus.style.color = "";
      });
    });
  });

  item.addEventListener("mouseover", () => {
    const dataFloorsNumber = item.getAttribute("data-floors-number");
    const dataFlatsQuantity = item.getAttribute("data-flats-quantity");

    floorsShow.innerText = `${dataFloorsNumber}`;
    flatsShow.innerText = `${dataFlatsQuantity}`;

    if (dataFlatsQuantity === "0" || dataFlatsQuantity === "Квартир нет") {
      flatsShow.style.color = "red";
      item.classList.add("build-hide");
    } else {
      flatsShow.style.color = "";
      item.classList.remove("build-hide");
    }
  });
});

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

const apartmentItems = document.querySelectorAll(".apartment-item");
const sectionOne = document.querySelector(".section-one");
const sectionTwo = document.querySelector(".section-two");
const sectionThree = document.querySelector(".section-three");
const backButton = document.getElementById("previos");
const backButtonTwo = document.getElementById("previos-two");
const nextButton = document.getElementById("next");

apartmentItems.forEach((apartmentItem) => {
  apartmentItem.addEventListener("click", () => {
    const status = apartmentItem.getAttribute("data-status-apartment");
    if (status === "Продано" || status === "Бронь") {
      return;
    }
    sectionOne.style.transform = "translateX(-6000px)";
    sectionTwo.style.transform = "translateX(0px)";
  });
});

backButton.addEventListener("click", () => {
  sectionOne.style.transform = "translateX(0px)";
  sectionTwo.style.transform = "translateX(3000px)";
});

nextButton.addEventListener("click", () => {
  sectionOne.style.transform = "translateX(-6000px)";
  sectionTwo.style.transform = "translateX(-3000px)";
  sectionThree.style.transform = "translateX(0px)";
});

backButtonTwo.addEventListener("click", () => {
  sectionOne.style.transform = "translateX(-3000px)";
  sectionTwo.style.transform = "translateX(0px)";
  sectionThree.style.transform = "translateX(3000px)";
});
