import React from "react";
import  ReactDOM  from "react-dom/client";
import './index.css'

const TODO = () => {
    return(
     
        <div class="bg-gray-900 w-2/3 h-auto mx-auto px-4 py-8 rounded mt-12">
        <button class="px-2 py-2 mb-5 rounded-md bg-green-500">Add New Item</button>
            <Header/>
            <ListItem />  
        </div>
 
    )
}

const ListItem = () => {
    

    return <div class="flex mt-4 text-white justify-between items-center text-center">
                <div>
                    <span>2020.02.02</span>
                </div>
                <div>
                    <span>Todo Something</span>
                </div>
                
                <div>
                    <span>Luka</span>
                </div>
                <div>
                    <span>2020.02.02</span>
                </div>
                <div>
                    <button class="px-2 py-2 rounded-md bg-red-500">Delete</button>
                </div>
            </div>
    
}

const Header = () => {
    return (
        <div class="flex text-2xl text-white justify-between items-center text-center">
                <div>
                    <span>Created At</span>
                </div>
                <div>
                    <span>Desctiption</span>
                </div>
                <div>
                    <span>Author</span>
                </div>
                <div>
                    <span>Due Date</span>
                </div>
                <div>
                    <span>Action</span>
                </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<TODO/>)