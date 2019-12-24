---
title: "Inline CSS"
date: 2019-12-24T17:21:04+07:00
url: /2019/12/24/blog-inline-css
description: ทำให้ hugo inline css ทั้งหมดใน blog นี้ในแท็ก <style>
thumbnail:
tags:
- blog
- performance
- css
categories:
- web development
---

ปกติ Sass Workflow ของบล็อกนี้เป็นแบบนี้ครับ:

- ใช้ Sass เป็นตัว preprocessor
- เก็บไฟล์ `.scss` ไว้ในโฟลเดอร์ธีม [`themes/lazy/assets/css`](https://github.com/armno/blog/tree/master/themes/lazy/assets/css)
- compile Sass เป็น CSS ด้วย [Sass Pipe](https://gohugo.io/hugo-pipes/scss-sass/) ที่ติดมากับ Hugo (ไม่ต้องลง build tools เพิ่ม)
- จากไฟล์ `.scss` หลายๆ ไฟล์ ได้ไฟล์ output CSS ออกมาไฟล์เดียว

พอได้ไฟล์ `.css` มาแล้ว:

- ใช้ [loadCSS](https://github.com/filamentgroup/loadCSS) เพื่อ[โหลด CSS แบบ asynchronous](https://armno.in.th/2015/05/04/use-loadcss-to-improve-rendering-performance/#3--loadcss--css--asynchronous)
- generate critical CSS โดยใช้ online tool [Critital Path CSS Generator](https://jonassebastianohlsson.com/criticalpathcssgenerator/)
แล้ว copy critial CSS มา inline ใส่ในแท็ก `<style>` ใน `<head>` อีกที [แบบนี้](https://github.com/armno/blog/blob/3f55490bb0ac275fa02723f4c112e1e811a96a3a/themes/lazy/layouts/partials/style.html#L2)

ปัญหาก็คือ ในขั้นตอนการ generate critical CSS นั้น ผมต้องทำเองแบบ manual ทุกครั้ง
เพราะไม่ได้ทำระบบ automate ไว้

