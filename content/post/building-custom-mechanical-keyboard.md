---
title: "ทำ Mechanical Keyboard ใช้เอง"
url: /2017/08/20/building-custom-mechanical-keyboard
date: 2017-08-20T15:24:09+07:00
description: "ลองทำ mechanical keyboard ขนาด 60% เองด้วยบอร์ด GH60 Satan กับ Gateron Brown Switch โดยหาซื้อชิ้นส่วนจาก AliExpress แล้วนำมาประกอบเองครับ"
tags:
  - Mechanical Keyboard
  - Build
  - Hardware
thumbnail: https://armno.in.th/img/posts/gh60/19-final-keyboard.jpg
cover-image: /img/posts/gh60/cover.jpg
layout: wide
---

_Read the English version of this post on Medium: [Building My Own Mechanical Keyboard](https://medium.com/@armno/building-my-own-mechanical-keyboard-6903b887b93d)._

สวัสดีชาวเนิร์ด

ผมทำงานเป็น web developer มาก็หลายปี แต่เพิ่งจะเริ่มใช้ mechanical keyboard เมื่อไม่กี่เดือนก่อน
ในบ้านเรา mechanical keyboard จะเป็นที่นิยมในหมู่ Gamer ซะมากกว่า ตอนผมไปหาซื้อก็จะเจอแต่พวก
gaming series สุดท้ายด้วยความที่ไม่มีตัวเลือกมากนัก เลยได้ [SteelSeries Apex M500](https://steelseries.com/gaming-keyboards/apex-m500) มา
ด้วยเหตุผลคือ key เป็นภาษาอังกฤษล้วน ราคาไม่ได้แพงมาก และเสียงก็ไม่ได้ดังมากด้วย

![SteelSeries Apex M500 ตอนถอดมาเช็ดทำความสะอาด](/img/posts/gh60/01-steelseries-m500.jpg)

ใช้งาน M500 มาได้ประมาณ 4 เดือน พอเริ่มได้รู้จัก mechanical keyboard มากขึ้น ก็เริ่มมองหา mechanical keyboard ตัวใหม่
โดยตั้งโจทย์ไว้คร่าวๆ ว่า

* ไม่ใช่ keyboard พวก gaming series แต่เหมาะกับงานพิมพ์มากกว่า เพราะผมไม่ได้เล่นเกม
* ขนาดเล็กกว่าเดิม กินที่บนโต๊ะน้อยกว่าเดิม
* ไม่มีไฟ LED
* ใช้ brown switch (เป็น switch แบบ tactile ที่ไม่มีเสียง clicky) ข้อนี้เพราะอยากลองล้วนๆ เลย (M500 ใช้ Cherry MX Red)

หลังจากหาอยู่สักพัก เจอ mechanical keyboard ระดับเทพอยู่หลายตัว ส่วนมากจะหาซื้อไม่ค่อยได้ในเมืองไทย หรือ หาได้แต่ก็ราคาแพงเกินไป
เจอเจ้านึงที่ถูกใจมากคือ [WASD Keyboards](http://www.wasdkeyboards.com/) ที่ขาย mechanical keyboard ที่เราสั่ง custom เองได้แทบทุกอย่าง
ตัว keyboard ราคา $150 ยังพอกัดฟันซื้อได้ แต่เจอค่าส่งเข้าไปอีก $50 เป็น $200 ตีเป็นเงินไทยประมาณ **6,600 บาท** ยังไม่รวมภาษีนำเข้าที่ไม่รู้ต้องจ่ายอีกเท่าไหร่
ซึ่งผมว่ามันแพงเกินที่จะจ่ายไหว ก็เลยกินแห้วครับ 😅

<figure>
  <img src="https://farm9.staticflickr.com/8592/28775343622_88ac4f4c22_c.jpg" alt="mechanical keyboard สวยๆ ของ WASD Keyboards">
  <figcaption>ภาพจาก:
    <a href="https://www.flickr.com/photos/wasdkeyboards/28775343622">
    https://www.flickr.com/photos/wasdkeyboards/28775343622
    </a>
  </figcaption>
</figure>

เลยนึกเล่นๆ ว่า ถ้าการหา mechanical keyboard สักตัวมันยากเย็นนัก ทำไมเราไม่สร้างมันขึ้นมาเองล่ะ

---

ก่อนหน้านี้ก็เคยลองหาข้อมูลการทำ mechanical keyboard ในอินเตอร์เน็ตอยู่บ้างครับ แต่พอเจอว่าต้องต่อแผงวงจร ต่อตัวต้านทานกับไดโอด บัดกรีสายไฟเอง
แค่รูปก็ยังรู้สึกว่ายากแล้ว อีกทั้งผมไม่มีฝีมือในด้านอิเล็กทรอนิกส์เลยสักนิด (เคยเรียนมาแต่ก็ลืมไปหมดแล้ว)
เลยคิดว่าการทำ keyboard เองน่าจะยากเกินตัวไปเยอะ (และอาจจะเกินงบด้วย)

ในระหว่างนี้ก็สั่งซื้อ keycap จาก ebay มาเล่นๆ กะว่าจะเอามาเปลี่ยนให้ SteelSeries M500 อย่างน้อยก็ขอให้ได้ custom นิดนึงก็ยังดี

แต่แล้วไม่รู้อะไรดลใจให้ไปเจอ video หนึ่งบน YouTube ในช่อง TaeKeyboards: [Beginner's Guide : How to Build a 60% Mechanical Keyboard](https://www.youtube.com/watch?v=W0FSvTYlggw)
video นี้ได้จุดประกายความหวังให้ผมอีกครั้ง ✨ เพราะก็เพิ่งได้รู้ว่ามันมี circuit board แบบที่ไม่ต้องบัดกรีตัวต้านทานกับไดโอดเองด้วย
สิ่งที่ต้องบัดกรีเองก็มีแค่ขา switch ของทุกๆ key บน keyboard เท่านั้น

หลังจากดู video นี้พร้อมกับ video อื่นๆ หลายรอบ
พร้อมกับคำนวนงบฯ ดูแล้ว ไม่น่าจะเกิน 4 พันบาท ก็เลยอยากจะลองทำเองดู จะได้รู้กันไปเลยว่าจะทำได้ไหม

ตัวที่จะทำก็คือ mechanical keyboard ขนาด 60% ซึ่งไม่มี funtion keys, ไม่มี numpad, ไม่มีแม้กระทั่งปุ่มลูกศร arrow keys แต่ก็ไม่เป็นไร ลองเสี่ยงดู เพราะ keyboard เล็ก น่าจะทำง่ายกว่า (คิดว่านะ)

## หาซื้อของ

ของที่จำเป็นสำหรับการสร้าง mechanical keyboard ผมสั่งมาจาก AliExpress มีหลายร้านเลยที่ขาย ผมซื้อมาจากร้าน [Shenzhen YMD Tech Co.,LTD Store](https://www.aliexpress.com/store/429151?spm=2114.12010608.0.0.2995e5c0nq8shb) ครับ เห็นมีของครบๆ ดี (ไม่ได้ค่าโฆษณานะ)
ของที่สั่งไปก็มี

* PCB (Printed Circuit Board) รุ่น GH60 Satan ได้ยินมาว่าเป็นรุ่นยอดนิยม
* case พลาสติกสีดำ
* plate อลูมีเนียม สีดำ พร้อมกับชุด Costar stabilizers
* switch เลือกใช้ของ Gateron สีน้ำตาล (Brown Switch) เพราะถูกกว่าของ Cherry MX ครึ่งต่อครึ่งเลย
* สาย micro USB สีดำ

เลือกชุดนี้เพราะเน้นประหยัดครับ ทั้งหมดนี้ก็ประมาณ **3,200 บาท**

ส่วนเครื่องไม้เครื่องมือ มีหัวแร้งบัดกรีอยู่ที่บ้านแล้ว ไม่ต้องซื้อ ซื้อมาเพิ่มแค่ลวดบัดกรี กับจารบี จากร้านอมร ไม่กี่สิบบาท

![PCB GH60 Satan และของอื่นๆ ที่ซื้อมาจาก AliExpress](/img/posts/gh60/02-parts.jpg)

พอรวบรวมอุปกรณ์ที่ต้องใช้ เครื่องไม้เครื่องมือครบแล้ว ตั้งสติ และเริ่มทำเลย

## เช็ค PCB

ก่อนอื่นต้องเช็คบอร์ด GH60 ก่อนครับว่าใช้ได้ทุก key ไหม วิธีการเช็คก็คือนำอะไรก็ได้ที่นำไฟฟ้า แตะระหว่างรู 2 รูที่เราต้องบัดกรีขา switch เข้าไป แตะดูทีละคู่ๆ เช็คดูกับเว็บ [keyboardtester.com](http://www.keyboardtester.com/) ทุกๆ key บนบอร์ดครับ

![เช็คบอร์ด PCB GH60 ว่าใช้งานได้ปกติ](/img/posts/gh60/03-check-pcb.jpg)

## ติด stabilizers

ตาม video ที่ดูไป ขั้นตอนต่อมาคือการติด key stabilizer บนแผง PCB ซึ่ง stabilizer มันคืออุปกรณ์เสริมชิ้นเล็กๆ ที่ช่วยพยุงเวลากด key ยาวๆ
แล้วไม่ให้อีกขึ้นนึงมันโดดขึ้น ใช้กับ key ยาวๆ อย่าง shift, enter, backspace กับ spacebar

แต่ stabilizer ที่ดูใน video กับของที่ผมมี มันหน้าตาไม่เหมือนกันเลย ดูยังไงๆ แล้วก็ไม่น่าจะใช่อันเดียวกัน
นั่งงงอยู่นาน ก็เจอ [video อีกอัน](https://www.youtube.com/watch?v=AG_jSEDQ3h4)ที่อธิบาย stabilizer สองแบบ คือ **Cherry Style** กับ **Costar Style**
ใน video ที่ดู ส่วนมากคนจะใช้ Cherry Style กัน ส่วนผมดันไปซื้อแบบ Costar Style มา

เพราะตอนสั่งซื้อดันไปเข้าใจว่า
Costar เป็นศัพท์เฉพาะที่เขาใช้เรียก stabilizers ถึงตอนนี้่ก็เลยถึงบางอ้อ .. อ้อมากก อึ้งไปเลย
แต่ก็ถอยไม่ได้แล้ว ดูแล้ว Costar style stabilizer ก็ทำหน้าที่ได้เหมือนกัน ก็เลยลุยต่อ

![Costar stabilizers ที่ตอนแรกได้แต่นั่งจ้อง](/img/posts/gh60/04-costar-stabilizers.jpg)

โชคดีที่มี video บน YouTube (อีกแล้ว) [สอนวิธีติด Costar style stabilizers](https://www.youtube.com/watch?v=WhRfIuKwqJo) พบว่าต้องติดบน plate ก็เลยเอาไว้ทำทีหลังได้

## ติด switch

ถึงตอนที่ตื่นเต้นที่สุดแล้ว เพราะเป็นขั้นตอนที่ต้องลงมือบัดกรี

การติด switch ก็คือต้องนำ switch มาเสียบลงบน plate ที่วางอยู่บนบอร์ด PCB
ขาของ switch จะลงไปเสียบกับช่องที่ถูกเจาะไว้แล้วบน PCB มันจะเข้าล็อกพอดี

ผมก็เริ่มจากการใส่ switch ลงไป แล้วบัดกรีตามมุมก่อนเพื่อให้ได้ตำแหน่ง
ในการบัดกรีครั้งแรกๆ จะยังตื่นเต้นอยู่ แต่หลังๆ ก็ทำได้ไวขึ้นครับ (ก่อนทำจริงผมมีซ้อมบัดกรีจากของเหลือใช้ก่อนด้วย)

![เริ่มใส่ switch ตามมุมต่างๆ ก่อน](/img/posts/gh60/05-install-switches.jpg)

ในระหว่างที่ติด switch ก็พักทดสอบเป็นระยะๆ (ด้วยเว็บ keyboardtester.com เหมือนเดิม) ถ้า key ไหนไม่ทำงานก็จะได้แก้ทัน
ทั้งบอร์ดมีที่ต้องแก้อยู่ตัวเดียว คือบัดกรีไปแล้ว แต่กดแล้วไฟไม่ขึ้น ก็แก้ด้วยการถอดมาและบัดกรีใหม่

![ทดสอบ switch ไปพร้อมๆ กัน](/img/posts/gh60/06-test-switches-during-install.jpg)

สุดท้ายก็ได้พบว่า การบัดกรีจริงๆ แล้วไม่ได้น่ากลัวเลย พอทำไปเรื่อยๆ แล้วรู้สึกสนุกซะด้วยซ้ำ

![ติด switch ครบทุกตัว](/img/posts/gh60/07-all-switches-installed.jpg)

## ติด stabilizers อีกครั้ง

พอติด switch ครบแล้ว ก็ถึงเวลาลงมือติดเจ้า Costar stabilizer ลงบน plate ซึ่งเขาเจาะช่องไว้ให้เรียบร้อยแล้ว
ทาจารบีเล็กน้อยเพื่อหล่อลื่นและทำให้เสียงเบาลง

![ติด costar style stabilizers](/img/posts/gh60/08-installing-stabilizers.jpg)

ผมกลับรู้สึกว่า การติดเจ้า stabilizer เนี่ยยากกว่าการบัดกรีซะอีก เพราะมันชิ้นเล็กและพร้อมจะหลุดได้ตลอดเวลา
ตอนนี้ซึ้งแล้วว่าทำไมถึงไม่ค่อยมีใครใช้ Costar style stabilizers กัน ถ้ามีคราวหน้าคงซื้อ Cherry style มาดีกว่า

## ติด keycap

มาถึงขั้นตอนสุดท้ายก็คือการเสียบ keycap ลงไปบน switch ~~ซึ่งผมก็ถอด keycap จาก keyboard เดิมนั่นแหละมาใส่ไปก่อน
(เพราะ keycap ที่สั่งไปจาก ebay ยังมาไม่ถึง)~~ ใส่ blank PBT keycap จาก ebay ทุก key ใส่ได้พอดี ลองเสียบสายแล้วทดสอบครั้งสุดท้ายอีกครั้ง

เสร็จแล้วววววว ดีใจมากกกกก

![ติด keycap ลงไป เป็นอันเสร็จพิธี](/img/posts/gh60/09-install-all-keycaps.jpg)

เมื่อใส่ PBT blank keycap (ตั้งใจซื้อแบบสีล้วนมา ไม่ได้พิมพ์อักษรลงบน keycap เพราะความชอบส่วนตัวครับ)

![update: เมื่อใส่กับ blank PBT keycap สีดำ](/img/posts/gh60/18-with-all-black-keycaps.jpg)

## ลองใช้งาน

![keyboard ใหม่ บนโต๊ะทำงาน](/img/posts/gh60/17-updated-work-desk.jpg)

ใช้งานได้ดีไม่มีปัญหาอะไร ยกเว้นแต่ spacebar ที่บางครั้งถ้ากดตรงมุมแรงๆ มันจะจมลงไปและงัดให้อีกข้างนึงโผล่ขึ้นมา
ก็แก้ด้วยการดันมันกลับเข้าไปอย่างเดิม ดูแล้วไม่เรียบร้อยเท่าไหร่ แต่ใช้งานจริงตอนพิมพ์ไม่มีปัญหา เพราะผมไม่ได้พิมพ์หนักขนาดนั้น

![ปุ่ม spacebar ที่บางทีก็เด้งออกมา](/img/posts/gh60/11-spacebar-popout.jpg)

ส่วนเรื่องความรู้สึกเทียบกันระหว่าง Cherry MX Red กับ Gateron Brown คงต้องใช้ keyboard ใหม่ไปสักพัก คงจะบอกความต่างได้มากกว่านี้ครับ

keycap ของเดิมที่ติดมากับ M500 เป็นพลาสติก ABS ส่วนของใหม่ที่ซื้อมาจาก ebay เป็น PBT ต่างกันตรงที่สัมผัสกับเสียง
PBT เป็นผิวด้าน สัมผัสจะสากมือกว่านิดหน่อย แต่รอยนิ้วมือและคราบมันก็ไม่ติดเยอะเท่า ABS
ส่วนเรื่องเสียง PBT ด้วยความที่หนากว่า เสียงจะออกมาแน่นๆ กว่า ABS ครับ (ผมชอบ PBT มากกว่า)

![ภาพ keyboard พร้อม keycap แบบโล่งๆ](/img/posts/gh60/19-final-keyboard.jpg)

---

## Custom firmware

firmware ที่ติดมากับตัว PCB ก็เป็น layout มาตราฐานของ keyboard ทั่วไป ไม่จำเป็นต้องลง firmware เอง
ก็สามารถใช้งานได้ตามปกติ แต่ความสามารถที่แท้จริงของ custom mechanical keyboard แบบนี้ คือเราสามารถเซ็ต firmware ให้มันได้ ตามใจชอบ ก็คือสามารถตั้งค่าปุ่มกดให้เป็นอะไรก็ได้นั่นเอง

ข้อดีอีกอย่างก็คือ firmware จะติดไปกับตัว keyboard ทำให้ไม่ว่าจะไปเสียบกับเครื่องไหน ก็ใช้งาน custom firmware ของเราได้เลยทันที ไม่ต้องลงโปรแกรมเพิ่มเติมอะไร ต่อให้จะเซ็ตให้มันพิศดารขนาดไหนก็ตาม

เว็บ [keyboard-layout-editor.com](http://www.keyboard-layout-editor.com/) ใช้เพื่อกำหนดการทำงานให้แต่ละปุ่มบน keyboard
ของผมเป็น keyboard ขนาด 60% ก็เลือก `Preset > Default 60%` แล้วก็จิ้มลงไปบน key แต่ละ key
เพื่อบอกว่าจะให้มันทำงานเป็นปุ่มอะไร สามารถสร้างได้หลาย layer พร้อมกับ save ไว้บน gist ของ GitHub ได้ด้วย

ของผมสร้างไว้ 3 layer อย่างละนิดละหน่อย เอาเท่าที่ใช้ไปก่อน วันหลังนึกอะไรขึ้นมาเพิ่มทีหลังได้

![layer 1](/img/posts/gh60/12-layer-1.png)

![layer 2](/img/posts/gh60/13-layer-2.png)

![layer 3](/img/posts/gh60/14-layer-3.png)

เมื่อกำหนดปุ่มกดต่างๆ ได้แล้ว ใช้เว็บ [TMK Keymap Generator](https://tkg.io/) เพื่อทำการ generate keymap
จากที่เรากำหนดไว้ใน keyboard-layout-editor.com แปลงเป็น keymap code ที่ใช้ได้กับบอร์ด GH60 Satan
วิธีใช้เว็บนี้จะงงๆ หน่อย แต่หลักๆ คือเราต้อง copy code จากแท็บ `Raw data` ในเว็บ keyboard-layout-editor
มาใส่ในแต่ละ layer ของ TMK พร้อมทั้งกำหนดว่าให้แต่ละ layer ทำงานตอนไหน (เช่น เมื่อกดปุ่ม FN1, FN2)

จากนั้น `download .eep file` มาเพื่อทำการ flash firmware ให้กับ keyboard

## Flash firmware

ผมใช้ [tkg-toolkit](https://github.com/kairyu/tkg-toolkit) เพื่อ flash ไฟล์ `.eep` ที่ได้ในขั้นตอนที่แล้ว ให้เข้าไปอยู่ในบอร์ด GH60 ซึ่งขั้นตอนไม่ได้ซับซ้อนอะไร อ่านได้จากใน readme ของแต่ละ OS ได้เลยครับ

![flash custom firmware](/img/posts/gh60/15-flashing-firmware.png)

## สรุป

![ภาพจากมุมบน](/img/posts/gh60/20-updated-topview.jpg)

โดยรวมแล้วก็ happy กับ mechanical keyboard ทำมือตัวนี้มาก และก็รู้สึกคิดไม่ผิดที่ตัดสินใจลองทำดู
ได้ลองทำอะไรใหม่ๆ นอกจากได้ keyboard มาใช้แล้ว ก็ยังได้เรียนรู้อะไรระหว่างทำอีกมากมาย เป็นงานที่สนุกดี
ถือเป็นการลงทุนกับอุปกรณ์ทำมาหากินที่คุ้มค่าสำหรับผมครับ

Happy building กับ Happy coding ครับ
