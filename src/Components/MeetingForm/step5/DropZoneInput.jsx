import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";
import IosCameraOutline from "react-ionicons/lib/IosCameraOutline";


const useStyles = makeStyles((theme) => ({

  image: {
    [theme.breakpoints.down("md")]: {

      backgroundColor: "#dbdbdb",
      maxWidth: "300px",
      maxHeight: "200px",
      minWidth: "300px",
      minHeight: "200px",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "50px",
      marginTop: "50px",
      overflow: "hidden",
      padding: "0",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "0px 24px 52px 1px rgba(0,0,0,0.36)",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "#dbdbdb",
      maxWidth: "460px",
      maxHeight: "360px",
      minWidth: "460px",
      minHeight: "360px",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "50px",
      marginTop: "50px",
      overflow: "hidden",
      padding: "0",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "0px 24px 52px 1px rgba(0,0,0,0.36)",
    },
  },
}));


export function Dropzone({ setFiles, files }) {
  const classes = useStyles();
  const onDrop = useCallback(
    (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    [setFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      style={{
        display: "flex",
        outline: "none",
        justifyContent: "center",
        maxWidth: "800px",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center",
      }}
    >
      <input {...getInputProps()} />
   
      {files && files.length < 1 ? (
        <div
          className={classes.image}
  
        >
          <IosCameraOutline
            color="#858585"
            style={{ marginLeft: "auto", marginRight: "auto" }}
            fontSize="120px"
          />
          <h2
            style={{
              color: "#858585",
              marginLeft: "auto",
              marginRight: "auto",
              fontWeight: "400",
            }}
          >
            Drag or click to upload
          </h2>
        </div>
      ) : (
        <>
          <Hidden only={["xs", "sm", "md"]}>
            <div
              className="img-preview"
              style={{
                maxWidth: "360px",
                maxHeight: "360px",
                minWidth: "360px",
                minHeight: "360px",
                marginLeft: "auto",
                marginRight: "30px",
                backgroundPosition: "center",
                overflow: "hidden",
                padding: "0",
                boxShadow: "0px 24px 52px 1px rgba(0,0,0,0.36)",
              }}
            />
          </Hidden>
          <Hidden only={["lg", "xl"]}>
            <div
              className="img-preview"
              style={{
                maxWidth: "260px",
                maxHeight: "260px",
                minWidth: "260px",
                minHeight: "260px",
                marginLeft: "auto",
                marginRight: "auto",
                backgroundPosition: "center",
                overflow: "hidden",
                padding: "0",
                boxShadow: "0px 24px 52px 1px rgba(0,0,0,0.36)",
              }}
            />
          </Hidden>
        </>
      )}
      
    </div>
  );
}
