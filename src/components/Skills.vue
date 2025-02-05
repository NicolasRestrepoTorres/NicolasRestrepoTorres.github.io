<template>
  <section id="skills" class="light-section">
    <div class="container-fluid">
      <h1 class="section-header skills-margin-top">{{ heading }}</h1>
      <p class="hover-instruction">Click in the colors or sections to filter skills!</p>

      <button @click="areSkillsVisible = !areSkillsVisible" class="toggle-button" >
  {{ areSkillsVisible ? "Hide Skills" : "Show Skills" }}
</button>

      <!-- Filters -->
      <div class="row filters" v-if="areSkillsVisible">
        <ul class="list-inline mx-auto">
          <!-- All Skills Tab -->
          <li class="list-inline-item filter">
            <a
              class="nav-item"
              :class="{ active: currentCategory === 'All Skills' }"
              @click="setCategory('All Skills')"
            >
              All Skills
            </a>
          </li>
          <li
            v-for="item in skills"
            :key="item.category"
            class="list-inline-item filter"
          >
            <a
              class="nav-item"
              :class="{ active: item.category === currentCategory }"
              @click="setCategory(item.category)"
            >
              {{ item.category }}
            </a>
          </li>
   
        </ul>
      </div>

      <!-- Legend for All Skills -->
      <div v-if="currentCategory === 'All Skills' & areSkillsVisible" class="legend"  >
        <div
          v-for="(color, category) in categoryColors"
          :key="category"
          class="legend-item"
          :class="{ selected: selectedCategories.includes(category) }"
          :style="{ borderColor: color }"
          @click="toggleCategoryFilter(category)"
        >
          <span class="legend-color" :style="{ backgroundColor: color }"></span>
          <span class="legend-label">{{ category }}</span>
        </div>
      </div>

      <!-- All Skills Grid -->
      <div v-if="currentCategory === 'All Skills'  & areSkillsVisible" class="skills-grid">
        <div
          v-for="(skill, index) in filteredAllSkills"
          :key="index"
          class="skill-item"
          :data-category="skill.category"
          :style="{ borderColor: categoryColors[skill.category] }"
        >
          <div class="skill-logo">
            <img :src="skill.logo || defaultLogo" :alt="`${skill.name} logo`" />
          </div>
          <h3>{{ skill.name }}</h3>
          <p>{{ skill.years }} years</p>
        </div>
      </div>



      <!-- Skill Bars -->
      <div
        v-else
        id="skill-container"
        v-for="item in filteredSkills"
        :key="item.category"
        v-if="areSkillsVisible"
      >
        <div class="category-heading">
          <h2><i :class="item.faClass"></i> {{ item.category }}</h2>
          <h3 v-if="item.subtitle">{{ item.subtitle }}</h3>
        </div>

        <div class="skill-content">
          <div class="skillbars">
            <div
              class="skill"
              v-for="skill in item.skillList"
              :key="skill.name"
            >
              <h3 class="skill-name">{{ skill.name }}</h3>
              <div class="outer-bar">
                <!-- Subdivisions -->
                <div
                  class="subdivision"
                  v-for="n in getMaxYears(item)"
                  :key="n"
                  :style="{ left: (n / getMaxYears(item)) * 100 + '%' }"
                ></div>
                <div
                  class="inner-bar"
                  :style="{ width: (skill.years / getMaxYears(item)) * 100 + '%' }"
                ></div>
                <span class="years">
                  {{ skill.years }} years / {{ getMaxYears(item) }} years
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Arrow />
  </section>
</template>


<script>
import data from "@/data/data.js";
import aboAkademiLogo from "@/assets/images/logos/abo-akademi-logo.gif";
import Arrow from "../components/Arrow.vue";
export default {
  name: "Skills",
  data() {
    return {
      areSkillsVisible: false,
      skills: data.data.skills.categories,
      heading: data.data.main.headings.skills,
      currentCategory: "All Skills",
      defaultMaxYears: 5, // Default maximum years if not specified
      selectedCategories: [], // Selected categories for filtering
      defaultLogo: aboAkademiLogo,
      categoryColors: {
        "Programming Languages": "#4CAF50",
        Frameworks: "#FF9800",
        Technologies: "#03A9F4",
        "Front-End": "#E91E63",
        "Back-End": "#9C27B0",
        Methodologies: "#009688",
      },
    };
  },
  components: {
    Arrow,
  },
  computed: {
    allSkills() {
      return this.skills.flatMap((category) =>
        category.skillList.map((skill) => ({
          ...skill,
          category: category.category,
        }))
      );
    },
    filteredAllSkills() {
      if (this.selectedCategories.length === 0) {
        return this.allSkills;
      }
      return this.allSkills.filter((skill) =>
        this.selectedCategories.includes(skill.category)
      );
    },
    filteredSkills() {
      return this.skills.filter(
        (category) => category.category === this.currentCategory
      );
    },
  },
  methods: {
    setCategory(category) {
      this.currentCategory = category;
    },
    toggleCategoryFilter(category) {
      if (this.selectedCategories.includes(category)) {
        // Remove category from selected filters
        this.selectedCategories = this.selectedCategories.filter(
          (c) => c !== category
        );
      } else {
        // Add category to selected filters
        this.selectedCategories.push(category);
      }
    },
    getMaxYears(category) {
      return category.maxYearsToShow || this.defaultMaxYears;
    },
  },
};
</script>

<style lang="scss">

/* Toggle Button Style */
.toggle-button {
  display: block;
  margin: auto;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 50px;
}

.toggle-button:hover {
  background-color: #0056b3;
}

/* General Styling */
.light-section {
  background-color: #f9f9f9;
  padding: 50px 0;
}

.skills-margin-top{
  margin-top:-100px;
}
.section-header {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  font-weight: bold;
}

/* Filters */
.filters .nav-item {
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.filters .nav-item.active {
  font-weight: bold;
  color: #007bff;
}

.filters .nav-item:hover {
  color: #0056b3;
}
/* Legend */
.legend {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.legend-item.selected {
  background-color: rgba(0, 0, 0, 0.05);
  border-color: currentColor;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid transparent;
  padding: 0.5rem;
  border-radius: 8px;
}

.legend-color {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.legend-label {
  font-size: 1rem;
  font-weight: bold;
}


/* Skill Bars */
.skillbars .skill {
  margin-bottom: 1rem;

  .skill-name {
    font-weight: bold;
  }

  .outer-bar {
    background: #eaeaea;
    border-radius: 5px;
    height: 10px;
    position: relative;
    overflow: visible;
  }

  .inner-bar {
    height: 100%;
    background: #007bff;
    border-radius: 5px;
    transition: width 0.3s ease;
  }

  .subdivision {
    position: absolute;
    top: 0;
    height: 100%;
    width: 2px;
    background: #fff;
    opacity: 0.7;
    transform: translateX(-50%);
  }

  .years {
    position: absolute;
    top: -20px;
    right: 0;
    font-size: 0.8rem;
    color: #333;
  }
}



/* Skills Grid */
/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;

  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border: 2px solid;
    border-radius: 8px;
    text-align: center;
    background: white;
    transition: background-color 0.3s, border-color 0.3s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }

    .skill-logo {
      width: 40px;
      height: 40px;
      margin-bottom: 0.5rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 50%;
      }
    }

    h3 {
      font-size: 1rem;
      font-weight: bold;
      margin: 0.5rem 0;
    }

    p {
      font-size: 0.9rem;
      color: #555;
    }
  }

  
}
</style>
