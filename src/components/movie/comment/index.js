import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import {
  CommentBoxDiv,
  CommentConDiv,
  CommentInput,
  CommentInputDiv,
  CommentSubBtn,
  CommentTitleDiv,
} from './styled';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { tokenState } from './../../../atom';

function Comment({ data }) {
  const { id } = useParams();
  const [input, setInput] = useState();
  const [commentlist, setCommentList] = useState(data.comments);
  const token = useRecoilValue(tokenState);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: token.token,
  };

  const handleInput = e => {
    setInput(e.target.value);
  };

  // const handleSubmit = e => {
  //   setInputComment({ id: data.id, comment: input });
  // };

  const handleSubmit = e => {
    postComment();
    addComment();
    console.log(commentlist);
  };
  // console.log(token.config.withCredentials);
  function addComment() {
    // if (token.config.withCredentials)
    setCommentList(comment => {
      const prevComment = [...comment];

      const result = [...prevComment, input];
      console.log(result);
      return result;
    });
  }

  const postComment = () => {
    console.log(token);
    try {
      axios.post(
        `http://127.0.0.1:8000/movie/comment/`,
        {
          comment: input,
          movies: id,
        },
        { headers: headers }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CommentConDiv>
      <CommentBoxDiv>
        <CommentInputDiv>
          <CommentTitleDiv>한줄평</CommentTitleDiv>
          <CommentInput onChange={handleInput}></CommentInput>
          <CommentSubBtn onClick={handleSubmit}>확인</CommentSubBtn>
        </CommentInputDiv>
      </CommentBoxDiv>
    </CommentConDiv>
  );
}

export default Comment;
