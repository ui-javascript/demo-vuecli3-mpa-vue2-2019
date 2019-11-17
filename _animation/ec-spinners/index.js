import Vue from 'vue'

import {
  AtomSpinner,
  FlowerSpinner,
  BreedingRhombusSpinner,
  CirclesToRhombusesSpinner,
  FingerprintSpinner,
  FulfillingBouncingCircleSpinner,
  FulfillingSquareSpinner,
  HalfCircleSpinner,
  HollowDotsSpinner,
  LoopingRhombusesSpinner,
  IntersectingCirclesSpinner,
  OrbitSpinner,
  PixelSpinner,
  RadarSpinner,
  ScalingSquaresSpinner,
  SelfBuildingSquareSpinner,
  SemipolarSpinner,
  SpringSpinner,
  SwappingSquaresSpinner,
  TrinityRingsSpinner
} from 'epic-spinners'

const App = {
  template: `
<div>

<flower-spinner
  :animation-duration="2500"
  :size="70"
  :color="'#ff1d5e'"
/>

<pixel-spinner
  :animation-duration="2000"
  :pixel-size="70"
  :color="'#ff1d5e'"
/>

<hollow-dots-spinner
  :animation-duration="1000"
  :dot-size="15"
  :dots-num="3"
  :color="'#ff1d5e'"
/>

<intersecting-circles-spinner
  :animation-duration="1200"
  :size="70"
  :color="'#ff1d5e'"
/>

<orbit-spinner
  :animation-duration="1200"
  :size="55"
  :color="'#ff1d5e'"
/>

<radar-spinner
  :animation-duration="2000"
  :size="60"
  :color="'#ff1d5e'"
/>

<scaling-squares-spinner
  :animation-duration="1250"
  :size="65"
  :color="'#ff1d5e'"
/>

<half-circle-spinner
  :animation-duration="1000"
  :size="60"
  :color="'#ff1d5e'"
/>

<trinity-rings-spinner
  :animation-duration="1500"
  :size="66"
  :color="'#ff1d5e'"
/>

<fulfilling-square-spinner
  :animation-duration="4000"
  :size="50"
  :color="'#ff1d5e'"
/>

<circles-to-rhombuses-spinner
  :animation-duration="1200"
  :circles-num="3"
  :circle-size="15"
  :color="'#ff1d5e'"
/>
    
<semipolar-spinner
  :animation-duration="2000"
  :size="65"
  :color="'#ff1d5e'"
/>
    
<self-building-square-spinner
  :animation-duration="6000"
  :size="40"
  :color="'#ff1d5e'"
/>
    
<swapping-squares-spinner
  :animation-duration="1000"
  :size="65"
  :color="'#ff1d5e'"
/>

<fulfilling-bouncing-circle-spinner
  :animation-duration="4000"
  :size="60"
  :color="'#ff1d5e'"
/>

<fingerprint-spinner
  :animation-duration="1500"
  :size="64"
  :color="'#ff1d5e'"
/>

<spring-spinner
  :animation-duration="3000"
  :size="60"
  :color="'#ff1d5e'"
/>

<atom-spinner
  :animation-duration="1000"
  :size="60"
  :color="'#ff1d5e'"
/>

<looping-rhombuses-spinner
  :animation-duration="2500"
  :rhombus-size="15"
  :color="'#ff1d5e'"
/>

<breeding-rhombus-spinner
  :animation-duration="2000"
  :size="65"
  :color="'#ff1d5e'"
/>

</div>




  `,
  components: {
    AtomSpinner,
    FlowerSpinner,
    BreedingRhombusSpinner,
    CirclesToRhombusesSpinner,
    FingerprintSpinner,
    FulfillingBouncingCircleSpinner,
    FulfillingSquareSpinner,
    HalfCircleSpinner,
    HollowDotsSpinner,
    LoopingRhombusesSpinner,
    IntersectingCirclesSpinner,
    OrbitSpinner,
    PixelSpinner,
    RadarSpinner,
    ScalingSquaresSpinner,
    SelfBuildingSquareSpinner,
    SemipolarSpinner,
    SpringSpinner,
    SwappingSquaresSpinner,
    TrinityRingsSpinner
  }
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
