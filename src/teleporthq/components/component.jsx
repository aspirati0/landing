import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className="component-container">
      {slideNumber === 1 && (
        <div className="component-carouselitem1">
          <img
            alt={props.Arrowback_alt}
            src={props.Arrowback_src}
            onClick={() => setSlideNumber(6)}
            className="component-arrowback"
          />
          <div className="component-tech">
            <div className="component-techlogo04">
              <div className="component-logo1">
                <img
                  alt={props.w3car21_alt}
                  src={props.w3car21_src}
                  className="component-w3car21"
                />
              </div>
            </div>
            <div className="component-paragraph">
              <span className="component-text Body0">
                <span>
                  In alignment with the World Wide Web Consortium accessibility
                  guidelines, this platform incorporates W3C&apos;s
                  recommendations for flash detection.
                </span>
              </span>
              <span className="component-text02 Body0">
                The W3C is an international community that develops open
                standards for the web, including guidelines to ensure
                accessibility for all users.
              </span>
            </div>
          </div>
          <img
            alt={props.Arrowforward_alt}
            src={props.Arrowforward_src}
            onClick={() => setSlideNumber(2)}
            className="component-arrowforward"
          />
        </div>
      )}
      {slideNumber === 2 && (
        <div className="component-carouselitem2">
          <img
            alt={props.Arrowback_alt1}
            src={props.Arrowback_src1}
            onClick={() => setSlideNumber(1)}
            className="component-arrowback1"
          />
          <div className="component-tech1">
            <div className="component-techlogo041">
              <div className="component-logo11">
                <img
                  alt={props.image_alt}
                  src={props.image_src}
                  className="component-image"
                />
              </div>
            </div>
            <div className="component-paragraph1">
              <span className="component-text03">
                <span>
                  Python is a versatile programming language that is widely used
                  for scientific computing, data analysis, and machine learning.
                </span>
                <br></br>
              </span>
              <span className="component-text06">
                <span>
                  Libraries for video processing and analysis, such as MoviePy
                  can be used to perform a variety of operations on videos, such
                  as cutting clips, adding text and captions.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <img
            alt={props.Arrowforward_alt1}
            src={props.Arrowforward_src1}
            onClick={() => setSlideNumber(3)}
            className="component-arrowforward1"
          />
        </div>
      )}
      {slideNumber === 3 && (
        <div className="component-carouselitem3">
          <img
            alt={props.Arrowback_alt2}
            src={props.Arrowback_src2}
            onClick={() => setSlideNumber(2)}
            className="component-arrowback2"
          />
          <div className="component-tech2">
            <div className="component-techlogo042">
              <div className="component-logo12">
                <img
                  alt={props.image_alt1}
                  src={props.image_src1}
                  className="component-image1"
                />
              </div>
            </div>
            <div className="component-paragraph2">
              <span className="component-text09">
                <span>Video.js allows to make your player yours</span>
                <br className="Body0"></br>
                <span>
                  with the world&apos;s most popular open source HTML5 player
                  framework.
                </span>
              </span>
              <span className="component-text13">{props.text}</span>
            </div>
          </div>
          <img
            alt={props.Arrowforward_alt2}
            src={props.Arrowforward_src2}
            onClick={() => setSlideNumber(4)}
            className="component-arrowforward2"
          />
        </div>
      )}
      {slideNumber === 4 && (
        <div className="component-carouselitem4">
          <img
            alt={props.Arrowback_alt3}
            src={props.Arrowback_src3}
            onClick={() => setSlideNumber(3)}
            className="component-arrowback3"
          />
          <div className="component-tech3">
            <div className="component-techlogo043">
              <div className="component-logo13">
                <img
                  alt={props.image_alt2}
                  src={props.image_src2}
                  className="component-image2"
                />
              </div>
            </div>
            <div className="component-paragraph3">
              <span className="component-text14">
                <span>
                  OpenCV is a computer vision library that provides several
                  algorithms for video processing. It includes object detection
                  and motion analysis.
                </span>
                <br></br>
              </span>
              <span className="component-text17">{props.text1}</span>
            </div>
          </div>
          <img
            alt={props.Arrowforward_alt3}
            src={props.Arrowforward_src3}
            onClick={() => setSlideNumber(5)}
            className="component-arrowforward3"
          />
        </div>
      )}
      {slideNumber === 5 && (
        <div className="component-carouselitem5">
          <img
            alt={props.Arrowback_alt4}
            src={props.Arrowback_src4}
            onClick={() => setSlideNumber(4)}
            className="component-arrowback4"
          />
          <div className="component-tech4">
            <div className="component-techlogo044">
              <div className="component-logo14">
                <img
                  alt={props.image_alt3}
                  src={props.image_src3}
                  className="component-image3"
                />
              </div>
            </div>
            <div className="component-paragraph4">
              <span className="component-text18">{props.text2}</span>
              <span className="component-text19">{props.text3}</span>
            </div>
          </div>
          <img
            alt={props.Arrowforward_alt4}
            src={props.Arrowforward_src4}
            onClick={() => setSlideNumber(6)}
            className="component-arrowforward4"
          />
        </div>
      )}
      {slideNumber === 6 && (
        <div className="component-carouselitem6">
          <img
            alt={props.Arrowback_alt5}
            src={props.Arrowback_src5}
            onClick={() => setSlideNumber(5)}
            className="component-arrowback5"
          />
          <div className="component-tech5">
            <div className="component-techlogo045">
              <div className="component-logo15">
                <img
                  alt={props.image_alt4}
                  src={props.image_src4}
                  className="component-image4"
                />
              </div>
            </div>
            <div className="component-paragraph5">
              <span className="component-text20">{props.text4}</span>
              <span className="component-text21">{props.text5}</span>
            </div>
          </div>
          <img
            alt={props.Arrowforward_alt5}
            src={props.Arrowforward_src5}
            onClick={() => setSlideNumber(1)}
            className="component-arrowforward5"
          />
        </div>
      )}
      <div className="component-carouselpagination">
        <div className="component-dot"></div>
        <div className="component-dot1"></div>
        <div className="component-dot2"></div>
        <div className="component-dot3"></div>
        <div className="component-dot4"></div>
        <div className="component-dot5"></div>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  Arrowback_src: '/Arrowback2473-vrx.svg',
  Arrowback_alt: 'Arrowback2473',
  Arrowforward_src: '/Arrowforward2473-46ws.svg',
  Arrowforward_alt: 'Arrowforward2473',
  Arrowback_src1: '/Arrowback2473-vrx.svg',
  Arrowback_alt1: 'Arrowback2473',
  Arrowforward_src1: '/Arrowforward2473-46ws.svg',
  Arrowforward_alt1: 'Arrowforward2473',
  Arrowback_src2: '/Arrowback2473-vrx.svg',
  Arrowback_alt2: 'Arrowback2473',
  Arrowforward_src2: '/Arrowforward2473-46ws.svg',
  Arrowforward_alt2: 'Arrowforward2473',
  Arrowback_src3: '/Arrowback2473-vrx.svg',
  Arrowback_alt3: 'Arrowback2473',
  Arrowforward_src3: '/Arrowforward2473-46ws.svg',
  Arrowforward_alt3: 'Arrowforward2473',
  Arrowback_src4: '/Arrowback2473-vrx.svg',
  Arrowback_alt4: 'Arrowback2473',
  Arrowforward_src4: '/Arrowforward2473-46ws.svg',
  Arrowforward_alt4: 'Arrowforward2473',
  Arrowback_src5: '/Arrowback2473-vrx.svg',
  Arrowback_alt5: 'Arrowback2473',
  Arrowforward_src5: '/Arrowforward2473-46ws.svg',
  Arrowforward_alt5: 'Arrowforward2473',
  text: 'It is a web video player built from the ground up for an HTML5 world. It supports HTML5 video and modern streaming formats.',
  text1:
    ' In this case it can be used to detect flashes in video frames and replace them with interpolated or averaged frames.',
  text2:
    'SciPy provides algorithms for optimization, integration, interpolation, eigenvalue problems, algebraic equations, differential equations, statistics and many more.',
  text3:
    ' It is used for the detection of saturated red transitions to compute euclidean distance and check mean RGB values.',
  text4:
    'NumPy is the fundamental package for scientific computing in Python. It is a library that provides a multidimensional array object, various derived objects and much more.',
  text5:
    'For example, an assortment of routines for fast operations on arrays, including mathematical, logical, shape manipulation, sorting, selecting...',
  w3car21_src: '/w3car21I247-a18b.png',
  w3car21_alt: 'w3car21I247',
  image_src: '/PythonlogoandwordmarkI284-sqyf.png',
  image_alt: 'image',
  image_src1: '/aee15381I284-esfo.png',
  image_alt1: 'image',
  image_src2: '/openCVI284-9lfd.png',
  image_alt2: 'image',
  image_src3: '/Unknown1I284-z8wv.png',
  image_alt3: 'image',
  image_src4: '/twitterimageI284-17prj.png',
  image_alt4: 'image',
}

