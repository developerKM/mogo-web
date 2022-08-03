/* Menu nv toggle */
$("#nav-toggle").on("click", function (event) {
   event.preventDefault();

   $("nav").toggleClass("active");
});
