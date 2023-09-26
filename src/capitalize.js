const capitalize = (text) => {
    if (text === '') {
        return '';
    }
    const [firstChar, ...restChsrs] = text;
    return `${firstChar.toUpperCase()}${restChsrs.join('')}`;
}
export default capitalize; 