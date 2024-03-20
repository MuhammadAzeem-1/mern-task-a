import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewPost, getPost } from "../api";

const Form = () => {
  const dispatch = useDispatch();

  const [postData, setPostData] = useState({
    title: "",
    message: "",
    selectedFile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createNewPost(postData));

    setTimeout(() => {
      dispatch(getPost());
    }, 2000);

    setPostData({
      title: "",
      message: "",
      selectedFile: "",
    });
  };

  return (
    <div className="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 flex-col ">
          <label
            htmlFor="title"
            className="text-black font-medium text-[18px] tracking-wide	"
          >
            Title
          </label>

          <input
            type="text"
            id="title"
            required
            name="title"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            className="bg-[#e4f4f5] p-2 w-full text-[black]"
          />
        </div>

        <div className="flex gap-2 flex-col ">
          <label
            htmlFor="message"
            className="text-black font-medium text-[18px] tracking-wide	"
          >
            Message
          </label>

          <textarea
            type="text"
            id="message"
            required
            name="message"
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
            className="bg-[#e4f4f5] p-4 w-full text-[black]"
          />
        </div>

        <div className="my-4">
          <input type="file" name="file" id="" />
        </div>

        <button
          type="submit"
          className="inline-block rounded bg-primary my-2 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  bg-blue-500"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
