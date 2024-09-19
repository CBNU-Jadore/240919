export const surveyJson = {
  "locale": "ko",
  "logoPosition": "right",
  "completedHtml": {
    "ko": "<h3>조사해 주셔서 감사합니다.</h3>"
  },
  "pagePrevText": {
    "ko": "이전"
  },
  "pageNextText": {
    "ko": "다음"
  },
  "completeText": {
    "ko": "완료"
  },
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "radiogroup",
          "name": "question1",
          "title": "연령대를 선택해주세요.",
          "isRequired": true,
          "choices": [
            {
              "value": 1,
              "text": "10대 미만"
            },
            {
              "value": 2,
              "text": "10대"
            },
            {
              "value": 3,
              "text": "20대"
            },
            {
              "value": 4,
              "text": "30대"
            },
            {
              "value": 5,
              "text": "40대"
            },
            {
              "value": 6,
              "text": "50대"
            },
            {
              "value": 7,
              "text": "60대 이상"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "question2",
          "title": "성별을 선택해주세요.",
          "isRequired": true,
          "choices": [
            {
              "value": 1,
              "text": "남성"
            },
            {
              "value": 2,
              "text": "여성"
            }
          ]
        }
      ]
    },
    {
      "name": "page2",
      "elements": [
        {
          "type": "radiogroup",
          "name": "question3",
          "title": "좋아하는 계절을 선택해주세요.",
          "isRequired": true,
          "choices": [
            {
              "value": 1,
              "text": "봄"
            },
            {
              "value": 2,
              "text": "여름"
            },
            {
              "value": 3,
              "text": "가을"
            },
            {
              "value": 4,
              "text": "겨울"
            }
          ]
        }
      ]
    },
    {
      "name": "page4",
      "elements": [
        {
          "type": "checkbox",
          "name": "question4",
          "title": "평소 선호하는 느낌을 선택해주세요. ",
          "isRequired": true,
          "choices": [
            {
              "value": 1,
              "text": "가벼움"
            },
            {
              "value": 2,
              "text": "상큼함"
            },
            {
              "value": 3,
              "text": "산뜻함"
            },
            {
              "value": 4,
              "text": "달콤함"
            },
            {
              "value": 5,
              "text": "청량함"
            },
            {
              "value": 6,
              "text": "강렬함"
            },
            {
              "value": 7,
              "text": "시원함"
            },
            {
              "value": 8,
              "text": "따뜻함"
            },
            {
              "value": 9,
              "text": "깨끗함"
            },
            {
              "value": 10,
              "text": "부드러움"
            },
            {
              "value": 11,
              "text": "여성적"
            },
            {
              "value": 12,
              "text": "남성적"
            },
            {
              "value": 13,
              "text": "중성적"
            }
          ],
          "showNoneItem": true,
          "noneText": "모름",
          "showSelectAllItem": true,
          "selectAllText": "모두 선택"
        }
      ]
    },
    {
      "name": "page3",
      "elements": [
        {
          "type": "checkbox",
          "name": "question5",
          "title": "선호하는 향수 노트를 선택해주세요.",
          "isRequired": true,
          "choices": [
            {
              "value": 1,
              "text": "시트러스 (Citrus)"
            },
            {
              "value": 2,
              "text": "라벤더 (Lavender)"
            },
            {
              "value": 3,
              "text": "로즈 (Rose)"
            },
            {
              "value": 4,
              "text": "쟈스민 (Jasmine)"
            },
            {
              "value": 5,
              "text": "파출리 (Patchouli)"
            },
            {
              "value": 6,
              "text": "샌달우드 (Sandalwood)"
            },
            {
              "value": 7,
              "text": "머스크 (Musk)"
            },
            {
              "value": 8,
              "text": "바닐라 (Vanilla)"
            },
            {
              "value": 9,
              "text": "앰버 (Amber)"
            },
            {
              "value": 10,
              "text": "베티버 (Vetiver)"
            }
          ],
          "showNoneItem": true,
          "noneText": "모름",
          "showSelectAllItem": true,
          "selectAllText": "모두 선택"
        }
      ]
    }
  ],
  "navigateToUrl": "/unique"
};