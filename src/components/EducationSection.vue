<template>
  <section id="education" class="light-section">
    <div class="container">
      <h1 class="section-header">Education</h1>
      <p class="hover-instruction">Click to filter !</p>

      <!-- Filter Buttons -->
      <div class="view-selector">
      <button
        v-for="(type, index) in filterOptions"
        :key="index"
        :class="['filter-button', { active: filterMode === type.value }]"
        @click="setFilter(type.value)"
        :style="{ backgroundColor: typeColors[type.value] }"
      >
        <span v-if="type.flag" v-for="(flag, i) in [].concat(type.flag)" :key="i" :class="['flag-icon', 'flag-icon-' + flag]"></span>
        {{ type.label }}
      </button>
      <button class="filter-button" @click="isEducationVisible = !isEducationVisible" v-show="isEducationVisible">
      {{ isEducationVisible ? 'Hide Education' : 'Show Education' }}
    </button>
    </div>


      <!-- Education Items -->
      <div class="education-list" v-show="isEducationVisible">
        <div
          v-for="(item, index) in filteredEducation"
          :key="index"
          class="education-item"
          :class="item.type"
        >
  
          <!-- Dates and GPA -->
          <div class="dates-grade">
  <span class="dates">{{ item.startDate }} — {{ item.endDate }}</span>
  <div class="gpa-section">
    <div class="gpa-details">
      <span class="gpa-grade">GPA: {{ item.gpa.current.toFixed(1) }} / {{ item.gpa.max.toFixed(1) }}</span>
          <div class="scale-switcher">
            <button class="switch-scale" @click="toggleGpaSystem" title="Switch grading scale">
              <i class="fas fa-exchange-alt" aria-hidden="true"></i>
            </button>
          </div>

      <span class="gpa-scale">
        Scale: {{ gpaSystem }} <br />
        ≈ Grade: {{ computeGrade(item.gpa) }}
      </span>
    </div>
  </div>
</div>

          <!-- Content -->
          <div class="education-content">
            <!-- Logo -->
            <div class="logo">
              <img :src="item.logo" :alt="item.institution + ' logo'" />
            </div>

            <!-- Institution and Description -->
            <div class="education-details">
              <h2 class="institution">
                <span class="flag-icon" :class="'flag-icon-' + item.countryFlag"></span>
                {{ item.institution }}
              </h2>
              <p class="degree">{{ item.degree }}</p>
              <p class="description">{{ item.description }}</p>

              <div class="skills-courses">
              <!-- Skills -->
              <div class="skills-section">
                <h3>Skills:</h3>
                <ul class="skills">
                  <li v-for="(skill, i) in item.skills" :key="i">{{ skill }}</li>
                </ul>
              </div>

              <!-- Courses -->
              <div class="courses-section">
                <h3>Important Courses:</h3>
                <ul class="courses">
                  <li v-for="(course, i) in item.courses" :key="i">{{ course }}</li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>






<script>


import data from "@/data/data.js";
import Arrow from "../components/Arrow.vue";
export default {
  name: "EducationSection",
  data() {return data.educationContent},
  computed: {
    filteredEducation() {
      if (this.filterMode === "all") return this.education;
      return this.education.filter((item) => item.type === this.filterMode);
    },
  },
  components:{
    Arrow
  },
  methods: {
    setFilter(filter) {
      this.filterMode = filter;
      data.educationContent.isEducationVisible = true;
    },
    toggleGpaSystem() {
      const systems = ["European (1-5)", "Percentage", "Letter Grade", "4.0 Scale", "German"];
      const currentIndex = systems.indexOf(this.gpaSystem);
      this.gpaSystem = systems[(currentIndex + 1) % systems.length];
    },
    computeGrade(gpa) {
      this.percentage = (gpa.current / (gpa.max - gpa.min)) * 100;

      if (this.percentage < 0) this.percentage = 88;
      const percentage = this.percentage;
      if (this.gpaSystem === "German") {
        if (percentage >= 90) return "1.0 - 1.5 (Sehr Gut)";
        if (percentage >= 75) return "1.6 - 2.5 (Gut)";
        if (percentage >= 60) return "2.6 - 3.5 (Befriedigend)";
        if (percentage >= 50) return "3.6 - 4.0 (Ausreichend)";
        return "5.0 (Nicht Bestanden)";
      }

      if (this.gpaSystem === "Letter Grade") {
        if (percentage >= 97) return "A+";
        if (percentage >= 93) return "A";
        if (percentage >= 90) return "A-";
        if (percentage >= 87) return "B+";
        if (percentage >= 83) return "B";
        if (percentage >= 80) return "B-";
        if (percentage >= 77) return "C+";
        if (percentage >= 73) return "C";
        if (percentage >= 70) return "C-";
        if (percentage >= 67) return "D+";
        if (percentage >= 65) return "D";
        return "E/F";
      }

      if (this.gpaSystem === "4.0 Scale") {
        return (percentage / 25).toFixed(1);
      }

      if (this.gpaSystem === "Percentage") {
        return `${percentage.toFixed(2)}%`;
      }

      if (this.gpaSystem === "European (1-5)") {
        return `${((percentage) / 20).toFixed(1)}`;
      }

      return `${gpa.current} / ${gpa.max}`;
    },
  },
};
</script>


