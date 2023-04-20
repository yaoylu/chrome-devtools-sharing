function getTimeLog1() {

    const start = new Date().getTime();

    for (let i = 0; i < 10000000; i++) {
      // Do nothing
    }
    
    const end = new Date().getTime();
    console.log(end - start);
}

function getTimeLog2() {

    console.time("doNothing");

    for (let i = 0; i < 10000000; i++) {
    // Do nothing
    }

    console.timeEnd("doNothing");
}

function getTimeLog3() {

    performance.mark("Start");

    for (let i = 0; i < 10000000; i++) {
    // Do nothing
    }

    performance.mark("End");

    performance.measure("Chrome Devtools Sharing", "Start", "End");

    const measures = performance.getEntriesByType("measure");
    console.log(measures);
    console.log(measures[0].duration);
}

function getTimeLog4() {
    const resources = performance.getEntriesByType("resource");
    const paints = performance.getEntriesByType("paint");
    const navigations = performance.getEntriesByType("navigation");
    console.log(resources);
    console.log(paints);
    console.log(navigations);
}
document.getElementById("log1").addEventListener("click", getTimeLog1);
document.getElementById("log2").addEventListener("click", getTimeLog2);
document.getElementById("log3").addEventListener("click", getTimeLog3);
document.getElementById("log4").addEventListener("click", getTimeLog4);
