const crypto = require('crypto');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the target Email to Generate The Product Key : ', mail => {
    let key = genKey(mail)
    console.log(`Your Key is ${key} for Email : ${mail}`);
    readline.close();
});
function genKey(email) {
    const stringToHash = "11172861" + email.trim();
    const key = crypto.createHash('md5').update(stringToHash, 'ascii').digest('hex');
    return key;
}