import React, { useState } from 'react';
import propTypes from 'prop-types';

export const AddCategory = ({ setcategories }) => {

    const [inputValue, setinputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if ( inputValue.trim().length > 2 ) {
            setcategories( cats => [ inputValue, ...cats ]);
            setinputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text" 
                value={ inputValue }
                onChange={ (e) => setinputValue(e.target.value) }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setcategories: propTypes.func.isRequired
}
