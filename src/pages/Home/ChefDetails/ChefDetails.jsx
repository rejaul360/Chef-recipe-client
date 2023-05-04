import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';
import LazyLoad from 'react-lazy-load';
import { AiFillLike } from 'react-icons/ai';

const ChefDetails = () => {
    const { id } = useParams();
    const chefData = useLoaderData();
    console.log(chefData);
    const { name, img, experience, recipes, likes } = chefData;
    // const [recipes, setRecipes] = useState(loaderData);
    // console.log(recipe);
    return (
        <div>
            <div className="flex gap-24 items-center px-6 bg-gradient-to-r to-[#d8fa31d7] lg:w-[1280px] mx-auto rounded-lg mt-16 shadow-md">
                <div className='py-4'>
                    <LazyLoad>
                    <img className='lg:w-[400px] rounded' src={img} alt="Shoes" />
                    </LazyLoad>
                </div>
                <div className="">
                    <h2 className="chef-name">Name: {name}</h2>
                    <p className='experience'>Experience:{experience}</p>
                    <div className="flex items-center gap-1 likes mt-2">
                            <AiFillLike style={{ color: 'blue', fontSize: '20px' }}></AiFillLike>
                            <span>{likes}k</span>
                        </div>
                    
                    {/* <span className='likes'>Likes: {likes}k</span> */}

                </div>
            </div>
            <div className='lg:w-[1280px] mx-auto grid grid-cols-1 mt-16 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                {recipes && recipes.map((recipe, index) => { 
                    console.log(recipe);
                    return <Recipes
                        key={index}
                        recipe={recipe}
                    ></Recipes>})
                }</div>

        </div>
    );
};

export default ChefDetails;