# 📚 LLM Wiki — Mohammed Nafea Portfolio

> المرجع المركزي لجميع المهارات والأوامر والأدوات المستخدمة في هذا المشروع وجلسات Claude Code.

---

## 🤖 نظام الوكلاء المتعدد (Multi-Agent AI System)

```
┌─────────────────────────────────────────────────────────────────┐
│                     ORCHESTRATOR AGENT                          │
│              (يستقبل المهمة ويوزعها على الوكلاء)                │
└──────────┬────────────────────┬───────────────────┬─────────────┘
           │                    │                   │
           ▼                    ▼                   ▼
   ┌──────────────┐    ┌──────────────┐    ┌──────────────────┐
   │  CODE AGENT  │    │ DESIGN AGENT │    │  RESEARCH AGENT  │
   │  (إصلاح كود │    │  (UI/UX &    │    │  (بحث وتحليل    │
   │   وأخطاء)   │    │   Figma)     │    │   المتطلبات)     │
   └──────┬───────┘    └──────┬───────┘    └────────┬─────────┘
          │                   │                     │
          └───────────────────┼─────────────────────┘
                              │
                              ▼
                   ┌──────────────────────┐
                   │   VALIDATION AGENT   │
                   │  (اختبار وتحقق       │
                   │   من الجودة)         │
                   └──────────┬───────────┘
                              │
                    ┌─────────┴──────────┐
                    │  نجح؟              │
                    │  Yes → تسليم       │
                    │  No  → Loop back   │
                    └────────────────────┘
```

### أدوار الوكلاء

| الوكيل | الدور | المدخلات | المخرجات |
|--------|-------|---------|---------|
| **Orchestrator** | تنسيق المهام وتوزيعها | طلب المستخدم | مهام موزعة |
| **Code Agent** | كتابة وإصلاح الكود | ملفات المشروع | كود محسّن |
| **Design Agent** | تصميم UI/UX | متطلبات المستخدم | تصاميم Figma/CSS |
| **Research Agent** | بحث وتحليل | أسئلة مفتوحة | تقارير موثوقة |
| **Validation Agent** | اختبار وتحقق | كود/تصميم | تقرير جودة |

---

## 🛠️ المهارات والأوامر المتاحة

### الأوامر الأساسية في Claude Code

| الأمر | الوظيفة |
|-------|---------|
| `/goal` | يحدد اتجاه العمل ويضع هدفاً واضحاً |
| `/impeccable` | يضمن العمل بدقة تامة وبلا أخطاء |
| `/simplify` | مراجعة الكود وتنظيفه وتبسيطه |
| `/verify` | مراجعة التغييرات وتشغيل الاختبارات |
| `/review` | مراجعة شاملة للكود |
| `/security-review` | مراجعة أمنية للتغييرات |
| `/run` | تشغيل المشروع ومعاينته |
| `/init` | إنشاء ملف CLAUDE.md للمشروع |
| `/deep-research` | بحث معمق متعدد المصادر |
| `/code-review` | مراجعة الكود للأخطاء والتحسينات |

---

## 🔗 مستودعات المهارات المرجعية

### المستودعات الرسمية

