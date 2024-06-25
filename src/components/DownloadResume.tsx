"use client";
import React from 'react'

const DownloadResume = () => {

  const showResume = () => {
    window.open("file:///E:/AKProject/aniketnwportfolio/public/assets/Aniket__Resume_NW.pdf", "_blank");
  };

  return (
    <button className="p-5 border-r-2" onClick={showResume}>My Resume</button>
  )
}

export default DownloadResume