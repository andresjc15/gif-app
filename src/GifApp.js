import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import 'animate.css';

export const GifApp = () => {

    // const categories = [ 'One punch', 'Samurai Jack', 'Dragon ball' ];
    const [ categories, setcategories ] = useState([ 'One punch' ]);

    // const handleAdd = () => {
    //     setcategories( cats => [...cats, 'Hulk']);
    // }

    return (
        <>
            <header>
                <h2>Gif App</h2>
            </header>
            <div className="content">
                <AddCategory setcategories={ setcategories } />
                <hr />
                
                <ol>
                    { 
                        categories.map( category => (
                            <GifGrid 
                                key={ category}
                                category={ category } 
                            />
                        )) 
                    }
                </ol>
            </div>
        </>
    )
}
