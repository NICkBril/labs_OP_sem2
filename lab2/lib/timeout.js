function consumeWithTimeout(genObj, durationSeconds, pauseMs = 300) {
    const interval = setInterval(() => {
        const value = genObj.next().value;
        console.log(value);
    }, pauseMs);

    setTimeout(() => {
        clearInterval(interval);
        console.log("The end");
    }, durationSeconds * 1000);
}