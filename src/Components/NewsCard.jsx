import React from "react";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

export default function NewsCard({ news }) {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  return (
    <div className="w-full max-w-xl rounded-2xl shadow-md  p-4 bg-white">
      <div className="flex items-center justify-between mb-4 bg-base-200 rounded-2xl p-3">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex items-center gap-2">
  <div>
    <h3 className="font-semibold text-gray-800">{author.name}</h3>
    <p className="text-sm text-gray-500">
      {new Date(author.published_date).toLocaleDateString()}
    </p>
  </div>
  
</div>

        </div>
      </div>

      <h2 className="text-xl font-semibold mb-3 text-gray-900">{title}</h2>

      <img
        src={thumbnail_url}
        alt="thumbnail"
        className="w-full rounded-xl mb-4 object-cover"
      />

      <p className="text-gray-700 mb-3">
        {details.length > 200 ? details.slice(0, 200) + "   .....Read More": details}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-600"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2 border-t">
        <div className="flex items-center gap-2 text-yellow-500">
          <FaStar></FaStar> <span>{rating.number}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <FaEye></FaEye> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
}
