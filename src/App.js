// import logo from './logo.svg';
import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Rover from "./assets/img/rover.png";
// import MTlogo from "./assets/logo/Mtlogo.svg";
import AdvisorImage from "./assets/img/Dr. Md. Khalilur Rhaman.jpg";
import ICTD from "./assets/logo/ictd.png";
import Aqualink from "./assets/logo/aqualink.png";
import Protocase from "./assets/logo/protocase.webp";
import BracuE from "./assets/logo/be.png";
import Modal from "./Modal";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDrawerOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const info = [
    {
      name: "Students",
      value: "30+",
    },
    {
      name: "Generations",
      value: "9",
    },
    {
      name: "Awards",
      value: "18+",
    },
  ];

  const urcInfo = [
    {
      title: "URC 2017",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      teamImage: "https://via.placeholder.com/500",
      SAR: "",
      id: 2017,
    },
    {
      title: "URC 2018",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      teamImage: "https://via.placeholder.com/500",
      SAR: "",
      id: 2018,
    },
    {
      title: "URC 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      teamImage: "https://via.placeholder.com/500",
      SAR: (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/nrYdRLCD1c0?si=LxRConfAm-gHRnVX"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
      id: 2019,
    },
    {
      title: "URC 2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      teamImage: "https://via.placeholder.com/500",
      SAR: (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/y5UN2gw1dQ4?si=jM2rcp84NUBIaGHe"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
      id: 2020,
    },
    {
      title: "URC 2021",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      teamImage: "https://via.placeholder.com/500",
      SAR: (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/2oXj6f-N9iI?si=yv0IPjj-l5qaamak"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
      id: 2021,
    },
    {
      title: "URC 2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      teamImage: "https://via.placeholder.com/500",
      SAR: (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/Yno4DN9ENTA?si=h6ZdzVWLlcFYpUJJ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
      id: 2022,
    },
    {
      title: "URC 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      teamImage: "https://via.placeholder.com/500",
      SAR: (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/LcXDMddb31I?si=prA1D5GQ66_m5nKk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
      id: 2023,
    },
  ];

  const [activeInfo, setActiveInfo] = useState(null);

  return (
    <div className="overflow-hidden" id="home">
      <div className="pt-3 pb-3 px-5 flex flex-row w-full justify-between  bg-[#181818] z-50">
        <div>
          <svg
            className="mt-3 ml-3"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="61.976"
            viewBox="0 0 100 61.976"
          >
            <g
              id="Group_10"
              data-name="Group 10"
              transform="translate(162.979 -618.08)"
            >
              <g
                id="Group_5"
                data-name="Group 5"
                transform="translate(-151.955 618.08)"
              >
                <g id="Group_2" data-name="Group 2" transform="translate(0 0)">
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M551.731,42.5l-10.958-1.808a7.8,7.8,0,0,0,.167-5.886L551.923,33.7a9.747,9.747,0,0,0-1.1,4.384A10.862,10.862,0,0,0,551.731,42.5Z"
                    transform="translate(-527.419 -11.954)"
                    fill="#fff"
                  />
                  <g id="Group_1" data-name="Group 1">
                    <path
                      id="Path_2"
                      data-name="Path 2"
                      d="M534.522,16.08c.292.058.322.257.313.515-.061,1.929-.111,3.858-.164,5.787-.021.755.214,1,.977,1.027q1.961.057,3.922.107c.641.015.912-.238.931-.879q.089-2.931.168-5.864c.015-.513.165-.61.6-.351a7.362,7.362,0,0,1,3.9,6.963,7.327,7.327,0,0,1-4.449,6.626.408.408,0,0,0-.279.454c.077,1.611.137,3.221.2,4.885a7.729,7.729,0,0,0-6.784-.207c.157-1.732.31-3.429.464-5.148a8.085,8.085,0,0,1-2.567-1.983A7.625,7.625,0,0,1,533,17a3.335,3.335,0,0,0,.249-.226Z"
                      transform="translate(-529.953 -16.08)"
                      fill="#fff"
                    />
                    <path
                      id="Path_3"
                      data-name="Path 3"
                      d="M531.591,39.8c-.069-.281-.143-.56-.2-.844a5.472,5.472,0,1,1,1.1,2.328c-.062-.075-.139-.139-.209-.209Zm8.533-3.846a3.862,3.862,0,1,0-1.43,5.2A3.848,3.848,0,0,0,540.125,35.958Z"
                      transform="translate(-529.647 -12.275)"
                      fill="#fff"
                    />
                    <path
                      id="Path_4"
                      data-name="Path 4"
                      d="M538.5,36.024a2.617,2.617,0,0,1-1.027,3.556,2.625,2.625,0,1,1-2.52-4.606A2.617,2.617,0,0,1,538.5,36.024Z"
                      transform="translate(-529.104 -11.729)"
                      fill="#fff"
                    />
                  </g>
                </g>
                <g
                  id="Group_4"
                  data-name="Group 4"
                  transform="translate(56.753 0)"
                >
                  <path
                    id="Path_5"
                    data-name="Path 5"
                    d="M576.13,42.5l10.958-1.808a7.8,7.8,0,0,1-.167-5.886L575.937,33.7a9.731,9.731,0,0,1,1.1,4.384A10.838,10.838,0,0,1,576.13,42.5Z"
                    transform="translate(-575.937 -11.954)"
                    fill="#fff"
                  />
                  <g
                    id="Group_3"
                    data-name="Group 3"
                    transform="translate(9.282)"
                  >
                    <path
                      id="Path_6"
                      data-name="Path 6"
                      d="M594.112,16.08c-.293.058-.322.257-.314.515.06,1.929.11,3.858.164,5.787.021.755-.214,1-.977,1.027q-1.961.057-3.922.107c-.642.015-.912-.238-.932-.879-.059-1.954-.111-3.909-.168-5.864-.015-.513-.164-.61-.6-.351a7.366,7.366,0,0,0-3.9,6.963,7.33,7.33,0,0,0,4.451,6.626.408.408,0,0,1,.279.454c-.077,1.611-.137,3.221-.2,4.885a7.727,7.727,0,0,1,6.783-.207c-.156-1.732-.309-3.429-.464-5.148a8.088,8.088,0,0,0,2.568-1.983A7.626,7.626,0,0,0,595.636,17c-.09-.067-.167-.151-.251-.226Z"
                      transform="translate(-583.458 -16.08)"
                      fill="#fff"
                    />
                    <path
                      id="Path_7"
                      data-name="Path 7"
                      d="M595.546,41.078c-.07.069-.147.133-.21.209a5.5,5.5,0,1,1,1.1-2.328c-.06.284-.136.563-.2.844Zm-6.413.081a3.858,3.858,0,1,0-1.43-5.2A3.872,3.872,0,0,0,589.134,41.16Z"
                      transform="translate(-582.959 -12.275)"
                      fill="#fff"
                    />
                    <path
                      id="Path_8"
                      data-name="Path 8"
                      d="M588.238,36.024a2.618,2.618,0,0,0,1.026,3.556,2.625,2.625,0,1,0,2.521-4.606A2.617,2.617,0,0,0,588.238,36.024Z"
                      transform="translate(-582.415 -11.729)"
                      fill="#fff"
                    />
                  </g>
                </g>
              </g>
              <path
                id="Path_9"
                data-name="Path 9"
                d="M582.367,32.643a22.389,22.389,0,0,0-1.19-7.208,21.071,21.071,0,0,0-32.044,26.846,22.42,22.42,0,0,0,33.234-19.638Z"
                transform="translate(-678.198 602.879)"
                fill="#e82727"
              />
              <g
                id="Group_6"
                data-name="Group 6"
                transform="translate(-129.199 628.314)"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M580.544,24.372A22.42,22.42,0,0,1,548.5,51.218a21.165,21.165,0,0,0,3.242,3.916h6.8a.775.775,0,1,1,0,1.55h-4.976a21.074,21.074,0,0,0,26.979-32.312Z"
                  transform="translate(-548.365 -24.372)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M559.342,37.735a.827.827,0,0,1-.827.827h-9.3a.827.827,0,0,1-.826-.827h0a.826.826,0,0,1,.826-.826h9.3a.826.826,0,0,1,.827.826Z"
                  transform="translate(-548.391 -21.436)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_12"
                  data-name="Path 12"
                  d="M575.082,28.758a.723.723,0,0,1-.723.723h-5.993a.722.722,0,0,1-.722-.723h0a.722.722,0,0,1,.722-.722h5.993a.723.723,0,0,1,.723.722Z"
                  transform="translate(-543.882 -23.514)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_13"
                  data-name="Path 13"
                  d="M573.427,30.935a.722.722,0,0,1-.722.723h-6.1a.722.722,0,0,1-.722-.723h0a.722.722,0,0,1,.722-.723h6.1a.722.722,0,0,1,.722.723Z"
                  transform="translate(-544.294 -23.004)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_14"
                  data-name="Path 14"
                  d="M578.919,36.066a.414.414,0,0,1-.413.413h-6.1a.414.414,0,0,1-.414-.413h0a.414.414,0,0,1,.414-.413h6.1a.414.414,0,0,1,.413.413Z"
                  transform="translate(-542.863 -21.73)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_15"
                  data-name="Path 15"
                  d="M558.7,50.072a.776.776,0,0,0-.775-.775h-6.8a20.955,20.955,0,0,0,1.823,1.55h4.976A.776.776,0,0,0,558.7,50.072Z"
                  transform="translate(-547.75 -18.535)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_16"
                  data-name="Path 16"
                  d="M565.646,25.3a.774.774,0,0,1-.774.774h-7.336a.774.774,0,0,1-.774-.774h0a.775.775,0,0,1,.774-.775h7.336a.774.774,0,0,1,.774.775Z"
                  transform="translate(-546.431 -24.337)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_17"
                  data-name="Path 17"
                  d="M571.793,45.185a.826.826,0,0,1-.827.827H557.588a.825.825,0,0,1-.826-.827h0a.825.825,0,0,1,.826-.826h13.378a.826.826,0,0,1,.827.826Z"
                  transform="translate(-546.431 -19.691)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_18"
                  data-name="Path 18"
                  d="M564.778,36.237a1.163,1.163,0,0,1-1.161,1.163h0a1.162,1.162,0,0,1-1.163-1.163v-.259a1.161,1.161,0,0,1,1.163-1.161h0a1.162,1.162,0,0,1,1.161,1.161Z"
                  transform="translate(-545.098 -21.926)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_19"
                  data-name="Path 19"
                  d="M574.195,42.025a.931.931,0,0,1-.931.929h-4.132a.93.93,0,0,1-.929-.929h0a.929.929,0,0,1,.929-.931h4.132a.93.93,0,0,1,.931.931Z"
                  transform="translate(-543.751 -20.456)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M558.3,32.442a.723.723,0,0,1-.723.722h-4.03a.723.723,0,0,1-.723-.722h0a.723.723,0,0,1,.723-.723h4.03a.723.723,0,0,1,.723.723Z"
                  transform="translate(-547.352 -22.651)"
                  fill="#fc9d2d"
                />
              </g>
              <g
                id="Group_7"
                data-name="Group 7"
                transform="translate(-162.979 669.344)"
              >
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M529.884,60.659l-3.318,4.425h-.379l-3.246-4.439v7.408h-1.92V57.865h2.212l3.188,4.38,3.187-4.38h2.2V68.052h-1.922Z"
                  transform="translate(-521.021 -57.559)"
                  fill="#fff"
                />
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M541.319,63.043a5.232,5.232,0,1,1-10.463.015,5.233,5.233,0,1,1,10.463-.015Zm-8.571.044a3.342,3.342,0,1,0,6.679-.015,3.353,3.353,0,1,0-6.679.015Z"
                  transform="translate(-518.718 -57.6)"
                  fill="#fff"
                />
                <path
                  id="Path_23"
                  data-name="Path 23"
                  d="M547.145,57.841h1.922v10.2h-1.193v.015l-5.355-6.884v6.869H540.6V57.856h1.558l4.991,6.317Z"
                  transform="translate(-516.437 -57.565)"
                  fill="#fff"
                />
                <path
                  id="Path_24"
                  data-name="Path 24"
                  d="M556.531,60.4a3.907,3.907,0,0,0-2.591-1.018,3.475,3.475,0,0,0-3.508,3.754,3.225,3.225,0,0,0,3.508,3.405,3.383,3.383,0,0,0,2.3-.815v-1.8h-2.605V62.2H558v4.292a5.075,5.075,0,0,1-4.06,1.834c-3.827,0-5.385-2.518-5.385-5.2a5.182,5.182,0,0,1,5.385-5.516,5.383,5.383,0,0,1,3.784,1.558Z"
                  transform="translate(-514.573 -57.617)"
                  fill="#fff"
                />
                <path
                  id="Path_25"
                  data-name="Path 25"
                  d="M567.582,63.043a5.232,5.232,0,1,1-10.465.015,5.234,5.234,0,1,1,10.465-.015Zm-8.573.044a3.342,3.342,0,1,0,6.679-.015,3.353,3.353,0,1,0-6.679.015Z"
                  transform="translate(-512.568 -57.6)"
                  fill="#fff"
                />
                <path
                  id="Path_26"
                  data-name="Path 26"
                  d="M568.66,57.853v8.412H573.9V68.04h-7.16V57.853Z"
                  transform="translate(-510.314 -57.562)"
                  fill="#fff"
                />
                <path
                  id="Path_27"
                  data-name="Path 27"
                  d="M578.768,59.6h-3.231V57.853h8.383V59.6h-3.231V68.04h-1.92Z"
                  transform="translate(-508.254 -57.562)"
                  fill="#fff"
                />
                <path
                  id="Path_28"
                  data-name="Path 28"
                  d="M593.37,63.043a5.232,5.232,0,1,1-10.464.015,5.233,5.233,0,1,1,10.464-.015Zm-8.571.044a3.342,3.342,0,1,0,6.679-.015,3.353,3.353,0,1,0-6.679.015Z"
                  transform="translate(-506.528 -57.6)"
                  fill="#fff"
                />
                <path
                  id="Path_29"
                  data-name="Path 29"
                  d="M601.564,68.043H599.28l-2.969-3.405h-1.848v3.405h-1.922v-10.2c1.615,0,3.231.015,4.847.015a3.376,3.376,0,0,1,3.667,3.377,3.021,3.021,0,0,1-2.576,3.2l3.086,3.478Zm-7.1-8.4v3.259h2.925a1.634,1.634,0,1,0,0-3.259Z"
                  transform="translate(-504.272 -57.565)"
                  fill="#fff"
                />
                <path
                  id="Path_30"
                  data-name="Path 30"
                  d="M600.5,68.04V57.853h1.907V68.04Z"
                  transform="translate(-502.408 -57.562)"
                  fill="#fff"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="flex flex-row flex-1 w-full justify-between uppercase items-center oswald-semibold relative">
          <ul className="flex flex-row w-full justify-evenly text-[#FC9C2D] hidden sm:flex">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#sponsors">Sponsors</a>
            </li>
          </ul>
          {drawerOpen ? (
            <svg
              className="sm:hidden w-full ml-[65%] cursor-pointer"
              // ref={wrapperRef}
              onClick={() => setDrawerOpen(!drawerOpen)}
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="24.83"
              viewBox="0 0 51 24.83"
            >
              <path
                id="Lines"
                d="M1331.76,75.53V72.65h50v2.88Zm0-10.48V62.17h50v2.88Zm0-10.471V51.7h50v2.88Z"
                transform="translate(-1331.26 -51.2)"
                fill="#fc9d2d"
                stroke="#fff"
                stroke-width="1"
              />
            </svg>
          ) : (
            <svg
              className="sm:hidden w-full ml-[65%] cursor-pointer"
              ref={wrapperRef}
              onClick={() => setDrawerOpen(!drawerOpen)}
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="24.83"
              viewBox="0 0 51 24.83"
            >
              <path
                id="Lines"
                d="M1331.76,75.53V72.65h50v2.88Zm0-10.48V62.17h50v2.88Zm0-10.471V51.7h50v2.88Z"
                transform="translate(-1331.26 -51.2)"
                fill="#fc9d2d"
                stroke="#fff"
                stroke-width="1"
              />
            </svg>
          )}
          <div
            ref={wrapperRef}
            className={`absolute top-[100px] right-[30px] bg-[#181818] left-[20px] border-2 w-full z-50 p-10 ${
              drawerOpen ? "block" : "hidden"
            }`}
          >
            <ul
              className="flex flex-col w-full  justify-evenly text-[#FC9C2D] z-50 gap-5"
              onClick={() => {
                setDrawerOpen(false);
              }}
            >
              <a href="#home">
                <li>Home</li>
              </a>
              <a href="#about">
                <li>About</li>
              </a>
              <a href="#team">
                <li>Team</li>
              </a>
              <a href="#sponsors">
                <li>Sponsors</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative lg:h-[700px] h-[800px] overflow-hidden">
        <div className="absolute top-[80px] left-[50px] text-white text-8xl krub-bold">
          MT
        </div>
        <div className="text-[#FC9C2D] absolute top-[320px] left-[-80px] text-3xl rotate-270 tracking-[0.4em] krub-regular">
          MARSROVER
        </div>
        <div className="bg-[#FC9C2D] md:h-[350px] md:w-[350px] h-[300px] w-[300px] absolute rounded-full md:left-[50%] left-[60%] translate-x-[-50%] top-[220px]"></div>
        <div className="absolute md:left-[50%] left-[60%] translate-x-[-50%] top-[230px] md:h-[500px] md:w-[500px] h-[400px] w-[400px]">
          <img src={Rover} alt="rover" />
        </div>
        <div
          onClick={() => {
            setActiveInfo({
              title: "URC 2024",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
              shortDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              teamImage: "https://via.placeholder.com/500",
              SAR: (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/LcXDMddb31I?si=prA1D5GQ66_m5nKk"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              ),
              id: 2024,
            });
            setModalVisible(true);
          }}
          className="krub-bold tracking-[0.3em] text-2xl text-white bg-[#FC9C2D] absolute right-[-10px] top-[70px] py-3 pl-7 pr-[60px] border-2 cursor-pointer hover:pr-[100px] transition-all"
        >
          <div>URC</div>
          <div>2024</div>
        </div>
        <div className="absolute h-3 w-3 bg-white left-[200px] top-[300px] hidden md:block"></div>
        <div className=" text-[#FC9C2D] text-2xl absolute lg:right-[100px] left-[50px] lg:left-auto lg:top-[220px] top-[600px] krub-semibold">
          <div>BRACU MONGOL-TORI</div>
          <div className="h-[180px] hidden lg:block"></div>
          <div className="flex flex-row uppercase text-white text-sm mt-3">
            <div className="p-3 bg-[#FC9C2D] cursor-pointer hover:border-2 hover:border-white hover:scale-125 transition-all">
              Let's Start
            </div>
            <div className="p-3 ml-2 cursor-pointer">Read more</div>
          </div>
        </div>
      </div>
      {/* bg-[#222222] */}
      <div className="w-full flex flex-col sm:flex-row justify-evenly shadow-[0px_0px_30px_0px] px-12 oswald-semibold">
        {info.map((i) => {
          return (
            <div className="text-center py-12 hover:scale-125 cursor-pointer transition-all uppercase">
              <div className="text-[#FC9C2D] font-bold text-5xl">{i.value}</div>
              <div className="text-white font-bold text-xl">{i.name}</div>
            </div>
          );
        })}
      </div>
      <div className="relative h-[700px]">
        <div className="absolute font-sm text-white krub-bold rotate-270 md:top-[250px] top-[180px] flex flex-row gap-3 items-center md:left-0 left-[-50px] hidden md:flex">
          <div className="bg-white h-3 w-3"></div>
          <div>DISCOVER YOUR SKILLS</div>
        </div>
        <div className="absolute font-sm text-white krub-bold rotate-90 md:top-[250px] top-[650px] md:right-0 right-[-50px] flex flex-row gap-3 items-center hidden md:flex">
          <div className="bg-white h-3 w-3"></div>
          <div>DISCOVER YOUR SKILLS</div>
        </div>
        <div className="lg:text-8xl text-5xl text-white text-center krub-bold h-full">
          <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
            <div>ACCEPT</div>
            <div className="krub-light">NEW</div>
            <div>CHALLENGES</div>
          </div>
          <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] lg:scale-100 scale-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="890.54"
              height="381.833"
              viewBox="0 0 890.54 381.833"
            >
              <defs>
                <filter
                  id="Circle_2"
                  x="740"
                  y="183.136"
                  width="150.54"
                  height="150.54"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="21.5" result="blur" />
                  <feFlood flood-opacity="0.078" />
                  <feComposite operator="in" in2="blur" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="Circle_1_"
                  x="0"
                  y="30.136"
                  width="150.54"
                  height="150.54"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="21.5" result="blur-2" />
                  <feFlood flood-opacity="0.078" />
                  <feComposite operator="in" in2="blur-2" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <g
                id="Group_80"
                data-name="Group 80"
                transform="translate(-262.06 -1211.574)"
              >
                <path
                  id="Oval"
                  d="M760.288,1297.79c228.175,87.8,395.109,205.86,372.857,263.683s-225.262,33.519-453.436-54.285S284.6,1301.329,306.852,1243.505,532.114,1209.985,760.288,1297.79Z"
                  fill="none"
                  stroke="#f2f2f2"
                  stroke-width="1"
                />
                <g
                  transform="matrix(1, 0, 0, 1, 262.06, 1211.57)"
                  filter="url(#Circle_2)"
                >
                  <circle
                    id="Circle_2-2"
                    data-name="Circle 2"
                    cx="10.77"
                    cy="10.77"
                    r="10.77"
                    transform="translate(804.5 247.64)"
                    fill="#fc9d2d"
                  />
                </g>
                <g
                  transform="matrix(1, 0, 0, 1, 262.06, 1211.57)"
                  filter="url(#Circle_1_)"
                >
                  <circle
                    id="Circle_1_2"
                    data-name="Circle 1 "
                    cx="10.77"
                    cy="10.77"
                    r="10.77"
                    transform="translate(64.5 94.64)"
                    fill="#fc9d2d"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div
        className="flex flex-row justify-between krub-bold text-5xl mx-7 uppercase"
        id="about"
      >
        <div className="text-[#252525]">Explore</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29.98"
            height="74.99"
            viewBox="0 0 29.98 74.99"
          >
            <g
              id="Group_81"
              data-name="Group 81"
              transform="translate(-705.016 -1686.02)"
            >
              <rect
                id="Op_component_1"
                data-name="Op component 1"
                width="1.23"
                height="74.99"
                transform="translate(719.63 1686.02)"
                fill="#f2f2f2"
              />
              <path
                id="Op_component_2"
                data-name="Op component 2"
                d="M705.016,1745.977l1.009-.958,14.093,14.991-1.009.957Z"
                fill="#f2f2f2"
              />
              <path
                id="Op_component_3"
                data-name="Op component 3"
                d="M734.038,1745.6l.958,1.024-15,14.3-.958-1.024Z"
                fill="#f2f2f2"
              />
            </g>
          </svg>
        </div>
        <div className="text-[#252525]">About</div>
      </div>
      <div className="m-8">
        <div className="flex flex-row text-white items-end tracking-wide">
          <div className="krub-bold text-7xl">FIND</div>
          <div className="krub-regular text-2xl ml-3">Our Previous Teams</div>
        </div>
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 justify-between mt-12 text-white">
            {urcInfo.map((i) => {
              return (
                <div className="flex flex-col gap-3 items-center p-10 border-2 relative text-justify">
                  <div className="absolute bg-white h-7 w-7 top-0 left-0"></div>
                  <div className="text-white text-2xl krub-semibold">
                    {i.title}
                  </div>
                  <div className="bg-[#FC9C2D] h-[1px] w-9"></div>
                  <div className="text-white krub-semibold text-sm">
                    {i.description}
                  </div>
                  <div
                    onClick={() => {
                      setActiveInfo(i);
                      setModalVisible(true);
                    }}
                    className="p-3 text-white oswald-bold bg-[#FC9C2D] mt-5 hover:bg-transparent hover:border-2 hover:border-[#FC9C2D] cursor-pointer border-2 border-transparent"
                  >
                    READ MORE
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-[800px] relative">
        <div className="absolute top-[150px] left-[25%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="664.248"
            height="508.514"
            viewBox="0 0 664.248 508.514"
          >
            <g
              id="Group_82"
              data-name="Group 82"
              transform="translate(-247.786 -3199.264)"
            >
              <path
                id="Oval_"
                data-name="Oval "
                d="M337.469,3985.737c180.977-109.68,350.221-161.414,378.016-115.551S619.1,4042.142,438.124,4151.822,87.9,4313.236,60.108,4267.373,156.492,4095.417,337.469,3985.737Z"
                transform="translate(192.114 -636.406)"
                fill="none"
                stroke="#f2f2f2"
                stroke-width="1"
              />
              <ellipse
                id="Circle_3"
                data-name="Circle 3"
                cx="197.69"
                cy="197.61"
                rx="197.69"
                ry="197.61"
                transform="translate(382.414 3249.344)"
                fill="#fc9d2d"
              />
              <circle
                id="Circle_2"
                data-name="Circle 2"
                cx="11.11"
                cy="11.11"
                r="11.11"
                transform="translate(317.484 3631.344)"
                fill="#fc9d2d"
              />
              <circle
                id="Circle_1"
                data-name="Circle 1"
                cx="11.11"
                cy="11.11"
                r="11.11"
                transform="translate(859.991 3205.952)"
                fill="#fc9d2d"
              />
              <path
                id="Path_9"
                data-name="Path 9"
                d="M897.882,143.167a215.552,215.552,0,0,0-11.455-69.391A202.188,202.188,0,0,0,748.692,19.832c-112.047,0-202.9,90.837-202.9,202.908a201.712,201.712,0,0,0,32.128,109.492A214.879,214.879,0,0,0,682.057,359C801.258,359,897.882,262.366,897.882,143.167Z"
                transform="matrix(0.883, -0.469, 0.469, 0.883, -191.208, 3603.283)"
                fill="#e82727"
              />
              <g
                id="Group_6"
                data-name="Group 6"
                transform="matrix(0.883, -0.469, 0.469, 0.883, 352.561, 3397.712)"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M857,24.372a215.559,215.559,0,0,1,11.454,69.39c0,119.2-96.623,215.835-215.823,215.835A214.878,214.878,0,0,1,548.5,282.828a203.761,203.761,0,0,0,31.214,37.7h65.457a7.462,7.462,0,1,1,0,14.924H597.264a201.988,201.988,0,0,0,122,40.779c112.058,0,202.907-90.837,202.907-202.9A202.355,202.355,0,0,0,857,24.372Z"
                  transform="translate(-547.205 -24.372)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M653.82,44.858a7.961,7.961,0,0,1-7.961,7.961H556.34a7.959,7.959,0,0,1-7.949-7.961h0a7.949,7.949,0,0,1,7.949-7.949h89.518a7.951,7.951,0,0,1,7.961,7.949Z"
                  transform="translate(-548.391 112.055)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_12"
                  data-name="Path 12"
                  d="M639.257,34.987a6.965,6.965,0,0,1-6.963,6.963H574.6a6.955,6.955,0,0,1-6.951-6.963h0a6.953,6.953,0,0,1,6.951-6.951h57.7a6.962,6.962,0,0,1,6.963,6.951Z"
                  transform="translate(-338.881 15.499)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_13"
                  data-name="Path 13"
                  d="M638.485,37.175a6.955,6.955,0,0,1-6.95,6.963h-58.7a6.955,6.955,0,0,1-6.951-6.963h0a6.955,6.955,0,0,1,6.951-6.963h58.7a6.955,6.955,0,0,1,6.95,6.963Z"
                  transform="translate(-358.011 39.179)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_14"
                  data-name="Path 14"
                  d="M638.642,39.633a3.981,3.981,0,0,1-3.981,3.981H575.978A3.981,3.981,0,0,1,572,39.633h0a3.981,3.981,0,0,1,3.982-3.98h58.684a3.981,3.981,0,0,1,3.981,3.98Z"
                  transform="translate(-291.523 98.387)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_15"
                  data-name="Path 15"
                  d="M624.046,56.759a7.474,7.474,0,0,0-7.462-7.462H551.127a201.8,201.8,0,0,0,17.55,14.924h47.908A7.467,7.467,0,0,0,624.046,56.759Z"
                  transform="translate(-518.618 246.86)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_16"
                  data-name="Path 16"
                  d="M642.288,31.982a7.454,7.454,0,0,1-7.45,7.45H564.212a7.454,7.454,0,0,1-7.45-7.45h0a7.457,7.457,0,0,1,7.45-7.462h70.626a7.456,7.456,0,0,1,7.45,7.462Z"
                  transform="translate(-457.298 -22.761)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_17"
                  data-name="Path 17"
                  d="M701.472,52.308a7.954,7.954,0,0,1-7.961,7.961h-128.8a7.943,7.943,0,0,1-7.95-7.961h0a7.941,7.941,0,0,1,7.95-7.949h128.8a7.951,7.951,0,0,1,7.961,7.949Z"
                  transform="translate(-457.298 193.125)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_18"
                  data-name="Path 18"
                  d="M584.827,48.492a11.194,11.194,0,0,1-11.181,11.193h0a11.189,11.189,0,0,1-11.193-11.193V46a11.179,11.179,0,0,1,11.193-11.181h0A11.184,11.184,0,0,1,584.827,46Z"
                  transform="translate(-395.359 89.279)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_19"
                  data-name="Path 19"
                  d="M625.889,50.053A8.963,8.963,0,0,1,616.931,59H577.15a8.953,8.953,0,0,1-8.947-8.947h0a8.948,8.948,0,0,1,8.947-8.959h39.781a8.958,8.958,0,0,1,8.959,8.959Z"
                  transform="translate(-332.798 157.596)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M605.547,38.682a6.962,6.962,0,0,1-6.963,6.951H559.79a6.962,6.962,0,0,1-6.963-6.951h0a6.965,6.965,0,0,1,6.963-6.963h38.793a6.965,6.965,0,0,1,6.963,6.963Z"
                  transform="translate(-500.118 55.578)"
                  fill="#fc9d2d"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="absolute top-[150px] left-[-570px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="664.248"
            height="508.514"
            viewBox="0 0 664.248 508.514"
          >
            <g
              id="Group_82"
              data-name="Group 82"
              transform="translate(-247.786 -3199.264)"
            >
              <path
                id="Oval_"
                data-name="Oval "
                d="M337.469,3985.737c180.977-109.68,350.221-161.414,378.016-115.551S619.1,4042.142,438.124,4151.822,87.9,4313.236,60.108,4267.373,156.492,4095.417,337.469,3985.737Z"
                transform="translate(192.114 -636.406)"
                fill="none"
                stroke="#f2f2f2"
                stroke-width="1"
              />
              <ellipse
                id="Circle_3"
                data-name="Circle 3"
                cx="197.69"
                cy="197.61"
                rx="197.69"
                ry="197.61"
                transform="translate(382.414 3249.344)"
                fill="#fc9d2d"
              />
              <circle
                id="Circle_2"
                data-name="Circle 2"
                cx="11.11"
                cy="11.11"
                r="11.11"
                transform="translate(317.484 3631.344)"
                fill="#fc9d2d"
              />
              <circle
                id="Circle_1"
                data-name="Circle 1"
                cx="11.11"
                cy="11.11"
                r="11.11"
                transform="translate(859.991 3205.952)"
                fill="#fc9d2d"
              />
              <path
                id="Path_9"
                data-name="Path 9"
                d="M897.882,143.167a215.552,215.552,0,0,0-11.455-69.391A202.188,202.188,0,0,0,748.692,19.832c-112.047,0-202.9,90.837-202.9,202.908a201.712,201.712,0,0,0,32.128,109.492A214.879,214.879,0,0,0,682.057,359C801.258,359,897.882,262.366,897.882,143.167Z"
                transform="matrix(0.883, -0.469, 0.469, 0.883, -191.208, 3603.283)"
                fill="#e82727"
              />
              <g
                id="Group_6"
                data-name="Group 6"
                transform="matrix(0.883, -0.469, 0.469, 0.883, 352.561, 3397.712)"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M857,24.372a215.559,215.559,0,0,1,11.454,69.39c0,119.2-96.623,215.835-215.823,215.835A214.878,214.878,0,0,1,548.5,282.828a203.761,203.761,0,0,0,31.214,37.7h65.457a7.462,7.462,0,1,1,0,14.924H597.264a201.988,201.988,0,0,0,122,40.779c112.058,0,202.907-90.837,202.907-202.9A202.355,202.355,0,0,0,857,24.372Z"
                  transform="translate(-547.205 -24.372)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M653.82,44.858a7.961,7.961,0,0,1-7.961,7.961H556.34a7.959,7.959,0,0,1-7.949-7.961h0a7.949,7.949,0,0,1,7.949-7.949h89.518a7.951,7.951,0,0,1,7.961,7.949Z"
                  transform="translate(-548.391 112.055)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_12"
                  data-name="Path 12"
                  d="M639.257,34.987a6.965,6.965,0,0,1-6.963,6.963H574.6a6.955,6.955,0,0,1-6.951-6.963h0a6.953,6.953,0,0,1,6.951-6.951h57.7a6.962,6.962,0,0,1,6.963,6.951Z"
                  transform="translate(-338.881 15.499)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_13"
                  data-name="Path 13"
                  d="M638.485,37.175a6.955,6.955,0,0,1-6.95,6.963h-58.7a6.955,6.955,0,0,1-6.951-6.963h0a6.955,6.955,0,0,1,6.951-6.963h58.7a6.955,6.955,0,0,1,6.95,6.963Z"
                  transform="translate(-358.011 39.179)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_14"
                  data-name="Path 14"
                  d="M638.642,39.633a3.981,3.981,0,0,1-3.981,3.981H575.978A3.981,3.981,0,0,1,572,39.633h0a3.981,3.981,0,0,1,3.982-3.98h58.684a3.981,3.981,0,0,1,3.981,3.98Z"
                  transform="translate(-291.523 98.387)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_15"
                  data-name="Path 15"
                  d="M624.046,56.759a7.474,7.474,0,0,0-7.462-7.462H551.127a201.8,201.8,0,0,0,17.55,14.924h47.908A7.467,7.467,0,0,0,624.046,56.759Z"
                  transform="translate(-518.618 246.86)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_16"
                  data-name="Path 16"
                  d="M642.288,31.982a7.454,7.454,0,0,1-7.45,7.45H564.212a7.454,7.454,0,0,1-7.45-7.45h0a7.457,7.457,0,0,1,7.45-7.462h70.626a7.456,7.456,0,0,1,7.45,7.462Z"
                  transform="translate(-457.298 -22.761)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_17"
                  data-name="Path 17"
                  d="M701.472,52.308a7.954,7.954,0,0,1-7.961,7.961h-128.8a7.943,7.943,0,0,1-7.95-7.961h0a7.941,7.941,0,0,1,7.95-7.949h128.8a7.951,7.951,0,0,1,7.961,7.949Z"
                  transform="translate(-457.298 193.125)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_18"
                  data-name="Path 18"
                  d="M584.827,48.492a11.194,11.194,0,0,1-11.181,11.193h0a11.189,11.189,0,0,1-11.193-11.193V46a11.179,11.179,0,0,1,11.193-11.181h0A11.184,11.184,0,0,1,584.827,46Z"
                  transform="translate(-395.359 89.279)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_19"
                  data-name="Path 19"
                  d="M625.889,50.053A8.963,8.963,0,0,1,616.931,59H577.15a8.953,8.953,0,0,1-8.947-8.947h0a8.948,8.948,0,0,1,8.947-8.959h39.781a8.958,8.958,0,0,1,8.959,8.959Z"
                  transform="translate(-332.798 157.596)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M605.547,38.682a6.962,6.962,0,0,1-6.963,6.951H559.79a6.962,6.962,0,0,1-6.963-6.951h0a6.965,6.965,0,0,1,6.963-6.963h38.793a6.965,6.965,0,0,1,6.963,6.963Z"
                  transform="translate(-500.118 55.578)"
                  fill="#fc9d2d"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="absolute top-[200px] right-[-570px] rotate-45 hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="664.248"
            height="508.514"
            viewBox="0 0 664.248 508.514"
          >
            <g
              id="Group_82"
              data-name="Group 82"
              transform="translate(-247.786 -3199.264)"
            >
              <path
                id="Oval_"
                data-name="Oval "
                d="M337.469,3985.737c180.977-109.68,350.221-161.414,378.016-115.551S619.1,4042.142,438.124,4151.822,87.9,4313.236,60.108,4267.373,156.492,4095.417,337.469,3985.737Z"
                transform="translate(192.114 -636.406)"
                fill="none"
                stroke="#f2f2f2"
                stroke-width="1"
              />
              <ellipse
                id="Circle_3"
                data-name="Circle 3"
                cx="197.69"
                cy="197.61"
                rx="197.69"
                ry="197.61"
                transform="translate(382.414 3249.344)"
                fill="#fc9d2d"
              />
              <circle
                id="Circle_2"
                data-name="Circle 2"
                cx="11.11"
                cy="11.11"
                r="11.11"
                transform="translate(317.484 3631.344)"
                fill="#fc9d2d"
              />
              <circle
                id="Circle_1"
                data-name="Circle 1"
                cx="11.11"
                cy="11.11"
                r="11.11"
                transform="translate(859.991 3205.952)"
                fill="#fc9d2d"
              />
              <path
                id="Path_9"
                data-name="Path 9"
                d="M897.882,143.167a215.552,215.552,0,0,0-11.455-69.391A202.188,202.188,0,0,0,748.692,19.832c-112.047,0-202.9,90.837-202.9,202.908a201.712,201.712,0,0,0,32.128,109.492A214.879,214.879,0,0,0,682.057,359C801.258,359,897.882,262.366,897.882,143.167Z"
                transform="matrix(0.883, -0.469, 0.469, 0.883, -191.208, 3603.283)"
                fill="#e82727"
              />
              <g
                id="Group_6"
                data-name="Group 6"
                transform="matrix(0.883, -0.469, 0.469, 0.883, 352.561, 3397.712)"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M857,24.372a215.559,215.559,0,0,1,11.454,69.39c0,119.2-96.623,215.835-215.823,215.835A214.878,214.878,0,0,1,548.5,282.828a203.761,203.761,0,0,0,31.214,37.7h65.457a7.462,7.462,0,1,1,0,14.924H597.264a201.988,201.988,0,0,0,122,40.779c112.058,0,202.907-90.837,202.907-202.9A202.355,202.355,0,0,0,857,24.372Z"
                  transform="translate(-547.205 -24.372)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M653.82,44.858a7.961,7.961,0,0,1-7.961,7.961H556.34a7.959,7.959,0,0,1-7.949-7.961h0a7.949,7.949,0,0,1,7.949-7.949h89.518a7.951,7.951,0,0,1,7.961,7.949Z"
                  transform="translate(-548.391 112.055)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_12"
                  data-name="Path 12"
                  d="M639.257,34.987a6.965,6.965,0,0,1-6.963,6.963H574.6a6.955,6.955,0,0,1-6.951-6.963h0a6.953,6.953,0,0,1,6.951-6.951h57.7a6.962,6.962,0,0,1,6.963,6.951Z"
                  transform="translate(-338.881 15.499)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_13"
                  data-name="Path 13"
                  d="M638.485,37.175a6.955,6.955,0,0,1-6.95,6.963h-58.7a6.955,6.955,0,0,1-6.951-6.963h0a6.955,6.955,0,0,1,6.951-6.963h58.7a6.955,6.955,0,0,1,6.95,6.963Z"
                  transform="translate(-358.011 39.179)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_14"
                  data-name="Path 14"
                  d="M638.642,39.633a3.981,3.981,0,0,1-3.981,3.981H575.978A3.981,3.981,0,0,1,572,39.633h0a3.981,3.981,0,0,1,3.982-3.98h58.684a3.981,3.981,0,0,1,3.981,3.98Z"
                  transform="translate(-291.523 98.387)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_15"
                  data-name="Path 15"
                  d="M624.046,56.759a7.474,7.474,0,0,0-7.462-7.462H551.127a201.8,201.8,0,0,0,17.55,14.924h47.908A7.467,7.467,0,0,0,624.046,56.759Z"
                  transform="translate(-518.618 246.86)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_16"
                  data-name="Path 16"
                  d="M642.288,31.982a7.454,7.454,0,0,1-7.45,7.45H564.212a7.454,7.454,0,0,1-7.45-7.45h0a7.457,7.457,0,0,1,7.45-7.462h70.626a7.456,7.456,0,0,1,7.45,7.462Z"
                  transform="translate(-457.298 -22.761)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_17"
                  data-name="Path 17"
                  d="M701.472,52.308a7.954,7.954,0,0,1-7.961,7.961h-128.8a7.943,7.943,0,0,1-7.95-7.961h0a7.941,7.941,0,0,1,7.95-7.949h128.8a7.951,7.951,0,0,1,7.961,7.949Z"
                  transform="translate(-457.298 193.125)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_18"
                  data-name="Path 18"
                  d="M584.827,48.492a11.194,11.194,0,0,1-11.181,11.193h0a11.189,11.189,0,0,1-11.193-11.193V46a11.179,11.179,0,0,1,11.193-11.181h0A11.184,11.184,0,0,1,584.827,46Z"
                  transform="translate(-395.359 89.279)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_19"
                  data-name="Path 19"
                  d="M625.889,50.053A8.963,8.963,0,0,1,616.931,59H577.15a8.953,8.953,0,0,1-8.947-8.947h0a8.948,8.948,0,0,1,8.947-8.959h39.781a8.958,8.958,0,0,1,8.959,8.959Z"
                  transform="translate(-332.798 157.596)"
                  fill="#fc9d2d"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M605.547,38.682a6.962,6.962,0,0,1-6.963,6.951H559.79a6.962,6.962,0,0,1-6.963-6.951h0a6.965,6.965,0,0,1,6.963-6.963h38.793a6.965,6.965,0,0,1,6.963,6.963Z"
                  transform="translate(-500.118 55.578)"
                  fill="#fc9d2d"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="relative" id="team">
        <div className="text-white flex flex-col items-center gap-4">
          <div className="krub-bold text-center text-5xl md:text-8xl">
            ADVISOR
          </div>
          <div className=" w-[55vw] min-w-[400px] object-cover">
            <img
              src={AdvisorImage}
              alt="adv"
              className="aspect-[3/2] object-cover"
            />
          </div>
          <div className="krub-bold text-3xl">DR. MD KHALILUR RAHMAN</div>
        </div>
        <div className="krub-bold text-white absolute top-[70%] left-3 rotate-270 hidden md:block">
          <div></div>
          <div className="text-right">
            <div>READY TO</div>
            <div>GET STARTED</div>
          </div>
        </div>
        <div className="krub-bold text-white absolute top-[70%] right-3 rotate-90 hidden md:block">
          <div></div>
          <div className="text-right">
            <div>READY TO</div>
            <div>GET STARTED</div>
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        <div className="text-center">
          <div className="krub-bold text-white text-5xl md:text-8xl">TEAM</div>
          <div className="oswald-regular text-[#FC9C2D] text-3xl md:text-5xl tracking-[0.1em] md:tracking-[0.2em] mt-[-7px]">
            MEMBERS
          </div>
        </div>
        <div className="mt-[70px] krub-bold text-white text-xl">
          <div className="grid grid-cols-2 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="h-[150px] md:h-[300px] w-[150px] md:w-[300px] rounded-full border-2 border-[#FC9C2D]"></div>
              <div>AL MAHIR AHMED</div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="h-[150px] md:h-[300px] w-[150px] md:w-[300px] rounded-full border-2 border-[#FC9C2D]"></div>
              <div>SANZIM KHAN</div>
            </div>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-4 text-center">
            <div className="flex flex-col items-center gap-3 mt-5">
              <div className="h-[120px] md:h-[240px] w-[120px] md:w-[240px] rounded-full border-2 border-[#FC9C2D]"></div>
              <div>AL MAHIR AHMED</div>
            </div>
            <div className="flex flex-col items-center gap-3 mt-5">
              <div className="h-[120px] md:h-[240px] w-[120px] md:w-[240px] rounded-full border-2 border-[#FC9C2D]"></div>
              <div>SANZIM KHAN</div>
            </div>
            <div className="flex flex-col items-center gap-3 mt-5">
              <div className="h-[120px] md:h-[240px] w-[120px] md:w-[240px] rounded-full border-2 border-[#FC9C2D]"></div>
              <div>AL MAHIR AHMED</div>
            </div>
            <div className="flex flex-col items-center gap-3 mt-5">
              <div className="h-[120px] md:h-[240px] w-[120px] md:w-[240px] rounded-full border-2 border-[#FC9C2D]"></div>
              <div>SANZIM KHAN</div>
            </div>
            <div className="flex flex-col items-center gap-3 mt-5">
              <div className="h-[120px] md:h-[240px] w-[120px] md:w-[240px] rounded-full border-2 border-[#FC9C2D]"></div>
              <div>AL MAHIR AHMED</div>
            </div>
            <div className="flex flex-col items-center gap-3 mt-5">
              <div className="h-[120px] md:h-[240px] w-[120px] md:w-[240px] rounded-full border-2 border-[#FC9C2D]"></div>
              <div>SANZIM KHAN</div>
            </div>
            <div className="flex flex-col items-center gap-3 mt-5">
              <div className="h-[120px] md:h-[240px] w-[120px] md:w-[240px] rounded-full border-2 border-[#FC9C2D]"></div>
              <div>AL MAHIR AHMED</div>
            </div>
            <div className="flex flex-col items-center gap-3 mt-5">
              <div className="h-[120px] md:h-[240px] w-[120px] md:w-[240px] rounded-full border-2 border-[#FC9C2D]"></div>
              <div>SANZIM KHAN</div>
            </div>
            <div className="flex flex-col items-center gap-3 mt-5">
              <div className="h-[120px] md:h-[240px] w-[120px] md:w-[240px] rounded-full border-2 border-[#FC9C2D]"></div>
              <div>AL MAHIR AHMED</div>
            </div>
            <div className="flex flex-col items-center gap-3 mt-5">
              <div className="h-[120px] md:h-[240px] w-[120px] md:w-[240px] rounded-full border-2 border-[#FC9C2D]"></div>
              <div>SANZIM KHAN</div>
            </div>
            <div className="flex flex-col items-center gap-3 mt-5">
              <div className="h-[120px] md:h-[240px] w-[120px] md:w-[240px] rounded-full border-2 border-[#FC9C2D]"></div>
              <div>AL MAHIR AHMED</div>
            </div>
            <div className="flex flex-col items-center gap-3 mt-5">
              <div className="h-[120px] md:h-[240px] w-[120px] md:w-[240px] rounded-full border-2 border-[#FC9C2D]"></div>
              <div>SANZIM KHAN</div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[100px]" id="sponsors">
        <div className="text-5xl md:text-8xl text-white krub-bold text-center mb-[30px]">
          SPONSORS
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-5">
          <div className="flex flex-col items-center opacity-50 hover:opacity-100 transition-all">
            <img src={ICTD} alt="sponsor" className="h-[100px]" />
          </div>
          <div className="flex flex-col items-center opacity-50 hover:opacity-100 transition-all">
            <img src={Aqualink} alt="sponsor" className="h-[100px]" />
          </div>
          <div className="flex flex-col items-center opacity-50 hover:opacity-100 transition-all">
            <img src={Protocase} alt="sponsor" className="h-[100px] bg-white" />
          </div>
          <div className="flex flex-col items-center opacity-50 hover:opacity-100 transition-all">
            <img src={BracuE} alt="sponsor" className="h-[100px] bg-white" />
          </div>
        </div>
      </div>
      <Modal
        data={activeInfo}
        isVisible={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
      />
    </div>
  );
}

export default App;