<style scoped>
/* Light section styling */
.light-section {
  background-color: #f9f9f9;
  padding: 50px 0;
}

/* Section header styling */
.section-header {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  font-weight: bold;
}

/* View selector styling */
.view-selector {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
}

.view-selector .filter-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  background-color: #e0e0e0;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;
}

.view-selector .filter-button.active {
  border-color: #000;
  background-color: #007bff;
  color: black;
}

.view-selector .filter-button span {
  display: inline-block;
}
.view-selector .filter-button:hover {
  background-color: #0056b3;
  color: gray;
}

/* Education list and item styling */
.education-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.education-item {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #e8f5e9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-left: 10px solid #4caf50; /* Default border color */
}

.education-item.bachelor {
  background-color: #fff3e0;
  border-left-color: #ff9800;
}

.education-item.exchange {
  background-color: #e3f2fd;
  border-left-color: #03a9f4;
}

/* Dates and GPA section styling */
.dates-grade {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap; /* For responsiveness */
  margin-bottom: -110px; /* Adjust alignment */

}

.dates-grade .dates {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 5px;
  padding-left: 5px; /* Align date closer to the left edge */
}



.gpa-grade {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px; /* Add space below GPA */
}

/* Skills and courses styling */
.skills,
.courses {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin: 15px 0 0 0;
  padding: 0;
}

.skills li, .courses li {
  color: #000; /* Change text color to black */
  font-weight: 600; /* Make the text semi-bold */
}

.skills li {
  background-color: #0056b3;
  color: white;
  font-size: 0.9rem;
  padding: 10px 15px;
  border-radius: 10px;
}

.courses li {
  background-color: #007bff;
  color: white;
  font-size: 0.9rem;
  padding: 10px 15px;
  border-radius: 10px;
}

/* Tooltip styling */
.tooltip {
  position: relative; /* Ensure the tooltip content is positioned relative to the button */
  display: inline-block;
  cursor: pointer;
}

.tooltiptext {
  visibility: hidden; /* Hide by default */
  opacity: 0; /* Fully transparent */
  position: absolute; /* Position relative to the button */
  z-index: 1; /* Ensure it does not overlap inappropriately */
  bottom: -50px; /* Adjust position below the button */
  left: 50%; /* Center align horizontally */
  transform: translateX(-50%);
  background-color: #f9f9f9; /* Background color for readability */
  color: #333; /* Text color */
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px;
  width: 150px; /* Ensure consistent size */
  transition: opacity 0.3s ease-in-out; /* Smooth fade-in/fade-out */
}
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

/* Switch button styling */
.switch-scale {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px; /* Ensure consistent size */
  height: 40px; /* Ensure consistent size */
  border: 2px solid #007bff;
  border-radius: 50%;
  background-color: white;
  color: #007bff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  align-self: flex-end;
}

.switch-scale i {
  font-size: 1.5rem;
}

.switch-scale:hover {
  background-color: #007bff;
  color: white;
  transform: scale(1.1); /* Slight enlargement for feedback */
}


.scale-switcher {
  display: flex;
  flex-direction: column; /* Stack button and tooltip */
  justify-content: center;
  align-items: center;
  gap: 5px; /* Add spacing between elements */
  z-index: 1;
}

.skills-courses {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Space between skills and courses */
}

.skills-section,
.courses-section {
  margin-top: 10px; /* Add some top margin */
}
.logo img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  margin-bottom: 20px; /* Add space below the logo */
}

.logo img:hover {
  transform: scale(1.1);
}

.gpa-scale {
  font-size: 0.9rem;
  color: #555;
  min-height: 1.5rem; /* Set a minimum height to stabilize layout */
}

.gpa-details {
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Align everything to the right */
  gap: 10px; /* Add spacing between items */
}
.gpa-section {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: flex-end; /* Align items to the right */
  gap: 5px; /* Add spacing between elements */
  text-align: right; /* Align text to the right */
  width: 150px; /* Set a fixed width for the entire section */
}

.degree {
  font-size: 1.2rem; /* Increase font size */
  font-weight: bold; /* Make the text bold */
  color: #333; /* Darker text color */
  margin-bottom: 10px; /* Add some space below */
}

.description {
  font-size: 1rem; /* Slightly larger font size */
  color: #555; /* Softer text color */
  line-height: 1.5; /* Improve readability */
  margin-bottom: 15px; /* Add space below */
  text-align: center; /* Align the text for better readability */
}



/* Responsive Handling for Dates and GPA */
@media (max-width: 768px) {
  .dates-grade {
    flex-direction: column;
    align-items: flex-start;
  }


  .gpa-section {
    align-items: flex-start;
    gap: 8px; /* Adds extra spacing */
  }

  .gpa-details {
  display: flex;
  flex-direction: column; /* Stack GPA and button vertically */
  align-items: flex-end; /* Keep everything aligned to the right */
  gap: 10px; /* Add spacing between items */
}
  .education-item {
    padding: 15px; /* Reduce padding for better fit */
  }

  .skills,
  .courses {
    gap: 10px; /* Reduce gap on smaller screens */
  }

  .gpa-details {
    text-align: left; /* Align to left on small screens */
  }
  .logo img {
    width: 50px;
    height: 50px;
  }

}
</style>



