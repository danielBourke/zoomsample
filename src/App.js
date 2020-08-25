import React, { useEffect } from "react";
import { ZoomMtg } from "@zoomus/websdk";

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

function App() {

  console.log(apiKeys.apiKey)
  function joinMeeting(signature, meetConfig) {
    ZoomMtg.init({
      leaveUrl: "https://zoom.us/",
      isSupportAV: true,
      success: function (success) {
        console.log("Init Success ", success);
        ZoomMtg.join({
          meetingNumber: meetConfig.meetingNumber,
          userName: meetConfig.userName,
          signature: signature,
          apiKey: meetConfig.apiKey,
          passWord: meetConfig.passWord,

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
  useEffect(() => {
    ZoomMtg.setZoomJSLib("https://jssdk.zoomus.cn/1.8.0/lib", "/av");
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();

    /**
     * You should not visible api secret key on frontend
     * Signature must be generated on server
     * https://marketplace.zoom.us/docs/sdk/native-sdks/web/essential/signature
     */
    ZoomMtg.generateSignature({
      meetingNumber: meetConfig.meetingNumber,
      apiKey: meetConfig.apiKey,
      apiSecret: apiKeys.apiSecret,
      role: meetConfig.role,
      success: function (res) {
        console.log("res", res);

        setTimeout(() => {
          joinMeeting(res.result, meetConfig);
        }, 1000);
      },
    });
  }, []);

  return <div className="App">Zoom Testing</div>;
}

export default App;
