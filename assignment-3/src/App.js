import "./App.css";
import { EmailList } from "./components/emailList/emailList.component";
import { useState, useEffect } from "react";
import { SearchBar } from "./components/searchbar/searchbar.component";
import MessageComponent from "./components/message.component";

function App() {
  // States to manage email info, search input, and filtered emails
  const [emailInfos, setEmailInfo] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  const [fileteredEmails, setFilteredEmails] = useState([]);

  //filtering emails based on search input
  useEffect(() => {
    let filtered = [];
    const lowerCaseSearchInput = searchInput.toString().toLowerCase(); // Convert searchInput to lowercase

    // If search input is empty, display all emails, else; filter by subject
    if (lowerCaseSearchInput === "") {
      filtered = emailInfos;
    } else {
      filtered = emailInfos.filter((emailInfo) =>
        emailInfo.subject.toLowerCase().includes(lowerCaseSearchInput)
      );
    }

    setFilteredEmails(filtered);
  }, [emailInfos, searchInput]);

  // updating search input
  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };

  // gathering email based on spec's
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
      <h1>Your Email</h1>
      <div class="container">
        <div class="column">
          <h1>Column 1</h1>
          <div>
            <label className="radio-label">
              <input
                type="radio"
                className="radio-input"
                name="radioGroup"
                value="option1"
              />
              Inbox
            </label>
          </div>
          <div>
            <label className="radio-label">
              <input
                type="radio"
                className="radio-input"
                name="radioGroup"
                value="option2"
              />
              Trash
            </label>
          </div>
        </div>

        <div class="column">
          <h1>Email Sidebar View</h1>
          <SearchBar placeholder="Subject" handleInput={handleInput} />
          <EmailList emailInfos={fileteredEmails} />
        </div>

        <div class="column">
          <h1>Email Body View</h1>
          <MessageComponent messages={emailInfos} />
        </div>
      </div>
    </div>
  );
}

export default App;
