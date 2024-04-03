import styled from "styled-components";
import { useDispatch } from "react-redux";
import { pathNameFetch } from "components/feature/FetchSlice";
import React from "react";
import Magnifier from "assets/icons/magnifier.svg?react";

const InputDiv = styled.div`
  position: relative;
  height: 41px;
  width: 690px;
  margin-left: 12px;
`;

const StyledMagnifier = styled(Magnifier)`
  position: absolute;
  top: 10px;
  right: 12px;
  & :hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  border-radius: 10px;
  width: 100%;
  height: 41px;
  border-width: 1.5px;
  padding: 8px 16px 10px 14px;
  padding-left: 15px;
  border-color: #ff782b;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default function KeywordInput() {
  const keywordNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(pathNameFetch(e.target.value));
  };
  const dispatch = useDispatch();

  return (
    <>
      <InputDiv>
        <Input
          placeholder="검색할 상품/키워드를 입력해주세요."
          onChange={keywordNameChange}
        />
        <StyledMagnifier width="22" height="22" />
      </InputDiv>
    </>
  );
}
