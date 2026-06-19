"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, TextArea, Textarea } from "@heroui/react";
import { TrashBin, PencilToSquare } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";

const CommentList = ({ comments }) => {
  const router = useRouter();

  const [editingId, setEditingId] = useState(null);
  const [editMessage, setEditMessage] = useState("");

  const { data: session } = authClient.useSession();
  const user = session?.user || null;
  const email = user?.email;
  const handleDelete = async (id) => {
    try {
      await fetch(`https://idea-vault-webserver.vercel.app/comments/${id}`, {
        method: "DELETE",
      });

      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };
  const handleEdit = (comment) => {
    setEditingId(comment._id);
    setEditMessage(comment.message);
  };
  const handleUpdate = async (id) => {
    try {
      await fetch(`https://idea-vault-webserver.vercel.app/comments/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: editMessage,
        }),
      });

      setEditingId(null);
      setEditMessage("");

      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {comments.map((comment) => (
        <div
          key={comment._id}
          className="border p-4 rounded-lg my-4 bg-gray-50 flex gap-3"
        >
          <img
            src={comment.image}
            alt={comment.name}
            className="rounded-full w-10 h-10 object-cover"
          />

          <div className="flex-1">
            <h2 className="text-lg font-semibold">{comment.name}</h2>

            {editingId === comment._id ? (
              <>
                <TextArea
                  value={editMessage}
                  onChange={(e) => setEditMessage(e.target.value)}
                  className="my-2"
                />

                <div className="flex gap-2 mt-2">
                  <Button
                    color="primary"
                    onClick={() => handleUpdate(comment._id)}
                  >
                    Save
                  </Button>

                  <Button
                    variant="danger-soft"
                    onClick={() => {
                      setEditingId(null);
                      setEditMessage("");
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </>
            ) : (
              <>
                <p className="text-gray-900">{comment.message}</p>

                <p className="text-gray-400 text-[12px]">
                  {new Date(comment.createdAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </>
            )}

            {comment.email === email && editingId !== comment._id && (
              <div className="flex gap-2 mt-3">
                <Button
                  variant="outline"
                  onClick={() => handleEdit(comment)}
                >
                  <PencilToSquare />
                  Edit
                </Button>

                <Button
                  variant="danger"
                  onClick={() => handleDelete(comment._id)}
                >
                  <TrashBin />
                  Delete
                </Button>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default CommentList;