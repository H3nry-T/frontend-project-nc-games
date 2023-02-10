import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../../../utils/axiosSingleReview";
import CommentsSection from "./CommentsSection/CommentsSection";
import SingleReviewCard from "./SingleReviewCard/SingleReviewCard";

const SingleReviewPage = (props) => {
  const [singleReview, setSingleReview] = useState({});
  const { review_id } = useParams();
  const date = new Date(Date.parse(singleReview.created_at));

  useEffect(() => {
    getReviewById(review_id)
      .then((reviewFromApi) => {
        setSingleReview(reviewFromApi);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [review_id]);

  return (
    <>
      <SingleReviewCard singleReview={singleReview} date={date} />
      <CommentsSection review_id={review_id} singleReview={singleReview} />
    </>
  );
};

export default SingleReviewPage;
