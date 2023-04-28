import Link from 'next/link'
import { LikeButton } from '../LikeButton'

const fetchPosts = () => {
  const props = {
    next: { // hace que no se genere pagina estatica. Y que se genere en el momento de la peticion cada 60 segundos
      revalidate: 60
    }
  }

  return fetch('https://jsonplaceholder.typicode.com/posts', props)
    .then(response => response.json())
}

export default async function ListOfPosts () {
  const posts = await fetchPosts()

  return posts.slice(0, 3).map(post => (
    <article key={post.id}>
      <Link href='/posts/[id]' as={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </Link>
    </article>
  ))
}
