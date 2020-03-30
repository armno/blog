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

บล็อกนี้ทำด้วย Hugo เก็บ content ที่เป็นโพสต์ต่างๆ ไว้ในโฟลเดอร์ `content/post/<POST_NAME>/`

แต่ยังมีโพสต์เก่าๆ ที่ยังไม่ได้อยู่ในโฟลเดอร์ของตัวเอง หลงเหลืออยู่
เป็นโพสต์ที่[ย้ายมาจากบล็อก Jekyll](https://armno.in.th/2018/03/24/jekyll-to-hugo/) เมื่อก่อนนู้น

ชื่อไฟล์จะอยู่ในรูปแบบ `YYYY-MM-DD-post-slug.markdown`

อยากจัดระเบียบให้มันเหมือนๆ กัน

{{< image src="images/original-structure.png" alt="original structure" width="780" >}}

## ภารกิจ

ภารกิจคือ ย้ายไฟล์

- จาก `content/post/2011-03-29-hello-world.markdown`
- ไป `content/post/hello-world/index.md`

ซึ่งมีไฟล์ต้องย้ายอยู่ 140 กว่าไฟล์ ถ้าต้องมาสร้างโฟลเดอร์ใหม่ และย้ายไฟล์เองด้วยมือทุกไฟล์
คงเป็นงานที่น่าเบื่อน่าดู

ผมมีความคิดจะเขียน shell script ขึ้นมาเพื่อ automate process นี้
ถึงแม้ว่าผมจะเขียน shell script ไม่เป็น แต่เพราะไม่อยากทำงานซ้ำๆ
ก็เลยใช้โอกาสนี้ในการเรียนรู้ใหม่อีกครั้ง

_(ผมเคยเรียนเขียน shell script ในวิชา basic linux ตอนเรียนมหาลัยปี 2
แต่ก็ลืมไปหมดแล้ว)_ 😅

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
ก็คือใช้ command `ls` นั่นเอง

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
- เวลาสร้าง variable ไม่ต้องใช้ `$` แต่เวลาเรียกใช้ ต้องมี `$` ข้างหน้า
- เว้นวรรคตรงเครื่องหมาย `=` ไม่ได้ ต้องเขียนติดกัน (เว้นวรรคถือว่าเป็น argument ของ command)

### 3. ตัดวันที่ชื่อออกจากชื่อไฟล์

วันที่ในชื่อไฟล์อยู่ใน pattern เดียวกันหมด คือ นำหน้าด้วย `YYYY-MM-DD-`
เป็นตัวอักษร 11 ตัวแรกของชื่อไฟล์ ก็ใช้วิธีบ้านๆ เลย คือ การตัด string

ผมเสิชหาด้วย keyword `bash cut string` เจอกระทู้ใน [StackOverflow](https://stackoverflow.com/a/19482947) อีกแล้ว

```sh {hl_lines=[7]}
#!/bin/bash

markdownfiles=`ls *.markdown`

for file in $markdownfiles
do
  filename=${file:11}
done
```

- `${file:11}` ตัดตัวอักษร 11 ตัวแรก แล้ว return **ส่วนที่เหลือ**
- แต่ถ้าเป็น `${file::11}` (มี `:` สองอัน) คือตัดเอาเฉพาะ 11 ตัวแรก

### 4. ตัด `.markdown` ออกจากชื่อไฟล์

ใช้วิธีตัด string เหมือนเดิม แต่เนื่องจากส่วน `.markdown` อยู่ท้าย string
จะใช้วิธีนับ index แบบเดิมไม่ได้แล้ว เพราะชื่อไฟล์แต่ละไฟล์ยาวไม่เท่ากัน
ก็เลยให้มันตัด string หลังจากตัวจุด `.` ออกไปแทน

```sh {hl_lines=[8]}
#!/bin/bash

markdownfiles=`ls *.markdown`

for file in $markdownfiles
do
  filename=${file:11}
  foldername=${filename%.*}
done
```

- `%.` ตัดตัวอักษรตั้งแต่ `.` เป็นต้นไป แล้ว return **ส่วนที่เหลือ**


### 5. เก็บส่วนที่เหลือไว้ สร้างโฟลเดอร์ใหม่

จาก variable ที่ได้จากขั้นตอนที่แล้ว เอาไปสร้างโฟลเดอร์ใหม่ด้วย `mv`.

```sh {hl_lines=[9]}
#!/bin/bash

markdownfiles=`ls *.markdown`

for file in $markdownfiles
do
  filename=${file:11}
  foldername=${filename%.*}
  mkdir $foldername
done
```

### 6. ย้ายไฟล์เดิมไปที่ใหม่

ใช้ `mv`

```sh {hl_lines=[10]}
#!/bin/bash

markdownfiles=`ls *.markdown`

for file in $markdownfiles
do
  filename=${file:11}
  foldername=${filename%.*}
  mkdir $foldername
  mv $file $foldername/index.md
done
```

สุดท้ายก็ run script

```sh
$ ./rename.sh
```

ใช้เวลาแค่ไม่กี่วินาที งานกรรมกรก็เสร็จแล้ว

----

ผมเชื่อว่าคนที่เก่ง unix command line หรือเก่ง shell script
สามารถทำให้ code 10 บรรทัดของผม อยู่ใน 1 บรรทัด (one-liner) ได้อย่างไม่ยากนัก
