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
import React, { useEffect, useState } from "react";
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
import { breakingPoints } from "../../../../global/theme";
import { FaPlus } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { colorsOptions } from "../../../../global";
import { Color, ColorRow } from "../productSizes/styles";

export default function ProductImages({ formUtils, selectedProductToUpdate }) {
  const [isProductImagesOpen, setIsProductImagesOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState({});
  const [color, setColor] = useState("");
  const [images, setImages] = useState(selectedProductToUpdate?.images || []);
  const { setValue } = formUtils;
  const isSmallScreen = useBreakpoint(breakingPoints.sm);

  const handleFileChange = (event) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
      const url = URL.createObjectURL(event.target.files[0]);
      setImageUrl(url);
    }
  };

  useEffect(() => {
    if (selectedProductToUpdate?.images) {
      setValue("images", selectedProductToUpdate.images);
    }
  }, []);

  const handleOnClick = () => {
    const uniqueId = uuidv4();
    const modifiedFileName = `${uniqueId}`;
    const modifiedFile = new File([file], modifiedFileName, {
      type: file.type,
    });

    if (!file || !color || !imageUrl) {
      toast.error("Please make sure you selected image and color");
      return;
    }
    setImages([
      ...images,
      {
        url: imageUrl,
        file,
        color,
        isDeleted: false,
        file: modifiedFile,
        id: uniqueId,
      },
    ]);

    setValue("images", [
      ...images,
      {
        url: imageUrl,
        file,
        color,
        isDeleted: false,
        file: modifiedFile,
        id: uniqueId,
      },
    ]);
    setImageUrl("");
  };
  const startsWithBlob = /^blob/i;
  const stringStartsWithBlob = (testString) => startsWithBlob.test(testString);

  const handleOnDelete = (index) => {
    const newImages = images?.map((elm, i) => {
      if (i === index) {
        elm.isDeleted = true;
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
                {!elm.isDeleted && (
                  <AddedImagesContainer>
                    <Image
                      src={
                        stringStartsWithBlob(elm.url)
                          ? elm.url
                          : `https://storage.googleapis.com/ecommerce-bucket-testing/${elm.url}`
                      }
                    />
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
            <FormControl style={{ width: isSmallScreen ? "90%" : "50%" }}>
              <InputLabel>Color</InputLabel>
              <Select
                label="color"
                MenuProps={{ style: { height: "300px" } }}
                onChange={({ target: { value } }) => setColor(value)}
                style={{ maxHeight: "55px" }}
              >
                {colorsOptions.map(({ text, color }) => {
                  return (
                    <MenuItem value={text}>
                      <ColorRow>
                        <Color color={color} />
                        <p style={{ marginLeft: "10px" }}>{text}</p>
                      </ColorRow>
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              startIcon={<FaPlus />}
              style={{
                height: "55px",
                width: isSmallScreen ? "90%" : "30%",
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
