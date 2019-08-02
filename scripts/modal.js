import projectData from "./projectData.js";

const modalEvent = () => {
  $(".works").on("click", "a", e => {
    const projectName = $(e.currentTarget).data("target");
    const data = projectData[projectName];

    $(".project-img").attr("src", data.img);
    $(".project-name").html(data.name);
    $(".project-company").html(data.company);
    $(".project-description").html(data.description);
    $(".project-link").attr("href", data.link);
  });
  // $("#test").click();
};

export default modalEvent;
