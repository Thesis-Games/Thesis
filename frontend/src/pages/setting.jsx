import React, { useState } from "react";
import { FiSettings, FiUser, FiMusic, FiVolume2 } from "react-icons/fi";
import { FaSpotify, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import background from "../picture/starbg.gif";

const SettingsPage = () => {
  const [volume, setVolume] = useState(70);
  const [activeTab, setActiveTab] = useState("profile");
  const [profile, setProfile] = useState({
    name: "Space Explorer",
    email: "explorer@cosmos.com",
    avatar: "https://randomuser.me/api/portraits/lego/5.jpg",
    bio: "Intergalactic web developer exploring the universe of code",
  });

  const musicServices = [
    {
      id: 1,
      name: "Spotify",
      icon: <FaSpotify className="text-green-500 text-2xl" />,
      connected: true,
    },
    {
      id: 2,
      name: "YouTube Music",
      icon: <FaYoutube className="text-red-500 text-2xl" />,
      connected: false,
    },
  ];

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="min-h-screen  text-gray-900"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-6">
          <Link to="/home">
            <button className="inline-flex items-center gap-2 text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 px-4 py-2 rounded-full transition duration-200 shadow-sm">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Home
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold flex items-center text-blue-600">
            <FiSettings className="mr-3" /> Settings
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-64 p-4 rounded-xl bg-white shadow-md">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex items-center w-full p-3 rounded-lg transition-all ${
                  activeTab === "profile"
                    ? "bg-blue-100 text-blue-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <FiUser className="mr-3" /> Profile
              </button>
              <button
                onClick={() => setActiveTab("music")}
                className={`flex items-center w-full p-3 rounded-lg transition-all ${
                  activeTab === "music"
                    ? "bg-blue-100 text-blue-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <FiMusic className="mr-3" /> Music
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 rounded-xl bg-white shadow-md">
            {activeTab === "profile" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Profile Settings</h2>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <img
                        src={profile.avatar}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
                      />
                      <label className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600 transition">
                        <input
                          type="file"
                          className="hidden"
                          onChange={handleAvatarUpload}
                        />
                        <FiUser size={16} />
                      </label>
                    </div>
                    <h3 className="text-xl font-semibold">{profile.name}</h3>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <label className="block mb-1 font-medium">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleProfileChange}
                        className="w-full p-3 rounded-lg border bg-white border-gray-300"
                      />
                    </div>

                    <div>
                      <label className="block mb-1 font-medium">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                        className="w-full p-3 rounded-lg border bg-white border-gray-300"
                      />
                    </div>

                    <div>
                      <label className="block mb-1 font-medium">Bio</label>
                      <textarea
                        name="bio"
                        value={profile.bio}
                        onChange={handleProfileChange}
                        rows="3"
                        className="w-full p-3 rounded-lg border bg-white border-gray-300"
                      />
                    </div>

                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "music" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Music Settings</h2>

                <div className="p-6 rounded-lg bg-gray-100">
                  <div className="flex items-center mb-4">
                    <FiVolume2 className="mr-3 text-xl" />
                    <span className="font-medium">Volume: {volume}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Music Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {musicServices.map((service) => (
                      <div
                        key={service.id}
                        className={`p-4 rounded-lg border border-gray-300 ${
                          service.connected ? "bg-blue-100" : ""
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {service.icon}
                            <span className="ml-3 font-medium">
                              {service.name}
                            </span>
                          </div>
                          <button
                            className={`px-4 py-1 rounded-full text-sm ${
                              service.connected
                                ? "bg-green-500 text-white"
                                : "bg-gray-200 text-gray-700"
                            }`}
                          >
                            {service.connected ? "Connected" : "Connect"}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-gray-100">
                  <h3 className="text-xl font-semibold mb-4">
                    Playback Preferences
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-500 rounded"
                      />
                      <span>Auto-play next track</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-500 rounded"
                        defaultChecked
                      />
                      <span>Show lyrics when available</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-500 rounded"
                        defaultChecked
                      />
                      <span>High quality streaming</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
