const capitalize = str => {
    const firstLetter = str.charAt(0).toUpperCase() + str.slice(1);

    return firstLetter
}

console.log(capitalize("javascript"))