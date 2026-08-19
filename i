<!doctype html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Velox Panel</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <main class="shell">
    <section class="card">
      <div class="brand">
        <div class="logo">V</div>
        <div>
          <h1>Velox Panel</h1>
          <p>پنل مدیریت ساده و آماده Railway</p>
        </div>
      </div>

      <div class="stats">
        <div><span>وضعیت</span><strong id="status">در حال بررسی...</strong></div>
        <div><span>سرویس</span><strong>Web Panel</strong></div>
        <div><span>نسخه</span><strong>1.0.0</strong></div>
      </div>

      <div class="section">
        <div class="section-head">
          <h2>آیتم‌های پنل</h2>
          <button id="addBtn">افزودن</button>
        </div>
        <div id="items" class="items"></div>
      </div>
    </section>
  </main>
  <script src="/app.js"></script>
</body>
</html>
