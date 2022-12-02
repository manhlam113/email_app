import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import DashboardSidebar from "./components/dashboard/DashboardSidebar";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Email from "./components/pages/Email";
import PleaseChoose from "./components/pleasechoose/PleaseChoose";
import PleaseChooseEmail from "./components/pleasechoose/PleaseChooseEmail";
import EmailSummary from "./components/Email/EmailSummary";
import EmailDetail from "./components/Email/EmailDetail";
import Contact from "./components/pages/Contact";
import messagesData from "../src/data/messages.json";
import Login from "./components/login/Login";

function App() {
  console.log(messagesData);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState("test@test");
  const [user, setUser] = useState(false);

  return (
    <Routes>
      <Route path="*" element={<Navigate to={"/login"}></Navigate>}></Route>
      {!user && (
        <Route
          path="/login"
          element={
            <Login
              setEmail={setEmail}
              email={email}
              password={password}
              setPassword={setPassword}
              setUser={setUser}
            ></Login>
          }
        ></Route>
      )}
      {user && (
        <>
          <Route
            path="/"
            element={<DashboardSidebar setUser={setUser}></DashboardSidebar>}
          ></Route>

          <Route
            path="/main"
            element={<DashboardSidebar setUser={setUser}></DashboardSidebar>}
          >
            <Route path="/main/home" element={<Home></Home>}></Route>
            <Route path="/main/contact" element={<Contact></Contact>}></Route>
            <Route path="/main/email" element={<Email></Email>}>
              <Route
                path="/main/email"
                element={<PleaseChoose></PleaseChoose>}
              ></Route>
              {/* ============INBOX======= */}
              <Route
                path="/main/email/inbox"
                element={
                  <EmailSummary data={messagesData} type="inbox"></EmailSummary>
                }
              >
                <Route
                  path="/main/email/inbox"
                  element={<PleaseChooseEmail></PleaseChooseEmail>}
                ></Route>
                <Route
                  path="/main/email/inbox/:id"
                  element={<EmailDetail></EmailDetail>}
                ></Route>
              </Route>
              {/* ==============SENT========= */}
              <Route
                path="/main/email/sent"
                element={
                  <EmailSummary data={messagesData} type="sent"></EmailSummary>
                }
              >
                <Route
                  path="/main/email/sent"
                  element={<PleaseChooseEmail></PleaseChooseEmail>}
                ></Route>
                <Route
                  path="/main/email/sent/:id"
                  element={<EmailDetail></EmailDetail>}
                ></Route>
              </Route>

              {/* ===========Reminder========== */}
              <Route
                path="/main/email/reminder"
                element={
                  <EmailSummary
                    data={messagesData}
                    type="reminder"
                  ></EmailSummary>
                }
              >
                <Route
                  path="/main/email/reminder"
                  element={<PleaseChooseEmail></PleaseChooseEmail>}
                ></Route>
                <Route
                  path="/main/email/reminder/:id"
                  element={<EmailDetail></EmailDetail>}
                ></Route>
              </Route>
              {/* ===========SPAM============= */}
              <Route
                path="/main/email/spam"
                element={
                  <EmailSummary data={messagesData} type="spam"></EmailSummary>
                }
              >
                <Route
                  path="/main/email/spam"
                  element={<PleaseChooseEmail></PleaseChooseEmail>}
                ></Route>
                <Route
                  path="/main/email/spam/:id"
                  element={<EmailDetail></EmailDetail>}
                ></Route>
              </Route>
              {/* ============FAVORITE=========== */}
              <Route
                path="/main/email/favorite"
                element={
                  <EmailSummary
                    data={messagesData}
                    type="favorite"
                  ></EmailSummary>
                }
              >
                <Route
                  path="/main/email/favorite"
                  element={<PleaseChooseEmail></PleaseChooseEmail>}
                ></Route>
                <Route
                  path="/main/email/favorite/:id"
                  element={<EmailDetail></EmailDetail>}
                ></Route>
              </Route>
              {/* ==========JUNKS=========== */}
              <Route
                path="/main/email/junks"
                element={
                  <EmailSummary data={messagesData} type="junks"></EmailSummary>
                }
              >
                <Route
                  path="/main/email/junks"
                  element={<PleaseChooseEmail></PleaseChooseEmail>}
                ></Route>
                <Route
                  path="/main/email/junks/:id"
                  element={<EmailDetail></EmailDetail>}
                ></Route>
              </Route>
            </Route>
          </Route>
        </>
      )}
    </Routes>
  );
}

export default App;
