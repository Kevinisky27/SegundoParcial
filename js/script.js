const menuIconEl = $(".menu-icon");
const sidenavEl = $(".sidenav");
const sidenavCloseEl = $(".sidenav__close-icon");

function toggleClassName(el, className) {
  if (el.hasClass(className)) {
    el.removeClass(className);
  } else {
    el.addClass(className);
  }
}

menuIconEl.on("click", function () {
  toggleClassName(sidenavEl, "active");
});

sidenavCloseEl.on("click", function () {
  toggleClassName(sidenavEl, "active");
});
