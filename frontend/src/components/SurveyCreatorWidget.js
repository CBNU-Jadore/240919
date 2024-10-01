import { useCallback } from 'react';

import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { surveyThemeJson } from "./SurveyTheme";
import { surveyJson } from "./SurveyJson";


// const SURVEY_ID = 1;


function SurveyCreatorWidget() {
  const survey = new Model(surveyJson);
  survey.applyTheme(surveyThemeJson);
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
    //alert("완료되었습니다.");
    
    // saveSurveyResults(
    //   "https://your-web-service.com/" + SURVEY_ID,
    //   sender.data
    // )
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}

function saveSurveyResults(url, json) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(json)
  })
  .then(response => {
    if (response.ok) {
      // Handle success
    } else {
      // Handle error
    }
  })
  .catch(error => {
    // Handle error
  });
}

export default SurveyCreatorWidget;