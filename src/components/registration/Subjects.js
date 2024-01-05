import React, { useState } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const Subjects = () => {
  const dispatch = useDispatch();

  const [checkedValues, setCheckedValues] = useState([]);
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setCheckedValues([...checkedValues, value]);
    } else {
      setCheckedValues(checkedValues.filter((item) => item !== value));
    }
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const obj = {
      subject: checkedValues,
    };
    console.log(checkedValues, "checkedValues+++++++++++++++++");
    const token = localStorage.getItem("token");
    let baseUrl = "http://localhost:3000";
    baseUrl = `${baseUrl}/teachers/update/subject`;
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(obj),
    });

    const responseData = await response.json();
    console.log(responseData, "responseData++++++++++++++++");

    localStorage.setItem("current_status", responseData.current_status);
  };
  return (
    <div className="container form-control mt-3">
      <form onSubmit={onSubmitHandler} className="form-control">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="English"
            id="englishCheckbox"
            checked={checkedValues.includes("English")}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="englishCheckbox">
            English
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Hindi (or other regional language)"
            id="hindiCheckbox"
            checked={checkedValues.includes(
              "Hindi (or other regional language)"
            )}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="hindiCheckbox">
            Hindi (or other regional language)
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Mathematics"
            id="mathCheckbox"
            checked={checkedValues.includes("Mathematics")}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="mathCheckbox">
            Mathematics
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Science (including Physics, Chemistry, and Biology)"
            id="scienceCheckbox"
            checked={checkedValues.includes(
              "Science (including Physics, Chemistry, and Biology)"
            )}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="scienceCheckbox">
            Science (Physics, Chemistry, Biology)
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Social Studies (including History, Geography, and Civics)"
            id="socialStudiesCheckbox"
            checked={checkedValues.includes(
              "Social Studies (including History, Geography, and Civics)"
            )}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="socialStudiesCheckbox">
            Social Studies (History, Geography, Civics)
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Environmental Studies (in lower grades)"
            id="environmentalStudiesCheckbox"
            checked={checkedValues.includes(
              "Environmental Studies (in lower grades)"
            )}
            onChange={handleCheckboxChange}
          />
          <label
            className="form-check-label"
            htmlFor="environmentalStudiesCheckbox"
          >
            Environmental Studies (in lower grades)
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Computer Science (from middle school onwards)"
            id="computerScienceCheckbox"
            checked={checkedValues.includes(
              "Computer Science (from middle school onwards)"
            )}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="computerScienceCheckbox">
            Computer Science (from middle school onwards)
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Physical Education (from high school onwards)"
            id="physicalEducationCheckbox"
            checked={checkedValues.includes(
              "Physical Education (from high school onwards)"
            )}
            onChange={handleCheckboxChange}
          />
          <label
            className="form-check-label"
            htmlFor="physicalEducationCheckbox"
          >
            Physical Education (including sports and exercises)
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Art and Craft"
            id="artAndCraftCheckbox"
            checked={checkedValues.includes("Art and Craft")}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="artAndCraftCheckbox">
            Art and Craft
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Music"
            id="musicCheckbox"
            checked={checkedValues.includes("Music")}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="musicCheckbox">
            Music
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Dance"
            id="danceCheckbox"
            checked={checkedValues.includes("Dance")}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="danceCheckbox">
            Dance
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Moral Science/Ethics"
            id="moralScienceCheckbox"
            checked={checkedValues.includes("Moral Science/Ethics")}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="moralScienceCheckbox">
            Moral Science/Ethics
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Sanskrit"
            id="sanskritCheckbox"
            checked={checkedValues.includes("Sanskrit")}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="sanskritCheckbox">
            Sanskrit
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Foreign Languages (such as French, German, or Spanish; optional in some schools)"
            id="foreignLanguagesCheckbox"
            checked={checkedValues.includes(
              "Foreign Languages (such as French, German, or Spanish; optional in some schools)"
            )}
            onChange={handleCheckboxChange}
          />
          <label
            className="form-check-label"
            htmlFor="foreignLanguagesCheckbox"
          >
            Foreign Languages (such as French, German, or Spanish; optional in
            some schools)
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Economics (from high school onwards)"
            id="economicsCheckbox"
            checked={checkedValues.includes(
              "Economics (from high school onwards)"
            )}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="economicsCheckbox">
            Economics (from high school onwards)
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Business Studies (from high school onwards)"
            id="businessStudiesCheckbox"
            checked={checkedValues.includes(
              "Business Studies (from high school onwards)"
            )}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="businessStudiesCheckbox">
            Business Studies (from high school onwards)
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Accountancy (from high school onwards)"
            id="accountancyCheckbox"
            checked={checkedValues.includes(
              "Accountancy (from high school onwards)"
            )}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="accountancyCheckbox">
            Accountancy (from high school onwards)
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Psychology (from high school onwards)"
            id="psychologyCheckbox"
            checked={checkedValues.includes(
              "Psychology (from high school onwards)"
            )}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="psychologyCheckbox">
            Psychology (from high school onwards)
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Political Science (from high school onwards)"
            id="politicalScienceCheckbox"
            checked={checkedValues.includes(
              "Political Science (from high school onwards)"
            )}
            onChange={handleCheckboxChange}
          />
          <label
            className="form-check-label"
            htmlFor="politicalScienceCheckbox"
          >
            Political Science (from high school onwards)
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Sociology (from high school onwards)"
            id="sociologyCheckbox"
            checked={checkedValues.includes(
              "Sociology (from high school onwards)"
            )}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="sociologyCheckbox">
            Sociology (from high school onwards)
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Home Science (optional in some schools)"
            id="homeScienceCheckbox"
            checked={checkedValues.includes(
              "Home Science (optional in some schools)"
            )}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="homeScienceCheckbox">
            Home Science (optional in some schools)
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Legal Studies (from high school onwards, optional in some schools)"
            id="legalStudiesCheckbox"
            checked={checkedValues.includes(
              "Legal Studies (from high school onwards, optional in some schools)"
            )}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="legalStudiesCheckbox">
            Legal Studies (from high school onwards, optional in some schools)
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Physical Education (from high school onwards)"
            id="physicalEducationHighSchoolCheckbox"
            checked={checkedValues.includes(
              "Physical Education (from high school onwards)"
            )}
            onChange={handleCheckboxChange}
          />
          <label
            className="form-check-label"
            htmlFor="physicalEducationHighSchoolCheckbox"
          >
            Physical Education (from high school onwards)
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Scratch"
            id="scratchCheckbox"
            checked={checkedValues.includes("Scratch")}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="scratchCheckbox">
            Scratch
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Python"
            id="pythonCheckbox"
            checked={checkedValues.includes("Python")}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="pythonCheckbox">
            Python
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Java"
            id="javaCheckbox"
            checked={checkedValues.includes("Java")}
            onChange={handleCheckboxChange}
          />

          <label className="form-check-label" htmlFor="javaCheckbox">
            Java
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="C++"
            id="cppCheckbox"
            checked={checkedValues.includes("C++")}
            onChange={handleCheckboxChange}
          />

          <label className="form-check-label" htmlFor="cppCheckbox">
            C++
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="HTML/CSS"
            id="htmlCssCheckbox"
            checked={checkedValues.includes("HTML/CSS")}
            onChange={handleCheckboxChange}
          />

          <label className="form-check-label" htmlFor="htmlCssCheckbox">
            HTML/CSS
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="JavaScript"
            id="javascriptCheckbox"
            checked={checkedValues.includes("JavaScript")}
            onChange={handleCheckboxChange}
          />

          <label className="form-check-label" htmlFor="javascriptCheckbox">
            JavaScript
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="SQL"
            id="sqlCheckbox"
            checked={checkedValues.includes("SQL")}
            onChange={handleCheckboxChange}
          />

          <label className="form-check-label" htmlFor="sqlCheckbox">
            SQL
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Visual Basic"
            id="visualBasicCheckbox"
            checked={checkedValues.includes("Visual Basic")}
            onChange={handleCheckboxChange}
          />

          <label className="form-check-label" htmlFor="visualBasicCheckbox">
            Visual Basic
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Ruby"
            id="rubyCheckbox"
            checked={checkedValues.includes("Ruby")}
            onChange={handleCheckboxChange}
          />

          <label className="form-check-label" htmlFor="rubyCheckbox">
            Ruby
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="PHP"
            id="phpCheckbox"
            checked={checkedValues.includes("PHP")}
            onChange={handleCheckboxChange}
          />

          <label className="form-check-label" htmlFor="phpCheckbox">
            PHP
          </label>
        </div>
        <div className="col-12 my-2">
          <button type="submit" className="btn btn-primary">
            save your subjects
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subjects;
