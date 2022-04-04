import React from 'react';
import Link from 'next/link'
import FormattedDate from '../../components/date';
import useStyles from './postListStyles';

export default function PostsList({allPosts, removePost}) {

    const classes = useStyles();

    return (
        <ul className={classes.list}>
            {allPosts.map((post, index) => (
                <li key={index}>
                    <Link href={`/posts/${post.id}`}>
                        <a className={classes.title}>{post.title}</a>
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