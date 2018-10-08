---
title: "lazyload-images"
date: 2018-09-10T20:24:15+07:00
url: /2018/09/10/lazyload-images
layout: wide
cover-image: images/cover.jpg
thumbnail:
description:
tags:
---

Lazy-loading เป็นเทคนิคหนึ่งในการทำให้เว็บแสดงผลได้ไวขึ้น หลักการก็คือ
แทนที่จะส่ง request ไปเรียกไฟล์ assets ทั้งหมดที่ใช้ในเพจพร้อมกันตั้งแต่ตอนโหลด
ก็เปลี่ยนเป็นการส่ง request ออกไปเมื่อ "จำเป็น" เท่านั้น

สำหรับไฟล์ JS/CSS ก็ส่ง request ออกไปก็ต่อเมื่อจะได้ใช้งาน
ส่วนไฟล์รูปภาพ ก็คือการส่ง request ออกไปก็ต่อเมื่อต้องแสดงผลบนหน้าจอ

การใช้ lazy loading กับไฟล์จำพวกรูปภาพ เป็นเทคนิคที่นำมาใช้ได้ง่าย
และส่งผลดีอย่างเห็นได้ชัด ถ้าในภาษานักลงทุนก็อาจจะบอกว่า ลงทุนน้อย แต่ได้ผลตอบแทนค่อนข้างดี (แต่ก็ยังมีความเสี่ยงนะ)

สำหรับบล็อกนี้ ผมใช้ JavaScript library ชื่อว่า [LazyLoad](https://github.com/verlok/lazyload)
เพื่อ lazy load รูปภาพ สำหรับบางโพสต์ที่มีรูปเยอะๆ
อยากจะมาแชร์ผลลัพธ์ว่าโหลดเร็วขึ้นแค่ไหนครับผม

## `LazyLoad`

หลักการของ LazyLoad คือจะโหลด asset เมื่อมันเข้ามาอยู่ใน viewport
หรือเมื่อเรา scroll ลงไปถึง viewport นั่นเอง asset ที่รองรับคือ รูปภาพ วิดีโอ และ content ใน iframe

วิธีการใช้งาน ใน readme ของ repo เขียนไว้ละเอียดดีมาก มีตัวอย่างให้ดูหลายๆ use case
ที่ผมเลือกใช้เป็น [Async script + auto initilization](https://github.com/verlok/lazyload#async-script--auto-initialization)

ใส่ code เหล่านี้ไว้ส่วนล่างสุดของ HTML ก่อนปิด `</body>`

```html
<script>
  window.lazyLoadOptions = {
    elements_selector: '.lazy'
  }
</script>
<script async src="/js/lazyload.min.js"></script>
</body>
```

ส่วน tag `<img>` ก็ต้องเปลี่ยนจาก `src` attribute เป็น `data-src`

```html
<img class="lazy" data-src="/path/to/image">
```

เมื่อรูปนี้เข้ามาอยู่ใน viewport LazyLoad จะทำการเปลี่ยน attribute `data-src` ให้เป็น `src`
ซึ่งก็จะทำให้ browser ส่ง request ออกไปโดยอัตโนมัติ

## ต้องทำงานได้โดยที่ไม่มี JavaScript

แน่นอนว่าการใช้ library LazyLoad นั้น ต้องใช้ JavaScript สำหรับ browser ที่ไม่มี
JavaScript หรือ user ไม่ได้เปิด JavaScript ไว้ รูปนั้นก็จะไม่ขึ้นเลย เพราะ browser มองว่าไม่มี attribute `src`

วิธีแก้ก็คือต้องใส่ fallback ใน tag `<noscript>` ด้วย tag `<img>` ธรรมดาแบบนี้

```html
<img class="lazy" data-src="/path/to/image">
<noscript>
  <img class="lazy" src="/path/to/image">
</noscript>
```

