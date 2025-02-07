<template>
  <section class="dark-section">
    <div class="container">
      <h1 class="section-header">{{ sectionTitle }}</h1>
      <p class="hover-instruction">Click to filter !</p>
      <!-- Fallback for No Data -->
      <div v-if="!experiences || experiences.length === 0">
        <p>No data available. Please check if the props are being passed correctly.</p>
      </div>

      <!-- View Mode and Filter Buttons -->
      <div v-if="experiences && experiences.length > 0" class="view-selector">
        <button
          :class="{ active: viewMode === 'all' }"
          @click="setViewMode('all')"
        >
          Show All
        </button>
        <button
          :class="{ active: viewMode === 'year' }"
          @click="setViewMode('year')"
        >
          View by Year
        </button>
        <button
          :class="{ active: viewMode === 'filter' }"
          @click="setViewMode('filter')"
        >
          Filter by Skills
        </button>
        <button
          v-if="viewMode !== 'hide'"
          :class="{ active: viewMode === 'hide' }"
          @click="setViewMode('hide')"
        >
          Hide {{ sectionTitle }}
        </button>
      </div>

      <!-- Filter for Skills -->
      <div v-if="viewMode === 'filter'" class="filter-container">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="You can also type here to search anything..."
        />
        <div class="skill-suggestions">
          <button
            v-for="skill in [...new Set(experiences.flatMap((item) => item.skills))]"
            :key="skill"
            @click="setFilter(skill)"
          >
            {{ skill }}
          </button>
        </div>
      </div>

      <!-- All Items View -->
      <div v-if="viewMode === 'all'" class="item-list">
        <div
          v-for="(item, index) in sortedChronology"
          :key="index"
          class="experience-item"
        >
          <ExperienceItem :item="item" />
        </div>
      </div>

      <!-- Tabs by Year View -->
      <div v-if="viewMode === 'year'" class="year-tabs">
        <ul class="tab-list">
          <li
            v-for="year in years"
            :key="year"
            :class="{ active: year === selectedYear }"
            @click="selectedYear = year"
          >
            {{ year }}
          </li>
        </ul>

        <div class="tab-content">
          <div
            v-for="(item, index) in experiencesByYear[selectedYear]"
            :key="index"
            class="experience-item"
          >
            <ExperienceItem :item="item" />
          </div>
        </div>
      </div>

      <!-- Filtered Items View -->
      <div v-if="viewMode === 'filter'" class="item-list">
        <div
          v-for="(item, index) in filteredExperiences"
          :key="index"
          class="experience-item"
        >
          <ExperienceItem :item="item" />
        </div>
      </div>
    </div>



    
  </section>
  
</template>


<script>
import ExperienceItem from "@/components/ExperienceItem.vue";
import Arrow from "@/components/Arrow.vue";
export default {
  name: "ExperienceSection",
  components: {
    ExperienceItem, // Register the ExperienceItem component
    Arrow,
  },
  props: {
    sectionTitle: {
      type: String,
      required: true,
    },
    experiences: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      viewMode: "all",
      searchQuery: "",
      selectedYear: new Date().getFullYear().toString(),
    };
  },
  mounted() {
    console.log("Received props:", this.sectionTitle, this.experiences);
  },
  computed: {
    // Filter experiences based on search query or selected skill
    filteredExperiences() {
      if (!this.searchQuery || !this.experiences) return this.sortedChronology;
      const query = this.searchQuery.toLowerCase();
      return this.experiences.filter((experience) =>
        experience.skills.some((skill) => skill.toLowerCase().includes(query))
      );
    },

    // Extract unique years for the "By Year" tab
    years() {
      if (!this.experiences) return [];
      return [
        ...new Set(this.experiences.map((experience) => experience.year)),
      ].sort((a, b) => b - a);
    },

    // Group experiences by year for the "By Year" tab
    experiencesByYear() {
      if (!this.experiences) return {};
      return Object.fromEntries(
        Object.entries(
          this.experiences.reduce((acc, exp) => {
            if (!acc[exp.year]) acc[exp.year] = [];
            acc[exp.year].push(exp);
            return acc;
          }, {})
        ).sort(([yearA], [yearB]) => yearB - yearA) // Sort years in descending order
      );
    },


    // Sort experiences chronologically for the "All" tab
    sortedChronology() {
      if (!this.experiences) return [];
      return [...this.experiences].sort((a, b) => {
        const dateA = new Date(a.endDate === "Present" ? new Date() : a.endDate);
        const dateB = new Date(b.endDate === "Present" ? new Date() : b.endDate);
        return dateB - dateA; // Sort descending by end date
      });
    },
  },
  methods: {
    setViewMode(mode) {
      this.viewMode = mode;
      if (mode !== "year") {
        this.selectedYear = ""; // Reset year selection if not in year mode
      } else{
        this.selectedYear = this.years[0];
      }
    },
    setFilter(skill) {
      this.viewMode = "filter"; // Ensure filter view
      this.searchQuery = skill; // Populate the search bar with selected skill
    },
  },
};
</script>



<style scoped>
.light-section {
  background-color: #f9f9f9;
  padding: 50px 20px;
}

.section-header {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  font-weight: bold;
  margin-top:50px;
}
.view-selector {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.view-selector button {
  margin: 0 10px;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.view-selector button.active {
  background-color: #0056b3;
}

.view-selector button:hover {
  background-color: #0056b3;
}

.filter-container {
  margin: 20px auto;
  text-align: center;
}

.filter-container input {
  width: 50%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s;
}

.filter-container input:focus {
  border-color: #007bff;
  outline: none;
}

.skill-suggestions {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.skill-suggestions button {
  cursor: pointer;
  padding: 5px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: #333;
  font-size: 1rem;
  transition: background-color 0.3s, border-color 0.3s;
}

.skill-suggestions button:hover {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

.skill-suggestions button.active {
  background-color: #0056b3;
  color: white;
  border-color: #0056b3;
}

.experience-list,
.year-tabs .tab-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.experience-item {
  display: masonry;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  border-bottom: 2px solid #ddd;
}

.logo img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.details {
  flex: 1;
}

.details .company {
  font-size: 1.25rem;
  font-weight: bold;
}

.details .position {
  font-size: 1rem;
  color: #555;
}

.details .duration,
.details .location {
  font-size: 0.9rem;
  color: #888;
}

.details .skills {
  font-size: 0.9rem;
  color: #444;
  margin-top: 10px;
}

.responsibilities {
  margin-top: 10px;
  list-style: disc;
  padding-left: 20px;
}

.year-tabs .tab-list {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.year-tabs .tab-list li {
  cursor: pointer;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.year-tabs .tab-list li:hover {
  background-color: #0056b3;
}

.year-tabs .tab-list li.active {
  background-color: #0056b3;
}
</style>

