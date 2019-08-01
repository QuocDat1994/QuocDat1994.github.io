$(document).ready(() => {
  // ========================================
  $(".navbar").load("html/navbar.html");
  $(".profile").load("html/profile.html", () => {
    goToContactPage();
  });
  $("#about").load("html/about.html");
  $("#resume").load("html/resume.html");
  $("#works").load("html/works.html");
  $("#contact").load("html/contact.html");

  const goToContactPage = () => {
    $(".button.contact").on("click", function() {
      $(".navbar a[name=contact]").click();
    });
  };

  const autoType = () => {
    const $job = $("#job");
    const typewriter = new Typewriter(job, { loop: true });

    typewriter
      .typeString("Web Developer")
      .pauseFor(2500)
      .deleteAll()
      .typeString("Software Developer")
      .pauseFor(2500)
      .start();
  };

  // ========================================

  $(".navbar").on("click", "a", function() {
    if ($(this).hasClass("active")) {
      return;
    }

    const targetId = "#" + $(this).data("target");

    $(".navbar a").removeClass("active");
    $(this).addClass("active");

    if ($(window).width() < 768) {
      $("html").animate(
        { scrollTop: $(targetId).offset().top - $(".navbar ul").height() },
        "slow"
      );
    } else {
      $(".card.info").hide();
      $(targetId).show("slow");
    }
  });

  // ==============================================

  $(window).resize(() => {
    if ($(window).width() < 768) {
      // $(".card.info").css("display", "block");
    }
  });
});
