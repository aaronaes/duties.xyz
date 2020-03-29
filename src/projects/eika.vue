<template>
  <div class="content">
    <div class="grid-x">
      <div class="cell meta">
        <p class="status">Completed 2017</p>
      </div>

      <div class="cell large-8 medium-10 description">
        <h3>
          Eika Gruppen is a strategic alliance between 77 local Norwegian
          savings banks that provide various products and services within the
          financial sector. With more banks joining the group, Eika required
          content and visual consistency to be easily implemented and maintained
          across the various individual websites and apps owned by its members.
        </h3>
        <h3>
          To achieve this we helped design and build a flexible design system
          utilising a simple grid structure and a suite of UI elements, thereby
          allowing its banks to easily produce tailored layouts and relevant
          content for their respective customer bases.
        </h3>
      </div>
      <div class="cell meta">
        <p>Photography by XXX</p>
        <p>Build by YYY</p>
      </div>
    </div>
    <div class="img-container" v-lazy-container="{ selector: 'img' }">
      <div class="grid-x grid-margin-x">
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
          data-src="/images/work/eika/eika-08.jpg"
          data-srcset="/images/work/eika/eika-08@2x.jpg 2x"
        />
        <img
          data-src="/images/work/eika/eika-09.jpg"
          data-srcset="/images/work/eika/eika-09@2x.jpg 2x"
        />
        <img
          data-src="/images/work/eika/eika-10.jpg"
          data-srcset="/images/work/eika/eika-10@2x.jpg 2x"
        />
        <img
          data-src="/images/work/eika/eika-11.jpg"
          data-srcset="/images/work/eika/eika-11@2x.jpg 2x"
        />
      </div>
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
