<template>
  <details class="cell gl">
    <summary class="grid-x">
      <h2 class="cell auto title"><span>●</span>{{ title }}</h2>
      <h2 class="cell shrink togl">
        <a href="//www.ogleimage.com.au" target="_blank"></a>
      </h2>
    </summary>

    <div class="content">
      <div class="grid-x grid-margin-x">
        <div class="cell meta">
          <h4 class="status">Completed 20XX</h4>
        </div>
        <div class="cell large-8 medium-10 description">
          <h3 class="cell large-10">
            Ogle Image is a bespoke signage and graphic installation agency
            based in Melbourne with operations in Sydney. We gave their current
            website a complete redesign and refreshed a variety of brand
            identity elements such as typography and colour palettes.
          </h3>
        </div>
      </div>

      <div class="img-container">
        <div
          class="grid-x grid-margin-x"
          v-lazy-container="{ selector: 'img' }"
        >
          <div class="cell">
            <img
              data-src="/images/work/ogle/ogle-image-01.png"
              data-srcset="/images/work/ogle/ogle-image-01@2x.png 2x"
            />
          </div>

          <!-- DOUBLE -->
          <div class="grid-x large-10 medium-10 center">
            <div class="cell auto grid-padding-x">
              <img
                data-src="/images/work/ogle/ogle-image-02.png"
                data-srcset="/images/work/ogle/ogle-image-02@2x.png 2x"
              />
            </div>
            <div class="cell auto grid-padding-x">
              <img
                data-src="/images/work/ogle/ogle-image-03.png"
                data-srcset="/images/work/ogle/ogle-image-03@2x.png 2x"
              />
            </div>
          </div>

          <div class="cell">
            <img
              data-src="/images/work/ogle/ogle-image-04.png"
              data-srcset="/images/work/ogle/ogle-image-04@2x.png 2x"
            />
          </div>

          <!-- DOUBLE -->
          <div class="grid-x large-10 medium-10 center">
            <div class="cell auto grid-padding-x">
              <img
                data-src="/images/work/ogle/ogle-image-05.png"
                data-srcset="/images/work/ogle/ogle-image-05@2x.png 2x"
              />
            </div>
            <div class="cell auto grid-padding-x">
              <img
                data-src="/images/work/ogle/ogle-image-06.png"
                data-srcset="/images/work/ogle/ogle-image-06@2x.png 2x"
              />
            </div>
          </div>

          <div class="cell">
            <img
              data-src="/images/work/ogle/ogle-image-07.png"
              data-srcset="/images/work/ogle/ogle-image-07@2x.png 2x"
            />
            <img
              data-src="/images/work/ogle/ogle-image-08.png"
              data-srcset="/images/work/ogle/ogle-image-08@2x.png 2x"
            />
            <img
              data-src="/images/work/ogle/ogle-image-09.png"
              data-srcset="/images/work/ogle/ogle-image-09@2x.png 2x"
            />
          </div>
        </div>
      </div>
    </div>
  </details>
</template>

<script>
export default {
  name: "Ogle Image",
  data() {
    return {
      title: "Ogle Image"
    };
  }
};
</script>
