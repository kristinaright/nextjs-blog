import React from 'react';
import FilterSelect from '../filterSelect/filterSelect'
import FormInput from '../formInput/formInput'

interface PostsFiltersProps {
    filter: any;
    setFilter: (params: any) => void;
  };

const PostsFilters: React.FC<PostsFiltersProps> = ({
    filter,
    setFilter
}) => {

    return (
        <section>
            <FormInput
                value={filter.query}
                placeholder="поиск"
                onChange={e => setFilter({...filter, query: e.target.value})}
            ></FormInput>
            <FilterSelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка"
                options={[
                    {
                        value: 'title',
                        name: 'По названию'
                    },
                    {
                        value: 'description',
                        name: 'По описанию'
                    },
                ]}
            ></FilterSelect>
        </section>
    );
};

export default PostsFilters;