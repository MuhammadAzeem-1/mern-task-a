import React, { useEffect, useState } from "react";
import Card from "./Card";
import Form from "./Form";
import { getPost } from "../api";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const { posts, isLoading } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  

  console.log(posts);

  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <>
      <section className="flex justify-center">
        <div className="flex justify-start gap-4 flex-wrap w-[70%]">
          {posts?.map((item) => {
            return <Card item={item} key={item._id} />;
          })}
        </div>

        <div className="w-[25%]">
          <Form />
        </div>
      </section>
    </>
  );
};

export default Search;
