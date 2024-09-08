"use client"
import React, { useState } from 'react';

// WorkExperience component displays and allows editing of the user's professional experience.
const WorkExperience: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [experiences, setExperiences] = useState(['Frontend Developer - 1 year of experience']);
  const [newExperience, setNewExperience] = useState('');

  const addExperience = () => {
    if (newExperience.trim()) {
      setExperiences([...experiences, newExperience]);
      setNewExperience('');
    }
  };

  const removeExperience = (index: number) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  return (
    <section className="bg-slate-800 shadow-lg shadow-slate-600 rounded-lg p-8 mx-auto my-8 max-w-3xl">
      <h2 className="text-3xl font-semibold border-b-4 border-blue-500 pb-2 mb-4">Work Experience</h2>
      {isEditing ? (
        <>
          <ul className="list-disc pl-5 text-lg">
            {experiences.map((experience, index) => (
              <li key={index} className="mb-2 flex justify-between items-center">
                <span>{experience}</span>
                <button
                  onClick={() => removeExperience(index)}
                  className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex">
            <input
              type="text"
              value={newExperience}
              onChange={(e) => setNewExperience(e.target.value)}
              className="flex-grow p-2 border-2 bg-slate-700 rounded-full border-blue-500 focus:outline-none focus:border-purple-500"
              placeholder="Add new experience"
            />
            <button
              onClick={addExperience}
              className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mx-5 my-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 ">
              Add Experience
            </button>
          </div>
        </>
      ) : (
        <ul className="list-disc pl-5 text-lg">
          {experiences.map((experience, index) => (
            <li key={index} className="mb-2">{experience}</li>
          ))}
        </ul>
      )}
      <button
        onClick={() => setIsEditing(!isEditing)}
        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-8 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800 my-5">
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </section>
  );
};

export default WorkExperience;