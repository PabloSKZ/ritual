function startTimer(time) {
  $quote.innerHTML = `<p>« <span class="italic">${quote.quote}</span> » - ${quote.author}</p>`;
  setTimeout(() => {
    end();
  }, time * 1000);
  setRemainingTime(time);
}

function setRemainingTime(time) {
  let remainingTime = time;
  $remainingTime.innerHTML = `${
    Math.trunc((remainingTime - 0.001) / 60) + 1
  } minutes`;

  setInterval(() => {
    remainingTime--;
    console.log(remainingTime);
    if (remainingTime > 60) {
      if (
        $remainingTime.innerHTML !=
        `${Math.trunc((remainingTime - 0.001) / 60) + 1} minutes`
      ) {
        $remainingTime.innerHTML = `${
          Math.trunc((remainingTime - 0.001) / 60) + 1
        } minutes`;
      }
    } else {
      $remainingTime.innerHTML = `${remainingTime} seconds`;
    }
  }, 1000);
}

function end() {
  $audio.volume = 0.9;
  $audio.play();
  $animation.innerHTML = "";
  $end.classList.remove("hide");
  $timer.classList.add("hide");
}

function returnToIndex() {
  $audio.pause();
  $audio.currentTime = 0;
  $instructions.classList.remove("hide");
  $quote.classList.add("hide");
  quote = quotes[Math.floor(Math.random() * quotes.length)];
  $end.classList.add("hide");
}

function renderSvg(time) {
  return `<svg id="wrap" width="300" height="300">
  <!-- background -->
  <svg>
    <circle
      cx="150"
      cy="150"
      r="130"
      style="stroke: #f7ce54; stroke-width: 18; fill: transparent"
    />
    <circle cx="150" cy="150" r="115" style="fill: #f7ce54" />
    <path
      style="
        stroke: #af7500;
        stroke-dasharray: 820;
        stroke-dashoffset: 820;
        stroke-width: 18;
        fill: transparent;
      "
      d="M150,150 m0,-130 a 130,130 0 0,1 0,260 a 130,130 0 0,1 0,-260"
    >
      <animate
        attributeName="stroke-dashoffset"
        dur="${time * 2}s"
        to="-820"
        repeatCount="indefinite"
      />
    </path>
  </svg>
  
  <!-- image -->
  <svg>
    <path
      id="hourglass"
      d="M150,150 C60,85 240,85 150,150 C60,215 240,215 150,150 Z"
      style="stroke: white; stroke-width: 5; fill: white"
    />
  
    <path
      id="frame"
      d="M100,97 L200, 97 M100,203 L200,203 M110,97 L110,142 M110,158 L110,200 M190,97 L190,142 M190,158 L190,200 M110,150 L110,150 M190,150 L190,150"
      style="stroke: #af7500; stroke-width: 6; stroke-linecap: round"
    />
  
    <animateTransform
      xlink:href="#frame"
      attributeName="transform"
      type="rotate"
      begin="0s"
      dur="10s"
      values="0 150 150; 0 150 150; 180 150 150"
      keyTimes="0; 0.8; 1"
      repeatCount="indefinite"
    />
    <animateTransform
      xlink:href="#hourglass"
      attributeName="transform"
      type="rotate"
      begin="0s"
      dur="10s"
      values="0 150 150; 0 150 150; 180 150 150"
      keyTimes="0; 0.8; 1"
      repeatCount="indefinite"
    />
  </svg>
  
  <!-- sand -->
  <svg>
    <!-- upper part -->
    <polygon
      id="upper"
      points="120,125 180,125 150,147"
      style="fill: #f7ce54"
    >
      <animate
        attributeName="points"
        dur="10s"
        keyTimes="0; 0.8; 1"
        values="120,125 180,125 150,147; 150,150 150,150 150,150; 150,150 150,150 150,150"
        repeatCount="indefinite"
      />
    </polygon>
  
    <!-- falling sand -->
    <path
      id="line"
      stroke-linecap="round"
      stroke-dasharray="1,4"
      stroke-dashoffset="200.00"
      stroke="#f7ce54"
      stroke-width="2"
      d="M150,150 L150,198"
    >
      <!-- running sand -->
      <animate
        attributeName="stroke-dashoffset"
        dur="10s"
        to="1.00"
        repeatCount="indefinite"
      />
      <!-- emptied upper -->
      <animate
        attributeName="d"
        dur="10s"
        to="M150,195 L150,195"
        values="M150,150 L150,198; M150,150 L150,198; M150,198 L150,198; M150,195 L150,195"
        keyTimes="0; 0.65; 0.9; 1"
        repeatCount="indefinite"
      />
      <!-- last drop -->
      <animate
        attributeName="stroke"
        dur="10s"
        keyTimes="0; 0.65; 0.8; 1"
        values="#f7ce54;#f7ce54;transparent;transparent"
        to="transparent"
        repeatCount="indefinite"
      />
    </path>
  
    <!-- lower part -->
    <g id="lower">
      <path
        d="M150,180 L180,190 A28,10 0 1,1 120,190 L150,180 Z"
        style="stroke: transparent; stroke-width: 5; fill: #f7ce54"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          keyTimes="0; 0.65; 1"
          values="0 15; 0 0; 0 0"
          dur="10s"
          repeatCount="indefinite"
        />
      </path>
      <animateTransform
        xlink:href="#lower"
        attributeName="transform"
        type="rotate"
        begin="0s"
        dur="10s"
        values="0 150 150; 0 150 150; 180 150 150"
        keyTimes="0; 0.8; 1"
        repeatCount="indefinite"
      />
    </g>
  
    <!-- lower overlay - hourglass -->
    <path
      d="M150,150 C60,85 240,85 150,150 C60,215 240,215 150,150 Z"
      style="stroke: white; stroke-width: 5; fill: transparent"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        begin="0s"
        dur="10s"
        values="0 150 150; 0 150 150; 180 150 150"
        keyTimes="0; 0.8; 1"
        repeatCount="indefinite"
      />
    </path>
  
    <!-- lower overlay - frame -->
    <path
      id="frame"
      d="M100,97 L200, 97 M100,203 L200,203"
      style="stroke: #af7500; stroke-width: 6; stroke-linecap: round"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        begin="0s"
        dur="10s"
        values="0 150 150; 0 150 150; 180 150 150"
        keyTimes="0; 0.8; 1"
        repeatCount="indefinite"
      />
    </path>
  </svg>
  </svg>`;
}

const $start = document.getElementById("start");
const $instructions = document.getElementById("instructions");
const $demo = document.getElementById("demo");
const $timer = document.getElementById("timer");
const $remainingTime = document.getElementById("remaining-time");
const $animation = document.getElementById("animation");
const $end = document.getElementById("end");
const $accomplished = document.getElementById("accomplished");
const $audio = document.querySelector("audio");
const $quote = document.getElementById("quote");

let quote = quotes[Math.floor(Math.random() * quotes.length)];
let time = 2700;

$start.addEventListener("click", (e) => {
  e.preventDefault();
  time = 2700;
  $instructions.classList.add("hide");
  $quote.classList.remove("hide");
  $timer.classList.remove("hide");
  $animation.innerHTML = renderSvg(time);
  startTimer(time);
});

$accomplished.addEventListener("click", (e) => {
  e.preventDefault();
  returnToIndex();
});

$demo.addEventListener("click", (e) => {
  e.preventDefault();
  time = 10;
  $instructions.classList.add("hide");
  $quote.classList.remove("hide");
  $timer.classList.remove("hide");
  $animation.innerHTML = renderSvg(time);
  startTimer(time);
});
