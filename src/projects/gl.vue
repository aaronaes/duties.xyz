<template>
  <details class="cell gl">
    <summary class="grid-x">
      <h2 class="cell auto title"><span>●</span>{{ title }}</h2>
      <!-- <h2 class="cell shrink togl">
        <a href="//www.godtlevert.no" target="_blank"></a>
      </h2> -->
      <h2 class="cell shrink count"></h2>
    </summary>

    <div class="content">
      <div class="grid-x grid-margin-x">
        <div class="cell meta">
          <h4 class="status">Ongoing</h4>
        </div>
        <div class="cell large-8 medium-10 description">
          <h3 class="cell large-10">
            Godt Levert didn't have as much of a presence in the market as they
            wanted. The service was new and was gaining traction, and with that
            Godt Levert wanted to become a household name.
          </h3>
          <h3 class="cell large-10">
            The solution to this was taking a more holistic approach to their
            product, through creating a new way to browse meals and weekly
            deals. As a part of the project, the whole app was revamped with new
            UI and a new website.
          </h3>
        </div>
        <div class="cell meta">
          <h4>Photography by <a href="#">Glarb</a></h4>
          <h4>Build by <a href="#">WebsiteLords</a></h4>
        </div>
      </div>

      <div class="grid-x">
        <ul class="accordion" data-accordion>
          <li class="accordion-item" data-accordion-item id="toggle-1">
            <a class="accordion-title" href="#">accordion 1</a>
            <div class="accordion-content" data-tab-content>
              Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
              neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla
              enim. Phasellus molestie magna non est bibendum non venenatis nisl
              tempor. Suspendisse dictum feugiat nisl ut dapibus.
            </div>
          </li>
          <li class="accordion-item" data-accordion-item id="toggle-2">
            <a class="accordion-title" href="#">accordion 2</a>
            <div class="accordion-content" data-tab-content>
              Suspendisse dictum feugiat nisl ut dapibus. Vivamus hendrerit arcu
              sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie
              magna non est bibendum non venenatis nisl tempor. Sed auctor neque
              eu tellus rhoncus ut eleifend nibh porttitor.
            </div>
          </li>
        </ul>
      </div>

      <div class="img-container" v-lazy-container="{ selector: 'img' }">
        <div class="grid-x grid-margin-x">
          <div class="cell">
            <img
              data-src="/images/work/gl/godtlevert-01.png"
              data-srcset="/images/work/gl/godtlevert-01@2x.png 2x"
            />
            <img
              data-src="/images/work/gl/godtlevert-02.png"
              data-srcset="/images/work/gl/godtlevert-02@2x.png 2x"
            />
          </div>

          <!-- DOUBLE -->
          <div class="grid-x large-10 medium-10 center double">
            <div class="cell auto grid-padding-x">
              <img
                data-src="/images/work/gl/godtlevert-03.png"
                data-srcset="/images/work/gl/godtlevert-03@2x.png 2x"
              />
            </div>
            <div class="cell auto grid-padding-x">
              <img
                data-src="/images/work/gl/godtlevert-04.png"
                data-srcset="/images/work/gl/godtlevert-04@2x.png 2x"
              />
            </div>
          </div>

          <!-- TEXT -->
          <div class="grid-x large-8 medium-10 text center">
            <div class="cell auto grid-padding-x">
              <h3>
                Ut enim ad minim veniam nostrud.
              </h3>
            </div>
            <div class="cell auto grid-padding-x">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div class="cell">
            <img
              data-src="/images/work/gl/godtlevert-05.png"
              data-srcset="/images/work/gl/godtlevert-05@2x.png 2x"
            />
            <img
              data-src="/images/work/gl/godtlevert-06.png"
              data-srcset="/images/work/gl/godtlevert-06@2x.png 2x"
            />
            <img
              data-src="/images/work/gl/godtlevert-07.png"
              data-srcset="/images/work/gl/godtlevert-07@2x.png 2x"
            />
            <img
              data-src="/images/work/gl/godtlevert-08.png"
              data-srcset="/images/work/gl/godtlevert-08@2x.png 2x"
            />
          </div>

          <div class="grid-x double">
            <div class="cell auto grid-padding-x">
              <img
                data-src="/images/work/gl/godtlevert-09.png"
                data-srcset="/images/work/gl/godtlevert-09@2x.png 2x"
              />
            </div>
            <div class="cell auto grid-padding-x">
              <img
                data-src="/images/work/gl/godtlevert-09.png"
                data-srcset="/images/work/gl/godtlevert-09@2x.png 2x"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </details>
</template>

<script>
export default {
  name: "GL",
  data() {
    return {
      title: "Godt Levert",
      active: false
    };
  }
};
</script>
