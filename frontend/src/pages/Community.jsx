import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import ConfirmModal from "../components/ConfirmModal";

axios.defaults.withCredentials = true;

export default function Community() {
  const { auth } = useAuth();

  const [communities, setCommunities] = useState([]);
  const [newCommunity, setNewCommunity] = useState("");
  const [newComment, setNewComment] = useState({});
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // UNIVERSAL POPUP STATES
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  // DELETE
  const [deleteId, setDeleteId] = useState(null);

  // UPDATE
  const [updateId, setUpdateId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const API = "http://localhost:5999/api";

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API}/community`);
      setCommunities(res.data.data);
    } catch (error) {
      console.error("Error fetching communities:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addCommunity = async (e) => {
    e.preventDefault();
    if (!newCommunity.trim()) return;

    try {
      await axios.post(`${API}/community/add`, { title: newCommunity });
      setNewCommunity("");
      await fetchData();
    } catch (error) {
      console.error("Error adding community:", error);
    }
  };

  const addComment = async (cid) => {
    const text = newComment[cid];
    if (!text?.trim()) return;

    try {
      await axios.post(`${API}/comment/${cid}`, { comment: text });
      setNewComment({ ...newComment, [cid]: "" });
      await fetchData();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const saveEdit = async () => {
    try {
      await axios.put(`${API}/comment/${editId}`, { comment: editText });
      setEditId(null);
      setEditText("");
      await fetchData();
    } catch (error) {
      console.error("Error saving edit:", error);
    }
  };

  // DELETE API
  const deleteCommunity = async (id) => {
    try {
      await axios.delete(`${API}/community/${id}`);
      await fetchData();
    } catch (error) {
      console.error("Error deleting community:", error);
    }
  };

  // UPDATE API
  const updateCommunityName = async (id, title) => {
    try {
      await axios.put(`${API}/community/${id}`, { title });
      await fetchData();
    } catch (error) {
      console.error("Error updating name:", error);
    }
  };

  // UNIVERSAL CONFIRM HANDLER
  const handleConfirm = async () => {
    if (modalType === "delete") {
      await deleteCommunity(deleteId);
    }

    if (modalType === "update") {
      if (editValue.trim().length > 0) {
        await updateCommunityName(updateId, editValue);
      }
    }

    setModalOpen(false);
    setModalType(null);
  };

  return (
    <div className="p-6 mt-5 mb-5 bg-pink-700 max-w-3xl mx-auto rounded-lg text-white">

      <h1 className="text-2xl font-bold mb-4 text-center">
        Community Board
      </h1>

      {/* ADD COMMUNITY */}
      <form onSubmit={addCommunity} className="flex gap-2 mb-6">
        <input
          value={newCommunity}
          onChange={(e) => setNewCommunity(e.target.value)}
          className="flex-1 bg-white rounded px-3 py-2 text-black"
          placeholder="Type community name here"
        />
        <button className="bg-blue-500 text-white px-4 rounded">Add</button>
      </form>

      {/* COMMUNITY LIST */}
      <div className="space-y-4">
        {communities.map((c) => {
          const isOwner =
            auth.user?._id === c.ownerId?._id?.toString();

          return (
            <div key={c._id} className="bg-gray-100 text-black rounded p-4">

              <div className="flex justify-between">
                <div>
                  <p className="text-xs text-gray-500">
                    Owner: {c.ownerName}
                  </p>
                  <h2 className="font-semibold text-lg">{c.title}</h2>
                </div>

                {isOwner && (
                  <div className="flex flex-col text-right">

                    {/* UPDATE NAME WITH POPUP */}
                    <button
                      onClick={() => {
                        setUpdateId(c._id);
                        setEditValue(c.title);
                        setModalType("update");
                        setModalOpen(true);
                      }}
                      className="bg-yellow-500 text-white text-xs px-3 py-1 rounded mb-1"
                    >
                      Update community name
                    </button>

                    {/* DELETE WITH POPUP */}
                    <button
                      onClick={() => {
                        setDeleteId(c._id);
                        setModalType("delete");
                        setModalOpen(true);
                      }}
                      className="bg-red-500 text-white text-xs px-3 py-1 rounded"
                    >
                      Delete community
                    </button>

                  </div>
                )}
              </div>

              {/* COMMENTS */}
              <ul className="mt-2 space-y-2">
                {c.comments?.map((cm) => {
                  const isMyComment =
                    auth.user?._id === cm.userId?.toString();

                  return (
                    <li key={cm._id} className="flex justify-between">
                      <div>
                        <span className="font-bold">{cm.name}</span>{" "}
                        {editId === cm._id ? (
                          <input
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="border px-2 py-1 rounded text-sm"
                          />
                        ) : (
                          <span>{cm.comment}</span>
                        )}
                      </div>

                      {isMyComment && (
                        <div className="text-xs">
                          {editId === cm._id ? (
                            <>
                              <button
                                onClick={saveEdit}
                                className="bg-green-500 text-white px-2 py-1 rounded mr-1"
                              >
                                save
                              </button>
                              <button
                                onClick={() => setEditId(null)}
                                className="bg-gray-500 text-white px-2 py-1 rounded"
                              >
                                cancel
                              </button>
                            </>
                          ) : (
                            <button
                              onClick={() => {
                                setEditId(cm._id);
                                setEditText(cm.comment);
                              }}
                              className="bg-gray-300 px-2 py-1 rounded"
                            >
                              Edit
                            </button>
                          )}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* ADD COMMENT */}
              <div className="mt-3 flex gap-2">
                <input
                  value={newComment[c._id] || ""}
                  onChange={(e) =>
                    setNewComment({ ...newComment, [c._id]: e.target.value })
                  }
                  className="flex-1 bg-white rounded px-3 py-2 text-black"
                  placeholder="Type your comment here"
                />

                <button
                  onClick={() => addComment(c._id)}
                  className="bg-green-500 text-white px-3 rounded"
                >
                  Add
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* UNIVERSAL POPUP */}
      <ConfirmModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
        title={
          modalType === "delete"
            ? "Delete Community?"
            : "Update Community Name"
        }
        message={
          modalType === "delete" ? (
            <p>Are you sure you want to delete this community?</p>
          ) : (
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="w-full mt-2 px-3 bg-gray-200 py-2 text-black border rounded"
            />
          )
        }
        confirmText={modalType === "delete" ? "Delete" : "Update"}
        cancelText="Cancel"
      />

    </div>
  );
}
