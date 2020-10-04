function calculateEncryptMaxValue(symbolCode, key, maxValue) {
  if(symbolCode + key > maxValue) {
    return maxValue
  } else return symbolCode + key
}

function calculateEncryptMinValue(symbolCode, key, minValue) {
  if(symbolCode - key < minValue) {
    return minValue
  } else return symbolCode - key
}

function convertationArrayToString(arrayForConvertation) {
  const transformArray = arrayForConvertation.map((el) => String.fromCharCode(el))
  const convertedString = transformArray.join('') + '\n'
  return convertedString
}

function encryptString(text, key) {

  const arrayFromString = [...text].map((el) => {

    const currentSymbol = el.charCodeAt()

    if (currentSymbol >= 65 && currentSymbol <= 90) {
      return calculateEncryptMaxValue(currentSymbol, key, 90)
    } else if(currentSymbol >= 97 && currentSymbol <= 122) {
      return calculateEncryptMaxValue(currentSymbol, key, 122)
    } else return currentSymbol
  })

  const encryptedString = convertationArrayToString(arrayFromString)

  return encryptedString
}

function decryptString(text, key) {

  const arrayFromString = [...text].map((el) => {

    const currentSymbol = el.charCodeAt()

    if (currentSymbol >= 65 && currentSymbol <= 90) {
      return calculateEncryptMinValue(currentSymbol, key, 65)
    } else if(currentSymbol >= 97 && currentSymbol <= 122) {
      return calculateEncryptMinValue(currentSymbol, key, 97)
    } else return currentSymbol
  })

  const decryptedString = convertationArrayToString(arrayFromString)

  return decryptedString;
}

function detectMethod(method, data, cryptKey) {
  if (method === 'encrypt') {
    return encryptString(data, cryptKey);
  }
  if (method === 'decrypt') {
    return decryptString(data, cryptKey);
  } 
}

module.exports = {
  detect: detectMethod,
}