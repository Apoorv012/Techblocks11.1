 // Timeline content
    const timelines = {
      web: `
        <b>Timeline:</b>
        <p>Day 1: Intro to HTML, CSS and TailwindCSS</p>
        <p>Day 2: Mini Project with GitHub</p>
        <p>Day 3: Javascript with Express.js</p>
        <p>Day 4: React.js</p>
        <p>Day 5: Major Project</p>
      `,
      ai: `
        <b>Timeline:</b>
        <p>Day 1: Python Basics & Setup</p>
        <p>Day 2: LLMs & Multi-agent workflows</p>
        <p>Day 3: Mini Project Concepts</p>
        <p>Day 4: Final Project + GitHub</p>
        <p>Day 5: LinkedIn Showcase</p>
      `,
      app: `
        <b>Timeline:</b>
        <p>Day 1: Dart intro + setup basics</p>
        <p>Day 2: Setup clarity + frontend </p>
        <p>Day 3: Backend theory (python + APIs + faiss + vector db)</p>
        <p>Day 4: Backend code in Flutter</p>
        <p>Day 5: Project Completion and Deployment</p>
      `,
      hardware: `
        <b>Timeline:</b>
        <p>Day 1: VLSI overview and Transistors basic</p>
        <p>Day 2: Revision of MOSFET and Intro to SPICE</p>
        <p>Day 3: Logic gates and CMOS implementation</p>
        <p>Day 4: Project</p>
        <p>Day 5: Completion of project</p>
      `
    };

    const modal = document.getElementById("timeline-modal");
    const overlay = document.querySelector(".timeline-overlay");
    const modalContent = document.getElementById("timeline-content");
    const closeBtns = document.querySelectorAll(".close-btn");
    const qrModal = document.getElementById("qr-modal");
    const qrImg = document.getElementById("qr-modal-img");
    const qrText = document.getElementById("qr-modal-text");

    // Open timeline modal
    document.querySelectorAll(".domain").forEach(domain => {
      domain.addEventListener("click", () => {
        const key = domain.getAttribute("data-timeline");
        modalContent.innerHTML = timelines[key] || "<p>No timeline available</p>";
        modal.classList.add("active");
        overlay.classList.add("active");
      });
    });

    // Open QR modal + redirect
document.querySelectorAll(".qr").forEach(qr => {
  qr.addEventListener("click", () => {
    // enlarge QR in modal
    qrImg.src = qr.src;
    qrText.textContent = qr.getAttribute("data-label");
    qrModal.classList.add("active");
    overlay.classList.add("active");

    // open social link
    const link = qr.getAttribute("data-link");
    if (link) {
      window.open(link, "_blank");
    }
  });
});


    // Close modals
    closeBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        modal.classList.remove("active");
        qrModal.classList.remove("active");
        overlay.classList.remove("active");
      });
    });
    overlay.addEventListener("click", () => {
      modal.classList.remove("active");
      qrModal.classList.remove("active");
      overlay.classList.remove("active");
    });

    // Video overlay
    const introVideo = document.getElementById("intro-video");
    const videoOverlay = document.getElementById("video-overlay");

    // Speed up video
    introVideo.playbackRate = 1.5;

    // Skip on click
    videoOverlay.addEventListener("click", () => {
      introVideo.pause();
      videoOverlay.style.display = "none";
    });

    introVideo.ontimeupdate = () => {
  const stopTime = isMobile() ? 7 : 11.5;
  if (introVideo.currentTime >= stopTime) {
    introVideo.pause();
    videoOverlay.style.display = "none";
  }
};
    introVideo.onended = () => {
      videoOverlay.style.display = "none";
    };
// Register Now button behavior
const registerBtn = document.getElementById("register-btn");
const hiddenLink = document.getElementById("hidden-link");

registerBtn.addEventListener("click", () => {
  // open Google Form
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSccXd6qUjx01QyZGfm8uTwh_FIEljukepPtYg5FGamVS48hjg/viewform?usp=send_form",
    "_blank"
  );

  // reveal surprise link
  hiddenLink.style.display = "block";
});
function isMobile() {
  return window.innerWidth <= 768;
}