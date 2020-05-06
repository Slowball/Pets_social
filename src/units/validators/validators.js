export const required = value => {
    if (value) return undefined;
    return 'error'
};

export const maxLengthCreator = (maxLength) => (values) => {
    if (values.length > maxLength) return `max length ${maxLength} symbols`;
    return undefined;
};
