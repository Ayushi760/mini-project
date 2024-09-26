import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Webcam from 'react-webcam';
import { FaMicrophoneSlash } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa6";
import endcall from "../assets/endCall.png"
import { FiCamera } from "react-icons/fi";
import { FiCameraOff } from "react-icons/fi";
import profile from "../assets/profile.jpg"
const VideoCallWindow = ({ userData, onClose }) => {
    const newWindow = useRef(null);
    const [containerElement, setContainerElement] = useState(null);
    const webcamRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);
    const [isCameraOn, setIsCameraOn] = useState(false);

    useEffect(() => {
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;

        newWindow.current = window.open('', '', `width=${screenWidth},height=${screenHeight},top=0,left=0`);
        newWindow.current.document.title = 'Video Call';

        const intervalId = setInterval(() => {
            if (newWindow.current && newWindow.current.document) {
                clearInterval(intervalId);

                injectTailwindCSS(newWindow.current.document);

                const newDiv = newWindow.current.document.createElement('div');
                newWindow.current.document.body.appendChild(newDiv);
                setContainerElement(newDiv);

                newWindow.current.document.body.style.margin = '0';
                newWindow.current.document.body.style.overflow = 'hidden';

                newWindow.current.onbeforeunload = () => {
                    stopWebcam();
                    if (onClose) onClose();
                };
            }
        }, 100);

        return () => {
            clearInterval(intervalId);
            stopWebcam();
            if (newWindow.current) {
                newWindow.current.close();
            }
        };
    }, [onClose]);

    const injectTailwindCSS = (document) => {
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
        document.head.appendChild(linkElement);
    };

    const stopWebcam = () => {
        if (webcamRef.current && webcamRef.current.stream) {
            webcamRef.current.stream.getTracks().forEach(track => track.stop());
        }
    };

    const toggleMute = () => {
        setIsMuted(prev => !prev);
        if (webcamRef.current && webcamRef.current.stream) {
            const audioTracks = webcamRef.current.stream.getAudioTracks();
            audioTracks.forEach(track => {
                track.enabled = !isMuted;
            });
        }
    };

    const toggleCamera = () => {
        setIsCameraOn(prev => !prev);
        if (webcamRef.current && webcamRef.current.stream) {
            const videoTracks = webcamRef.current.stream.getVideoTracks();
            videoTracks.forEach(track => {
                track.enabled = !isCameraOn;
            });
        }
    };

    if (!containerElement) return null;

    return ReactDOM.createPortal(
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-white">
            <img src={userData?.profilePhoto} alt="User" className="w-48 h-48 rounded-full" />
            <p className='text-gray-600 text-xl tracking-[1px]'>{userData?.name}</p>
            <div className="absolute w-48 border-2 border-gray-300 rounded top-4 right-4 h-36">
                {isCameraOn ? 
                    <Webcam
                        audio={!isMuted}
                        ref={webcamRef}
                        videoConstraints={{
                            facingMode: "user",
                            width: { ideal: 640 },
                            height: { ideal: 480 },
                            frameRate: { ideal: 15, max: 30 },
                        }}
                        onUserMediaError={(error) =>
                            console.error("Error accessing webcam:", error)
                        }
                        onUserMedia={() => console.log("Webcam access granted")}
                    />
                :
                <div className="flex flex-col items-center justify-center w-full h-full gap-2 bg-white">
                    <img src={profile} className='h-16 rounded-full'/>
                    <p className='text-sm text-gray-600'>You</p>
                </div>
                }
            </div>
            <div className='absolute flex items-center justify-center gap-3 bottom-3'>
                <button className="p-3 text-white bg-green-600 rounded-full" onClick={toggleCamera}>
                    {isCameraOn ? <FiCamera className='text-xl' /> : <FiCameraOff className='text-xl' />}
                </button>
                <button className="p-3 text-white bg-blue-600 rounded-full" onClick={toggleMute}>
                    {isMuted ? <FaMicrophone className='text-xl' /> : <FaMicrophoneSlash className='text-xl' />}
                </button>
                <img src={endcall} className="cursor-pointer h-11" onClick={() => { stopWebcam(); onClose(); }} />
            </div>
        </div>,
        containerElement
    );
};

export default VideoCallWindow;