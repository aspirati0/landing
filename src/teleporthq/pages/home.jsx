import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>exported project</title>
        <meta property="og:title" content="exported project" />
      </Helmet>
      <div className="home-landing">
        <div className="home-mainscreen">
          <div className="home-header">
            <div className="home-logo">
              <img
                alt="iconI247"
                src="/iconI247-xm1h.svg"
                className="home-icon"
              />
              <img
                alt="logotypeI247"
                src="/logotypeI247-igao.svg"
                className="home-logotype"
              />
            </div>
            <div className="home-navigation">
              <div className="home-navigationitem button">
                <div className="home-active">
                  <span className="home-text Headline5">
                    <span>Product Overview</span>
                  </span>
                </div>
              </div>
              <div className="home-navigationitem1 button">
                <Link to="/demo" className="home-navlink">
                  <div className="home-active1">
                    <span className="home-text02 Headline5">
                      Test Drive a Demo
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="home-hero">
            <div className="home-herosection">
              <div className="home-paddings">
                <span className="home-text03 Headline1">
                  <span>Empowering a Safer Viewing Experience</span>
                </span>
                <Link to="/demo" className="home-button">
                  <div className="home-texticon">
                    <span className="home-text05 Button1">
                      <span>Try a Demo</span>
                    </span>
                    <img
                      alt="ArrowforwardI247"
                      src="/ArrowforwardI247-ldwo.svg"
                      className="home-arrowforward"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="home-techniques">
          <span className="home-text07 Headline3">
            <span>Techniques in order to make content more accessible</span>
          </span>
          <div className="home-paragraph">
            <div className="home-row1">
              <div className="home-itemtech">
                <div className="home-iconwithbg">
                  <img
                    alt="ContentcutI247"
                    src="/ContentcutI247-qkmb.svg"
                    className="home-contentcut"
                  />
                </div>
                <span className="home-text09 Body0">
                  <span>Trimming out parts of video that contain flashes</span>
                </span>
              </div>
              <div className="home-itemtech1">
                <div className="home-iconwithbg1">
                  <img
                    alt="BrightnessmediumI247"
                    src="/BrightnessmediumI247-a642.svg"
                    className="home-brightnessmedium"
                  />
                </div>
                <span className="home-text11 Body0">
                  <span>Reducing contrast for any flashing content</span>
                </span>
              </div>
              <div className="home-itemtech2">
                <div className="home-iconwithbg2">
                  <img
                    alt="VisibilityoffI247"
                    src="/VisibilityoffI247-re9.svg"
                    className="home-visibilityoff"
                  />
                </div>
                <span className="home-text13 Body0">
                  <span>
                    Hiding visual content if a flash is long and show closed
                    captions instead
                  </span>
                </span>
              </div>
            </div>
            <div className="home-row2">
              <div className="home-itemtech3">
                <div className="home-iconwithbg3">
                  <img
                    alt="PausepresentationI247"
                    src="/PausepresentationI247-qftk.svg"
                    className="home-pausepresentation"
                  />
                </div>
                <span className="home-text15 Body0">
                  <span>
                    Providing a mechanism to suppress any flashing content
                    before it begins
                  </span>
                </span>
              </div>
              <div className="home-itemtech4">
                <div className="home-iconwithbg4">
                  <img
                    alt="SettingsbrightnessI247"
                    src="/SettingsbrightnessI247-n3.svg"
                    className="home-settingsbrightness"
                  />
                </div>
                <span className="home-text17 Body0">
                  <span>
                    Dropping the contrast ratio if 3 flashes within one second
                    are detected
                  </span>
                </span>
              </div>
              <div className="home-itemtech5">
                <div className="home-iconwithbg5">
                  <div className="home-videosettings">
                    <div className="home-group"></div>
                    <div className="home-group1">
                      <div className="home-group2">
                        <img
                          alt="VectorI247"
                          src="/VectorI247-eie.svg"
                          className="home-vector"
                        />
                        <img
                          alt="VectorI247"
                          src="/VectorI247-fot.svg"
                          className="home-vector1"
                        />
                        <img
                          alt="VectorI247"
                          src="/VectorI247-096g.svg"
                          className="home-vector2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="home-text19 Body0">
                  <span>Allowing users to set a custom flash rate limit</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-text21">
          <span className="home-text22 Headline3">
            <span>Objectives and User Needs</span>
          </span>
          <div className="home-paragraph1">
            <div className="home-column1">
              <span className="home-text24 Body0">
                <span>
                  Web accessibility is defined as a basic human right in the UN
                  Convention on the Rights of Persons with Disabilities (UN
                  CRPD). The unavailability of video content hinders the
                  acquisition of information about the physical and social
                  environment and thus can reduce the quality of a person&apos;s
                  life. Despite efforts to create more inclusive video content,
                  many videos still include visuals that can be harmful to
                  people with photosensitivity.
                </span>
              </span>
              <span className="home-text26 Body0">
                <span>
                  For some people with seizure disorders, flashes of light can
                  trigger a seizure. Most people don&apos;t know they have the
                  disorder until an attack occurs. For example, in 1997, more
                  than 700 children were hospitalized due to a cartoon on
                  Japanese television, including about 500 with convulsions.
                </span>
              </span>
            </div>
            <div className="home-column2">
              <span className="home-text28 Body0">
                <span>
                  While some platforms, offer tools that allow people to flag
                  videos with potentially harmful content, it is ultimately up
                  to users to identify and regulate their own content. However,
                  the warnings do not work well because they are often missed,
                  especially by children who may not actually be able to read
                  them.
                </span>
              </span>
              <span className="home-text30 Body0">
                <span>
                  The audience of users with sensitivity to flashes is not
                  limited to people with photosensitive epilepsy, because
                  photosensitivity occurs in all types of epilepsy (0.6%-1.0% of
                  the population [WHO]). In addition, light sensitivity can
                  occur with migraine (14.7% of the population [MRF]), ASD (1%
                  of the population [CDCP]), visual snow syndrome (2-3% of the
                  population [VSI]) and ADHD (5.3% of the population [WHO]).
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="home-carousel">
          <span className="home-text32 Headline3">
            <span>Implementing Guidelines &amp; Technologies</span>
          </span>
          <AppComponent></AppComponent>
        </div>
        <div className="home-footer">
          <div className="home-left">
            <div className="home-logo1">
              <img
                alt="iconI247"
                src="/iconI247-zkm.svg"
                className="home-icon1"
              />
              <img
                alt="logotypeI247"
                src="/logotypeI247-xyryb.svg"
                className="home-logotype1"
              />
            </div>
            <div className="home-paragraph2">
              <span className="home-text34 Subtitle1">
                <span>Сomputer vision video processing platform</span>
              </span>
              <span className="home-text36 Caption1">
                <span>
                  Welcome to video processing platform, where computer vision
                  technology combines with cutting-edge algorithms to create a
                  safe and enjoyable experience for individuals with
                  photosensitivity.
                </span>
              </span>
            </div>
          </div>
          <div className="home-texts">
            <span className="home-text38 Overline1">
              <span>О. Поліщук ТР-93 ІАТЕ НТУУ “КПІ”</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
