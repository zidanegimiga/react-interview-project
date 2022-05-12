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

type PostsAndUsers = [
  {
    postId: number,
    userId: number,
    userName: number,
    body: string,
    title: string,
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
 * 
 * @param users 
 * @param posts 
 * @returns results
 */
export function getPostsWithUsers (users: Users, posts: Posts) {
  let results = [];
  users?.forEach((user) => {
    for(let index = 0; index < posts.length; index++){
      if(user.id === posts[index].userId){
        results.push({
          postId: posts[index].id,
          userId: posts[index].userId,
          userName: user.name,
          title: posts[index].title,
          body: posts[index].body
        });
        posts.splice(index, 1);
        index--;
      }
    }
  });
  return results;
}