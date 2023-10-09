function addDateTime(message) {
    const dateTimeNow = new Date();

    return dateTimeNow + message;
}

alert(addDateTime(" This is the best moment to have a look at this website !"));