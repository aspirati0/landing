import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './demo.css'

const Demo = (props) => {
  return (
    <div className="demo-container">
      <Helmet>
        <title>Demo - exported project</title>
        <meta property="og:title" content="Demo - exported project" />
      </Helmet>
      <div className="demo-header">
        <div className="demo-logo">
          <img alt="iconI247" src="/iconI247-xm1h.svg" className="demo-icon" />
          <img
            alt="logotypeI247"
            src="/logotypeI247-igao.svg"
            className="demo-logotype"
          />
        </div>
        <div className="demo-navigation">
          <div className="demo-navigationitem button">
            <Link to="/" className="demo-navlink">
              <div className="demo-active">
                <span className="demo-text Headline5">
                  <span>Product Overview</span>
                </span>
              </div>
            </Link>
          </div>
          <div className="demo-navigationitem1 button">
            <div className="demo-active1">
              <span className="demo-text02 Headline5">Test Drive a Demo</span>
            </div>
          </div>
        </div>
      </div>
      <div className="demo-content">
        <div className="demo-progress">
          <div className="demo-steps">
            <div className="demo-step">
              <span className="demo-text03 Subtitle1">
                <span>Upload a File</span>
              </span>
              <div className="demo-circlestroke">
                <div className="demo-circle"></div>
              </div>
            </div>
            <div className="demo-step1">
              <span className="demo-text05 Subtitle1">
                <span>Auto-Processing</span>
              </span>
              <div className="demo-circlestroke1">
                <div className="demo-circle1"></div>
              </div>
            </div>
            <div className="demo-step2">
              <span className="demo-text07 Subtitle1">
                <span>Watch the Video</span>
              </span>
              <div className="demo-circlestroke2">
                <div className="demo-circle2"></div>
              </div>
            </div>
            <img
              alt="loadI276"
              src="/loadI276-01rh.png"
              className="demo-load"
            />
          </div>
        </div>
        <div className="demo-cards">
          <div className="demo-card">
            <div className="demo-iconwithbg">
              <img
                alt="VideolibraryI283"
                src="/VideolibraryI283-6ax9.svg"
                className="demo-videolibrary"
              />
            </div>
            <span className="demo-text09 Body1">
              <span>No video? No problem! Test drive one of ours.</span>
            </span>
            <button className="demo-buttoncontainer">
              <button className="demo-button button">
                <span className="demo-text11 Button2">
                  <span>Borrow a Video</span>
                </span>
              </button>
            </button>
          </div>
          <div className="demo-card1">
            <div className="demo-iconwithbg1">
              <img
                alt="FileuploadI283"
                src="/FileuploadI283-4h9q.svg"
                className="demo-fileupload"
              />
            </div>
            <span className="demo-text13 Body1">
              <span>
                Upload a video from the computer. Drag and drop your file or use
                the button below.
              </span>
            </span>
            <button type="button" className="demo-buttoncontainer1">
              <button type="submit" className="demo-button1 button">
                <span className="demo-text15 Button2">
                  <span>Choose a File</span>
                </span>
              </button>
            </button>
          </div>
          <div className="demo-card2">
            <div className="demo-iconwithbg2">
              <img
                alt="LinkI283"
                src="/LinkI283-lrf.svg"
                className="demo-link"
              />
            </div>
            <span className="demo-text17 Body1">
              <span>
                Upload a video from the link. Paste or type your link below.
              </span>
            </span>
            <div className="demo-inputfieldlink">
              <input
                type="text"
                placeholder="Input your link here"
                className="demo-input"
              />
            </div>
          </div>
        </div>
        <div className="demo-info">
          <div className="demo-infooutline">
            <div className="demo-group">
              <img
                alt="VectorI276"
                src="/VectorI276-7dv.svg"
                className="demo-vector"
              />
            </div>
          </div>
          <span className="demo-text19 Subtitle2">
            <span>
              Each file must weight &lt;2GB, supported formats are: .mp4, .avi,
              .mov
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
      </div>
      <div className="demo-footer">
        <div className="demo-left">
          <div className="demo-logo1">
            <img
              alt="iconI247"
              src="/iconI247-zkm.svg"
              className="demo-icon1"
            />
            <img
              alt="logotypeI247"
              src="/logotypeI247-xyryb.svg"
              className="demo-logotype1"
            />
          </div>
          <div className="demo-paragraph">
            <span className="demo-text21 Subtitle1">
              <span>Сomputer vision video processing platform</span>
            </span>
            <span className="demo-text23 Caption1">
              <span>
                Welcome to video processing platform, where computer vision
                technology combines with cutting-edge algorithms to create a
                safe and enjoyable experience for individuals with
                photosensitivity.
              </span>
            </span>
          </div>
        </div>
        <div className="demo-texts">
          <span className="demo-text25 Overline1">
            <span>О. Поліщук ТР-93 ІАТЕ НТУУ “КПІ”</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Demo
