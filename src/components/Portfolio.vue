<template>
  <section id="profile" class="dark-section">
    <div class="container-fluid">
      <h1 class="section-header">{{ heading }}</h1>
      <p class="hover-instruction">Hover to know more!</p>

      <!-- Tab Navigation -->
      <div class="row filters-awards">
        <ul class="list-inline mx-auto">
          <li
            v-for="tab in sections"
            :key="tab.key"
            class="list-inline-item filter"
          >
            <a
              class="nav-item"
              :class="tab.key === currentTab ? 'active' : null"
              :data-tab="tab.key"
              @click="setTab(tab.key)"
            >
              {{ tab.title }}
            </a>
          </li>
        </ul>
      </div>

      <!-- Content Display -->
      <div id="profile-container" class="row">
        <div
          v-for="(item, index) in filteredItems"
          :key="index"
          class="col-sm-12 col-md-4 flex-col"
        >
          <div class="portfolio-item">
            <!-- Language Flags -->
            <template v-if="currentTab === 'languages'">
              <span class="flag-icon-awards" :class="'flag-icon-' + item.flag">
                
              </span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <p>{{ item.second_description }}</p>
            </template>
            <!-- Awards & Other Activities Images -->
            <template v-else>
              <a v-if="item.link" :href="item.link" target="_blank">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="item-image"
                />
              </a>
              <img
                v-else
                :src="item.image"
                :alt="item.title"
                class="item-image"
              />
            </template>

            <!-- Overlay with Title and Description -->
            <div class="overlay">
              <template v-if="item.link">
                <a :href="item.link" title="Live Demo" target="_blank" class="overlay-link">
                  <div class="portfolio-item-content">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
                    <div v-if="item.source !== ''" class="link-icons">
                      <i class="fas fa-code fa-2x"></i>
                    </div>
                  </div>
                </a>
              </template>
              <template v-else>
                <div class="portfolio-item-content">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.description }}</p>
                </div>
              </template>
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
import "@fortawesome/fontawesome-free/css/all.css";

export default {
  name: "Profile",
  components: {
    Arrow,
  },
  data() {
    return {
      sections: data.data.profile.sections,
      heading: "Languages and Awards",
      currentTab: data.data.profile.defaultTab,
      fallbackImage: require("@/assets/images/fallback.png")
    };
  },
  computed: {
    filteredItems() {
      return this.sections.find(section => section.key === this.currentTab)?.items || [];
    }
  },
  methods: {
    setTab(tabKey) {
      this.currentTab = tabKey;
    },
    getImageUrl(imageName) {
      try {
        return require(`@/assets/images/profile/${imageName}`);
      } catch (e) {
        return this.fallbackImage;
      }
    }
  }
};
</script>

<style lang="scss">
/* Style for the tab navigation */
.filters-awards {
  text-align: center;
  margin-bottom: 20px;
}

.filters-awards .filter a {
  padding: 10px 20px;
  cursor: pointer;
  color: white;
  text-decoration: none;
}

.filters-awards .filter .active {
  background: #007bff;
  border-radius: 5px;
  color: white;
}

/* Style for the portfolio items */
.portfolio-item {
  position: relative;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease-in-out;
}

.portfolio-item img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.overlay-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-decoration: none; /* Remove default link underline */
  color: inherit; /* Ensure text color is white */
}

.portfolio-item:hover {
  transform: scale(1.05); /* Slightly enlarges the item on hover */
  cursor: pointer;
}

.portfolio-item-content {
  position: relative;
  z-index: 3;
  color: white;
  text-align: center;
  padding: 15px;
  width: 80%;
}

.portfolio-item-content h3 {
  margin-bottom: 10px;
}

/* Flag Styling */
.flag-icon-awards {
  display: inline-block;
  width: 120px; /* Adjust as needed */
  height: 80px; /* Adjust as needed */
  font-size: 80px; /* Increases icon size */
  background-size: cover;
  background-position: center;
  border-radius: 5px; /* Optional for slight rounding */
  margin-bottom: 10px;
}

.hover-instruction {
  text-align: center;
  font-size: 1.2rem;
  color: #ffffff; /* White text */
  background-color: rgba(0, 0, 0, 0.7); /* Slight background for emphasis */
  padding: 10px 15px;
  border-radius: 8px;
  display: inline-block;
  margin-bottom: 30px;
  margin-top: -70px;
}

/* Style for the h3 inside overlay */
.portfolio-item-content h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

/* Style for the paragraph inside overlay */
.portfolio-item-content p {
  font-size: 1rem;
  color: #ddd; /* Light gray for contrast */
  text-align: center;
  line-height: 1.4;
  max-width: 90%;
  margin: 0 auto; /* Centers text */
}

/* Adding a slight shadow effect for better visibility */
.portfolio-item-content h3,
.portfolio-item-content p {
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
}

.flag-icon-awards + h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 8px;
}

.flag-icon-awards + h3 + p,
.flag-icon-awards + h3 + p + p {
  font-size: 1rem;
  color: #ddd;
  text-align: center;
  line-height: 1.4;
  max-width: 90%;
  margin: 4px auto; /* Reduce space between descriptions */
}



/* Responsive improvement: Adjust for smaller screens */
@media (max-width: 768px) {
  .portfolio-item-content h3 {
    font-size: 1.3rem;
  }

  .portfolio-item-content p {
    font-size: 0.9rem;
  }
}

</style>
