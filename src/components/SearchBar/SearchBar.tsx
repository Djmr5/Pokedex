import React from 'react';

export default function SearchBar() {
    return (
        <form className="mb-4 w-11/12">
            <input
                type="text"
                placeholder="Search Pokémon"
                className="border-black border-2 rounded-md p-2 w-full"
            />
            
        </form>
    );
}
