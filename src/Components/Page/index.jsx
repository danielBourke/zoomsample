import React, {
    forwardRef,
    useEffect, useCallback
  } from 'react';
  import { Helmet } from 'react-helmet';
  import { useLocation } from 'react-router';
import track from "../../app/utils/analytics"
  const Page = forwardRef(({
    title,
    children,
    ...rest
  }, ref) => {
    const location = useLocation();
  
    const sendPageViewEvent = useCallback(() => {
      track.pageview({
        page_path: location.pathname
      });
    }, [location]);
  
    useEffect(() => {
      sendPageViewEvent();
    }, [sendPageViewEvent]);
  
    return (
      <div
        ref={ref}
        {...rest}
      >
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {children}
      </div>
    );
  });
  

  
  export default Page;
  