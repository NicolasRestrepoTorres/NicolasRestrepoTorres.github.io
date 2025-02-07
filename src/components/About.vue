<template>
  <section id="about" class="dark-section">
    <div class="container-fluid">
      <h1 class="section-header">{{ heading }}</h1>
      <h2 class="tagline" v-if="about.tagline !== ''">{{ about.tagline }}</h2>
      <div class="row">
        
        <!-- Profile Picture with Resume Download Button -->
        <div class="col-sm-12 col-md-4 flex-col" data-aos="fade-right" data-aos-duration="1000">
          <img class="profile-pic" src="../assets/images/profile-pic.jpeg" alt="profile picture" />
          <a :href="resumeLink" download>
            <button class="btn btn-resume mt-3">
              <i class="far fa-file-pdf"></i> Download Resumé
            </button>
          </a>
        </div>

        <!-- About Text -->
        <div class="col-sm-12 col-md-4 flex-col" data-aos="fade-right" data-aos-duration="1000">
          <p id="about-content">
            <span id="greeting">I'm {{ name }}! </span>
            <span id="bio" v-html="about.bio"></span>
          </p>
        </div>

        <!-- Contact Section -->
        <div class="col-sm-12 col-md-4 flex-col" data-aos="fade-right" data-aos-duration="1000">
          <h2 class="section-header">{{ contactHeading }}</h2>
          <ul class="list-group list-group-flush">
            
            <li v-if="contact.city" class="list-group-item">
              <h3 class="d-inline">
                <i class="fas fa-map-marker-alt"></i> Location:
              </h3>
              <span>&nbsp; {{ contact.city }}</span>
            </li>

            <li v-if="contact.email" class="list-group-item">
              <h3 class="d-inline">
                <i class="fa fa-envelope"></i> Email:
              </h3>
              <span> {{ contact.email }} </span>
              <i class="fas fa-copy copy-icon" @click="copyToClipboard(contact.email)" title="Copy Email"></i>
            </li>

            <li v-if="contact.phone" class="list-group-item">
              <h3 class="d-inline">
                <i class="fas fa-phone"></i> Phone:
              </h3>
              <span>{{ contact.phone }}</span>
              <i class="fas fa-copy copy-icon" @click="copyToClipboard(contact.phone)" title="Copy Phone"></i>
            </li>

            <!-- LinkedIn Button -->
            <li v-if="contact.linkedin" class="list-group-item">
              <a :href="contact.linkedin" target="_blank">
                <button class="btn btn-linkedin">
                  <i class="fab fa-linkedin"></i> LinkedIn
                </button>
              </a>
            </li>

          </ul>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
import data from "@/data/data.js";
import Arrow from "../components/Arrow.vue";

export default {
  name: "AboutContact",
  components: {
    Arrow,
  },
  data() {
    return {
      about: data.data.about,
      name: data.data.main.name.first,
      facts: data.data.about.facts,
      heading: data.data.main.headings.about,
      contact: data.data.contact,
      contactHeading: data.data.main.headings.contact,
      social: data.data.contact.social,
      resumeLink: "/files/Nicolas Restrepo Torres - CV.pdf",
    };
  },
  methods: {
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
      });
    },
  },
};
</script>

<style lang="scss">
#about {
  text-align: center;

  .profile-pic {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 20px;
    border: 4px solid rgba(255, 255, 255, 0.8);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;


    // Make it responsive border-radius: 50%;


    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
    }
  }

  #about-content {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #f0f0f0;
  }

  .btn-resume {
  background-color: #d9534f;
  color: white;
  border-radius: 8px;
  padding: 10px 15px;
  border: none;
  font-weight: bold;
  cursor: pointer;
}

.btn-resume:hover {
  background-color: #c9302c;
}

.copy-icon {
  cursor: pointer;
  color: #007bff;
  margin-left: 10px;
}

.copy-icon:hover {
  color: #0056b3;
}


.btn-linkedin {
  background-color: #0077b5;
  color: white;
  border-radius: 8px;
  padding: 10px 15px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
}

.btn-linkedin:hover {
  background-color: #005682;
}


  .list-group-item {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 10px 15px;
    margin: 5px 0;
    color: #ddd;
    font-size: 1rem;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
}

#contact {
  .contact-info {
    text-align: left;
  }

  .list-group-item a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
  }

  .list-group-item a:hover {
    text-decoration: underline;
  }

  .contact-form {
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }
}
</style>
