---
title: "Git Commands ที่ใช้บ่อยๆ"
date: 2019-07-29T21:10:42+07:00
url: /2019/07/29/frequently-used-git-commands
description: รวม Git Commands ที่ผมใช้เป็นประจำ
tags:
- git
- terminal
- web development
- version control
- software
- terminal
---

Git เป็นโปรแกรมที่ผมต้องใช้งานทุกวัน (หมายถึงทุกวันที่ทำงาน 😅)
โปรเจ็คของที่ทำงานอยู่บน GitLab ส่วนโปรเจ็คหมาแมวของตัวเองอยู่บน GitHub
เลยจำเป็นต้องใช้ Git ตลอด

ที่บริษัทใช้ flow ที่อยู่ตรงกลางระหว่าง Gitflow กับ GitHub flow
ไม่ได้มีระบบ branch อะไรซับซ้อนมาก
pattern การใช้ Git ของผมมันก็จะเหมือนๆ เดิม วนไปวนมาอยู่แถวๆ นี้ครับ


### Status

```sh
$ git status
```

ใช้บ่อยที่สุด เพื่อเช็คว่า status ของ repo เป็นแบบที่คิดไว้หรือไม่ ผมมักจะรัน `git status` ก่อน command อื่น เพราะมันเป็น command ที่ไม่ทำอันตรายใดๆ
ถ้า output มันไม่ได้ออกมาแบบที่คิดไว้ ก็ยังดึงสติได้ทัน

ส่วนมากที่ต้องเช็คดีๆ ก็ตรงส่วน `modified` ว่าใช่ไฟล์ที่เราต้องการ commit เข้า repo หรือไม่

หรือถ้ายังมึนๆ ไม่รู้จะทำอะไร ก็พิมพ์ `$ git status` ไว้ก่อน เดี๋ยวก็นึกออกเองว่าต้องทำอะไรต่อ

[รูป git status screenshot]

### Diff

```sh
$ git diff
$ git diff --staged
```

มักจะมาแพ็คคู่กับ `git status` เพื่อรีวิวไฟล์ที่แก้ไปแล้ว (สถานะ `modified`) ผ่าน diff view อีกที

ใส่ `--staged` ไปเพื่อ diff ไฟล์ที่ add แล้ว (สถานะ `staged`) แต่ยังไม่ได้ commit

และจะดู diff view ก่อน commit ทุกครั้งป้องกันความผิดพลาด

[รูป diff view screenshot]

### Add

```sh
$ git add .
$ git add :/
```

- `$ git add .` add ทุกไฟล์ในโฟลเดอร์ เข้าสู่ staged status
- `$ git add :/` ใช้ตอนอยู่ใน sub-folder แล้วต้องการ add ทุกไฟล์รวมถึงที่อยู่ข้างนอกโฟลเดอร์ที่เราอยู่ แต่ยังอยู่ใน repo เดียวกัน เข้าสู่ staged status

[รูปเปรียบเทียบ output ของทั้งสอง command]

### Commit

```sh
$ git commit
$ git commit -am "message"
$ git commit --amend
```

สองอันแรกก็คือ commit command ธรรมดา แต่บางครั้งใช้ `commit -am` ไปแล้ว แต่มาเจอทีหลังว่าดันลืม add ไฟล์ที่สร้างใหม่เข้าไปด้วย

(เพราะลืมบ่อยแบบนี้ ผมจะพยายามหลีกเลี่ยงไม่ใช้ `git commit -am` แต่จะแยก `git add` กับ `git commit` กันไปเลย
ช้ากว่า แต่ป้องกันการลืม add ไฟล์ก่อน commit ได้ดี)

แทนที่จะต้องสร้าง commit **เพิ่มอีกอัน**เพื่อบอกว่าลืม add ไฟล์ ผมจะรัน `git add` ไปเลย แล้วใช้ `git commit --amend` เพื่อสร้าง commit ใหม่**แทนที่ของเดิม**

เพราะฉะนั้นจะใช้ก็ต่อเมื่อยังไม่ได้ push branch ไปที่ remote repo เท่านั้น


### Reset

```sh
$ git reset
```

ใช้เอาไฟล์ที่ add ไปแล้วออกมาจาก `staged` ให้กลับมาเป็น `modified`

ส่วนมากใช้เพื่อที่จะ checkout ทิ้งไฟล์ที่ add ไปแล้ว (revert) เพราะถ้า add ไปแล้วก่อนมันจะ checkout ไม่ออกครับ

### Push

```sh
$ git push origin HEAD
```
