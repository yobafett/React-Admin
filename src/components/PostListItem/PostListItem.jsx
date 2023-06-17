import { Button } from 'react-bootstrap';

function PostListItem({ post }) {

    return (
        <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.description}</td>
            <td>{post.text}</td>
            <td>{post.author_id}</td>
            <td>{post.created}</td>
            <td>{post.updated}</td>
            <td><Button variant="secondary">Edit</Button>{' '}</td>
            <td><Button variant="danger">Delete</Button>{' '}</td>
        </tr>
    )
}

export default PostListItem;