---
title: "ทำ Mechanical Keyboard (2)"
date: 2019-05-01T22:38:57+07:00
url: /2019/05/01/mechanical-keyboard-build-2
cover-image: images/cover.jpg
thumbnail:
description:
keywords:
---

เมื่อเกือบ 2 ปีที่แล้ว ผมได้ลองทำ [mechanical keyboard ขนาด 60%](https://armno.in.th/2017/08/20/building-custom-mechanical-keyboard/) อันแรก
หลังจากนั้นก็ได้เรียนรู้อะไรมากขึ้นเรื่อยๆ เกี่ยวกับ mechanical keyboard
ลองผิดลองถูกไปเรื่อยก็สนุกดี

เปลี่ยน case จากพลาสติกเป็นอลูมิเนียม

{{< picture-lazy wrapper-class="semi-full" src="images/kbdfans-5-degree-case.jpg" alt="case อลูมิเนียมจากร้าน kbdfans" >}}

เปลี่ยน keycap หลายๆ profile ข้างล่างนี้ลองใช้ DSA keycaps ที่ปุ่มจะสูงเท่ากับทุกแถว พิมพ์ง่ายดีเหมือนกัน

{{< picture-lazy wrapper-class="semi-full" src="images/dsa-keycaps.jpg" alt="blank DSA keycaps" >}}

รื้อบอร์ดใหม่เพื่อเปลี่ยน plate หรือเปลี่ยน switch ก็มี

{{< picture-lazy wrapper-class="semi-full" src="images/gateron-clears.jpg" alt="ลองใช้ switch Gateron Clears" >}}

การทำ custom mechanical keyboard นั้น นอกจากมันสนุกดีแล้ว มันเป็นกิจกรรมที่เปลืองเงินพอสมควร เพราะมักจะมีของโผล่มาเราเสียเงิน "อยากลอง" เป็นประจำ

ความอยากลองนี่แหละทำให้ keyboard ที่ทำอันแรกมันพัง พังตอนที่ผมรื้อ switch
ออกจากบอร์ดแล้วทำให้แผงวงจรเสียหายจากความซุ่มซ่ามและไม่ระวัง

พอ keyboard พัง ก็เลยต้องทำอันใหม่

ถึงตอนนี้ผมทำ mechanical keyboard มา 5 อันแล้ว ถ้าเรียกชื่อตามชุดเกราะของ Iron Man ก็คงประมาณนี้

1. **Mark I** _(GH60 Satan + Gateron Brown)_ - อันแรกที่ทำ ทำแผงวงจรพังตอนรื้อบอร์ดเพื่อเปลี่ยน switch
2. **Mark II** _(GH60 Satan + Gateron Clear)_ ตอนนี้ยังอยู่ดี ให้เพื่อนที่ทำงานใช้อยู่
3. **Mark III** _(YD60BLE)_ เป็นแผงวงจรที่มี bluetooth ตั้งใจจะทำ wireless mechanical keyboard แต่ผมก็ทำแผงวงจรเสีย เละไม่เป็นท่า เลยล้มโครงการไป
4. **Mark IV** _(DZ60 + Kailh Box Red)_ ตัวที่ใช้อยู่ปัจจุบัน
5. **Mark V** _(DZ60 + Gateron Brown)_ ทำให้ภรรยาใช้

โพสต์นี้จะเป็นรายละเอียดของตัว Mark IV กับ Mark V ครับ
ส่วน Mark II นั้นเหมือน Mark I แทบทุกอย่างยกเว้น switch ก็อ่านได้จาก[ตอนที่แล้ว](https://armno.in.th/2017/08/20/building-custom-mechanical-keyboard/)ได้เลย

-----

## GH60 to DZ60

ยังคงยึดมั่นกับการทำ keyboard ขนาด 60% อยู่ หลังจากที่ได้ใช้ GH60 มาแล้วก็เลยลองหา PCB ขนาด 60% รุ่นอื่นดูบ้าง
เจอวิดิโอของช่อง Chokkan [Why You Shouldn't Buy a GH60 in 2018](https://www.youtube.com/watch?v=1oNtulI7deg)
ใน comments มีคนแนะนำ PCB **DZ60** อยู่พอสมควร

<div class="media-youtube">
{{< youtube 1oNtulI7deg >}}
</div>

สิ่งที่ DZ60 ต่างไปจาก GH60 คือ DZ60 มีไฟ LED ติดมาใต้แผง PCB, support layout เยอะกว่า, และก็ใช้ QMK Firmware แทนที่จะเป็น TMK Firmware แบบใน GH60

ซึ่งสำหรับผมแล้ว QMK Firmware นี่คือทีเด็ดเลย พัฒนามาจาก TMK แต่
[documents](https://docs.qmk.fm/#/) ดีกว่ามาก แล้วยังมีแอพ [QMK Configurator](https://config.qmk.fm) กับ [QMK Toolbox](https://github.com/qmk/qmk_toolbox/releases)
ให้ใช้งานได้ง่ายๆ อีกด้วย

ไฟ RGB ของ DZ60 มีหลายโหมด หลายสี แต่ก็ต้องใช้ case แบบใสด้วยถึงจะมองเห็นครับ

{{< picture-lazy wrapper-class="semi-full" src="images/dz60-rgb.jpg" alt="ไฟ RGB Underglow ของ DZ60" >}}

-----

## Mark IV (มาร์กโฟร์)

{{< picture-lazy wrapper-class="semi-full" src="images/mark-iv.jpg" alt="custom mechanical keyboard mark 4" >}}

เจ้า Mark IV นี่ทำไว้ใช้เองครับ สเป็คก็คือ

- PCB: DZ60
- Case: KBDFans 5° Aluminum Case
- Plate: ANSI Aluminum Plate สีส้ม
- Switches: Kailh Box Red, Gateron Browns, Gateron Yellos, Gateron Clears
- Keycaps: MAXKEYS Foundation (วัสดุ ABS, SA Profile)

Layout เป็น Poker Layout 60% มาตรฐานทั่วไป

{{< picture-lazy wrapper-class="semi-full" src="images/mark4-layout.jpg" alt="Layout ของ Mark 4" >}}

{{< picture-lazy wrapper-class="semi-full" src="images/mark4-3.jpg" alt="custom mechanical keyboard mark 4" >}}

### PCB: DZ60

{{< picture-lazy wrapper-class="semi-full" src="images/mark4-layers.jpg" alt="ส่วนประกอบของ Mark 4" >}}

DZ60 Rev 2.0 เวอร์ชั่นที่ผมเลือกเป็นพอร์ต USB Type-C คิดว่าจะเข้ากันได้ดีกับ Macbook Pro 2016 เครื่องที่ใช้ที่ออฟฟิศ (ที่มีพอร์ต USB Type-C แค่ 2 พอร์ต 🙄) จะได้ใช้สาย USB Type C ทั้งสองหัวได้เลย จะได้ไม่ต้องใช้ adapter

แต่พอได้มาลองใช้งานจริง ใช้สาย Type C แบบสองด้าน (C-to-C) นั้นไม่สามารถใช้งานได้กับ Macbook Pro 2016 ได้ถ้าไม่ใช้ adapter แบบในภาพข้างล่าง

{{< picture-lazy wrapper-class="semi-full" src="images/usb-adapter.jpg" alt="ต่อสาย USB จาก DZ60 Rev 2.0 ต้องใช้ adapter USB A-to-C" >}}

ปัญหานี้เกิดมาจาก DZ60 **เวอร์ชั่น 2.0** ไม่มี chip ที่จำเป็นสำหรับ USB Type C
ให้สามารถทำงานโดยที่ไม่ต้องใช้ adapter

ซึ่งปัญหานี้ถูกแก้แล้วใน DZ60 เวอร์ชั่นใหม่ Rev 3.0 ที่ถูกอัพเดทให้สามารถใช้งาน USB Type C to Type C ได้แล้ว อย่างไรก็ตาม มันเป็นการอัพเดทที่ hardware ทำให้ผมที่ใช้ DZ60 เวอร์ชั่น 2.0 อยู่นั้นก็ต้องทนใช้แบบมี adapter ต่อไป หรือไม่ก็ต้องซื้อ PCB เวอร์ชั่นใหม่ที่อัพเดทแล้ว

แอบเซ็งนิดๆ เหมือนกัน แต่ก็ได้บทเรียน เป็นอีกข้อที่ต้องคำนึงถึง เวลาทำ custom mechannical keyboard ว่าต้องเช็ค technical spec ให้ละเอียด โดยเฉพาะของที่ออกมาใหม่ๆครับ


### Switches: Kailh Box Red

ใช้ Kailh Box Red เป็นหลัก แต่เนื่องจากผมซื้อมาแค่ 30 ตัวกะว่าเอามาลองเล่นๆ ส่วนที่ขาดก็เลยต้องใช้ Gateron Switches ที่มีเหลืออยู่ที่บ้าน ก็เลยดูมั่วๆ ไปหน่อย 😅

{{< picture-lazy wrapper-class="semi-full" src="images/mark4-switches.jpg" alt="switch ที่ใช้ใน mark 4" >}}

ตอนแรกใส่ Gateron Yellows ในแถวบนด้วย แต่พอลองใช้ไปแล้วพบว่าต้องใช้แรงกดมากกว่าปกติ
เพราะนิ้วต้องเอื้อมไกล + keycaps แถวบนสุดจะสูงกว่าเพื่อน พิมพ์ไม่ติดอยู่บ่อยๆ ก็เลยเปลี่ยนเป็น Gateron Browns ที่เบากว่า Yellows แทน

### Keycaps: MAXKEYS Foundation

ส่วนที่ผมชอบที่สุดของเจ้า Mark IV ก็คือ keycaps ชุดนี้แหละครับ: MAXKEYS Foundation วัสดุ ABS Doubleshot, SA profile

profile หรือ รูปทรงของ keycaps ที่ต่างกัน ก็ให้ความรู้สึกในการพิมพ์ที่ต่างกันออกไป ก่อนหน้านี้ได้ผมลองใช้ keycaps ทั้ง Cherry profile, OEM profile, กับ DSA profile มาบ้างแล้ว

ส่วน SA profile นั้นชั่งใจอยู่นาน เพราะความสูงของ keycaps ที่มากกว่าทุกแบบที่เคยใช้มา กลัวว่านิ้วจะล้าตอนพิมพ์
กับราคาที่แพงเอาเรื่องเหมือนกัน ทั้งเซ็ตอยู่ที่ $99 เป็นเซ็ตใหญ่

แต่ราคา keycaps ก็แพงกว่า keyboard อันแรกที่ทำทั้งอันแล้ว

{{< picture-lazy wrapper-class="semi-full" src="images/keycaps-profile.jpg" alt="SA profile จะสูงกว่าเพื่อนหน่อยๆ" >}}

แต่สุดท้ายก็ยอมให้กับความสวยแบบคลาสสิคของ SA profile keycap ที่ดูแล้วเหมือน keyboard สมัยก่อน
ส่วน MAXKEYS นั้นก็มีหลายคนรีวิวว่าเป็นเจ้าที่ทำ keycaps ออกมาได้เนี้ยบดี ก็เลยขอลองดู

{{< picture-lazy wrapper-class="semi-full" src="images/foundation-keycaps.jpg" alt="MAXKEYS Foundation SA profile Keycaps" >}}

พอได้มาลองใช้งานจริง รู้สึกชอบมาก วัสดุคุณภาพดีกว่า blank keycaps ที่เคยใช้มา สัมผัสเนียนมือ อักษรคมกริบ ส่วนความสูงนั้นไม่เป็นปัญหาเลย รู้สึกพิมพ์สนุกครับ

- mark 5
