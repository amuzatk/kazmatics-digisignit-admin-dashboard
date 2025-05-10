export async function fetchPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
  }