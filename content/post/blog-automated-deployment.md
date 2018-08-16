---
title: "Update Blog อัตโนมัติด้วย Docker และ CircleCI"
date: 2018-08-16T13:38:04+07:00
draft: false
url: /2018/08/16/blog-automated-deployment
description: "ใช้ Docker กับ CircleCI เพื่อ deploy blog แบบอัตโนมัติทุกครั้งที่ push ไปที่ master branch"
tags:
  - Blog
  - Hugo
  - CI
---

บล็อก [armno.in.th](https://armno.in.th) ถูกสร้างขึ้นมาด้วย [​Hugo](https://gohugo.io/)
ซึ่งเป็น static site generator ที่มีหลักการทำงานคร่าวๆ คือ

1. เขียน content ในไฟล์ markdown
2. รัน `$ hugo` command เพื่อให้ Hugo build (generate) ไฟล์ markdown เป็นไฟล์ HTML
3. เอาไฟล์ HTML ที่ได้ ไปวางไว้บน web server

ในกรณีของบล็อกนี้ก็จะมีขั้นตอนเพิ่มเข้ามาอีกนิดหน่อย คือ

1. เขียน content ในไฟล์ markdown
2. **Push code ไปที่ GitHub Repo**
3. **SSH ไปที่ server ของ DigitalOcean ที่ใช้เป็น web server ของบล็อกนี้อยู่**
4. **Pull code จาก GitHub**
5. รัน `$ hugo` command เพื่อให้ Hugo build (generate) ไฟล์ markdown เป็นไฟล์ HTML

เมื่อก่อนตอนที่ยังใช้ Jekyll เป็น generator ผมเขียน deploy script ไว้ทำงานกับ GitHub Webhook
โดยทุกครั้งที่ push code ไปที่ GitHub จะมี webhook ไปบอกที่ server DigitalOcean
ให้ทำการ pull และ build โดยอัตโนมัติ

แต่หลังจาก[เปลี่ยนจาก Jekyll มาใช้ Hugo](https://armno.in.th/2018/03/24/jekyll-to-hugo/) script มันก็หยุดทำงานเพราะผมไม่ได้อัพเดท deploy script
ของเดิมให้มันทำงานกับ Hugo กับ repo ใหม่ ก็ต้องทำตามขั้นตอน 1-5 ข้างบนทุกครั้งที่อัพเดทบล็อก

ถึงแม้จะอัพเดทบล็อกไม่บ่อย แต่ก็ไม่ได้อยากทำเหมือนเดิมซ้ำๆ ทุกครั้ง ก็เลยจดโน้ตไว้ว่าวันหนึ่งจะทำ

<p class="text-center">
  <img src="/img/posts/blog-push-to-deploy/github-issue.png" alt="issue ที่สร้างไว้กันลืมบน GitHub repo">
</p>

ผ่านไปปีกว่า ถึงเพิ่งได้ลงมือทำจริงๆ

สิ่งที่อยากได้คือ ลดขั้นตอนจาก 1-5 ให้เหลือ 1-2 คือ push code ไปที่ GitHub repo แล้วที่เหลือให้มันทำงานของมันเอง

### สำรวจทางเลือก

ที่ผมคิดออกมีสองแบบ คือ

- GitHub webhook + node webhook บน server ที่ DigitalOcean
- ใช้ continuous integration / continuous delivery service ซึ่งมีให้เลือกเยอะแยะ

ปกติที่ทำงานใช้ GitLab CI เป็นประจำอยู่แล้ว เลยคิดว่าทางเลือกที่ 2 น่าจะคุ้นเคยกว่า
และเราก็สามารถ[ใช้ GitLab CI กับ GitHub repo ได้](https://gitlab.com/help/user/project/integrations/github) (โดยที่ไม่ต้องย้าย repo ไป gitlab.com)
แต่ว่าที่ไม่ได้เลือกใช้่งาน GitLab CI เพราะอยากเรียนรู้ tool ตัวอื่นด้วยครับ

ลองเล่น 2 ตัวคือ SemaphoreCI กับ CircleCI สุดท้ายเลือก CircleCI เพราะใช้งานง่ายว่า
UI ของ CircleCI ดูไม่งงเหมือนของ SemaphoreCI

Steps

1. Docker
2. Create a CircleCI account
3. Create new project from a GitHub repo
4. Create config.yml for CircleCI
5. Push and build and push again (to dockerhub)
6. Install docker on DO
7. Deploy and be happy about life
