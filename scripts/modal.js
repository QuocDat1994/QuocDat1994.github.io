import projectData from "./projectData.js";

const modalEvent = () => {
  $(".works").on("click", "a", e => {
    const projectName = $(e.currentTarget).data("target");
    const data = projectData[projectName];

    $(".project-img").attr("src", data.image);
    $(".project-name").html(data.name);
    $(".project-company").html(data.company);
    $(".project-description").html(data.description);

    if (data.link != "") {
      $(".project-link").attr("href", data.link);
      $(".project-link").css("display", "block");
    } else {
      $(".project-link").css("display", "none");
    }
  });
};

export default modalEvent;
