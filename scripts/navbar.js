const navBarEvent = () => {
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
};

export default navBarEvent;
// const autoType = () => {
//   const $job = $("#job");
//   const typewriter = new Typewriter(job, { loop: true });

//   typewriter
//     .typeString("Web Developer")
//     .pauseFor(2500)
//     .deleteAll()
//     .typeString("Software Developer")
//     .pauseFor(2500)
//     .start();
// };
