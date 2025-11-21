<template>
  <div class="py-8">
    <LogoSection/>
    <PersonalSection />
    <DividerBox />
    <ContactMeSection />
    <DividerBox />
    <TechnologyStackSection />
    <DividerBox />
    <ProjectsSection />
  </div>
</template>

<script setup lang="ts">
import DividerBox from "@/components/DividerBox.vue";
import ContactMeSection from "./sections/ContactMeSection.vue";
import PersonalSection from "./sections/PersonalSection.vue";
import ProjectsSection from "./sections/ProjectsSection.vue";
import TechnologyStackSection from "./sections/TechnologyStackSection.vue";
import LogoSection from "./sections/LogoSection.vue";
</script>
