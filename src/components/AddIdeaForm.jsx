"use client";

import { authClient } from "@/lib/auth-client";
import { revalidatePath } from "next/cache";

import React from "react";

const AddIdeaForm = () => {
       const { data: session } = authClient.useSession()
    const user = session?.user || null;
    const email = user?.email || "abc@email.com"
    const userId = user?.id
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      userId,
      email,
      ideaTitle: formData.get("ideaTitle"),
      shortDescription: formData.get("shortDescription"),
      detailedDescription: formData.get("detailedDescription"),
      category: formData.get("category"),
      tags: formData
        .get("tags")
        ?.split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      imageURL: formData.get("imageURL"),
      estimatedBudget: formData.get("estimatedBudget"),
      targetAudience: formData.get("targetAudience"),
      problemStatement: formData.get("problemStatement"),
      proposedSolution: formData.get("proposedSolution"),

    };
    const res = await fetch("https://idea-vault-webserver.vercel.app/allcollections", {
        method: "POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    })
      const resData = await res.json()
      console.log(resData)
      revalidatePath("/ideas")
  };



  return (
    
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-10">
  <h1 className="text-4xl md:text-5xl font-bold">
    Share Your Innovative Idea
  </h1>

  <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
    Have a creative solution to a real-world problem? Submit your idea and
    inspire others with your innovation. Whether it's technology, health,
    education, environment, or community development, every great idea starts
    with a simple submission.
  </p>
</div>
      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white p-6 rounded-xl shadow"
      >
       
        <div>
          <label className="block mb-2 font-medium">
            Idea Title
          </label>
          <input
            type="text"
            name="ideaTitle"
            required
            className="w-full border rounded-lg p-3"
            placeholder="Enter idea title"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">
            Short Description
          </label>
          <textarea
            name="shortDescription"
            required
            rows={3}
            className="w-full border rounded-lg p-3"
            placeholder="Brief summary of your idea"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">
            Detailed Description
          </label>
          <textarea
            name="detailedDescription"
            required
            rows={6}
            className="w-full border rounded-lg p-3"
            placeholder="Explain your idea in detail"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">
            Category
          </label>
          <select
            name="category"
            required
            className="w-full border rounded-lg p-3"
          >
            <option value="">Select Category</option>
            <option value="Tech">Tech</option>
            <option value="Health">Health</option>
            <option value="AI">AI</option>
            <option value="Education">Education</option>
            <option value="Environment">Environment</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Community">Community</option>
          </select>
        </div>

        {/* Tags */}
        <div>
          <label className="block mb-2 font-medium">
            Tags (Optional)
          </label>
          <input
            type="text"
            name="tags"
            className="w-full border rounded-lg p-3"
            placeholder="AI, Startup, Innovation"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-2 font-medium">
            Image URL
          </label>
          <input
            type="url"
            name="imageURL"
            required
            className="w-full border rounded-lg p-3"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Estimated Budget */}
        <div>
          <label className="block mb-2 font-medium">
            Estimated Budget (Optional)
          </label>
          <input
            type="number"
            name="estimatedBudget"
            className="w-full border rounded-lg p-3"
            placeholder="5000"
          />
        </div>

        {/* Target Audience */}
        <div>
          <label className="block mb-2 font-medium">
            Target Audience
          </label>
          <input
            type="text"
            name="targetAudience"
            required
            className="w-full border rounded-lg p-3"
            placeholder="Students, Farmers, Businesses"
          />
        </div>

        {/* Problem Statement */}
        <div>
          <label className="block mb-2 font-medium">
            Problem Statement
          </label>
          <textarea
            name="problemStatement"
            required
            rows={4}
            className="w-full border rounded-lg p-3"
            placeholder="Describe the problem"
          />
        </div>

        {/* Proposed Solution */}
        <div>
          <label className="block mb-2 font-medium">
            Proposed Solution
          </label>
          <textarea
            name="proposedSolution"
            required
            rows={4}
            className="w-full border rounded-lg p-3"
            placeholder="Describe your solution"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          Submit Idea
        </button>
      </form>
    </div>
  );
};

export default AddIdeaForm;