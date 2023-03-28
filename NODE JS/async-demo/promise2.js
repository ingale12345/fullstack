console.log("before");
getUser(1)
  .then((response) => {
    console.log(response);
    getRepositories(response.username)
      .then((repoRes) => {
        console.log(repoRes);
        getComments(repoRes[0])
          .then((commentResponse) => {
            console.log(commentResponse);
          })
          .catch((commentError) => {
            console.log(commentError);
          });
      })
      .catch((repoError) => {});
  })
  .catch((error) => {
    console.log(error.message);
  });
console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ id, username: "Prajwal" }), 2000);
  });
}
function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(["repo1", "repo2", "repo3", "repo4"]), 2000);
  });
}

function getComments(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(
      //   () => resolve(["comment1", "comment2", "comment3", "comment4"]),
      () => reject("No Comments"),
      2000
    );
  });
}
