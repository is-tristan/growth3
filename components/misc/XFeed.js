"use client";

import React, { useEffect } from "react";

export default function XFeed() {

  useEffect(() => {

    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (

    <div className="row xRow">

      <div className="wrapper xWrapper">

        <div className="heading centered">

          <h2>Don't miss our X <span className="green">updates</span>.</h2>

        </div> {/* .heading */}

        <a
          className="twitter-timeline xTimeline"
          href="https://twitter.com/ModBoxG3"
          data-height="600"
          data-theme="dark"
        ></a> {/* .xTimeline */}

      </div> {/*.wrapper */}

    </div>

  );

};
