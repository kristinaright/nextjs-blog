import React from 'react';
import Link from 'next/link'
import FormattedDate from '../../components/date'

export default function PostsList({allPosts, removePost}) {


    return (
        <ul>
            {allPosts.map((post, index) => (
                <li key={index}>
                    <Link href={`/posts/${post.id}`}>
                        <a>{post.title}</a>
                    </Link>
                    <br />
                    <small>
                        <FormattedDate dateString={post.date} />
                    </small>
                    <button onClick={() =>removePost(post)}>delete post</button>
                </li>
            ))}
        </ul>
    );
}