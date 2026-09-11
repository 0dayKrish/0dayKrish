(function () {
  try {
    var t = localStorage.getItem("theme");
    if (t === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  } catch {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
