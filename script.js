function createHearts() {
  const container = document.getElementById("hearts-container");
  const colors = ["#4a90e2", "#82caff", "#a3d8f4", "#d0efff"];
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDelay = Math.random() * 5 + "s";
    container.appendChild(heart);
  }
}

document.getElementById("surpriseBtn").addEventListener("click", () => {
  const msg = document.getElementById("hiddenMessage");
  msg.style.display = "block";
  msg.scrollIntoView({ behavior: "smooth" });
});

function animateStars() {
  const canvas = document.getElementById("starsCanvas");
  const ctx = canvas.getContext("2d");
  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);
  let stars = [];

  function Star() {
    this.reset = () => {
      this.x = Math.random() * w;
      this.y = Math.random() * -h;
      this.size = Math.random() * 2;
      this.speed = Math.random() * 5 + 2;
    };
    this.reset();
  }

  for (let i = 0; i < 100; i++) stars.push(new Star());

  function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "white";
    ctx.beginPath();
    stars.forEach((star) => {
      ctx.moveTo(star.x, star.y);
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    });
    ctx.fill();
  }

  function update() {
    stars.forEach((star) => {
      star.y += star.speed;
      star.x += star.speed / 3;
      if (star.y > h || star.x > w) star.reset();
    });
  }

  function loop() {
    draw();
    update();
    requestAnimationFrame(loop);
  }

  loop();

  window.addEventListener("resize", () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });
}

window.onload = () => {
  createHearts();
  animateStars();

  const music = document.getElementById("bgMusic");
  music.muted = false;
  music.volume = 0.4;
  music.play().catch(() => {
    console.log("Autoplay diblokir, silakan mainkan secara manual.");
  });
};
