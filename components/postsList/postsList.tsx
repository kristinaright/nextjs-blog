import React from 'react';
import Link from 'next/link'
import FormattedDate from '../../components/date';
import useStyles from './postListStyles';

export default function PostsList({allPosts, removePost}) {

    const classes = useStyles();

    if(!allPosts.length) {
        return (
            <div>Посты не найдены</div>
        )
    }

    return (
        <ul className={classes.list}>
            {allPosts.map((post, index) => (
                <li className={classes.item} key={index}>
                    <div>
                        <Link href={`/posts/${post.id}`}>
                            <a className={classes.title}>{post.title}</a>
                        </Link>
                        <br />
                        <div>{post.description}</div>
                        <small className={classes.date}>
                            <FormattedDate dateString={post.date} />
                        </small>
                    </div>
                    <button className={classes.close} onClick={() =>removePost(post)}></button>
                </li>
            ))}
        </ul>
    );
}