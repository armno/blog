---
title: "Resize รูปด้วย Hugo Image Processing"
date: 2019-07-25T22:10:57+07:00
url: /2019/07/25/hugo-image-resize
description:
tags:
- blog
- hugo
- performance
- content
---

Hugo มาพร้อมกับฟีเจอร์ Image Processing ที่ช่วยย่อรูป/crop รูปเป็นขนาดต่างๆ ได้
จากรูปต้นฉบับที่เราเตรียมไว้รูปเดียว
ผมได้ลองใช้แล้วพบว่าสะดวกดี จึงอยากจะบันทึกไว้ครับ

## Page Bundle

แต่ละหน้าใน Hugo จะถูกเก็บไว้ในโฟลเดอร์ `content/`

ตัวอย่าง content แบบ `post` จากโฟลเดอร์ `content/post/fira-code/`

```
content/      # เก็บ content ทั้งหมด
├── post/       # content ประเภท post
│   ├── fira-code/  # 1 bundle
│   │   ├── images/
│   │   │   ├── all_ligatures.png
│   │   │   ├── cover.png
│   │   │   ├── fira-code-in-vim.png
│   │   │   ├── fira-code.png
│   │   │   ├── iterm-preferences.png
│   │   │   └── roboto-mono.png
│   │   └── index.md
```

โฟลเดอร์ `content/post/fira-code/` ถือเป็น 1 page bundle
หรือ 1 ก้อน

นอกจากมีไฟล์สำคัญคือ `index.md` ที่เป็นเนื้อหาของโพสต์แล้ว
ยังมีโฟลเดอร์ `images/` ที่เอาไว้เก็บรูปประกอบต่างๆ
หรืออาจจะมีไฟล์ประเภทอื่น หรือโฟลเดอร์อื่นรวมอยู่ด้วยก็ได้

ไฟล์ต่างๆ ที่อยู่ใน page bundle 1 ก้อน เรียกว่า page resources
รูปในโฟลเดอร์ `images/` ก็ถือเป็น page resource ชนิดหนึ่งเหมือนกัน

