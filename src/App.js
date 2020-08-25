import React, { useEffect } from "react";
import { ZoomMtg } from "@zoomus/websdk";
import axios from "axios"
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
      leaveUrl: "https://master.d2v2dkbt553b44.amplifyapp.com/",
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
    const generateSignitures = async() => {
      const  result = await axios.post(`https://rto4pey206.execute-api.us-east-1.amazonaws.com/dev/generatesigniture/0/97704764972`)
       console.log(JSON.stringify(result))
      
      console.log(`The results are: ${result.data.secret}`)

      setTimeout(() => {
        joinMeeting(result.data.secret, meetConfig);
      }, 1000);
     }
     generateSignitures()
  }, []);

  return <div className="App">Zoom Testing</div>;
}

export default App;