AppComponent.propTypes = {
  Arrowback_src: PropTypes.string,
  Arrowback_alt: PropTypes.string,
  Arrowforward_src: PropTypes.string,
  Arrowforward_alt: PropTypes.string,
  Arrowback_src1: PropTypes.string,
  Arrowback_alt1: PropTypes.string,
  Arrowforward_src1: PropTypes.string,
  Arrowforward_alt1: PropTypes.string,
  Arrowback_src2: PropTypes.string,
  Arrowback_alt2: PropTypes.string,
  Arrowforward_src2: PropTypes.string,
  Arrowforward_alt2: PropTypes.string,
  Arrowback_src3: PropTypes.string,
  Arrowback_alt3: PropTypes.string,
  Arrowforward_src3: PropTypes.string,
  Arrowforward_alt3: PropTypes.string,
  Arrowback_src4: PropTypes.string,
  Arrowback_alt4: PropTypes.string,
  Arrowforward_src4: PropTypes.string,
  Arrowforward_alt4: PropTypes.string,
  Arrowback_src5: PropTypes.string,
  Arrowback_alt5: PropTypes.string,
  Arrowforward_src5: PropTypes.string,
  Arrowforward_alt5: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  w3car21_src: PropTypes.string,
  w3car21_alt: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src4: PropTypes.string,
  image_alt4: PropTypes.string,
}

export default AppComponent
