const goToContact = () => {
  $(".button.contact").on("click", function() {
    $(".navbar a[name=contact]").click();
  });
};

const downloadCV = () => {
  $(".button.download").on("click", function() {
    $(".navbar a[name=contact]").click();
  });
};

export { downloadCV, goToContact };
