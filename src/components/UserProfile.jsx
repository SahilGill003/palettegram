import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllUserPosts } from "../DB/api";
import UserPosts from "./UserPosts";

export default function Profile() {
  const { userId } = useParams();
  console.log(userId);
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    getAllUserPosts(userId)
      .then((res) => {
        setUser(res.documents);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  return user && (
    <div className="bg-gray-background">
      <div className="mx-auto max-w-screen-lg">
        <UserPosts user={user} />
      </div>
    </div>
  );
}