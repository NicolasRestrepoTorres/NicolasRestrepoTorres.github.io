<template>
  <div class="arrow-container">
    <button v-if="prevSection" @click="scrollToSection(prevSection)" class="arrow-icon up" role="button">
      <i class="fas fa-chevron-up fa-3x"></i>
    </button>
    <button v-if="nextSection" @click="scrollToSection(nextSection)" class="arrow-icon down" role="button">
      <i class="fas fa-chevron-down fa-3x"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "Arrow",
  data() {
    return {
      sections: ["home", "about", "education", "experience", "skills", "portfolio", "project"],
      currentIndex: 0,
      offsetCorrection: 50, // Adjust this value based on your header height
    };
  },
  computed: {
    prevSection() {
      return this.currentIndex > 0 ? this.sections[this.currentIndex - 1] : null;
    },
    nextSection() {
      return this.currentIndex < this.sections.length - 1 ? this.sections[this.currentIndex + 1] : null;
    }
  },
  methods: {
    updateCurrentSection() {
      let scrollPosition = window.scrollY + window.innerHeight / 3;
      let foundIndex = this.sections.findIndex((sectionId) => {
        let section = document.getElementById(sectionId);
        return section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition;
      });

      if (foundIndex !== -1) {
        this.currentIndex = foundIndex;
      }
    },
    scrollToSection(sectionId) {
      let section = document.getElementById(sectionId);
      if (section) {
        let yOffset = section.getBoundingClientRect().top + window.scrollY - this.offsetCorrection;
        window.scrollTo({ top: yOffset, behavior: "smooth" });
      }
    }
  },
  mounted() {
    this.updateCurrentSection();
    window.addEventListener("scroll", this.updateCurrentSection);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.updateCurrentSection);
  }
};
</script>

<style>
.arrow-container {
  position: fixed;
  right: 20px;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
}

.arrow-icon {
  background: white;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  border: none;
  cursor: pointer;
}

.arrow-icon:hover {
  background: #ddd;
}

.up {
  position: fixed;
  right: 20px;
  bottom: 90px;
}

.down {
  position: fixed;
  right: 20px;
  bottom: 40px;
}
</style>
