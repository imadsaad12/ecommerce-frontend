import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import {
  AddedImagesContainer,
  Container,
  FileInput,
  FileInputContainer,
  FormContainer,
  HiddenFileInput,
  ImageInputsContainer,
  ImagesContainer,
  SizesContainer,
  SizesRow,
  UploadText,
} from "./styles";
import { FaPlus } from "react-icons/fa";
import {
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
import x from "./x.png";

export default function AddProductForm() {
  const [isProductInfoOpen, setIsProductInfoOpen] = useState(false);
  const [isProductSizesOpen, setIsProductSizesOpen] = useState(false);
  const [isProductImagesOpen, setIsProductImagesOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const [sizes, setSizes] = useState([
    { name: "", description: "", price: "" },
  ]);
  const isSmallScreen = useBreakpoint(breakingPoints.sm);

  const fields = [
    { label: "Name", key: "name", type: "string" },
    { label: "Description", key: "description", type: "string" },
    { label: "Price", key: "price", type: "string" },
  ];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setImageUrl(url);
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
                // setValue("sizes", [
                //   ...getValues().sizes,
                //   { name: "", description: "", price: "" },
                // ]);
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
            <AddedImagesContainer>
              <img src={x} style={{ width: "50px", height: "50px" }} />
              <p>Red</p>
            </AddedImagesContainer>
            <AddedImagesContainer>
              <img src={x} style={{ width: "50px", height: "50px" }} />
              <p>Red</p>
            </AddedImagesContainer>
            <AddedImagesContainer>
              <img src={x} style={{ width: "50px", height: "50px" }} />
              <p>Red</p>
            </AddedImagesContainer>
            <AddedImagesContainer>
              <img src={x} style={{ width: "50px", height: "50px" }} />
              <p>Red</p>
            </AddedImagesContainer>
            {/* {imageUrl && (
              <img
                src={imageUrl}
                alt="Uploaded Image"
                style={{ width: "200px", height: "200px" }}
              />
            )} */}
            <ImageInputsContainer>
              <FileInputContainer>
                <UploadText>
                  {imageUrl ? "File Selected" : "Upload Image"}
                </UploadText>
                <HiddenFileInput type="file" onChange={handleFileChange} />
              </FileInputContainer>
              <FormControl style={{ width: "50%" }}>
                <InputLabel>Color</InputLabel>
                <Select label="Color">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                startIcon={<FaPlus />}
                style={{ height: "55px" }}
                onClick={() => {
                  setSizes([
                    ...sizes,
                    { name: "", description: "", price: "" },
                  ]);
                }}
              >
                Add Image
              </Button>
            </ImageInputsContainer>
          </ImagesContainer>
        </Collapse>
      </List>
    </Container>
  );
}
