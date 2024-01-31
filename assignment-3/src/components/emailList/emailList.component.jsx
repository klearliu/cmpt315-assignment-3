import React from "react";
import { Email } from "../email/email.component";
import "./emailList.style.css";

export const EmailList = ({ emailInfos }) => (
  <div className="emailList">
    {emailInfos.map((emailInfo) => (
      <Email key={emailInfo.id} emailInfo={emailInfo} />
    ))}
  </div>
);
