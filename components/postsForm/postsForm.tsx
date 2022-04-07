import React from 'react';
import FormInput from '../../components/formInput/formInput'
import FormButton from '../../components/formButton/formButton'
import useStyles from './postsFormStyles';
interface PostsFormProps {
    post: any;
    setPost: (params: any) => void;
    addNewPost: (params: any) => void;
  };

const PostsForm: React.FC<PostsFormProps> = ({post, setPost, addNewPost}) => {

    const classes = useStyles();
    return (
        <form className={classes.form}>
            <FormInput
                value={post.title}
                type="text"
                placeholder="Заголовок"
                onChange={(e: React.FormEvent<HTMLInputElement>) => setPost({...post, title: e.currentTarget.value})}
            ></FormInput>
            <FormInput
                value={post.description}
                type="text"
                placeholder="Описание"
                onChange={(e: React.FormEvent<HTMLInputElement>) => setPost({...post, description: e.currentTarget.value})}
            ></FormInput>
            <FormButton
                onClick={addNewPost}
            >Добавить новость
            </FormButton>
        </form>
    );
};
export default PostsForm;