import { useEffect, useRef } from "react";

const JitsiCall = ({ roomName }) => {
    const jitsiContainer = useRef(null);

    useEffect(() => {
        const loadJitsiScript = () => {
            if (window.JitsiMeetExternalAPI) {
                startMeeting();
            } else {
                const script = document.createElement("script");
                script.src = "https://meet.jit.si/external_api.js";
                script.async = true;
                script.onload = () => startMeeting();
                document.body.appendChild(script);
            }
        };

        const startMeeting = () => {
            const domain = "meet.jit.si";
            const options = {
                roomName: roomName,
                parentNode: jitsiContainer.current,
                width: "100%",
                height: 600,
                configOverwrite: {
                    startWithAudioMuted: false,
                    startWithVideoMuted: false,
                },
            };
            new window.JitsiMeetExternalAPI(domain, options);
        };

        loadJitsiScript();
    }, [roomName]);

    return <div ref={jitsiContainer} style={{ width: "100%", height: "600px" }} />;
};

export default JitsiCall;
