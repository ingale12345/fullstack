async function displayComments() {
  try {
    const user = await getUser(1);

    console.log(user);
    const repos = await getRepositories(user.username);
    console.log(repos);
    const comments = await getComments(repos[0]);
    console.log(comments);
  } catch (error) {
    console.log(error);
  }
}
displayComments();
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
      () => resolve(["comment1", "comment2", "comment3", "comment4"]),
      () => {},
      2000
    );
  });
}
//() => reject("No Comments"),
