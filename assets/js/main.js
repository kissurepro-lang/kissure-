/* KISSURE site interactions. Keep it dependency-free. */

(function () {
  "use strict";

  // ---- TODO: set your real contact details before launch ----
  var CONTACT_EMAIL = "kissurepor@gmail.com";
  // ------------------------------------------------------------

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") nav.classList.remove("open");
    });
  }

  // Quote form -> composes an email to CONTACT_EMAIL
  var form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var subject = "B2B Inquiry — " + (data.get("business") || data.get("name") || "KISSURE website");
      var body = [
        "Name: " + (data.get("name") || ""),
        "Business / Studio: " + (data.get("business") || ""),
        "Email: " + (data.get("email") || ""),
        "",
        (data.get("message") || "")
      ].join("\n");
      window.location.href =
        "mailto:" + encodeURIComponent(CONTACT_EMAIL) +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }
})();
