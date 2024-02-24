import styled from "styled-components";

export const UploadContainer = styled.div`
  width: 90%;
  height: 100px;
  border: 2px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: dashed;
  cursor: pointer;
  margin-top: 20px;
`;

export const FileInput = styled.input`
  display: none;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 97%;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
`;
