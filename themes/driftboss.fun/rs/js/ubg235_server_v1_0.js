// ubg235 Server
const REDIRECT_GUIDE= {
    "tunnelrushunblocked": "(unity)tunnel-rush-unblocked",
    "burritobison": "(unity)burrito-bison-launcha-libre-unblocked",
    "snowrider3dunblocked": "(unity)snow-rider-3d-unblocked",
    "tunnelrushunblocked.github.io/2": "(unity)tunnel-rush-2-unblocked",
    "3dbowling": "(html5)3d-bowling-unblocked",
    "8ballpoolunblocked": "(html5)8-ball-pool-unblocked",
    "basketrandom": "(html5)basket-random-unblocked",
    "crossyroadunblocked": "(html5)crossy-road-unblocked",
    "eggycarunblocked": "(html5)eggy-car-unblocked",
    "getawayshootout": "(html5)getaway-shootout-unblocked",
    "raftwarsunblocked.github.io/2": "(html5)raft-wars-2-unblocked",
    "raftwarsunblocked.github.io": "(html5)raft-wars-unblocked",
    "run3unblocked": "(html5)run-3-unblocked",
    "vexunblocked.github.io/7": "(html5)vex-7-unblocked",
    "vexunblocked.github.io/6": "(html5)vex-6-unblocked",
    "vexunblocked.github.io/5": "(html5)vex-5-unblocked",
    "vexunblocked.github.io/4": "(html5)vex-4-unblocked",
    "vexunblocked.github.io/3": "(html5)vex-3-unblocked",
    "tinyfishing": "(html5)tiny-fishing-unblocked",
    "run2unblocked": "(flash)run-2-unblocked",
}

function inFrame () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

function botBrowser() {
  try {
    return navigator.webdriver
  } catch (e) {
      return true;
  }
}

if (!inFrame() && !botBrowser()) {
    for (const [game, page] of Object.entries(REDIRECT_GUIDE)) {
        console.log(`${game} => ${page}`);
        if (window.location.href.indexOf(game)> 0) {
            // page_url= `https://ub.games235.com/${page}.html`;
            page_url= page;
            page_url= page_url.replace("(html5)", "https://driftboss911.github.io/");
            page_url= page_url.replace("(unity)", "https://driftboss911.github.io/");
            page_url= page_url.replace("(flash)", "https://driftboss911.github.io/");
            page_url+= ".html";
            window.location= page_url;
            break;
        }
    }
}

console.log("inFrame", inFrame());
console.log("botBrowser", botBrowser());
