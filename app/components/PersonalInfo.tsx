"use client"
import React, { useState } from 'react';

// PersonalInfo component displays and allows editing of the user's name, profile picture, and contact details.
const PersonalInfo: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('UserName');
  const [email, setEmail] = useState('john@doe.com');
  const [phone, setPhone] = useState('+123-456-7890');
  const [profilePic, setProfilePic] = useState<string | null>(null); // Use null to represent no image uploaded

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-12 shadow-lg">
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-5xl font-bold mb-4 bg-transparent border-2 rounded-full border-white text-center w-full max-w-lg mx-auto"
          />
          <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
            {profilePic ? (
              <img src={profilePic} alt="Profile Picture" className="object-cover w-full h-full" />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500 text-4xl">
                <span>+</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setProfilePic(URL.createObjectURL(e.target.files[0]));
                } else {
                  setProfilePic(null); // Reset to no image if the file input is cleared
                }
              }}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border-2 border-white rounded-full text-center w-full max-w-lg mx-auto mb-2"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-transparent border-2 rounded-full border-white text-center w-full max-w-lg mx-auto"
          />
        </>
      ) : (
        <>
          <h1 className="text-5xl font-bold mb-4">{name}</h1>
          <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
            {profilePic ? (
              <img src={profilePic} alt="Profile Picture" className="object-cove cursor-pointer w-full h-full" />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500 text-4xl">
                <span>+</span>
              </div>
            )}
          </div>
          <p className="text-lg mb-2">{email}</p>
          <p className="text-lg">{phone}</p>
        </>
      )}
      <button
        onClick={() => setIsEditing(!isEditing)}
        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </header>
  );
};

export default PersonalInfo;