import React from "react";

export default function ConfirmModal({
  open,
  onClose,
  onConfirm,
  title = "Are you sure?",
  message = "",
  confirmText = "Confirm",
  cancelText = "Cancel",
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]">
      <div className="bg-pink-900 rounded-lg shadow-xl p-6 w-[340px] animate-fadeIn">

        <h2 className="text-xl text-black font-bold">{title}</h2>

        <div className="mt-3">{message}</div>

        <div className="flex justify-end gap-3 mt-5">
          <button
            onClick={onClose}
            className="px-4 py-1 rounded bg-gray-300 hover:bg-gray-400 transition"
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {confirmText}
          </button>
        </div>

      </div>
    </div>
  );
}