| المستودع | الوصف | الرابط |
|---------|-------|-------|
| **Anthropic Official Skills** | مهارات أنثروبيك الرسمية | [anthropics/skills](https://github.com/anthropics/skills) |
| **PDF Skill** | قراءة وإنشاء ملفات PDF | [skills/pdf](https://github.com/anthropics/skills/tree/main/skills/pdf) |
| **Excel/XLSX Skill** | التعامل مع ملفات Excel | [skills/xlsx](https://github.com/anthropics/skills/tree/main/skills/xlsx) |
| **Skill Creator** | إنشاء مهارات مخصصة | [skills/skill-creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator) |
| **Frontend Design** | تصميم واجهات المستخدم | [skills/frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) |
| **PowerPoint/PPTX** | إنشاء عروض PowerPoint | [skills/pptx](https://github.com/anthropics/skills/tree/main/skills/pptx) |

### مستودعات المجتمع

| المستودع | الوصف | الرابط |
|---------|-------|-------|
| **Awesome Claude Skills** | مجموعة مهارات Claude المجتمعية | [composiohq/Awesome-Claude-Skills](https://github.com/composiohq/Awesome-Claude-Skills) |
| **Trends MCP** | أداة تحليل اتجاهات البحث | [trendsmcp/trends-mcp](https://github.com/trendsmcp/trends-mcp) |
| **Claude Skills (Alireza)** | مجموعة مهارات إضافية | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) |
| **Awesome Agent Skills** | مهارات وكلاء AI المتقدمة | [voltagent/awesome-agent-skills](https://github.com/voltagent/awesome-agent-skills) |
| **Google Skills** | مهارات Google الرسمية | [google/skills](https://github.com/google/skills) |

---

## 📋 مهام الجودة الأربع

```
/goal → تحديد هدف واضح
   ↓
/impeccable → تنفيذ مثالي
   ↓
/simplify → تبسيط ومراجعة الكود
   ↓
/verify → تحقق وتأكيد النتائج
```

---

## 🏗️ هيكل المشروع

```
portfolio/
├── index.html          # الصفحة الرئيسية (SPA)
├── style.css           # التصميم (3700+ سطر)
├── translations.js     # دعم 15 لغة
├── cv-generator.js     # مولد السيرة الذاتية
├── crown_data.js       # بيانات الصفحة
├── service-worker.js   # PWA Service Worker
├── manifest.json       # إعدادات PWA
├── offline.html        # صفحة عدم الاتصال
├── 404.html            # صفحة الخطأ 404
└── LLM_WIKI.md         # هذا الملف
```

---

## 📞 معلومات الاتصال الصحيحة

| النوع | القيمة |
|------|-------|
| **واتساب** | +966546532955 |
| **رابط واتساب** | https://wa.me/966546532955 |
| **البريد الإلكتروني** | king.darkmn@gmail.com |
| **GitHub** | https://github.com/MohammedNafea |
| **LinkedIn** | https://www.linkedin.com/in/mohammed-nafea-62a32b160 |

---

## 🐛 الإصلاحات المنجزة

### إصلاحات رقم الواتساب (2026-06-17)
- ✅ تم تصحيح `fab-btn` من `wa.me/201015694380` إلى `wa.me/966546532955`
- ✅ تم تصحيح قسم الاتصال من `wa.me/message/YGXHPUENICNAN1` إلى `wa.me/966546532955`
- ✅ تم تصحيح تذييل الصفحة من `wa.me/message/YGXHPUENICNAN1` إلى `wa.me/966546532955`
- ✅ تم تصحيح بيانات vCard من `+201015694380` إلى `+966546532955`
- ✅ تم تصحيح cv-generator.js من `+966555555555` إلى `+966546532955`

### إصلاحات UI/UX (2026-06-17)
- ✅ إضافة دالة `moveSlider` المفقودة لعمل شرائح المشاريع
- ✅ إزالة تكرار وسم `<link rel="manifest">` في HTML

---

## 🔧 تقنيات المشروع

| التقنية | الاستخدام |
|--------|---------|
| **HTML5** | هيكل الصفحة |
| **CSS3 + CSS Variables** | التصميم والثيمات |
| **Vanilla JavaScript** | التفاعلية |
| **Three.js** | خلفية 3D متحركة |
| **Typed.js** | تأثير الكتابة |
| **AOS** | تأثيرات التمرير |
| **Vanilla Tilt** | تأثير ميل البطاقات |
| **QRCode.js** | توليد رموز QR |
| **EmailJS** | إرسال رسائل التواصل |
| **Font Awesome 6** | الأيقونات |
| **PWA** | تطبيق ويب تقدمي |
| **Service Worker** | العمل بدون إنترنت |

---

## 🌐 اللغات المدعومة

العربية · الإنجليزية · التركية · الإسبانية · الفرنسية · الألمانية · الصينية · اليابانية · الروسية · البرتغالية · الإيطالية · الكورية · الإندونيسية · الأردية · الهندية

---

## 🔄 سير عمل التطوير

```
1. استكشاف المشروع → Explore Agent
2. تحليل الكود → Code Review
3. التخطيط → Plan Agent  
4. التنفيذ → Code Edits
5. التحقق → Verify/Test
6. الرفع → Git Push + PR
```

---

## 📝 ملاحظات مهمة

- **الفرع الحالي**: `claude/whatsapp-number-fix-opit8u`
- **المستودع**: `mohammednafea/portfolio`
- **النشر**: GitHub Pages على `https://mohammednafea.github.io/portfolio/`
- **لغة العرض الافتراضية**: العربية (RTL)

---

*تم إنشاء هذا الملف بواسطة Claude Code — آخر تحديث: 2026-06-17*
