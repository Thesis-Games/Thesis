import React, { useEffect, useState } from "react";
import { profileService } from "../services/authService";

const ProfileHook = () => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await profileService();
        setProfile(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, []);
  return { profile };
};

export default ProfileHook;
