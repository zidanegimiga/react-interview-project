/*eslint-disable */
type Users = [
  {
    id: number;
    name: string,
    username: string,
    address: { suite: string };
    title: string,
    body: string
  }
];

type Posts = [
  {
    id: number,
    body: string,
    title: string,
    userId: number
  }
];

/**
 * @param {Users[]} data
 * @return {number{}} {suiteCount, aptCount}
 */
export function getSuiteCount(data: Users) {
  let aptCount = 0;
  let suiteCount = 0;
  data?.forEach((user) => {
    if (user.address.suite.search("Apt") !== -1) {
      aptCount++;
    }
    if (user.address.suite.search("Suite") !== -1) {
      suiteCount++;
    }
  });
  return {
    suiteCount: suiteCount,
    aptCount: aptCount,
  };
}

/**
 * @param {Users[]} users
 * @param {Posts[]} posts
 * @return {UsersPosts[]} usersPosts
 */
export function getPostsByUsers(users: Users, posts: Posts) {
  const usersPosts = [];
  for (const user of users){
    for (let index = 0; index < posts.length; index++){
      if (posts[index].userId === user.id){
        usersPosts.push({
          postId: posts[index].id,
          userId: user.id,
          userName: user.name,
          title: posts[index].title
        });
        posts.splice(index, 1);
        index--;
      }
    }
  }
  return usersPosts;
}
