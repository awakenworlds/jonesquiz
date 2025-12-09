<!DOCTYPE php>
<html lang="en">
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-NCS6JZ01LT"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);} 
      gtag('js', new Date());
      gtag('config', 'G-NCS6JZ01LT');
    </script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jones Quiz</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>

    <!-- Language Dropdown with Logo -->
    <div class="language-select-container">
        <img src="favicon.ico" alt="Jones Quiz Logo" class="quiz-logo">
        <label for="language-select">Select Language:</label>
        <select id="language-select" class="language-select">
            <option value="">--Choose--</option>
            <option value="chinese">Chinese</option>
            <option value="french">French</option>
            <option value="hindi">Hindi</option>
            <option value="mongolian">Mongolian</option>
            <option value="nepali">Nepali</option>
            <option value="spanish">Spanish</option>
            <option value="thai">Thai</option>
        </select>
    </div>

    <?php include 'footer.php'; ?>

    <script>
        // Language dropdown navigation
        const langSelect = document.getElementById('language-select');
        langSelect.addEventListener('change', () => {
            if (langSelect.value) {
                location.href = langSelect.value;
            }
        });

        // About toggle
        const aboutToggle = document.getElementById('about-toggle');
        const aboutContent = document.getElementById('about-content');
        aboutToggle.addEventListener('click', () => {
            const isHidden = aboutContent.classList.contains('hidden');
            aboutContent.classList.toggle('hidden');
            aboutToggle.textContent = isHidden ? "Less ▲" : "More ▼";
        });
    </script>
</body>
</html>
