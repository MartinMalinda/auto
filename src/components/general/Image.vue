<script lang="ts">
import { computed, defineComponent, ref, h } from "vue";
import Intersect from "vue-intersect";
import {
  ImageParam,
  ImageSizeOption,
  responsifyImageSource,
  responsifyImageSourceSet,
} from "../../utils/image";

export default defineComponent({
  props: {
    src: {
      required: true,
      type: String,
    },

    srcset: {
      type: Array as () => ImageSizeOption[],
    },

    imgClass: {
      type: String,
      default: "",
    },

    alt: {
      type: String,
      required: true,
    },

    width: {
      type: Number,
      required: true,
    },
    height: Number,
    lazy: Boolean,
    crop: Boolean,
  },
  setup(props, { attrs, slots }) {
    const isError = ref(false);
    const handleError = () => (isError.value = true);

    const imageParams = (): ImageParam => ({
      src: props.src,
      width: props.width,
      crop: props.crop,
    });

    const _srcWithSize = computed(() => {
      return responsifyImageSource(imageParams());
    });

    const placeholderSrc = computed(() => {
      return responsifyImageSource({
        ...imageParams(),
        width: 5,
      });
    });

    const _srcsetWithSizes = computed(() => {
      if (props.srcset) {
        return responsifyImageSourceSet(imageParams(), props.srcset);
      }
    });

    const loaded = ref(false);
    const enteredViewport = ref(false);
    const renderImg = ({ lazy } = { lazy: false }) => {
      if (isError.value) {
        if (slots.error) {
          return slots.error();
        }

        return "We could not load this image";
      }

      return h("img", {
        class: `${props.imgClass} ${loaded.value && "loaded"}`,
        "data-lazy": lazy,
        ...attrs,
        alt: props.alt,
        width: props.width,
        style: `width: ${props.width}px;`,
        // add src if image is not lazy or
        src: !lazy || enteredViewport.value ? _srcWithSize.value : null,
        srcset: !lazy || enteredViewport.value ? _srcsetWithSizes.value : null,
        decoding: "async",

        onLoad: () => (loaded.value = true),
        onError: handleError,
      });
    };

    if (!props.lazy) {
      // if image is not lazy, just render plain image
      return renderImg;
    }

    const renderPlaceholder = () =>
      h("img", {
        class: `placeholder ${loaded.value && "hidden"}`,
        "data-lazy": true,
        alt: props.alt,
        src: placeholderSrc.value,
      });

    const wrapperStyle = `padding-top: calc(${props.height} / ${props.width} * 100%)`;
    // wrapper adds padding style and Intersect observer
    const renderWrapper = (child) =>
      h(
        Intersect,
        {
          rootMargin: "500px 0px 500px 0px",
          once: true,
          onEnter: () => (enteredViewport.value = true),
        },
        [
          h(
            "div",
            {
              class: "wrapper",
              style: wrapperStyle,
            },
            [renderPlaceholder(), child]
          ),
        ]
      );

    // if image is lazy, render it wrapped
    return () => renderWrapper(renderImg({ lazy: true }));
  },
});
</script>

<style scoped>
.wrapper {
  position: relative;
  height: 0;
  display: inline-block;
  overflow: hidden;
}

.wrapper > div {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

/* ::v-deep img[data-lazy] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: 0;
  transition: 0.4s opacity;

  &.loaded {
    opacity: 1;
  }
} */

::v-deep(img.placeholder) {
  opacity: 1;
  height: 100%;
}
</style>
