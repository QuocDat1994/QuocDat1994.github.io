import navBarEvent from "./navbar.js";
import modalEvent from "./modal.js";
import { autoType, downloadCV, goToContact } from "./profile.js";

$(document).ready(() => {
  $(".navbar").load("html/navbar.html", () => {
    navBarEvent();
  });

  $(".profile").load("html/profile.html", () => {
    autoType();
    downloadCV();
    goToContact();
  });

  $("#about").load("html/about.html");

  $("#resume").load("html/resume.html");

  $("#works").load("html/works.html", () => {
    modalEvent();
  });

  $("#contact").load("html/contact.html");
});
