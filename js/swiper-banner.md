# swiper插件

## 实现一个简单的banner轮播效果

为了简单快捷，我使用CND的方式
也可以去官网下载[swiper中文网](https://www.swiper.com.cn/)
### html代码

```html

<div class="swiper-container">
	<!-- 基本结构 -->
    <div class="swiper-wrapper">
      <div class="swiper-slide"><a href="#"><img src="" alt="" class="img-responsive"></a></div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
    </div>
    <!-- 圆点指示器 -->
    <div class="swiper-pagination"></div>
    <!-- 左右箭头 -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</div>
```

### css代码
```html
//把这个放在你自己写的css前面
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/css/swiper.css">
```
### js代码

```hmtl
//把这个放在你自己写的js前面
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/js/swiper.js"></script>
```
### 插件配置

swiper的相关配置，这里我配置了圆点指示器，自动轮播，左右箭头点击，手指滑动
```js

var swiper = new Swiper('.swiper-container', {
		  loop: true,
		  centeredSlides: true,
		  autoplay: {
		    delay: 2500,
		    disableOnInteraction: false,
		  },
		  pagination: {
		    el: '.swiper-pagination',
		    clickable: true,
		  },
		  navigation: {
		    nextEl: '.swiper-button-next',
		    prevEl: '.swiper-button-prev',
		  },
		});
```