해당 글은 vue2.^, chart.js 2.^ 버전을 바탕으로 합니다.

---

## Vue2 + Chart.js

### 실행화면
![](https://images.velog.io/images/pji3504/post/3a338e4e-9b7d-4ee3-ad46-9e7b4820996d/ezgif.com-gif-maker.gif)

### Chart.js 설치

- npm install chart.js 를 통해 간단하게 설치할 수 있습니다.

[chart.js NPM](https://www.npmjs.com/package/chart.js)


### 폴더 구조

![](https://images.velog.io/images/pji3504/post/f0139559-6c20-48bd-b753-518450c28c65/image.png)

#### plugins/ChartPlugin.js

```javascript
import Chart from 'chart.js'
export default {
    install(Vue) {
        Vue.prototype.$_Chart = Chart;
        // xx.vue
        // this.$_Chart => 차트 접근
    }
}
```

- 여러 컴포넌트에서 chart library 를 import 해야 할 경우, 위처럼 임의의 js 파일에서 chart.js 를 import 한 뒤 사용할 컴포넌트에서 
``` this.$_Chart ``` 를 이용해 바로 chart.js 를 이용할 수 있습니다.

#### main.js

```javascript
import Vue from 'vue';
import App from './App.vue';
import ChartPlugin from './plugins/ChartPlugin.js';
import {router} from './router/index.js'
Vue.config.productionTip = false

// install();
Vue.use(ChartPlugin);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
```

- 위의 ``` this.$_Chart ``` 를 사용하기 위해 생성했던 ChartPlugin.js 를 main.js 에 import 해주어야 합니다.


#### BarChart.vue

```html
<template>
  <div>
    <canvas ref="barChart" id="barChart" width="400" height="200"></canvas>
  </div>
</template>
```

- plugin 제작 전

```javascript
import Chart from 'chart.js';
export default {
    mounted(){
        const myChart = new Chart(this.$refs.barChart,
			// ...생략
        });
        console.log(myChart)
    }
}
```

- plugin 제작 후

```javascript
// import Chart from 'chart.js';
export default {
    mounted(){
        const myChart = new this.$_Chart(this.$refs.barChart,
			// ...생략
        });
        console.log(myChart)
    }
}
```

------


- inflearn 장기효님의 'Vue.js 완벽 가이드' 강의를 참고했습니다.
