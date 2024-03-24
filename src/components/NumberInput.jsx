import React, { useRef, useState } from 'react';

import PropTypes from 'prop-types';

const OTPInput = ({ length = 4, onComplete }) => {
    const inputRefs = useRef(Array.from({ length }, () => React.createRef()));

    const [otpValues, setOtpValues] = useState(Array(length).fill(''));

    const handleTextChange = (index, value) => {
        const newOtpValues = [...otpValues];
        newOtpValues[index] = value;
        setOtpValues(newOtpValues);

        if (value.length === 1 && index < length - 1) {
            inputRefs.current[index + 1].current.focus();
        }

        if (value.length === 0 && index > 0) {
            inputRefs.current[index - 1].current.focus();
        }

        if (newOtpValues.every((digit) => digit !== '')) {
            onComplete(newOtpValues.join(''));
        }
    };

    return (
        <div className={`grid grid-cols-${length} gap-5`}>
            {Array.from({ length }, (_, index) => (
                <div key={index}>
                    <label htmlFor={`otpInput${index}`} className="sr-only"> {index + 1}</label>
                    <input
                        id={`otpInput${index}`}
                        type="text"
                        maxLength={1}
                        value={otpValues[index]}
                        onChange={(e) => handleTextChange(index, e.target.value)}
                        ref={inputRefs.current[index]}
                        style={{ marginRight: index === length - 1 ? '0' : '10px' }}
                        className={`border border-solid border-border-slate-500 focus:border-blue-600 p-5 outline-none`}
                    />
                </div>
            ))}
        </div>
    );
};
OTPInput.propTypes = {
    length: PropTypes.number,
    onComplete: PropTypes.func.isRequired, // Add onComplete prop validation
};

export default OTPInput;
