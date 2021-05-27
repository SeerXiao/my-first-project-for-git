export const updateObjectInArray = (arr, arrItemId, objPropName, newObjProp) => {
    return arr.map(item => {
        if(item[objPropName] === arrItemId) {
            return {...item, ...newObjProp};
        };
        return item;
    })
};


export const profileErrorMessagesFinder = (messages) => {
    let errorContactsMessages = {};
    let errorMessages = {};

    for (let i = 0; i < messages.length; i++) {
        let message = messages[i];
        let startFieldName = message.lastIndexOf('(') + 1;
        let endFieldName = message.lastIndexOf(')');
        let fieldName = message[startFieldName].toLowerCase() + message.slice(startFieldName + 1, endFieldName);
        if (!fieldName.includes('->')) {
            errorMessages = {...errorMessages, [fieldName]: message};
            continue;
        }

        startFieldName = message.lastIndexOf('>') + 1;
        endFieldName = message.lastIndexOf(')');
        fieldName = message[startFieldName].toLowerCase() + message.slice(startFieldName + 1, endFieldName);
        errorContactsMessages = {...errorContactsMessages, [fieldName]: message};
    }
    
    
    return {...errorMessages, 'contacts': errorContactsMessages};
}