<template>
  <div class="experience-item-single">
    <div class="logo">
      <img :src="item.logo" :alt="item.company + ' logo'" />
    </div>
    <div class="details">
      <h2 class="company">{{ item.company }}</h2>
      <p class="position">{{ item.position }}</p>
      <p class="duration-location">
        <span class="duration">{{ item.startDate }} — {{ item.endDate }}</span>
        <span class="location">
          <span v-if="item.locationCountry" :class="['flag-icon', `flag-icon-${item.locationCountry.toLowerCase()}`]" class="flag-icon"></span>
          {{ item.location }}
        </span>
      </p>

      <ul class="responsibilities">
        <li v-for="(task, i) in item.tasks" :key="i">{{ task }}</li>
      </ul>
      <p class="skills">
        <strong>Skills:</strong> {{ item.skills.join(", ") }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.experience-item-single {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: left;
}

.experience-item-single:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.logo img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.logo img:hover {
  transform: scale(1.1);
}

.details {
  flex: 1;
}

.details .company {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.details .position {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 10px;
}

.details .duration-location {
  font-size: 0.95rem;
  color: #888;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.flag-icon {
  width: 40px;
  height: 28px;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  font-size: 800px; /* Increases icon size */
  background-size: cover;
  background-position: center;
  border-radius: 5px; /* Optional for slight rounding */
}



.responsibilities {
  margin-top: 15px;
  list-style: disc;
  padding-left: 20px;
}

.responsibilities li {
  margin-bottom: 10px;
  line-height: 1.6;
  color: #333;
}

.skills {
  font-size: 1.2rem;
  color: #444;
  margin-top: 15px;
  font-style: italic;
}
</style>
