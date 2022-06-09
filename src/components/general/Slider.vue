<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Slider from "aria-progress-range-slider";

export default defineComponent({
  props: {
    max: Number,
    min: Number,
    value: {
      type: Number,
      required: true,
    },
    step: {
      type: Number,
      default: 1,
    },

    onChange: Function,
    getTooltip: Function,
  },

  setup(props) {
    const sliderRef = ref<HTMLElement>();
    let slider: Slider;
    onMounted(async () => {
      slider = new Slider(sliderRef.value as HTMLElement, {
        max: props.max,
        min: props.min || 0,
        step: props.step,
        snap: true,
        onChange: props.onChange as any,
        onDragMove: props.onChange as any,
        getTooltipText: (props.getTooltip as any) || ((value) => String(value)),
      });
      slider.setValue(props.value);
    });

    return { sliderRef };
  },
});
</script>

<template>
  <div ref="sliderRef" class="slider"></div>
</template>

<style lang="scss">
.slider {
  width: 100%;
}

//
// Aria Progress Bar
//

$track-height: 8px;
$track-radius: 35px;
$vertical-padding: 8px;
$total-height: 2 * $vertical-padding + $track-height;
$handle-height: 13px;
$handle-width: 13px;
$handle-top: ($total-height - $handle-height) / 2;

$white: #fff;
$dark: var(--dark);
$space: 8px;

.AriaProgressBar {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  padding: $vertical-padding 0;
  z-index: 0;
  position: relative;
  user-select: none;
  touch-action: pan-y;

  .AriaProgressBar-buffer {
    display: none;
  }

  &.AriaProgressBar--hover {
    .AriaProgressBar-hover {
      will-change: width;
    }
  }
}

.AriaProgressBar:hover {
  cursor: pointer;

  .AriaProgressBar-buffer {
    display: none;
  }
}

.AriaProgressBar--disabled {
  opacity: 0.5;
  cursor: auto;
}

.AriaProgressBar-track {
  height: $track-height;
  position: relative;
  width: 100%;
  z-index: 0;
  border-radius: $track-radius;

  box-sizing: content-box !important;
  border: 8px solid transparent;
  margin-bottom: -8px;
  margin-left: -8px;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #999999;
    opacity: 0.16;
  }
}

.AriaProgressBar-progress,
.AriaProgressBar-buffer,
.AriaProgressBar-hover {
  height: $space;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform-origin: left center;
  border-radius: $track-radius;
}

.AriaProgressBar-progress {
  z-index: 1;
  transition: 0.1s width;
  will-change: width;
}

.AriaProgressBar--dragging {
  touch-action: none;

  .AriaProgressBar-progress {
    transition: none;
  }
}

.AriaProgressBar-hover {
  width: 0;
}

.AriaProgressBar-buffer,
.AriaProgressBar-hover,
.AriaProgressBar-handle {
  pointer-events: none;
}

.AriaProgressBar-handle {
  display: none;
}

.AriaProgressBar-hoverTooltip,
.AriaProgressBar-mainTooltip {
  position: absolute;
  bottom: 100%;
  transform: translateX(-50%);
  left: 50%;
}

.AriaProgressBar-mainTooltip {
  display: block;
}

.AriaProgressBar-hoverTooltip {
  display: none;

  // .AriaProgressBar--hover & {
  //   display: block;

  //   // dont display hover tooltip on touch devices
  //   @media (pointer: coarse) {
  //     display: none;
  //   }
  // }

  // .AriaProgressBar--dragging & {
  //   @media (pointer: coarse) {
  //     display: block;
  //   }
  // }
}

// Default theme

.AriaProgressBar:focus {
  outline: none;
}

.AriaProgressBar-progress {
  background: linear-gradient(89.94deg, #6c5dd2 0.05%, #dd7c83 99.95%);
  &:before {
    content: "";
    position: absolute;
    right: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    top: 0;
    transform: translate(50%, -40%);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  }
}

.AriaProgressBar-buffer {
  background: transparentize($white, 0.7);
  transition: 0.1s width;
}

.AriaProgressBar-hover {
  background: rgba(#fff, 0.5);
}

.AriaProgressBar-hoverTooltip,
.AriaProgressBar-mainTooltip {
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  position: absolute;
  font-size: 12px;
  bottom: 100%;
  transform: translateX(-50%);
  left: 50%;
}

.AriaProgressBar-mainTooltip {
  background: #2f2f2f;

  color: $white;
}
</style>
