function encryptString(text, crypt) {
  const arrayFromString = [...text].map((el) => {

    const currentSymbol = el.charCodeAt()

    if(currentSymbol >= 65 && currentSymbol <= 90 || currentSymbol >= 97 && currentSymbol <= 122) {
      return currentSymbol + crypt
    } else return currentSymbol

  })

  const encryptedArray = arrayFromString.map((el) => String.fromCharCode(el))
  const encryptedString = encryptedArray.join('') + '\n'

  console.log('Your text has been successfully encrypted: ' + encryptedString)

  return encryptedString
}

function decryptString(text, key) {
  const arrayFromString = [...text].map((el) => {

    const currentSymbol = el.charCodeAt()

    if(currentSymbol >= 65 && currentSymbol <= 90 || currentSymbol >= 97 && currentSymbol <= 122) {
      return currentSymbol - key
    } else return currentSymbol

  })

  const decryptedArray = arrayFromString.map((el) => String.fromCharCode(el))
  const decryptedString = decryptedArray.join('') + '\n'

  console.log('Your text has been successfully decrypted: ' + decryptedString)

  return decryptedString;
}

module.exports = {
  encrypt: encryptString,
  decrypt: decryptString
}