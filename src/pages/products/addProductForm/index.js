import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import {
  AddedImagesContainer,
  ButtonsContainer,
  Container,
  FileInputContainer,
  FormContainer,
  HiddenFileInput,
  Image,
  ImageInputsContainer,
  ImagesContainer,
  SizesContainer,
  SizesRow,
  Text,
  UploadText,
} from "./styles";
import { FaPlus } from "react-icons/fa";
import {
  Checkbox,
  Collapse,
  FormControl,
  InputLabel,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import useBreakpoint from "../../../utilities/mediaQuery";
import { breakingPoints } from "../../../global/breakingPoints";
import axios from "axios";
import { useAddProductQuery } from "../../../apis/products/addProduct";

export default function AddProductForm() {
  const [isProductInfoOpen, setIsProductInfoOpen] = useState(false);
  const [isProductSizesOpen, setIsProductSizesOpen] = useState(false);
  const [isProductImagesOpen, setIsProductImagesOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState({});
  const [color, setColor] = useState("");
  const { handleApiCall } = useAddProductQuery({ onSuccess: () => {} });

  const [sizes, setSizes] = useState([
    { name: "", description: "", price: "" },
  ]);
  const [images, setImages] = useState([]);
  const isSmallScreen = useBreakpoint(breakingPoints.sm);

  const fields = [
    { label: "Name", key: "name", type: "string" },
    { label: "Description", key: "description", type: "string" },
    { label: "Price", key: "price", type: "string" },
  ];

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    const url = URL.createObjectURL(event.target.files[0]);
    setImageUrl(url);
  };

  useEffect(() => {
    console.log(images);
  }, [images]);

  const handleOnAddProduct = () => {
    handleApiCall(images);
  };

  return (
    <Container>
      <List sx={{ width: "90%", bgcolor: "background.paper" }}>
        <ListItemButton
          style={{ width: "100%", borderBottom: "1px solid lightgray" }}
          onClick={() => setIsProductInfoOpen(!isProductInfoOpen)}
        >
          <ListItemIcon>
            {isProductInfoOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </ListItemIcon>
          <ListItemText primary="Product Information" />
        </ListItemButton>
        <Collapse in={isProductInfoOpen}>
          <FormContainer>
            {fields.map(({ key, label, type }) => (
              <TextField
                autoFocus
                required
                name={key}
                label={label}
                type={type}
                variant="outlined"
                style={{
                  width: isSmallScreen ? "90%" : "30%",
                  marginBottom: isSmallScreen && "15px",
                  marginTop: isSmallScreen && "5px",
                }}
              />
            ))}
          </FormContainer>
        </Collapse>
        <ListItemButton
          style={{ width: "100%", borderBottom: "1px solid lightgray" }}
          onClick={() => setIsProductSizesOpen(!isProductSizesOpen)}
        >
          <ListItemIcon>
            {isProductSizesOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </ListItemIcon>
          <ListItemText primary="Product Sizes" />
        </ListItemButton>
        <Collapse in={isProductSizesOpen}>
          <SizesContainer>
            {sizes.map((elm, index) => {
              return (
                <>
                  {elm !== null && (
                    <SizesRow>
                      {fields.map(({ key, label, type }) => {
                        return (
                          <TextField
                            autoFocus
                            required
                            name={key}
                            label={label}
                            type={type}
                            variant="outlined"
                            style={{
                              width: isSmallScreen ? "90%" : "25%",
                              marginTop: "15px",
                              marginBottom: "15px",
                            }}
                            onChange={({ target: { value } }) => {
                              const newSizes = sizes.map((elm, i) => {
                                if (i === index) {
                                  elm[key] = value;
                                }
                                return elm;
                              });
                              setSizes(newSizes);
                            }}
                          />
                        );
                      })}
                      <Button
                        variant="outlined"
                        color="error"
                        style={{
                          height: "55px",
                          width: isSmallScreen ? "90%" : "10%",
                          marginBottom: isSmallScreen && "15px",
                        }}
                        onClick={() => {
                          const newSizes = sizes.map((elm, i) => {
                            if (i === index) {
                              elm = null;
                            }
                            return elm;
                          });
                          setSizes(newSizes);
                        }}
                      >
                        Delete
                      </Button>
                    </SizesRow>
                  )}
                </>
              );
            })}

            <Button
              variant="contained"
              startIcon={<FaPlus />}
              style={{ marginBottom: "15px" }}
              onClick={() => {
                setSizes([...sizes, { name: "", description: "", price: "" }]);
              }}
            >
              Add size
            </Button>
          </SizesContainer>
        </Collapse>

        <ListItemButton
          style={{ width: "100%", borderBottom: "1px solid lightgray" }}
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
                      <ButtonsContainer>
                        <Button
                          variant="outlined"
                          color="error"
                          style={{
                            height: "40px",
                            width: isSmallScreen ? "90%" : "45%",
                            textTransform: "capitalize",
                            fontSize: "12px",
                          }}
                          onClick={() => {
                            const newImages = images.map((elm, i) => {
                              if (i === index) {
                                elm = null;
                              }
                              return elm;
                            });
                            setImages(newImages);
                          }}
                        >
                          Delete
                        </Button>
                        <Checkbox
                          sx={{
                            color: "gray",
                            fontSize: 50,
                            "&.Mui-checked": {
                              color: "blue",
                            },
                            "& .MuiSvgIcon-root": { fontSize: 50 },
                          }}
                          defaultChecked={elm.inStock}
                          value={elm.inStock}
                          onChange={({ target: { checked } }) => {
                            const newImages = images.map((elm, i) => {
                              if (i === index) {
                                elm.inStock = checked;
                              }
                              return elm;
                            });
                            setImages(newImages);
                          }}
                        />
                      </ButtonsContainer>
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
                style={{ height: "55px", width: isSmallScreen ? "70%" : "30%" }}
                onClick={() => {
                  imageUrl &&
                    color &&
                    setImages([
                      ...images,
                      { url: imageUrl, file, color, inStock: true },
                    ]);
                  setImageUrl("");
                }}
              >
                Add Image
              </Button>
            </ImageInputsContainer>
          </ImagesContainer>
        </Collapse>
      </List>
      <Button variant="contained" onClick={handleOnAddProduct}>
        Add product
      </Button>
    </Container>
  );
}
