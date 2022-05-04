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
 * @return {UserPosts[]} usersPosts
 */
export function getPostsByUsers (users: Users, posts: Posts) {
  const usersPosts = users?.reduce((acc, curr) => {
    const index = posts?.findIndex(item => item.userId === curr.id);
    if(index > -1) {
      curr.title = posts[index].title;
      curr.body = posts[index].body;    
    }
    
    acc.push(curr);
    return acc;
  }, []);
  return usersPosts;
}
