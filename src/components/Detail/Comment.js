import React, { useState } from 'react';
import { commentState } from '../../atom';
import { useRecoilState } from 'recoil';
import {
  CommentBoxDiv,
  CommentConDiv,
  CommentInput,
  CommentInputDiv,
  CommentSubBtn,
  CommentTitleDiv,
} from './styledComponents';
import axios from 'axios';

function Comment({ data }) {
  const [input, setInput] = useState();
  const [commentlist, setCommentList] = useState(data.comment);
  // const [inputComment, setInputComment] = useRecoilState(commentState);
  console.log(data.comment);
  const handleInput = e => {
    setInput(e.target.value);
  };

  // const handleSubmit = e => {
  //   setInputComment({ id: data.id, comment: input });
  // };

  const handleSubmit = e => {
    function addComment() {
      setCommentList([...commentlist, input]);
    }
    addComment();
    console.log(commentlist);
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
