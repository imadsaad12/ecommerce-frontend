import { styled } from "styled-components";
import { breakingPoints } from "../../../../global/theme";

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

export const buttonStyle = (isSmallScreen) => ({
  height: "40px",
  width: isSmallScreen ? "90%" : "30%",
  textTransform: "capitalize",
  fontSize: "12px",
});
