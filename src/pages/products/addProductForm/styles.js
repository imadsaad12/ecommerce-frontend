import styled from "styled-components";
import { breakingPoints } from "../../../global/breakingPoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 80vh;
  background-color: white;
  border-radius: 10px;
  overflow-y: scroll;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 150px;
  flex-wrap: wrap;
  border-radius: 10px;
  background-color: whitesmoke;
  @media (max-width: ${breakingPoints.sm}px) {
    flex-direction: column;
    margin-bottom: 15px;
    flex-wrap: nowrap;
  }
`;

export const SizesRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  background-color: whitesmoke;
  align-items: center;
  @media (max-width: ${breakingPoints.sm}px) {
    border: 1px solid lightgray;
    flex-direction: column;
    margin-bottom: 15px;
  }
`;
export const SizesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: whitesmoke;
  align-items: center;
  min-height: 150px;
`;
export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: whitesmoke;
  align-items: center;
  min-height: 150px;
`;

export const ImageInputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  @media (max-width: ${breakingPoints.sm}px) {
    flex-direction: column;
  }
`;

export const FileInputContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: 170px;
`;

export const UploadText = styled.div`
  background-color: #1976d2;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  height: 30px;
  border-radius: 5px;
`;

export const HiddenFileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 120px;
  cursor: pointer;
  opacity: 0;
`;

export const AddedImagesContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  border-bottom: 1px solid lightgray;
  @media (max-width: ${breakingPoints.sm}px) {
    flex-direction: column;
    border-bottom: 1px solid lightgray;
  }
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`;

export const Text = styled.p`
  font-weight: bold;
  font-family: sans-serif;
  font-size: 18px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 20%;
  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
  }
`;

export const listButtonStyle = {
  width: "100%",
  borderBottom: "1px solid lightgray",
};
