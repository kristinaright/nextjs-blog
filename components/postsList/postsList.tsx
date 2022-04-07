import React from 'react';
import useStyles from './postListStyles';
import PostItem from '../postItem/postItem';
import {CSSTransition,TransitionGroup} from 'react-transition-group';

interface PostsListProps {
    allPosts?: Array<any>;
    removePost: (params: any) => void;
  };

const PostsList: React.FC<PostsListProps> = ({
    allPosts,
    removePost
}) => {

    const classes = useStyles();

    if(!allPosts.length) {
        return (
            <div>Посты не найдены</div>
        )
    }

    return (
        <ul className={classes.list}>
            <TransitionGroup>
                {allPosts.map((post, index) => (
                    <CSSTransition
                        key={index}
                        timeout={500}
                        className='post'
                    >
                        <PostItem remove={removePost} post={post}></PostItem>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
};

export default PostsList;