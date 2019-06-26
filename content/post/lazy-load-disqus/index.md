---
title: "โหลด Disqus Comments ด้วย IntersectionObserver"
date: 2019-06-26T20:25:44+07:00
url: /2019/06/26/lazy-load-disqus
description:
tags:
---

Disqus เป็น service ที่ทำให้เราสามารถ embed comments ในบล็อกหรือเว็บไซต์ที่เป็น static HTML ได้

หลักการก็คือเราแปะ universal embed code ของ Disqus ที่สร้าง `<script>` element แค่อันเดียวลงไปใน template
แล้ว script ตัวนั้นมันก็จะ generate ทั้ง comment form
รวมถึง comment list ให้เสร็จ

แต่จริงๆ ไฟล์ที่ถูกโหลดมันไม่ได้มีแค่ไฟล์นี้ไฟล์เดียว เพราะไฟล์นี้มันก็ไปโหลดไฟล์อื่นๆ มาอีก

{{< picture-lazy
  wrapper-class="semi-full"
  src="images/before.png"
  alt="before"
  ratio="16-10"
>}}

<p class="message--warning">
  <a href="https://css-tricks.com/lazy-loading-disqus-comments/#comment-1605581">ผู้พัฒนา Disqus ชี้แจงใน css-tricks.com</a>ว่า
  ไฟล์อื่นๆ ที่โหลดเพิ่มเข้ามา จะไม่ทำให้การ render ช้าลง (ถูกโหลดแบบ async อยู่หลัง event <code>DOMContentLoaded</code>)
และไฟล์ส่วนมากก็อยู่บน CDN ของ Disqus ซึ่งก็อาจจะถูก browser cache ไว้อยู่แล้ว กรณีที่เราเคยเปิดเว็บอื่นที่มี Disqus comment เหมือนกัน
</p>

ถึงแม้อาจจะมีผลกระทบเรื่อง performance ไม่มากนัก แต่ผมก็ยังคิดว่ามันคงจะดีกว่า ถ้าเราให้ user โหลดมันเมื่อจำเป็นต้องใช้เท่านั้น

นั่นก็คือ เมื่อ user scroll ลงไปถึงกล่อง comment ด้านล่าง ถึงค่อยโหลด Disqus นั่นเอง

## IntersectionObserver

> ถ้าเป็นเมื่อก่อน เราอาจต้องใช้ scroll event ร่วมกับ event handler function
โดยการเทียบค่า scroll offset ของทั้งตัว element เอง และ `window` object
เพื่อเช็คว่า มันเข้ามาอยู่ใน viewport แล้วหรือยัง วุ่นวายพอสมควร (ตัวอย่าง [jQuery](https://medium.com/talk-like/detecting-if-an-element-is-in-the-viewport-jquery-a6a4405a3ea2),
[Vanilla JS](https://medium.com/@LewisCowles1/i-also-used-the-concept-but-abandoned-jquery-for-vanilla-js-b55f638586fe))

เราสามารถใช้ `IntersectionObserver` เพื่อบอกว่า ให้จับตามองกล่อง comment ไว้
ถ้าแกถูกเลื่อนขึ้นมาอยู่ใน viewport เมื่อไหร่ ให้ไปเรียก function ที่เตรียมไว้นะ

function ที่เตรียมไว้จะเป็นอะไรก็ได้ ในกรณีของบล็อกนี้ก็คือ function สำหรับการโหลด Disqus comment

### 1. สร้าง observer

{{< highlight javascript >}}
const observerOptions = {
  root: null, // ให้ root เป็น null เพื่อบอกว่า ให้เช็คกับ viewport
  rootMargin: '50px 0px', // เผื่อระยะด้านบนกับล่างไว้ด้านละ 50px
  threshold: 0
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // load disqus
    }
  });
}, observerOptions);
{{< / highlight >}}

### 2. Observer.observe()

{{< highlight javascript >}}
const commentsElement = document.querySelector('#comments');
observer.observe(commentsElement);
{{< /highlight >}}

### 3. loadDisqus()
