import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS 가져오기

const RadioButtonGroup = () => {
  const [selectedValue, setSelectedValue] = useState('1'); // 기본 선택은 '1'

  const options = [
    // { label: '최신순', value: '1' },
    // { label: '이름순', value: '2' },
    // { label: '평점순', value: '3' },
  ];

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <Form className='p-2 text-right'>
      {options.map((option, index) => (
        <Form.Check type="radio" key={index} className="custom-radio">
          <Form.Check.Input
            type="radio"
            name="customRadioGroup"
            value={option.value}
            checked={selectedValue === option.value} // 기본 선택 여부 확인
            onChange={handleChange}
            // style={{ display: 'none' }} // 라디오 버튼 숨기기
          />
          <Form.Check.Label style={{ cursor: 'pointer' }}>{option.label}</Form.Check.Label>
        </Form.Check>
      ))}
    </Form>
  );
};

export default RadioButtonGroup;
