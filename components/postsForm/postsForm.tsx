import React from 'react';
import FormInput from '../../components/formInput/formInput'
import FormButton from '../../components/formButton/formButton'
import useStyles from './postsFormStyles';

export default function PostsForm({post, setPost, addNewPost}) {

    const classes = useStyles();
    return (
        <form className={classes.form}>
            <FormInput
                value={post.title}
                type="text"
                placeholder="Заголовок"
                onChange={e => setPost({...post, title: e.target.value})}
            ></FormInput>
            <FormInput
                value={post.description}
                type="text"
                placeholder="Описание"
                onChange={e => setPost({...post, description: e.target.value})}
            ></FormInput>
            <FormButton
                onClick={addNewPost}
            >Добавить новость
            </FormButton>
        </form>
    );
}