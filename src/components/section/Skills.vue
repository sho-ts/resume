<template>
  <Section title="Skills">
    <dl class="flex flex-wrap gap-6" ref="skillsRef">
      <div v-for="skill in skills" class="w-full md:w-[calc(100%_/_3_-_16px)]">
        <Box class="p-3 h-full">
          <dt class="mb-2 text-sm flex justify-between items-center">
            <span class="tracking-wide">{{ skill.name }}</span>
            <span class="text-xs tracking-normal">{{ skill.start }} -</span>
          </dt>
          <dd>
            <div class="overflow-hidden shadow-[inset_-2px_-2px_1px_1px_rgb(255_255_255)_,inset_2px_2px_1px_1px_rgb(226_232_240)] h-3 rounded-lg">
              <div
                class="h-full bg-gradient-to-r from-blue-200 to-teal-200 rounded-lg transition-all duration-700 origin-left ease-out"
                :style="{
                  width: `${skill.level}%`,
                  transform: isObserve ? ' scaleX(1)' : 'scaleX(0)',
                }"
              />
            </div>
            <div v-if="!!skill.description" class="mt-2 text-xs leading-relaxed">
              {{ skill.description }}
            </div>
          </dd>
        </Box>
      </div>
    </dl>
  </Section>
</template>

<script setup lang="ts">
import Section from '~/components/ui/Section.vue';
import Box from '~/components/ui/Box.vue';

const skillsRef = ref<HTMLDivElement | null>(null);
const isObserve = ref(false);

let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isObserve.value = true;
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px -100px 0px',
    }
  );
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
    description: '型システムを理解し、安全、最適なコードを書ける。ジェネクリクスなどを使用して、柔軟性のある実装ができる。業務での使用頻度は最も高い。',
  },
  {
    name: 'JavaScript',
    level: 90,
    start: 2020,
    description:
      '言語仕様を深く理解している。ES2015以降のモダンな構文での実装ができる。ESLint, Prettierなどのツールを使用して、コードの品質を保つことができる。Jestを使用して、自動テストを書くことができる。',
  },
  {
    name: 'React',
    level: 60,
    start: 2021,
    description:
      'Reactの仕組みを理解し、アプリケーションの開発ができる。メモ化などでパフォーマンスの最適化の方法をすることができる。ライブラリを使用して、データフェッチの最適化ができる。React Testing Libraryを使用して、自動テストを書くことができる。コンポーネント作成時は、Storybook駆動で開発をしている。',
  },
  {
    name: 'Next.js',
    level: 60,
    start: 2022,
    description: 'ISR, SG, SSRなどの概念を理解している。Page RouterとApp Routerの違いを理解し、最適な実装ができる。',
  },
  {
    name: 'Nest.js',
    level: 50,
    start: 2023,
    description: 'Nest.jsの設計思想、BFFとして使用した際のDataLoaderでのデータ取得の最適化などを理解し、実装できる。',
  },
  {
    name: 'GraphQL',
    level: 50,
    start: 2023,
    description: 'GraphQL Server Specificationを理解し、GraphQLサーバーを実装できる。フロントエンドでRelayを使用してデータ取得を行うことができる。',
  },
  {
    name: 'MySQL',
    level: 60,
    start: 2022,
    description: 'テーブル結合や、サブクエリなど、応用的なクエリを書くことができる。explainを活用して、クエリの最適化ができる。テーブル設計をできる。',
  },
  {
    name: 'HTML',
    level: 60,
    start: 2019,
    description: 'セマンティックなHTMLを書くことができる。HTML Living Standardを理解している。',
  },
  {
    name: 'CSS',
    level: 80,
    start: 2019,
    description: 'BEM, FLOCSSなどのCSS設計を理解している。CSS in JSを使用してのスタイリングができる。ランタイムCSSとゼロランタイムCSSの違いを理解し、最適な実装をできる。',
  },
  {
    name: 'PHP',
    level: 70,
    start: 2020,
  },
  {
    name: 'Laravel',
    level: 50,
    start: 2022,
  },
  {
    name: 'Go',
    level: 40,
    start: 2022,
  },
  {
    name: 'Gin',
    level: 40,
    start: 2023,
  },
  {
    name: 'Java',
    level: 20,
    start: 2023,
  },
  {
    name: 'SpringBoot',
    level: 20,
    start: 2023,
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
    name: 'Python',
    level: 40,
    start: 2023,
  },
  {
    name: 'GLSL',
    level: 10,
    start: 2023,
  },
  {
    name: 'Three.js',
    level: 30,
    start: 2023,
  },
];
</script>
