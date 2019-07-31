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

Git เป็นโปรแกรมที่ผมต้องใช้ทำงานทุกวัน โปรเจ็คของที่บริษัทอยู่บน GitLab ส่วนโปรเจ็คหมาแมวของตัวเองอยู่บน GitHub

ที่บริษัทใช้ flow ที่อยู่ตรงกลางระหว่าง Gitflow กับ GitHub flow
ไม่ได้มีระบบ branch อะไรซับซ้อนมาก (แล้วแต่แต่ละโปรเจ็คอีกที)
pattern การใช้ Git ของผมมันก็จะเหมือนๆ เดิม วนไปวนมาอยู่แถวๆ นี้ครับ


### Status

```sh
$ git status
```

ใช้บ่อยที่สุด เพื่อเช็คว่า status ของ repo เป็นแบบที่คิดไว้หรือไม่ ผมมักจะรัน `git status` ก่อน command อื่นเสมอ

สิ่งที่ผมดูจาก `git status` ไม่ได้เป็นข้อความ แต่เป็น "ภาพ" ครับ
สมมุติว่า output ออกมาเป็นแบบนี้

[รูป git status screenshot]

สิ่งที่ผมเห็นคือแบบนี้ ก้อนสีเหลือง ก้อนสีเขียว และก้อนสีแดง

[รูป git status แบบก้อนๆ]

- ถ้าผมแค่ edit ไฟล์อย่างเดียว ก็คาดว่าจะต้องมีแต่ก้อนสีเหลือง
- ถ้าสร้างไฟล์ใหม่ด้วย ก็อาจจะมีทั้งก้อนสีเหลืองและก้อนสีแดง
- แต่ถ้า commit ไปแล้ว รัน `git status` แล้วยังเจอก้อนๆ อยู่ แสดงว่าต้องทำอะไรผิดแล้วล่ะ

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

เอาไว้ push feature branch ที่สร้างใหม่ในเครื่อง
พร้อมกับไปสร้าง branch ใหม่ในชื่อเดียวกันบน remote repo

### Pull

```sh
$ git pull                         # (1)

$ git fetch origin                 # (2)
$ git merge origin/<branch_name>   # (3)
```

ถึงแม้ว่า `pull` จะเป็น shorthand command ของ `fetch+merge`
แต่ผมกลับชอบ `fetch+merge` มากกว่า เพราะ fetch มันจะยังไม่ทำอะไรกับไฟล์ในเครื่องเราจะกว่าเราจะ merge เอง
รู้สึกปลอดภัยดี

### Log

```sh
$ git log -p
```

ต่างจาก `git log` ธรรมดาตรงที่จะแสดงผลทั้ง commit message
และส่วนของไฟล์ที่ถูกแก้ไขใน commit นั้น

### Checkout

```sh
$ git checkout .
$ git checkout -
$ git checkout <commit_hash>
$ git checkout -b feature/xxx origin/feature/xxx
```

### Clean

```sh
$ git clean -df
```

### Stash

```sh
$ git stash
$ git stash pop
```

### Remote

```sh
$ git remote -v
```

### Branch

```sh
$ git branch -D feature/xxx
```

### Help

```sh
$ git help
```
