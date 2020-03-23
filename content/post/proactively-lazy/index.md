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

อยากจัดระเบียบให้มันหน่อย

{{< image src="images/original-structure.png" alt="original structure" width="780" >}}

## ภารกิจ

ภารกิจของผมคือ ย้ายไฟล์ชื่อ (ตัวอย่าง) `2011-03-29-hello-world.markdown` ไป `hello-world/index.md`
ซึ่งมีไฟล์ต้องย้ายอยู่ 140 กว่าไฟล์

ผมมีความคิดจะเขียน shell script ขึ้นมาเพื่อ automate process นี้
ถึงแม้ว่าเขียน shell script ไม่เป็น แต่มีความขี้เกียจเป็นทุน
ก็เลยใช้โอกาสนี้ในการทบทวน

### วางแผน

1. ใช้ shell script
2. loop ไฟล์ `.markdown` ทั้งหมดในโฟลเดอร์ `content/post/`
3. ตัดส่วนวันที่ออกจากชื่อไฟล์ `20xx-xx-xx-` (เอาออกได้เพราะข้อมูลวันที่อยู่ใน front-matter ของแต่ละไฟล์อยู่แล้ว)
4. ตัดส่วน extension `.markdown` ออกจากชื่อไฟล์
5. ก็จะเหลือ post slug ตรงกลาง สร้างโฟลเดอร์ใหม่จากชื่อนี้
6. ย้ายไฟล์ `.markdown` ไปเป็น `index.md` ในโฟลเดอร์ที่สร้างใหม่

{{< image src="images/pattern.png" alt="pattern" width="532" >}}

### 1. สร้างไฟล์ script

ผมเริ่มจากการสร้างไฟล์ shell script ไว้ข้างในโฟลเดอร์เดียวกับไฟล์ที่จะทำงาน
พร้อมกับทำให้มันรันได้ ด้วยการเปลี่ยน permission เป็น `+x` (e**x**ecutable)

```sh
$ cd content/post/
$ touch rename.sh
$ chmod +x rename.sh
```

คุ้นๆ ว่าในบรรทัดแรกของ shell script มันต้องมีอะไรพิเศษสักอย่าง
เลยเสิชกูเกิลด้วย keyword `bash first line`

ก็พบว่า บรรทัดนั้นคือ [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) หรือ sha-bang หรือ hashbang
มีไว้เลือก shell ว่าจะรัน script ใน shell ไหน
ผมเลือก `bash` ไว้ก่อนเพราะคิดว่าเซฟสุด

```sh
#!/bin/bash
```

### 2. loop ไฟล์ `.markdown`

จากนั้นก็เสิชหาวิธีการ loop ไฟล์ในโฟลเดอร์นั้นทำยังไงด้วย keyword: `bash list files in directory`
เจอคำตอบจาก [StackOverflow](https://stackoverflow.com/a/43661580)

```sh {hl_lines=[3,"5-6",9]}
#!/bin/bash

markdownfiles=`ls *.markdown`

for file in $markdownfiles
do
  # something ...
  echo $file
done
```

- list file markdown ด้วย `ls`
- ใช้ <code>`</code> (backtick) เพื่อเก็บ output จาก command ไว้ใน variable
- จากนั้น loop ด้วย `for ... in`
- เปิด block ด้วย `do` จบด้วย `done`
- เวลาประกาศ variable
  - ไม่ต้องใช้ `$` แต่เวลาเรียกใช้ ต้องมี `$` ข้างหน้า
  - เว้นวรรคตรงเครื่องหมาย `=` ไม่ได้ ต้องเขียนติดกัน (เว้นวรรคถือว่าเป็น argument ของ command)

### 3. ตัดวันที่ชื่อออกจากชื่อไฟล์

วันที่ในชื่อไฟล์อยู่ใน pattern เดียวกันหมด คือ นำหน้าด้วย `YYYY-MM-DD-`
เป็นตัอสักษร 11 ตัวแรกของชื่อไฟล์ ก็ใช้วิธีบ้่านๆ เลย คือการตัด string

ผมเสิชหาด้วย keyword `bash cut string` เจอกระทู้ใน [StackOverflow](https://stackoverflow.com/a/19482947) อีกแล้ว

```sh {hl_lines=[7]}
#!/bin/bash

markdownfiles=`ls *.markdown`

for file in $markdownfiles
do
  filename=${file:11}
done
```

- `${file:11}` ตัดตัวอักษร 11 ตัวแรก แล้ว return ส่วนที่เหลือ
- แต่ถ้าเป็น `${file::11}` (มี `:` สองอัน) คือตัดเอาเฉพาะ 11 ตัวแรก

### 4. ตัด `.markdown` ออกจากชื่อไฟล์

### 5. เก็บส่วนที่เหลือไว้ สร้างโฟลเดอร์ใหม่

### 6. ย้ายไฟล์เดิมไปที่ใหม่
