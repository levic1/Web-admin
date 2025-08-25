import React, { useState } from 'react'
import axios from "axios"

const Categories = () => {
    const [ categoryName, setCategoryName ] = useState("")
    const [ categoryDescription, setCategoryDescription ] = useState("")

    const handleSumbit = async (e) => {
        e.preventDefault()
        const response = await axios.post("http://localhost:5000/api/category/add", 
            {categoryName, categoryDescription},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("pos-token")}`,
                }
            }
        
        )
        if (response.data.success) {
            alert("category added successfully: ")
            setCategoryName("")
            setCategoryDescription("")
        } else {
            console.error("error adding category")
            alert("error adding category. Pls try again")
        }
    }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Categories Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Add Category Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Add Category</h2>
          <form className="space-y-4" onSubmit={handleSumbit}>
            <div>
              <input
                type="text"
                placeholder="Category Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Category Description"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                onChange={(e) => setCategoryDescription(e.target.value)}

              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
            >
              Add Category
            </button>
          </form>
        </div>

        {/* Categories List Placeholder */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Existing Categories</h2>
          <p className="text-gray-500">No categories added yet.</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
