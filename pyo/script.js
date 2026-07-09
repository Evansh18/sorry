/* ==========================
   LOADER & AUTOMATIC MUSIC PLAY
========================== */
const loader = document.getElementById("loader");
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");
const typingText = document.getElementById("typingText");

if (enterBtn && loader && music) {
    enterBtn.addEventListener("click", () => {
        // Play music immediately on click
        music.play().catch(err => console.log("Audio play blocked: ", err));

        // Smoothly hide loader
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
            
            // Start typing once loader disappears
            if (typingText) {
                typingText.innerHTML = "";
                typing();
            }
        }, 500);
    });
}

/* ==========================
   TYPING EFFECT
========================== */
const text = "I know I'm not perfect... ❤️ But every heartbeat still belongs to you.";
let i = 0;

function typing() {
    if (typingText && i < text.length) {
        typingText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}

/* ==========================
   MUSIC CONTROLS (Manual Play/Pause)
========================== */
const playBtn = document.getElementById("playMusic");
const pauseBtn = document.getElementById("pauseMusic");

if (playBtn && music) {
    playBtn.addEventListener("click", () => { music.play().catch(() => {}); });
}
if (pauseBtn && music) {
    pauseBtn.addEventListener("click", () => { music.pause(); });
}

/* ==========================
   LETTER POPUP
========================== */
const popup = document.getElementById("popup");
const openLetter = document.getElementById("letterButton");
const closeLetter = document.getElementById("closePopup");

if (openLetter && popup) {
    openLetter.addEventListener("click", () => { popup.style.display = "flex"; });
}
if (closeLetter && popup) {
    closeLetter.addEventListener("click", () => { popup.style.display = "none"; });
}

/* ==========================
   GALLERY SLIDER
========================== */
const images = [
    "assets/images/photo1.jpg",
    "assets/images/photo2.jpg",
    "assets/images/photo3.jpg",
    "assets/images/photo4.jpg",
    "assets/images/photo5.jpg",
    "assets/images/photo6.jpg"
];
let current = 0;
const gallery = document.getElementById("galleryImage");
const dots = document.querySelectorAll(".gallery-dots span");

if (gallery && images.length > 0) {
    setInterval(() => {
        current++;
        if (current >= images.length) current = 0;
        gallery.src = images[current];
        
        dots.forEach((dot, index) => {
            if (index === current) {
                dot.style.opacity = "1";
                dot.style.scale = "1.2";
            } else {
                dot.style.opacity = ".5";
                dot.style.scale = "1";
            }
        });
    }, 3000);
}

/* ==========================
   CURSOR GLOW
========================== */
const glow = document.getElementById("cursorGlow");
if (glow) {
    document.addEventListener("mousemove", (e) => {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    });
}

/* ==========================
   HEART EXPLOSION & AUTO MINIMAL TOAST
========================== */
const heartBtn = document.getElementById("heartButton");
const minimalAlert = document.getElementById("minimalAlert");
const gallerySection = document.querySelector(".gallery");

if (heartBtn && music) {
    heartBtn.addEventListener("click", () => {
        // Ensure music plays
        music.play().catch(err => console.log("Audio play blocked: ", err));

        // Floating Hearts Explosion Effect
        for (let i = 0; i < 25; i++) {
            const heart = document.createElement("div");
            heart.innerHTML = "💖";
            heart.style.position = "fixed";
            heart.style.left = (window.innerWidth / 2) + "px";
            heart.style.top = (window.innerHeight / 2) + "px";
            heart.style.fontSize = (18 + Math.random() * 20) + "px";
            heart.style.pointerEvents = "none";
            heart.style.zIndex = "9999";

            document.body.appendChild(heart);

            const x = (Math.random() - 0.5) * 600;
            const y = (Math.random() - 0.5) * 600;

            heart.animate([
                { transform: "translate(0,0) scale(1)", opacity: 1 },
                { transform: `translate(${x}px, ${y}px) scale(0.2)`, opacity: 0 }
            ], {
                duration: 1500,
                easing: "ease-out"
            });

            setTimeout(() => { heart.remove(); }, 1500);
        }

        // 1. Cute minimal alert upar se slide hokar niche aayega
        setTimeout(() => {
            if (minimalAlert) {
                minimalAlert.style.top = "30px"; // Slides down into view
            }
        }, 600);

        // 2. 3.5 seconds baad page automatic smoothly unki photos par scroll ho jayega
        setTimeout(() => {
            if (gallerySection) {
                gallerySection.scrollIntoView({ behavior: "smooth" });
            }
        }, 3500);

        // 3. Scroll hone ke baad toast notification wapas upar chup jayega
        setTimeout(() => {
            if (minimalAlert) {
                minimalAlert.style.top = "-100px"; // Slides back out of view
            }
        }, 5500);
    });
}

/* ==========================
   ROSE PETALS FALL
========================== */
function createPetals() {
    setInterval(() => {
        const petal = document.createElement("div");
        petal.innerHTML = "🌹";
        petal.style.position = "fixed";
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.top = "-30px";
        petal.style.fontSize = "22px";
        petal.style.pointerEvents = "none";
        petal.style.zIndex = "9999";

        document.body.appendChild(petal);

        petal.animate([
            { transform: "translateY(0) rotate(0deg)" },
            { transform: "translateY(110vh) rotate(360deg)" }
        ], {
            duration: 7000,
            easing: "linear"
        });

        setTimeout(() => petal.remove(), 7000);
    }, 700);
}
createPetals();