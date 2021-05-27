

export const required = value => {
    if (value) return undefined;
    return 'Field is required';
};

export const maxLengthCreator = maxLength => value => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
};

export const minLengthCreator = minLength => value => {
    if (value.length < minLength) return `Max length is ${minLength} symbols`;
    return undefined;
};

export const passwordMustMatch = (password, allValue) => {
    if (password === allValue.password) return undefined; 
    return 'Password must match';
};

export const atLeastOneUpperCaseLetter = (value) => {
    for (let i = 0; i < value.length; i++) {
        let charCode = value[i].charCodeAt();
        if (charCode <= 90 && charCode >= 65) {
            return undefined;
        };
    };
    return 'No contains at least one upper case letter';
};

export const atLeastOneLowerCaseLetter = (value) => {
    for (let i = 0; i < value.length; i++) {
        let charCode = value[i].charCodeAt();
        if (charCode <= 122 && charCode >= 97) {
            return undefined;
        };
    };
    return 'No contains at least one lower case letter';
};

export const haveAtLeastOneDigit = (value) => {
    for (let i = 0; i < value.length; i++) {
        let charCode = value[i].charCodeAt();
        if (charCode <= 57 && charCode >= 48) {
            return undefined;
        };
    };
    return 'No contains at least one digit';
};

export const containsAnInvalidCharacter = (value) => {
    for (let i = 0; i < value.length; i++) {
        let charCode = value[i].charCodeAt();
        if (charCode >= 127) {
            return 'Contains an invalid character';
        };
    };
    return undefined;
}


