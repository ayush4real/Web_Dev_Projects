function convertToHex(value){
    var hexVal = value.toString(16);
    return hexVal.length === 1 ? '0' + hexVal : hexVal;
}

function rgbToHex(r, g, b){
    return '#' + convertToHex(r) + convertToHex(g) + convertToHex(b);
}

export default rgbToHex;