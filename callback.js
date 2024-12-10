function makePancakes(callback) {
    console.log("Making pancakes...");
    setTimeout(() => {
        callback(); //
    }, 1500 );
}

makePancakes(() => {
    console.log("Let's eat");
});
           