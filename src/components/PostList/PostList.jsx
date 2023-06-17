import { Table } from 'react-bootstrap';
import PostListItem from '../PostListItem/PostListItem';

function PostList({ posts }) {

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>title</th>
                    <th>description</th>
                    <th>text</th>
                    <th>author_id</th>
                    <th>created</th>
                    <th>updated</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {posts.map(post => <PostListItem post={post} />)}
            </tbody>
        </Table>
    )
}

export default PostList;