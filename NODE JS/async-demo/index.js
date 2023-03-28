console.log("before");
getUser(1, (user) => {
  console.log(user);
  getRepositories(user.gitHubUserName, (repositories) => {
    console.log(repositories);
    getComments(repositories[0], (comments) => {
      console.log(comments);
    });
  });
});
console.log("after");

function getUser(id, cb) {
  setTimeout(() => cb({ id, gitHubUserName: "prajwal" }), 3000);
}

function getRepositories(username, callBack) {
  setTimeout(() => callBack(["repo1", "repo2", "repo3", "repo4"]), 2000);
}

function getComments(repo, callBackForComments) {
  setTimeout(
    () => callBackForComments(["comment1", "comment2", "comment3", "comment4"]),
    2000
  );
}
