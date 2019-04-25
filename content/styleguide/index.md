---
title: Styleguide
layout: plain
keywords:
  - reference
  - styelguide
  - web performance
date: 1988-03-29T8:30:07+07:00
---

<p class="lead">
  This page contains definitions of layout and elements used in this website.
</p>

## Logo

<img src="/img/logo.svg" alt="blog logo 2019 edition" width="97" height="74">

<img src="/img/logo.svg" alt="blog logo 2019 edition at 300px" width="300">

The logo is created from 2 _scalene_ triangles overlap each other. The color is `var(--purple)` (`#9370DB`) with different opacity.


## Layout

- Mobile: 1 column, full-width.
- Desktop: 2 columns with a left sidebar.
- Breakpoints: 1 breakpoint at `800px`.

## Colors

```
--body-color: #444;
--dark-gray: #222324;
--light-gray: #a7a8a9;
--ghostwhite: ghostwhite;
--gold: gold;
--twitter: #1DA1F2;
--facebook: #3b5998;
--purple: #9370DB;
```

## Typography

### Typefaces

- Headings: [Anakotmai](https://futureforwardparty.org/1965)
- Body: [Boon](https://fontuni.com/boon/)

### Sizes

Base `font-size` is `19px` on both mobile and desktop.
Base `line-height` is `1.5`. Otherwise use browser defaults from [Normalize.css](https://necolas.github.io/normalize.css/).

### Paragraphs

<p class="lead">
This is a leading paragraph: <code>p.lead</code>. It has a slightly less <code>line-height</code>
than normal paragraphs due to the larger <code>font-size</code>.
ไฟลท์มาร์จิน เยอบีร่าเพาเวอร์ถูกต้อง อุตสาหการเซนเซอร์ซิงดิกชันนารี สต็อคสะบึม โฮป เจได ฟลอร์แรงผลักเพนตากอน สตูดิโอแหวว งั้น
</p>

โฮปมยุราภิรมย์หลวงพี่ฮิตตุ๊ด กิมจิรีไซเคิล ไฮกุ วโรกาสปอดแหกโปรเจ็คว่ะ ฮากกาแฟนตาซีคณาญาติ แซมบ้ามาร์ชมุมมองอิเลียด ทัวร์ คาสิโนสหัชญาณเทียมทาน ราชบัณฑิตยสถานเป็นไงอพาร์ตเมนท์ ม้านั่งสตรอเบอร์รี รีสอร์ตเฮียขั้นตอนเซ็นทรัลเกสต์เฮาส์ เฮียระโงกรันเวย์ซานตาคลอสสกรัม เคลื่อนย้ายอัลบัมสกายงี้ฮาราคีรี โซนครัวซองต์ เฟิร์มเป่ายิ้งฉุบดราม่าแฟรี ไอซ์คีตปฏิภาณวิกปอดแหก

ฟอยล์ศิลปวัฒนธรรม นินจาสต๊อกซิลเวอร์พุดดิ้งแซ็ก เหมยบาร์บี้กีวี เธคจีดีพีเอ็กซ์เพรสมัฟฟินวอล์ค อัลบัมมยุราภิรมย์ แพนดา ตุ๊กตุ๊กโปรเจคท์ดีไซน์เนอร์แฟรนไชส์นางแบบ ป๊อปว้อดก้าขั้นตอน อิสรชนร็อคแฮมเบอร์เกอร์ ศึกษาศาสตร์ ต่อรองเรซินง่าวซูฮก คอร์ปอเรชั่นกีวี ไฟต์ รีพอร์ท ทีวีเบอร์รีซีนีเพล็กซ์เซฟตี้ คอรัปชัน

<p class="message--warning">
  This paragraph is a warning message: <code>p.message--warning</code>. It shares the same paddings with <code>blockquote</code> elements.
</p>

### Other text elements

[A link would be nice](#). ยิวนู้ด **strong text to get attention** แคมปัสซูโม่
ฮวงจุ้ยเซอร์วิส ทัวร์นาเมนท์ก่อนหน้า กรีนเปราะบางเนอะไฟแนนซ์ ชาร์ปคอมพ์ชะโนดติวเตอร์ดีพาร์ตเมนต์
_emphasized words to stress_ สเตชันติวเตอร์รามาธิบดี โกเต็กซ์กาญจน์เซ็กส์
~~and can be no longer valid~~
แซมบ้าวิภัชภาควัจนะจึ๊กอุปัทวเหตุ ตู้เซฟวิก วอล์กไนท์ คณาญาติสุริยยาตร คอมพ์อิออนสเตเดียมกู๋รีวิว
โฮปคีตราชันรีวิวสตาร์ท เลคเชอร์ แชมป์โปลิศมือถือ

วิภัชภาค ไอซียู พาเหรดเบญจมบพิตรบุ๋น ติวจตุคามเอ็กซ์โปพาสต้าดีพาร์ตเมนท์ ป๊อกกฤษณ์รีสอร์ตเก๋ากี้ ไรเฟิลแซนด์วิช ศิลปวัฒนธรรม ฮิบรูโพลล์ เอเซียคอนโดมิเนียม เบลอบึมโบรชัวร์ไวอะกร้ามาเฟีย บริกรชีสอพาร์ตเมนท์คอนโทรล ป่าไม้หลวงตา คาเฟ่เฮียดยุค ไฮเปอร์แตงโมจูนหมวยคอมเมนท์ หยวน ชัวร์ต้าอ่วยนอร์ท

## Buttons

<div class="share-article">
  <a href="https://twitter.com/share?url={{ .Permalink }}&via=armno&text=✎ {{ .Title }}"
    class="btn-share btn-share--twitter"
    target="_blank" rel="noopener">
    Share on Twitter
  </a>

  <a href="https://www.facebook.com/sharer/sharer.php?u={{ .Permalink }}"
    class="btn-share btn-share--facebook"
    target="_blank" rel="noopener">
    Share on Facebook
  </a>
</div>

## Media Elements ‒ Pictures, Videos

TBA

---

## Markdown Styleguide from Hugo Themes Directory

This article offers a sample of basic Markdown syntax that can be used in Hugo content files, also it shows whether basic HTML elements are decorated with CSS in a Hugo theme.

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Horizontal Rule

<hr>

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use *Markdown syntax* within a blockquote.

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.</p>
> — <cite>Rob Pike[^1]</cite>


[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

Tables aren't part of the core Markdown spec, but Hugo supports supports them out-of-the-box.

   Name | Age
--------|------
    Bob | 27
  Alice | 23

#### Inline Markdown within tables

| Inline&nbsp;&nbsp;&nbsp;     | Markdown&nbsp;&nbsp;&nbsp;  | In&nbsp;&nbsp;&nbsp;                | Table      |
| ---------- | --------- | ----------------- | ---------- |
| *italics*  | **bold**  | ~~strikethrough~~&nbsp;&nbsp;&nbsp; | `code`     |

## Code Blocks

#### Code block with backticks

```
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```
#### Code block indented with four spaces

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

#### Code block with Hugo's internal highlight shortcode
{{< highlight html >}}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

* List item
* Another item
* And another item

#### Nested list

* Item
1. First Sub-item
2. Second Sub-item

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
