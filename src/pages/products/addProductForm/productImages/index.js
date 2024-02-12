import {
  Button,
  Collapse,
  FormControl,
  InputLabel,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { Text, listButtonStyle } from "../styles";
import {
  AddedImagesContainer,
  FileInputContainer,
  HiddenFileInput,
  Image,
  ImageInputsContainer,
  ImagesContainer,
  UploadText,
  buttonStyle,
} from "./styles";
import useBreakpoint from "../../../../utilities/mediaQuery";
import { breakingPoints } from "../../../../global/breakingPoints";
import { FaPlus } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

export default function ProductImages({ formUtils }) {
  const [isProductImagesOpen, setIsProductImagesOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState({});
  const [color, setColor] = useState("");
  const [images, setImages] = useState([]);
  const { setValue } = formUtils;
  const isSmallScreen = useBreakpoint(breakingPoints.sm);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    const url = URL.createObjectURL(event.target.files[0]);
    setImageUrl(url);
  };

  const handleOnClick = () => {
    imageUrl && color && setImages([...images, { url: imageUrl, file, color }]);
    imageUrl &&
      color &&
      setValue("images", [...images, { url: imageUrl, file, color }]);
    setImageUrl("");
  };

  const handleOnDelete = (index) => {
    const newImages = images.map((elm, i) => {
      if (i === index) {
        elm = null;
      }
      return elm;
    });
    setImages(newImages);
    setValue("images", newImages);
  };

  return (
    <>
      <ListItemButton
        style={listButtonStyle}
        onClick={() => setIsProductImagesOpen(!isProductImagesOpen)}
      >
        <ListItemIcon>
          {isProductImagesOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </ListItemIcon>
        <ListItemText primary="Product Images" />
      </ListItemButton>
      <Collapse in={isProductImagesOpen}>
        <ImagesContainer>
          {images?.map((elm, index) => {
            return (
              <>
                {elm !== null && (
                  <AddedImagesContainer>
                    <Image src={elm.url} />
                    <Text>{elm.color}</Text>
                    <Button
                      variant="outlined"
                      color="error"
                      style={buttonStyle(isSmallScreen)}
                      onClick={() => handleOnDelete(index)}
                    >
                      Delete
                    </Button>
                  </AddedImagesContainer>
                )}
              </>
            );
          })}
          <ImageInputsContainer>
            {imageUrl !== "" && <Image src={imageUrl} />}
            <FileInputContainer>
              <UploadText>
                {imageUrl ? "File Selected" : "Upload Image"}
              </UploadText>
              <HiddenFileInput
                required
                type="file"
                onChange={handleFileChange}
              />
            </FileInputContainer>
            <FormControl style={{ width: isSmallScreen ? "70%" : "50%" }}>
              <InputLabel>Color</InputLabel>
              <Select
                label="Color"
                onChange={({ target: { value } }) => setColor(value)}
              >
                <MenuItem value={"Red"}>Red</MenuItem>
                <MenuItem value={"Blue"}>Blue</MenuItem>
                <MenuItem value={"Green"}>Green</MenuItem>
              </Select>
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              startIcon={<FaPlus />}
              style={{
                height: "55px",
                width: isSmallScreen ? "70%" : "30%",
              }}
              onClick={handleOnClick}
            >
              Add Image
            </Button>
          </ImageInputsContainer>
        </ImagesContainer>
      </Collapse>
    </>
  );
}
