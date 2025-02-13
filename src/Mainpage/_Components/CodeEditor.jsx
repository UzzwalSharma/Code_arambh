import { Sandpack } from "@codesandbox/sandpack-react";
import React, { useEffect, useState } from "react";
import { neoCyan } from "@codesandbox/sandpack-themes";

function CodeEditor({ code }) {
  const [editorCode, setEditorCode] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (code && code.trim() !== "") {
      setEditorCode(code);
      setIsLoaded(true);
    }
  }, [code]);

  if (!isLoaded) {
    return <p>Loading Editor...</p>; // Placeholder until code is fully set
  }

  return (
    <Sandpack
      template="react"
      theme={neoCyan}
      options={{
        showTabs: true,
        showNavigator: true,
        showLineNumbers: true,
        wrapContent: true,
        editorHeight: 600,
        autorun: true,

        externalResources: ["https://cdn.tailwindcss.com"],
      }}
      customSetup={{
        dependencies: {
          postcss: "^8",
          tailwindcss: "^3.4.1",
          autoprefixer: "^10.0.0",
          uuid4: "^2.0.3",
          "tailwind-merge": "^2.4.0",
          "tailwindcss-animate": "^1.0.7",
          "lucide-react": "latest",
          "react-router-dom": "^7.1.1",
          firebase: "^11.1.0",
          "@google/generative-ai": "^0.21.0",
          "date-fns": "^4.1.0",
          "react-chartjs-2": "^5.3.0",
          "chart.js": "^4.4.7",
        },
      }}
      files={{
        "/App.js": {
          code: editorCode,
          active: true,
        },
      }}
    />
  );
}

export default CodeEditor;
