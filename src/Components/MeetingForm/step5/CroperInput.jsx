import React, {useRef} from 'react';
import Cropper from 'react-cropper';
import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import 'cropperjs/dist/cropper.css';


const useStyles = makeStyles((theme) => ({

    image: {
      [theme.breakpoints.down("md")]: {
  
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
      },
      [theme.breakpoints.up("lg")]: {
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
      },
    },
  }));


const CropperInput = ({imagePreview, setImage}) => {
    const classes = useStyles();

    const cropper = useRef(null);
    const cropImage = () => {
        if (typeof cropper.current === 'undefined') {
            return;
        }
        console.log(cropper.current.src)
        setImage(cropper.current.src)
      //  cropper.current.getCroppedCanvas().toBlob(blob => {
      //      setImage(blob);
      //  });
    };
    return (
        <div  style={{display: "flex", justifyContent: "center", maxWidth: "800px", marginLeft: "auto", marginRight: "auto", alignItems: "center"}}>

        <div      className={classes.image}>
        <Hidden only={["xs", "sm", "md"]}>
        <Cropper
            ref={cropper}
            src={imagePreview}
            style={{  maxWidth: "360px",
            maxHeight: "360px",
            minWidth: "360px",
            minHeight: "360px",
            marginTop: "20px"
        }}
            preview='.img-preview'
            aspectRatio={1}
            viewMode={1}
            dragMode='move'
            guides={false}
            scalable={true}
            cropBoxMovable={true}
            cropBoxResizable={true}
            crop={cropImage}
        />
        </Hidden>
        <Hidden only={["lg", "xl"]}>
            <Cropper
            ref={cropper}
            src={imagePreview}
            style={{maxWidth: "260px",
            maxHeight: "260px",
            minWidth: "260px",
            marginTop: "20px",
            minHeight: "260px",}}
            preview='.img-preview'
            aspectRatio={1}
            viewMode={1}
            dragMode='move'
            guides={false}
            scalable={true}
            cropBoxMovable={true}
            cropBoxResizable={true}
            crop={cropImage}
        />
        </Hidden>
        </div>
        </div>
    );
};

export default CropperInput;