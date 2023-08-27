"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import Terminal from "react-console-emulator";
import { openNewLink } from "@/utils/general.util";

const TerminalPage = () => {
  const terminal = useRef(null);
  const router = useRouter();
  const commands = {
    github: {
      description: "open my github profile",
      usage: "github",
      fn: () => openNewLink("https://github.com/AbdoElsaed", "_blank"),
    },
    resume: {
      description: "open my resume document",
      usage: "resume",
      fn: () =>
        openNewLink(process.env.NEXT_PUBLIC_RESUME_LINK as string, "_blank"),
    },
    home: {
      description: "Return to the portfolio home page",
      usage: "home",
      fn: () => router.push("/"),
    },
  };

  return (
    <div>
      <Terminal
        ref={terminal}
        commands={commands}
        welcomeMessage={[
          "welcome to terminal mode of asaed portfolio",
          "type 'help' to get a list of available commands",
        ]}
        promptLabel={"asaed@portfolio"}
        autoFocus
        style={{
          backgroundColor: "#111",
          minHeight: "30vh",
          maxHeight: "70vh",
          overflow: "auto",
          height: "100%",
          width: "100%",
        }}
        styleEchoBack="fullInherit"
        contentStyle={{
          color: "#ffb86c",
          fontWeight: "normal",
          paddingLeft: null,
        }} // Text colour
        promptLabelStyle={{ color: "#ff5555", fontWeight: "normal" }}
        inputTextStyle={{ color: "#f1fa8c", fontWeight: "normal" }}
        messageStyle={{
          color: "#8be9fd",
          fontWeight: "normal",
          paddingLeft: null,
        }}
        scrollBehavior="auto"
        // noDefaults
      />
    </div>
  );
};

export default TerminalPage;
