<template>
  <div>
    <div class="content grid-container" id="projectTop">
      <div class="grid-x description">
        <div class="cell">
          <h2>
            Ogle Image is a bespoke signage and graphic installation agency
            based in Melbourne with operations in Sydney.
          </h2>
          <h2>
            We gave their current website a complete redesign and refreshed a
            variety of brand identity elements such as typography and colour
            palettes.
          </h2>
          <!-- <h2 class="this">
              <a href="https://godtlevert.no/" target="_blankn">Visit site</a>
            </h2> -->
        </div>
      </div>

      <div class="grid-x meta">
        <div class="cell">
          <p>Services</p>
        </div>
        <div class="cell">
          <h3 class="float-left">Build</h3>
          <h3 class="float-left">Identity</h3>
          <h3 class="float-left">Web</h3>
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
          alt="Ogle Image Web Desktop"
        />
      </div>

      <div class="cell large-6 medium-6 small-12">
        <img
          data-src="/images/work/ogle/ogle-image-02.jpg"
          data-srcset="/images/work/ogle/ogle-image-02@2x.jpg 2x"
          alt="Ogle Image Logo Dark"
        />
      </div>
      <div class="cell large-6 medium-6 small-12">
        <img
          data-src="/images/work/ogle/ogle-image-03.jpg"
          data-srcset="/images/work/ogle/ogle-image-03@2x.jpg 2x"
          alt="Ogle Image Icon"
        />
      </div>

      <div class="cell">
        <img
          data-src="/images/work/ogle/ogle-image-04.jpg"
          data-srcset="/images/work/ogle/ogle-image-04@2x.jpg 2x"
          alt="Ogle Image Installation Image"
        />
      </div>

      <div class="cell">
        <img
          data-src="/images/work/ogle/ogle-image-05.jpg"
          data-srcset="/images/work/ogle/ogle-image-05@2x.jpg 2x"
          alt="Ogle Image Web Tablet 1"
        />
      </div>

      <!-- DOUBLE -->

      <div class="cell large-6 medium-6 small-12">
        <img
          data-src="/images/work/ogle/ogle-image-06.jpg"
          data-srcset="/images/work/ogle/ogle-image-06@2x.jpg 2x"
          alt="Ogle Image Web Mobile 1"
        />
      </div>
      <div class="cell large-6 medium-6 small-12">
        <img
          data-src="/images/work/ogle/ogle-image-07.jpg"
          data-srcset="/images/work/ogle/ogle-image-07@2x.jpg 2x"
          alt="Ogle Image Web Mobile 2"
        />
      </div>

      <div class="cell">
        <img
          data-src="/images/work/ogle/ogle-image-08.jpg"
          data-srcset="/images/work/ogle/ogle-image-08@2x.jpg 2x"
          alt="Ogle Image Web Tablet 2"
        />
        <img
          data-src="/images/work/ogle/ogle-image-09.jpg"
          data-srcset="/images/work/ogle/ogle-image-09@2x.jpg 2x"
          alt="Ogle Image Web Tablet 3"
        />
        <img
          data-src="/images/work/ogle/ogle-image-10.jpg"
          data-srcset="/images/work/ogle/ogle-image-10@2x.jpg 2x"
          alt="Ogle Image Web Mobile Grid"
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
      title: "Ogle Image",
      image: "/images/work/ogle/ogle-image-01.jpg",
      coverSize: "square",
      bg: "#eeeeee"
    };
  }
};
</script>
