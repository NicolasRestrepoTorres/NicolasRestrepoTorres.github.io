<template>
  <div id="app">
    <Header />

    <main>
      <section id="about">
        <About />

      </section>

      <section id="education">
        <EducationSection />

      </section>

      <section id="experience">
        <ExperienceSection
          :experiences="experiences"
          sectionTitle="Professional Experience"
        />
 
      </section>

      <section id="skills">
        <Skills />

      </section>

      <section id="portfolio">
        <Portfolio />

      </section>

      <section id="project">
        <ExperienceSection
          :experiences="projects"
          sectionTitle="Major School Projects"
        />
    
      </section>
    </main>
    <!-- Floating Arrow Component -->
    <Arrow />
    <Footer />
  </div>
</template>

<script>
// Import SCSS styles
import "@/styles/scss/main.scss";

// Import Components
import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Portfolio from "@/components/Portfolio.vue";
import Footer from "@/components/Footer.vue";
import PageHeader from "@/components/PageHeader.vue";
import EducationSection from "@/components/EducationSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import ExperienceItem from "@/components/ExperienceItem.vue";
import Arrow from "@/components/Arrow.vue";

// Import Datasets
import data from "@/data/data.js";

export default {
  name: "App",
  components: {
    Header,
    About,
    Skills,
    Portfolio,
    Footer,
    PageHeader,
    EducationSection,
    ExperienceSection,
    ContactSection,
    ExperienceItem,
    Arrow,
  },
  data() {
    return {
      experiences: data.experiences, // ✅ Fix: Extract experiences from data.js
      projects: data.projects, // ✅ Fix: Extract projects from data.js
      educationContent: data.educationContent
    };
  },
};
</script>

<style>
/* Add any specific styles for this component if needed */
.flag-icon {
  margin-right: 8px;
  vertical-align: middle;
  width: 20px;
  height: 15px;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}



</style>
