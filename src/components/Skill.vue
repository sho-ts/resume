<template>
  <Section title="Skills">
    <div class="flex flex-wrap gap-6" ref="skillsRef">
      <div v-for="skill in skills" :key="skill.name" class="w-full md:w-[calc(100%_/_3_-_16px)]">
        <Box class="p-3">
          <div>
            <ul>
              <li class="mb-2 text-sm flex justify-between items-center">
                <span>{{ skill.name }}</span>
                <span class="text-xs">{{ skill.start }} -</span>
              </li>
              <li>
                <div class="overflow-hidden shadow-[inset_-2px_-2px_1px_1px_rgb(255_255_255)_,inset_2px_2px_1px_1px_rgb(226_232_240)] h-3 rounded-lg">
                  <div
                    class="h-full bg-gradient-to-r from-blue-200 to-teal-200 rounded-lg transition-all duration-700 origin-left ease-in-out"
                    :style="{
                      width: `${skill.level}%`,
                      transform: isObserve ? ' scaleX(1)' : 'scaleX(0)',
                    }"
                  />
                </div>
              </li>
            </ul>
          </div>
        </Box>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '~/components/Section.vue';
import Box from '~/components/Box.vue';

const skillsRef = ref<HTMLDivElement | null>(null);
const isObserve = ref(false);

let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isObserve.value = true;
        observer.unobserve(entry.target);
      }
    });
  });
  observer.observe(skillsRef.value!);
});

onUnmounted(() => {
  observer?.disconnect();
});

const skills = [
  {
    name: 'TypeScript',
    level: 70,
    start: 2020,
  },
  {
    name: 'PHP',
    level: 70,
    start: 2020
  },
  {
    name: 'Go',
    level: 40,
    start: 2022,
  },
  {
    name: 'Python',
    level: 40,
    start: 2023,
  },
  {
    name: 'Java',
    level: 20,
    start: 2023,
  },
  {
    name: 'MySQL',
    level: 60,
    start: 2022,
  },
  {
    name: 'GraphQL',
    level: 50,
    start: 2023,
  },
  {
    name: 'HTML',
    level: 60,
    start: 2020,
  },
  {
    name: 'CSS',
    level: 80,
    start: 2020,
  },
  {
    name: 'JavaScript',
    level: 90,
    start: 2020,
  },
  {
    name: 'GLSL',
    level: 10,
    start: 2023,
  },
  {
    name: 'React',
    level: 60,
    start: 2021,
  },
  {
    name: 'Next.js',
    level: 60,
    start: 2022,
  },
  {
    name: 'Vue3',
    level: 20,
    start: 2024,
  },
  {
    name: 'Nuxt.js',
    level: 20,
    start: 2024,
  },
  {
    name: 'Three.js',
    level: 30,
    start: 2023,
  },
  {
    name: 'Laravel',
    level: 50,
    start: 2022,
  },
  {
    name: 'Nest.js',
    level: 50,
    start: 2023,
  },
  {
    name: 'SpringBoot',
    level: 20,
    start: 2023,
  },
  {
    name: 'Gin',
    level: 40,
    start: 2023,
  },
];
</script>
