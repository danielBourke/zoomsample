import React, { useEffect } from "react";
import { ZoomMtg } from "@zoomus/websdk";
import { useParams } from "react-router-dom";
import axios from "axios";
let apiKeys = {
  apiKey: process.env.REACT_APP_ZOOM_API_KEY,
  apiSecret: process.env.REACT_APP_ZOOM_API_SECRET_KEY,
};
let meetConfig = {
  apiKey: apiKeys.apiKey,
  meetingNumber: "97704764972",
  userName: "daniel",
  userEmail: "daniel.bourke5000@gmail.com", // must be the attendee email address
  passWord: "5APBfU",
  role: 0,
};

const ZoomMeeting = () => {
    const {id, passcode} = useParams()

  console.log(apiKeys.apiKey);

  useEffect(() => {
    ZoomMtg.setZoomJSLib("https://jssdk.zoomus.cn/1.8.0/lib", "/av");
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();

    /**
     * You should not visible api secret key on frontend
     * Signature must be generated on server
     * https://marketplace.zoom.us/docs/sdk/native-sdks/web/essential/signature
     */

    function joinMeeting(signature, meetConfig) {
      ZoomMtg.init({
        leaveUrl: "https://master.d2v2dkbt553b44.amplifyapp.com/",
        isSupportAV: true,
        success: function (success) {
          console.log("Init Success ", success);
          ZoomMtg.join({
            meetingNumber: id,
            userName: meetConfig.userName,
            signature: signature,
            apiKey: meetConfig.apiKey,
            passWord: passcode,
  
            success: (success) => {
              console.log(success);
            },
  
            error: (error) => {
              console.log(error);
            },
          });
        },
      });
    }

    const generateSignitures = async () => {
      const result = await axios.post(
        `https://rto4pey206.execute-api.us-east-1.amazonaws.com/dev/generatesigniture/0/${id}`
      );
      console.log(JSON.stringify(result));

      console.log(`The results are: ${result.data.secret}`);

      setTimeout(() => {
        joinMeeting(result.data.secret, meetConfig);
      }, 1000);
    };
    generateSignitures();
  }, [id, passcode]);

  return <div className="App">Zoom </div>;
};

export default ZoomMeeting;
