
const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 3000))

  throw new Error('Error from fetchComments')

  // eslint-disable-next-line no-unreachable
  const props = { // incremental static generation
    next: {
      revalidate: 60
    }
  }
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, props)
    .then(response => response.json())
}

export default async function CommentsPage ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}
