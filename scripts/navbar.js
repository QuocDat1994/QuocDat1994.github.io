const navBarEvent = () => {
  $(".navbar").on("click", "a", function() {
    if ($(this).hasClass("active")) {
      return;
    }

    const targetId = "#" + $(this).data("target");

    $(".navbar a").removeClass("active");
    $(this).addClass("active");

    if ($(window).width() <= 768) {
      $("html").animate(
        { scrollTop: $(targetId).offset().top - $(".navbar ul").height() },
        "slow"
      );
    } else {
      $(".card.info").hide();
      $(targetId).show("slow");
    }
  });

  $(window).resize(function() {
    if ($(window).width() <= 768) {
      $(".card.info").show("slow");
    } else {
      const activeCardID = "#" + $(".navbar a.active").data("target");
      $(".card.info").hide();
      $(activeCardID).show();
    }
  });
};

export default navBarEvent;
