document.addEventListener("DOMContentLoaded", () => {
  // Scroll Animations using Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  // Track all animated elements
  const animatedElements = document.querySelectorAll(".fade-in, .slide-up")
  animatedElements.forEach((el) => observer.observe(el))

  // Sticky Header Effect
  const header = document.getElementById("header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Form Submission to WhatsApp
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const name = document.getElementById("name").value
      const phone = document.getElementById("phone").value
      const message = document.getElementById("message").value

      const whatsappText = `Hello ECHO Tutorial! My name is ${name} (${phone}). ${message}`
      const encodedText = encodeURIComponent(whatsappText)
      const whatsappUrl = `https://wa.me/1234567890?text=${encodedText}`

      window.open(whatsappUrl, "_blank")
    })
  }

  // Smooth Scroll for Nav Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })
  // Counting Animation for Stats
  const runCountingAnimation = () => {
    const counters = document.querySelectorAll(".count-up")
    const duration = 2000 // 2 seconds

    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target")
      const start = 0
      const increment = target / (duration / 16) // 60fps

      let current = start
      const updateCounter = () => {
        current += increment
        if (current < target) {
          counter.innerText = Math.ceil(current) + (counter.innerText.includes("%") ? "%" : "+")
          requestAnimationFrame(updateCounter)
        } else {
          counter.innerText = target + (counter.getAttribute("data-target") === "100" ? "%" : "+")
        }
      }

      updateCounter()
    })
  }

  // Observe Stats Section
  const statsSection = document.querySelector(".stats-section")
  if (statsSection) {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCountingAnimation()
            statsObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )
    statsObserver.observe(statsSection)
  }
})
