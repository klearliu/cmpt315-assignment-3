import "./App.css";
import { EmailList } from "./components/emailList/emailList.component";
import { useState, useEffect } from "react";

function App() {
  // const emailInfos = [
  //   {
  //     id: "1",
  //     from: "Sample User",
  //     address: "chen@omnipresent.com",
  //     time: "2021-10-07 15:35:14",
  //     message:
  //       "Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras",
  //     subject: "Omnipresent Interview",
  //     tag: "inbox",
  //     read: "false",
  //   },
  // ];

  const [emailInfos, setEmailInfo] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://gist.githubusercontent.com/mrchenliang" +
          "/15e1989583fd6e6e04e1c49287934c91/raw" +
          "/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json"
      );
      const users = await response.json();
      setEmailInfo(users);
    };
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>Assignment #3</h1>
      <EmailList emailInfos={emailInfos} />
    </div>
  );
}

export default App;
