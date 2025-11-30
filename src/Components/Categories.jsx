import React,{use} from 'react';
import { NavLink } from 'react-router';

const categoritesPromies = fetch("/public/categories.json").then(res=>res.json());

const Categories = () => {
    const categories = use(categoritesPromies)

    return (
        <div>
            <h2 className='font-bold'>All catagories</h2>
            <div className="grid grid-cols-1 mt-5 gap-3 p-3">
                {
                    categories.map(category=><NavLink key={category.id} category={category} className="btn bg-base-100 border-0 hover:bg-base-200 text-accent font-semibold" to={`/category/${category.id}`}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;