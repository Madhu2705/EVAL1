const image = document.querySelector("img");

function imageToggler() {
  let isTrue = false;

  setInterval(() => {
    if (isTrue) {
      image.setAttribute(
        "src",
        "book2.jpg"
      );
    } else {
      image.setAttribute(
        "src",
        "book.jpg"
      );
    }
    isTrue = !isTrue;
  }, 1000);
}
imageToggler();