import bar from "@org/bar";
import foo from "@org/foo";

// simple check so HMR updates body if youe dit any of the packages
if (document.body) {
  const fooResponse = foo();
  const barResponse = bar();
  document.body.innerHTML = `<p>${fooResponse}</p> <br> <p>${barResponse}</p>`;
} else {
  document.addEventListener("DOMContentLoaded", function() {
    const fooResponse = foo();
    const barResponse = bar();
    document.body.innerHTML = `<p>${fooResponse}</p> <br> <p>${barResponse}</p>`;
  });
}
