<template>
  <div class="content">
    <div class="grid-x">
      <div class="cell large-8 medium-10 description">
        <h3 class="cell large-10">
          Ogle Image is a bespoke signage and graphic installation agency based
          in Melbourne with operations in Sydney.
        </h3>
        <h3 class="cell large-10">
          We gave their current website a complete redesign and refreshed a
          variety of brand identity elements such as typography and colour
          palettes.
        </h3>
        <div class="grid-x meta large-8 medium-10">
          <p class="cell large-3 medium-3 small-6 float-left status">
            <span>Ongoing</span>
          </p>
          <p class="cell large-6 medium-6 small-6 float-left category">
            <span>Identity & Digital Design</span>
          </p>
        </div>
      </div>
    </div>

    <div
      class="grid-x grid-margin-x img-container"
      v-lazy-container="{ selector: 'img' }"
    >
      <div class="cell">
        <img
          data-src="/images/work/ogle/ogle-image-01.jpg"
          data-srcset="/images/work/ogle/ogle-image-01@2x.jpg 2x"
        />
      </div>

      <div class="cell large-6 medium-6 small-12">
        <img
          data-src="/images/work/ogle/ogle-image-02.jpg"
          data-srcset="/images/work/ogle/ogle-image-02@2x.jpg 2x"
        />
      </div>
      <div class="cell large-6 medium-6 small-12">
        <img
          data-src="/images/work/ogle/ogle-image-03.jpg"
          data-srcset="/images/work/ogle/ogle-image-03@2x.jpg 2x"
        />
      </div>

      <div class="cell">
        <img
          data-src="/images/work/ogle/ogle-image-04.jpg"
          data-srcset="/images/work/ogle/ogle-image-04@2x.jpg 2x"
        />
      </div>

      <div class="cell">
        <img
          data-src="/images/work/ogle/ogle-image-05.jpg"
          data-srcset="/images/work/ogle/ogle-image-05@2x.jpg 2x"
        />
      </div>

      <!-- DOUBLE -->

      <div class="cell large-6 medium-6 small-12">
        <img
          data-src="/images/work/ogle/ogle-image-06.jpg"
          data-srcset="/images/work/ogle/ogle-image-06@2x.jpg 2x"
        />
      </div>
      <div class="cell large-6 medium-6 small-12">
        <img
          data-src="/images/work/ogle/ogle-image-07.jpg"
          data-srcset="/images/work/ogle/ogle-image-07@2x.jpg 2x"
        />
      </div>

      <div class="cell">
        <img
          data-src="/images/work/ogle/ogle-image-08.jpg"
          data-srcset="/images/work/ogle/ogle-image-08@2x.jpg 2x"
        />
        <img
          data-src="/images/work/ogle/ogle-image-09.jpg"
          data-srcset="/images/work/ogle/ogle-image-09@2x.jpg 2x"
        />
        <img
          data-src="/images/work/ogle/ogle-image-10.jpg"
          data-srcset="/images/work/ogle/ogle-image-10@2x.jpg 2x"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ogle-image",
  data() {
    return {
      title: "Ogle Image"
    };
  }
};
</script>
