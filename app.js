const github = new Github();
const ui = new UI();
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (event) => {
  const user = event.target.value;
  if (user !== "") {
    github
      .getuser(user)
      .then((data) => {
        if (data.profile.message === "Not Found") {
          console.log("Inside if");
        } else {
          console.log(data);
          ui.showProfile(data.profile);
        }
      })
      .catch((err) => console.log(err));
  }
});
