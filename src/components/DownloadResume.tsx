"use client";
import React from 'react'


const DownloadResume = () => {

  const showResume = () => {
    window.open("", "_blank");
  };

  return (
    <button className="p-5 rounded-md" onClick={showResume}>My Resume</button>
  )
}

export default DownloadResume