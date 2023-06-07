import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './video.css'

const Video = (props) => {
  return (
    <div className="video-container">
      <Helmet>
        <title>Video - exported project</title>
        <meta property="og:title" content="Video - exported project" />
      </Helmet>
      <div className="video-header">
        <div className="video-logo">
          <img alt="iconI247" src="/iconI247-xm1h.svg" className="video-icon" />
          <img
            alt="logotypeI247"
            src="/logotypeI247-igao.svg"
            className="video-logotype"
          />
        </div>
        <div className="video-navigation">
          <div className="video-navigationitem button">
            <div className="video-active">
              <span className="video-text Headline5">
                <span>Product Overview</span>
              </span>
            </div>
          </div>
          <div className="video-navigationitem1 button">
            <div className="video-active1">
              <span className="video-text2 Headline5">Test Drive a Demo</span>
            </div>
          </div>
        </div>
      </div>
      <div className="video-div">
        <DangerousHTML
          html={`<head>
  <link href="https://vjs.zencdn.net/8.3.0/video-js.css" rel="stylesheet" />

  <!-- If you'd like to support IE8 (for Video.js versions prior to v7) -->
  <!-- <script src="https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"></script> -->
</head>
<body>
  <video
    id="my-video"
    class="video-js"
    controls
    preload="auto"
    width="1200px"
    height="auto"
    poster="MY_VIDEO_POSTER.jpg"
    data-setup="{}"
  >
    <source src="https://surenzh.art/img/industry2.mp4" type="video/mp4" />
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"
        >supports HTML5 video</a
      >
    </p>
  </video>

  <script src="https://vjs.zencdn.net/8.3.0/video.min.js"></script>
</body>`}
        ></DangerousHTML>
      </div>
      <div className="video-footer">
        <div className="video-left">
          <div className="video-logo1">
            <img
              alt="iconI247"
              src="/iconI247-zkm.svg"
              className="video-icon1"
            />
            <img
              alt="logotypeI247"
              src="/logotypeI247-xyryb.svg"
              className="video-logotype1"
            />
          </div>
          <div className="video-paragraph">
            <span className="video-text3 Subtitle1">
              <span>Сomputer vision video processing platform</span>
            </span>
            <span className="video-text5 Caption1">
              <span>
                Welcome to video processing platform, where computer vision
                technology combines with cutting-edge algorithms to create a
                safe and enjoyable experience for individuals with
                photosensitivity.
              </span>
            </span>
          </div>
        </div>
        <div className="video-texts">
          <span className="video-text7 Overline1">
            <span>О. Поліщук ТР-93 ІАТЕ НТУУ “КПІ”</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Video
