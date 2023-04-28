import Link from 'next/link'

const fetchSinglePost = (id) => {
  const props = { // incremental static generation
    next: {
      revalidate: 60
    }
  }
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, props)
    .then(response => response.json())
}

export default async function PostIdPage ({ children, params }) {
  const { id } = params
  const post = await fetchSinglePost(id)

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  )
}
