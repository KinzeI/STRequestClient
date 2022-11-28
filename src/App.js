import axios from "axios";
import React from "react";
import ReactJson from "react-json-view";

import "./App.css";

import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Select from "./components/Select/Select";

import BodySection from "./components/BodySection/BodySection";
import ParamsSection from "./components/FieldsSection/FieldsSection";

import { methods } from "./const/const";

function App() {
  const [url, setUrl] = React.useState();
  const [currentMethod, setCurrentMethod] = React.useState("0");

  const [requestStatus, setRequestStatus] = React.useState(null);
  const [requestResult, setRequestResult] = React.useState("");

  const [currentSection, setCurrentSection] = React.useState(0);

  const [currentParams, setCurrentParams] = React.useState([
    { key: "", value: "" },
  ]);

  const [currentHeaders, setCurrentHeaders] = React.useState([
    { key: "", value: "" },
  ]);

  const [body, setBody] = React.useState({});

  const onAddParam = () => {
    setCurrentParams((prev) => [...prev, { key: "", value: "" }]);
  };

  const onDeleteParam = (indexOfDelete) => {
    setCurrentParams((prev) =>
      prev.filter((param, index) => index !== indexOfDelete)
    );
  };

  const onChangeParam = (indexOfNew, newParam) => {
    setCurrentParams((prev) =>
      prev.map((param, index) => (index === indexOfNew ? newParam : param))
    );
  };

  const onAddHeader = () => {
    setCurrentHeaders((prev) => [...prev, { key: "", value: "" }]);
  };

  const onDeleteHeader = (indexOfDelete) => {
    setCurrentHeaders((prev) =>
      prev.filter((header, index) => index !== indexOfDelete)
    );
  };

  const onChangeHeader = (indexOfNew, newHeader) => {
    setCurrentHeaders((prev) =>
      prev.map((header, index) => (index === indexOfNew ? newHeader : header))
    );
  };

  const onBodyEdit = (data) => {
    setBody(data.updated_src);
  };

  const sendRequest = async () => {
    if (!url.trim()) return;
    console.log(url);
    const params = currentParams.reduce((prev, param) => {
      if (param.key.trim() && param.value.trim()) {
        return {
          ...prev,
          [param.key]: param.value,
        };
      }
      return prev;
    }, {});

    const headers = currentHeaders.reduce((prev, header) => {
      if (header.key.trim() && header.value.trim()) {
        return {
          ...prev,
          [header.key]: header.value,
        };
      }
      return prev;
    }, {});
    headers['accept-encoding'] = '*';
    switch (currentMethod) {
      case "0":
        // GET
        axios.post("exampleUrl", {
          method : "GET",
          url,
          headers,
          params
          })
          .then((response) => {
            console.log(response)
            setRequestResult(response.data);
            setRequestStatus(response.status);
          })
          .catch((e) => {
            console.log(e)
            setRequestResult(e);
            setRequestStatus(
              "" + e.response.data.statusCode + ": " + (e.response.data.message ?? '')
            );
          });
        break;
      case "1":
        // POST
        axios.post("exampleUrl", {
          method : "POST",
          url,
          headers,
          params,
          data : body
          })
          .then((response) => {
            setRequestResult(response.data);
            setRequestStatus(response.status);
          })
          .catch((e) => {
            setRequestResult(e);
            setRequestStatus(
              "" + e.response.data.statusCode + ": " +(e.response.data.message ?? '')
            );
          });
        break;
      case "2":
        // PUT
        axios.post("exampleUrl", {
          method : "PUT",
          url,
          headers,
          params,
          data : body
          })
          .then((response) => {
            setRequestResult(response.data);
            setRequestStatus(response.status);
          })
          .catch((e) => {
            setRequestResult(e);
            setRequestStatus(
              "" + e.response.data.statusCode + ": " + (e.response.data.message ?? '')
            );
          });
        break;
      case "3":
        // PATCH
        axios.post("exampleUrl", {
          method : "PATCH",
          url,
          headers,
          params,
          data : body
          })
          .then((response) => {
            setRequestResult(response.data);
            setRequestStatus(response.status);
          })
          .catch((e) => {
            setRequestResult(e);
            setRequestStatus(
              "" + e.response.data.statusCode + ": " + (e.response.data.message ?? '')
            );
          });
        break;
      case "4":
        // DELETE
        axios.post("exampleUrl", {
          method : "DELETE",
          url,
          headers,
          params
          })
          .then((response) => {
            setRequestResult(response.data);
            setRequestStatus(response.status);
          })
          .catch((e) => {
            setRequestResult(e);
            setRequestStatus(
              "" + e.response.data.statusCode + ": " + (e.response.data.message ?? '')
            );
          });
        break;
    }
  };

  return (
    <div className="App">
      <section className="input-section">
        <Select
          options={methods}
          value={currentMethod}
          onChange={(e) => {
            if (currentSection === 2) {
              setCurrentSection(0);
            }
            setCurrentMethod(e.target.value);
          }}
        />
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Введите url"
        />
        <Button title="Отправить" onClick={sendRequest} />
      </section>
      <section className="params-section section">
        <div className="params-section__tabs">
          <h4
            className={`tab ${currentSection === 0 && "tab_active"}`}
            onClick={() => setCurrentSection(0)}
          >
            Параметры запроса
          </h4>
          <h4
            className={`tab ${currentSection === 1 && "tab_active"}`}
            onClick={() => setCurrentSection(1)}
          >
            Заголовки запроса
          </h4>
          {currentMethod !== "0" && (
            <h4
              className={`tab ${currentSection === 2 && "tab_active"}`}
              onClick={() => setCurrentSection(2)}
            >
              Тело запроса
            </h4>
          )}
        </div>
        <div className="params-section__main">
          {currentSection === 0 && (
            <ParamsSection
              onAdd={onAddParam}
              onChange={onChangeParam}
              onDelete={onDeleteParam}
              currentParams={currentParams}
            />
          )}
          {currentSection === 1 && (
            <ParamsSection
              onAdd={onAddHeader}
              onChange={onChangeHeader}
              onDelete={onDeleteHeader}
              currentParams={currentHeaders}
            />
          )}
          {currentSection === 2 && (
            <BodySection value={body} onEdit={onBodyEdit} />
          )}
        </div>
      </section>
      <section className="result-section section">
        {requestStatus && <h4>Запрос выполнился с кодом {requestStatus}</h4>}
        {typeof requestResult === "object" ? (
          <ReactJson src={requestResult} />
        ) : (
          JSON.stringify(requestResult)
        )}
      </section>
    </div>
  );
}

export default App;
