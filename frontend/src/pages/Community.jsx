import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function Community() {
  const [communities, setCommunities] = useState([]);
  const [newCommunity, setNewCommunity] = useState("");
  const [newComment, setNewComment] = useState({});
  const { auth } = useAuth();
  const API_URL = "http://localhost:5999/api"; // adjust base URL

  // Fetch communities
  const fetchCommunities = async () => {
    const res = await axios.get(`${API_URL}/community`);
    setCommunities(res.data.data);
  };

  useEffect(() => {
    fetchCommunities();
  }, []);

  // Add community
  const handleAddCommunity = async (e) => {
    e.preventDefault();
    if (!newCommunity) return;
    await axios.post(`${API_URL}/community/add`, { title: newCommunity });
    setNewCommunity("");
    fetchCommunities();
  };

  // Add comment
  const handleAddComment = async (communityId) => {
    if (!newComment[communityId]) return;
    await axios.post(`${API_URL}/comment/${communityId}`, {
      comment: newComment[communityId],
      name // hardcoded, can make dynamic
    });
    setNewComment({ ...newComment, [communityId]: "" });
    fetchCommunities();
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Community Board</h1>

      {/* Add Community */}
      <form onSubmit={handleAddCommunity} className="flex gap-2 mb-6">
        <input
          type="text"
          value={newCommunity}
          onChange={(e) => setNewCommunity(e.target.value)}
          placeholder="New community title"
          className="flex-1 border rounded px-3 py-2"
        />
        <button className="bg-blue-500 text-white px-4 rounded">Add</button>
      </form>

      {/* List Communities */}
      <div className="space-y-4">
        {communities.map((c) => (
          <div key={c._id} className="border rounded p-4">
            <h2 className="font-semibold text-lg">{c.title}</h2>
            <ul className="ml-4 mt-2 list-disc">
              {c.comments.map((cm) => (
                <li key={cm._id}>
                  <span className="font-medium">{auth.user.name}</span> {cm.comment}
                </li>
              ))}
            </ul>

            {/* Add Comment */}
            <div className="mt-3 flex gap-2">
              <input
                type="text"
                value={newComment[c._id] || ""}
                onChange={(e) =>
                  setNewComment({ ...newComment, [c._id]: e.target.value })
                }
                placeholder="Write a comment..."
                className="flex-1 border rounded px-3 py-2"
              />
              <button
                type="button"
                onClick={() => handleAddComment(c._id)}
                className="bg-green-500 text-white px-3 rounded"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
