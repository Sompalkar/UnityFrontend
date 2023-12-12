import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = "http://hn.algolia.com/api/v1";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/items/${id}`);
        setPost(response.data);
        console.log(response.data)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post details:", error);
       
      }
    };

    fetchPostDetails();
  }, [id]);

  return (
    <div className="container mx-auto p-4 mt-16 flex justify-center items-center min-h-screen  ">
      <div className="max-w-5xl bg-white p-8 rounded shadow-md">
        {loading && <p className="text-center text-gray-700">Loading...</p>}

        {!loading && post && (
            <div>
          <div className="sticky ">
            <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
            <p className="text-gray-700">Points: {post.points}</p>
           
          </div>
          <ul className="list-disc mt-2">
              {post.children.map((comment) => (
                <li key={comment.id} className="text-gray-800">
                  {comment.text}
                </li>
              ))}
            </ul>

            </div>
          
        )}
      </div>
    </div>
  );
};

export default PostDetail;
