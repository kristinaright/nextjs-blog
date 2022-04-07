import React from 'react';
import Link from 'next/link'
import FormattedDate from '../../components/date';
import useStyles from './postItemStyles';

interface PostItemProps {
    post: {
        id: number;
        title: string;
        description: string;
        date: string;
    };
    remove: (e: any) => void;
  }

const PostItem: React.FC<PostItemProps> = ({post, remove}) => {

    const classes = useStyles();
    return (
        <li className={classes.item}>
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
            <button className={classes.close} onClick={() =>remove(post)}></button>
        </li>
    );
}

export default PostItem;