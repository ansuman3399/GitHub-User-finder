const github = new Github();
const ui = new UI();
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (event) => {
  const user = event.target.value;
  if (user !== "") {
    github.getuser(user).then((data) => {
      if (data.profile.message === "Not Found") {
        console.log("Inside if");
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.clearProfile();
  }
});
