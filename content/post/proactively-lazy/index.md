---
title: "ใช้ประโยชน์จากความขี้เกียจ"
date: 2020-03-20T17:03:05+07:00
url: /2020/03/20/proactively-lazy
description:
thumbnail:
tags:
- shell
- coding
- personal
categories:
- personal
---

บล็อกนี้ทำด้วย Hugo เก็บ content ที่เป็นโพสต์ต่างๆ ไว้ในโฟลเดอร์ `content/post/`
ซึ่งแต่ละโพสต์ก็จะอยู่ในโฟลเดอร์ของตัวเองอีกที เช่น `content/post/ten-years/index.md`
เพื่อให้แต่ละโฟลเดอร์เป็น [1 page bundle](https://armno.in.th/2019/07/25/hugo-image-resize/#page-bundle)
ตาม concept ใน Hugo

แต่ยังมีโพสต์เก่าๆ ที่ยังไม่ได้อยู่ในโฟลเดอร์ของตัวเอง หลงเหลืออยู่
เป็นโพสต์ที่[ย้ายมาจากบล็อก Jekyll](https://armno.in.th/2018/03/24/jekyll-to-hugo/) เมื่อก่อนนู้น

ชื่อไฟล์จะอยู่ในรูปแบบ `YYYY-MM-DD-post-slug.markdown`
ซึ่ง Hugo ก็อ่านได้ปกติ เพราะเป็น content ที่เป็นไฟล์ markdown เหมือนกัน
เพียงแต่มันดูรกไปหน่อย

อยากจัดระเบียบให้มันเหมือนกัน

![](images/original-structure.png)

## ภารกิจ

ภารกิจของผมคือ ย้ายไฟล์ `.markdown` ที่อยู่ข้างนอก ไว้อยู่ในโฟลเดอร์ของตัวเอง
พร้อมกับเปลี่ยนชื่อไฟล์ให้เป็น `index.md` จะได้เป็นรูปแบบเดียวกันทั้งหมด

1. สร้างโฟลเดอร์ใหม่ พิมพ์ชื่อให้เหมือน path เดิมของแต่ละโพสต์
2. ย้ายไฟล์ `.markdown` เข้าไปในโฟลเดอร์ใหม่ พร้อมกับเปลี่ยนชื่อให้มันเป็น `index.md`

ตัวอย่างเช่น ถ้าไฟล์ชื่อ `2011-03-29-hello-world.markdown` ก็ต้องย้ายไป `hello-world/index.md`

และเนื่องจากไม่อยากทำงานซ้ำๆ ผมเลยมีความคิดจะเขียน shell script ขึ้นมาเพื่อ automate process ที่ต้องทำกับแต่ละไฟล์

ผมเขียน shell script ไม่เป็น .. แต่มีความขี้เกียจเป็นทุน