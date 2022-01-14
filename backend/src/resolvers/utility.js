const checkUrlExisted = (db, url) => {
    if(!url){
        throw new Error("Url must not be empty!");
    }
    return db.LinkModel.find({origin: url});
}

// const createHash = itemCount => {
//     let hashDigits = [];
//     // dividend is a unique integer (in our case, number of links)
//     let dividend = itemCount + 1;
//     let remainder = 0;
//     while (dividend > 0) {
//         remainder = dividend % 62;
//         dividend = Math.floor(dividend / 62);
//         hashDigits.unshift(remainder);
//     }
//     const alphabetArray = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.split(
//         '',
//     );
//     // Convert hashDigits to base62 representation
//     let hashString = '';
//     let i = 0;
//     while (hashDigits.length > i) {
//         hashString += alphabetArray[hashDigits[i]];
//         i++;
//     }
//     return hashString;
// };
const generateUrl = () => {
    let str = '';
    const arr = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    ];
    for (let i = 0; i < 6; i++) {
    const pos = Math.round(Math.random() * (arr.length - 1));
    str += arr[pos];
    }
    return str;
}
const newLink = (db, url) => {
    let short = generateUrl();
    return new db.LinkModel({origin: url, short: short});
}

export {checkUrlExisted, newLink};