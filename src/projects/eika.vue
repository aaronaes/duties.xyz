<template>
  <div class="content">
    <div class="grid-x">
      <div class="cell large-8 medium-12 small-12 description">
        <h2>
          Eika Gruppen is a strategic alliance between 77 local Norwegian
          savings banks that provide various products and services within the
          financial sector. With more banks joining the group, Eika required
          content and visual consistency to be easily implemented and maintained
          across the various individual websites and apps owned by its members.
        </h2>
        <h2>
          To achieve this we helped design and build a flexible design system
          utilising a simple grid structure and a suite of UI elements, thereby
          allowing its banks to easily produce tailored layouts and relevant
          content for their respective customer bases.
        </h2>
        <h2>
          <a href="https://eika.no/" target="_blankn">Visit site</a>
        </h2>
      </div>
      <div class="grid-x meta large-8 medium-10 shrink">
        <p class="cell large-3 medium-3 shrink float-left status">
          <span>Completed, 2015</span>
        </p>
        <p class="cell large-6 medium-6 shrink float-left category">
          <span>Design System, UX & UI Design</span>
        </p>
      </div>
    </div>
    <div class="grid-xw img-container" v-lazy-container="{ selector: 'img' }">
      <img
        data-src="/images/work/eika/eika-01.jpg"
        data-srcset="/images/work/eika/eika-01@2x.jpg 2x"
      />
      <img
        data-src="/images/work/eika/eika-02.jpg"
        data-srcset="/images/work/eika/eika-02@2x.jpg 2x"
      />
      <img
        data-src="/images/work/eika/eika-03.jpg"
        data-srcset="/images/work/eika/eika-03@2x.jpg 2x"
      />
      <img
        data-src="/images/work/eika/eika-04.jpg"
        data-srcset="/images/work/eika/eika-04@2x.jpg 2x"
      />
      <img
        data-src="/images/work/eika/eika-05.jpg"
        data-srcset="/images/work/eika/eika-05@2x.jpg 2x"
      />
      <img
        data-src="/images/work/eika/eika-06.jpg"
        data-srcset="/images/work/eika/eika-06@2x.jpg 2x"
      />
      <img
        data-src="/images/work/eika/eika-07.jpg"
        data-srcset="/images/work/eika/eika-07@2x.jpg 2x"
      />
      <img
        data-src="/images/work/eika/eika-09.jpg"
        data-srcset="/images/work/eika/eika-09@2x.jpg 2x"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "eika-gruppen",
  data() {
    return {
      title: "Eika Gruppen"
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>
