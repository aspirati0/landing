import React from 'react'

import { Helmet } from 'react-helmet'

import './components.css'

const Components = (props) => {
  return (
    <div className="components-container">
      <Helmet>
        <title>Components - exported project</title>
        <meta property="og:title" content="Components - exported project" />
      </Helmet>
      <div className="components-inputfieldlink">
        <div className="components-error">
          <span className="components-text Subtitle2">
            <span>This link is broken, please try another one</span>
          </span>
        </div>
        <input
          type="text"
          placeholder="https://www.website.com.video.mp4"
          className="components-input"
        />
      </div>
      <div className="components-inputfieldlink1">
        <div className="components-error1">
          <span className="components-text02 Subtitle2">
            <span>Link is approved</span>
          </span>
        </div>
        <input
          type="text"
          placeholder="https://www.website.com.ua.video.mp4"
          className="components-input1"
        />
      </div>
      <div className="components-fileupload">
        <div className="components-headeritem">
          <span className="components-text04 Subtitle1">
            <span>Choosen file:</span>
          </span>
          <span className="components-text06 Body2">
            <span>video_name.mp4</span>
          </span>
        </div>
        <div className="components-file">
          <div className="components-fileupload1">
            <div className="components-progress"></div>
            <span className="components-text08 Subtitle1">
              <span>100%</span>
            </span>
          </div>
        </div>
      </div>
      <div className="components-fileupload2">
        <div className="components-headeritem1">
          <span className="components-text10 Subtitle1">
            <span>Choosen file:</span>
          </span>
          <span className="components-text12 Body2">
            <span>video_name.mp4</span>
          </span>
        </div>
        <div className="components-file1">
          <div className="components-fileupload3">
            <div className="components-progress1">
              <div className="components-loader"></div>
            </div>
            <span className="components-text14 Subtitle1">
              <span>90%</span>
            </span>
          </div>
        </div>
      </div>
      <div className="components-fileupload4">
        <div className="components-headeritem2">
          <span className="components-text16 Subtitle1">
            <span>Choosen file:</span>
          </span>
          <span className="components-text18 Body2">
            <span>video_name.mp4</span>
          </span>
        </div>
        <div className="components-file2">
          <div className="components-fileupload5">
            <div className="components-progress2"></div>
            <span className="components-text20 Subtitle1">
              <span>0%</span>
            </span>
          </div>
        </div>
      </div>
      <div className="components-techlogos">
        <div className="components-techlogo05">
          <div className="components-logo1">
            <img
              alt="Unknown1I284"
              src="/Unknown1I284-z8wv.png"
              className="components-unknown1"
            />
          </div>
        </div>
        <div className="components-techlogo04">
          <div className="components-logo11">
            <img
              alt="w3car21I284"
              src="/w3car21I284-r76.png"
              className="components-w3car21"
            />
          </div>
        </div>
        <div className="components-techlogo03">
          <div className="components-logo12">
            <img
              alt="PythonlogoandwordmarkI284"
              src="/PythonlogoandwordmarkI284-sqyf.png"
              className="components-pythonlogoandwordmark"
            />
          </div>
        </div>
        <div className="components-techlogo02">
          <div className="components-logo13">
            <img
              alt="openCVI284"
              src="/openCVI284-9lfd.png"
              className="components-open-cv"
            />
          </div>
        </div>
        <div className="components-techlogo01">
          <div className="components-logo14">
            <img
              alt="twitterimageI284"
              src="/twitterimageI284-17prj.png"
              className="components-twitterimage"
            />
          </div>
        </div>
        <div className="components-techlogo06">
          <div className="components-logo15">
            <img
              alt="aee15381I284"
              src="/aee15381I284-esfo.png"
              className="components-aee15381"
            />
          </div>
        </div>
      </div>
      <button className="components-radiobutton button">
        <div className="components-circlestroke">
          <div className="components-circle">
            <div className="components-circle1"></div>
          </div>
        </div>
      </button>
      <button className="components-radiobutton1 button">
        <div className="components-circlestroke1">
          <div className="components-circle2"></div>
        </div>
      </button>
      <button className="components-button button">
        <span className="components-text22 Button1">
          <span>Cancel</span>
        </span>
      </button>
      <button className="components-button1 button">
        <div className="components-texticon">
          <span className="components-text24 Button1">
            <span>Process Video</span>
          </span>
          <svg viewBox="0 0 1024 1024" className="components-icon">
            <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
          </svg>
        </div>
      </button>
      <button className="components-button2 button">
        <span className="components-text26 Button1">
          <span>Process Video</span>
        </span>
      </button>
      <button className="components-button3 button">
        <span className="components-text28 Button1">
          <span>Process Video</span>
        </span>
      </button>
      <button className="components-button4 button">
        <span className="components-text30 Button2">
          <span>Choose a File</span>
        </span>
      </button>
      <div className="components-videocard">
        <div className="components-videocardcontent">
          <div className="components-postercontainer"></div>
          <div className="components-title">
            <span className="components-text32 Headline5">
              <span>
                LOVE DEATH + ROBOTS VOLUME 3 | Official Trailer | Netflix
              </span>
            </span>
          </div>
        </div>
        <button className="components-radiobutton2">
          <div className="components-circlestroke2">
            <div className="components-circle3">
              <div className="components-circle4"></div>
            </div>
          </div>
        </button>
        <div className="components-timelabel">
          <span className="components-text34 Subtitle1">
            <span>02:01</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Components
