import React, { useState, useEffect, useCallback } from "react"
import CropperInput from "./CroperInput";
import { Dropzone } from "./DropZoneInput";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const Step5 = ({createLiveEvent}) => {
    const [files, setFiles] = useState([]);
    const [cropResult, setCropResult] = useState("");
    const [image, setImage] = useState(null);
    const history = useHistory()
    const handleCancelCrop = () => {
      setFiles([]);
      setImage(null);
      setCropResult("");
    };
    useEffect(() => {
        return () => {
          files.forEach((file) => URL.revokeObjectURL(file.preview));
          URL.revokeObjectURL(cropResult);
        };
      }, [files, cropResult]);


      const handleUploadImage = useCallback(async () => {
        try {
          
        //  dispatch(uploadProfileImage(image, cognitoId));
        createLiveEvent()
        history.push("/")
          handleCancelCrop();
        } catch (error) {
          console.log(error);
        }
      }, [  history, createLiveEvent]);
    
      console.log(image)

    return(
        <div
        style={{
          maxWidth: "900px",
          minHeight: "600px",
      
          display: "flex",
          flexDirection: "column",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
          borderRadius: "10px",
        }}
      >
        <h1
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: "10px",
            fontWeight: "200",
            fontSize: "35px",
          }}
        >
          Upload a picture
        </h1>
  
        <Dropzone setFiles={setFiles} files={files} />
        {files.length > 0 && (
          <>
            <CropperInput
              style={{ marginLeft: "auto", marginRight: "auto" }}
              imagePreview={files[0].preview}
              setImage={setImage}
              setCropResult={setCropResult}
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "10px",
                marginRight: "20px",
                marginBottom: "20px",
              }}
            >
              <Button variant="outlined" onClick={() => handleCancelCrop()}>Cancel crop</Button>{" "}
              <Button

                type="submit"
                size="large"
                variant="outlined"
                onClick={handleUploadImage}
    
                style={{ marginRight: "20px", marginLeft: 20 }}
              >
                Create event
              </Button>
            </div>
          </>
        )}
      </div>
    )
}


export default Step5