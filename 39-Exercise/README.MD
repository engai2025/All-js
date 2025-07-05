
 # Js_Exercise_39
 
 ***
 
 ## Developer Name : Eng Abdirahman Ai
 
 ***
 
 ## Group A
 
 ***
 [github Link](https://github.com/engai2025/All-js)
 
 ***
 
 ## Code
 
 ~~~ Javascript
 
   <h2>Exercise 39 Html</h2>
 
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Global Language Translator</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #eff6ff 0%, #e0e7ff 50%, #f3e8ff 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .header {
            text-align: center;
            margin-bottom: 40px;
        }

        .header h1 {
            font-size: 2.5rem;
            font-weight: bold;
            color: #1f2937;
            margin-bottom: 10px;
        }

        .header p {
            font-size: 1.125rem;
            color: #6b7280;
        }

        .card {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            max-width: 1000px;
            margin: 0 auto;
            overflow: hidden;
        }

        .card-header {
            background: linear-gradient(90deg, #2563eb 0%, #7c3aed 100%);
            color: white;
            padding: 24px;
            text-align: center;
        }

        .card-header h2 {
            font-size: 1.5rem;
            font-weight: bold;
        }

        .card-content {
            padding: 24px;
        }

        .language-section {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            gap: 16px;
            align-items: center;
            margin-bottom: 24px;
        }

        .form-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .form-group label {
            font-size: 0.875rem;
            font-weight: 500;
            color: #374151;
        }

        select {
            padding: 10px 12px;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            background: white;
            font-size: 0.875rem;
            color: #374151;
            cursor: pointer;
        }

        select:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .swap-btn {
            width: 48px;
            height: 48px;
            border: 1px solid #d1d5db;
            border-radius: 50%;
            background: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
        }

        .swap-btn:hover {
            background: #eff6ff;
            border-color: #93c5fd;
        }

        .text-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            margin-bottom: 24px;
        }

        .textarea-container {
            position: relative;
        }

        textarea {
            width: 100%;
            min-height: 128px;
            padding: 12px;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            font-size: 0.875rem;
            resize: none;
            font-family: inherit;
        }

        textarea:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .textarea-readonly {
            background: #f9fafb;
        }

        .action-buttons {
            position: absolute;
            top: 8px;
            right: 8px;
            display: flex;
            gap: 4px;
        }

        .action-btn {
            width: 32px;
            height: 32px;
            border: none;
            background: none;
            cursor: pointer;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.2s;
        }

        .action-btn:hover {
            background: rgba(59, 130, 246, 0.1);
        }

        .action-btn.green:hover {
            background: rgba(34, 197, 94, 0.1);
        }

        .translate-section {
            text-align: center;
            margin-bottom: 24px;
        }

        .translate-btn {
            padding: 12px 32px;
            background: linear-gradient(90deg, #2563eb 0%, #7c3aed 100%);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            transition: all 0.2s;
        }

        .translate-btn:hover:not(:disabled) {
            transform: scale(1.05);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .translate-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }

        .footer {
            text-align: center;
            font-size: 0.875rem;
            color: #6b7280;
        }

        .toast {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #1f2937;
            color: white;
            padding: 12px 16px;
            border-radius: 6px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s;
        }

        .toast.show {
            opacity: 1;
            transform: translateX(0);
        }

        .toast.error {
            background: #dc2626;
        }

        .toast.success {
            background: #059669;
        }

        @media (max-width: 768px) {
            .header h1 {
                font-size: 2rem;
            }

            .language-section {
                grid-template-columns: 1fr;
                gap: 12px;
            }

            .text-section {
                grid-template-columns: 1fr;
                gap: 16px;
            }

            .card-content {
                padding: 16px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Global Language Translator</h1>
            <!-- <p>Translate text between 100+ languages instantly</p> -->
        </div>

        <div class="card">
            <div class="card-header">
                <h2>Language Translator</h2>
            </div>
            <div class="card-content">
                <!-- Language Selection -->
                <div class="language-section">
                    <div class="form-group">
                        <label for="from-lang">From:</label>
                        <select id="from-lang">
                            <!-- Languages will be populated by JavaScript -->
                        </select>
                    </div>

                    <button class="swap-btn" onclick="swapLanguages()" title="Swap languages">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M8 8l-4 4 4 4"/>
                        </svg>
                    </button>

                    <div class="form-group">
                        <label for="to-lang">To:</label>
                        <select id="to-lang">
                            <!-- Languages will be populated by JavaScript -->
                        </select>
                    </div>
                </div>

                <!-- Text Input and Output -->
                <div class="text-section">
                    <div class="form-group">
                        <label for="input-text">Text to Translate:</label>
                        <div class="textarea-container">
                            <textarea id="input-text" placeholder="Enter text to translate..."></textarea>
                            <div class="action-buttons" id="input-actions" style="display: none;">
                                <button class="action-btn" onclick="speakText('input')" title="Speak text">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"/>
                                    </svg>
                                </button>
                                <button class="action-btn" onclick="copyText('input')" title="Copy text">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Translated Text:</label>
                        <div class="textarea-container">
                            <textarea id="output-text" class="textarea-readonly" placeholder="Translation will appear here..." readonly></textarea>
                            <div class="action-buttons" id="output-actions" style="display: none;">
                                <button class="action-btn green" onclick="speakText('output')" title="Speak translation">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"/>
                                    </svg>
                                </button>
                                <button class="action-btn green" onclick="copyText('output')" title="Copy translation">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                                        <path d="M4 16c-1.1 0-2-.9-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Translate Button -->
                <div class="translate-section">
                    <button class="translate-btn" onclick="translateText()" id="translate-btn">
                        Translate
                    </button>
                </div>

                <!-- Footer -->
                <div class="footer">
                    <!-- <p>Powered by MyMemory Translation API • Free translation service</p> -->
                </div>
            </div>
        </div>
    </div>

    <!-- Toast notification -->
    <div id="toast" class="toast"></div>

    <script>
        // Language data
        const languages = [
            { code: 'auto', name: 'Auto-detect' },
            { code: 'af', name: 'Afrikaans' },
            { code: 'sq', name: 'Albanian' },
            { code: 'am', name: 'Amharic' },
            { code: 'ar', name: 'Arabic' },
            { code: 'hy', name: 'Armenian' },
            { code: 'az', name: 'Azerbaijani' },
            { code: 'eu', name: 'Basque' },
            { code: 'be', name: 'Belarusian' },
            { code: 'bn', name: 'Bengali' },
            { code: 'bs', name: 'Bosnian' },
            { code: 'bg', name: 'Bulgarian' },
            { code: 'ca', name: 'Catalan' },
            { code: 'ceb', name: 'Cebuano' },
            { code: 'zh', name: 'Chinese (Simplified)' },
            { code: 'zh-TW', name: 'Chinese (Traditional)' },
            { code: 'co', name: 'Corsican' },
            { code: 'hr', name: 'Croatian' },
            { code: 'cs', name: 'Czech' },
            { code: 'da', name: 'Danish' },
            { code: 'nl', name: 'Dutch' },
            { code: 'en', name: 'English' },
            { code: 'eo', name: 'Esperanto' },
            { code: 'et', name: 'Estonian' },
            { code: 'fi', name: 'Finnish' },
            { code: 'fr', name: 'French' },
            { code: 'fy', name: 'Frisian' },
            { code: 'gl', name: 'Galician' },
            { code: 'ka', name: 'Georgian' },
            { code: 'de', name: 'German' },
            { code: 'el', name: 'Greek' },
            { code: 'gu', name: 'Gujarati' },
            { code: 'ht', name: 'Haitian Creole' },
            { code: 'ha', name: 'Hausa' },
            { code: 'haw', name: 'Hawaiian' },
            { code: 'he', name: 'Hebrew' },
            { code: 'hi', name: 'Hindi' },
            { code: 'hmn', name: 'Hmong' },
            { code: 'hu', name: 'Hungarian' },
            { code: 'is', name: 'Icelandic' },
            { code: 'ig', name: 'Igbo' },
            { code: 'id', name: 'Indonesian' },
            { code: 'ga', name: 'Irish' },
            { code: 'it', name: 'Italian' },
            { code: 'ja', name: 'Japanese' },
            { code: 'jv', name: 'Javanese' },
            { code: 'kn', name: 'Kannada' },
            { code: 'kk', name: 'Kazakh' },
            { code: 'km', name: 'Khmer' },
            { code: 'rw', name: 'Kinyarwanda' },
            { code: 'ko', name: 'Korean' },
            { code: 'ku', name: 'Kurdish' },
            { code: 'ky', name: 'Kyrgyz' },
            { code: 'lo', name: 'Lao' },
            { code: 'la', name: 'Latin' },
            { code: 'lv', name: 'Latvian' },
            { code: 'lt', name: 'Lithuanian' },
            { code: 'lb', name: 'Luxembourgish' },
            { code: 'mk', name: 'Macedonian' },
            { code: 'mg', name: 'Malagasy' },
            { code: 'ms', name: 'Malay' },
            { code: 'ml', name: 'Malayalam' },
            { code: 'mt', name: 'Maltese' },
            { code: 'mi', name: 'Maori' },
            { code: 'mr', name: 'Marathi' },
            { code: 'mn', name: 'Mongolian' },
            { code: 'my', name: 'Myanmar (Burmese)' },
            { code: 'ne', name: 'Nepali' },
            { code: 'no', name: 'Norwegian' },
            { code: 'ny', name: 'Nyanja (Chichewa)' },
            { code: 'or', name: 'Odia (Oriya)' },
            { code: 'ps', name: 'Pashto' },
            { code: 'fa', name: 'Persian' },
            { code: 'pl', name: 'Polish' },
            { code: 'pt', name: 'Portuguese' },
            { code: 'pa', name: 'Punjabi' },
            { code: 'ro', name: 'Romanian' },
            { code: 'ru', name: 'Russian' },
            { code: 'sm', name: 'Samoan' },
            { code: 'gd', name: 'Scots Gaelic' },
            { code: 'sr', name: 'Serbian' },
            { code: 'st', name: 'Sesotho' },
            { code: 'sn', name: 'Shona' },
            { code: 'sd', name: 'Sindhi' },
            { code: 'si', name: 'Sinhala (Sinhalese)' },
            { code: 'sk', name: 'Slovak' },
            { code: 'sl', name: 'Slovenian' },
            { code: 'so', name: 'Somali' },
            { code: 'es', name: 'Spanish' },
            { code: 'su', name: 'Sundanese' },
            { code: 'sw', name: 'Swahili' },
            { code: 'sv', name: 'Swedish' },
            { code: 'tl', name: 'Tagalog (Filipino)' },
            { code: 'tg', name: 'Tajik' },
            { code: 'ta', name: 'Tamil' },
            { code: 'tt', name: 'Tatar' },
            { code: 'te', name: 'Telugu' },
            { code: 'th', name: 'Thai' },
            { code: 'tr', name: 'Turkish' },
            { code: 'tk', name: 'Turkmen' },
            { code: 'uk', name: 'Ukrainian' },
            { code: 'ur', name: 'Urdu' },
            { code: 'ug', name: 'Uyghur' },
            { code: 'uz', name: 'Uzbek' },
            { code: 'vi', name: 'Vietnamese' },
            { code: 'cy', name: 'Welsh' },
            { code: 'xh', name: 'Xhosa' },
            { code: 'yi', name: 'Yiddish' },
            { code: 'yo', name: 'Yoruba' },
            { code: 'zu', name: 'Zulu' }
        ];

        // Initialize the app
        document.addEventListener('DOMContentLoaded', function() {
            populateLanguageSelects();
            setupEventListeners();
        });

        function populateLanguageSelects() {
            const fromSelect = document.getElementById('from-lang');
            const toSelect = document.getElementById('to-lang');

            languages.forEach(lang => {
                const option1 = document.createElement('option');
                option1.value = lang.code;
                option1.textContent = lang.name;
                fromSelect.appendChild(option1);

                const option2 = document.createElement('option');
                option2.value = lang.code;
                option2.textContent = lang.name;
                toSelect.appendChild(option2);
            });

            // Set default values
            fromSelect.value = 'en';
            toSelect.value = 'es';
        }

        function setupEventListeners() {
            const inputText = document.getElementById('input-text');
            const outputText = document.getElementById('output-text');

            inputText.addEventListener('input', function() {
                const inputActions = document.getElementById('input-actions');
                inputActions.style.display = this.value ? 'flex' : 'none';
            });

            // Also check for output text changes
            const observer = new MutationObserver(function() {
                const outputActions = document.getElementById('output-actions');
                outputActions.style.display = outputText.value ? 'flex' : 'none';
            });
            
            observer.observe(outputText, { attributes: true, attributeFilter: ['value'] });
        }

        async function translateText() {
            const inputText = document.getElementById('input-text').value.trim();
            const fromLang = document.getElementById('from-lang').value;
            const toLang = document.getElementById('to-lang').value;
            const outputText = document.getElementById('output-text');
            const translateBtn = document.getElementById('translate-btn');

            if (!inputText) {
                showToast('Please enter text to translate', 'error');
                return;
            }

            // Set loading state
            translateBtn.disabled = true;
            translateBtn.textContent = 'Translating...';

            try {
                const response = await fetch(
                    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${fromLang}|${toLang}`
                );
                
                const data = await response.json();
                console.log('Translation response:', data);

                if (data.responseStatus === 200 || data.responseData) {
                    outputText.value = data.responseData.translatedText;
                    document.getElementById('output-actions').style.display = 'flex';
                    showToast('Text translated successfully!', 'success');
                } else {
                    throw new Error('Translation failed');
                }
            } catch (error) {
                console.error('Translation error:', error);
                showToast('Failed to translate text. Please try again.', 'error');
            } finally {
                translateBtn.disabled = false;
                translateBtn.textContent = 'Translate';
            }
        }

        function swapLanguages() {
            const fromSelect = document.getElementById('from-lang');
            const toSelect = document.getElementById('to-lang');
            const inputText = document.getElementById('input-text');
            const outputText = document.getElementById('output-text');

            // Swap language selections
            const tempLang = fromSelect.value;
            fromSelect.value = toSelect.value;
            toSelect.value = tempLang;

            // Swap text content
            const tempText = inputText.value;
            inputText.value = outputText.value;
            outputText.value = tempText;

            // Update action button visibility
            document.getElementById('input-actions').style.display = inputText.value ? 'flex' : 'none';
            document.getElementById('output-actions').style.display = outputText.value ? 'flex' : 'none';
        }

        function copyText(type) {
            const text = type === 'input' 
                ? document.getElementById('input-text').value 
                : document.getElementById('output-text').value;
            
            navigator.clipboard.writeText(text).then(() => {
                showToast('Text copied to clipboard!', 'success');
            }).catch(() => {
                showToast('Failed to copy text', 'error');
            });
        }

        function speakText(type) {
            const text = type === 'input' 
                ? document.getElementById('input-text').value 
                : document.getElementById('output-text').value;
            
            const lang = type === 'input' 
                ? document.getElementById('from-lang').value 
                : document.getElementById('to-lang').value;

            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = lang;
                speechSynthesis.speak(utterance);
            } else {
                showToast('Text-to-speech not supported in your browser', 'error');
            }
        }

        function showToast(message, type = 'success') {
            const toast = document.getElementById('toast');
            toast.textContent = message;
            toast.className = `toast ${type} show`;
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    </script>
</body>
</html>





   <h2>Exercise 39 Css</h2>

   /* General Styles */
 body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #e0f7fa; /* Light blue background */
    display: flex;
    justify-content: center;
    align-items: flex-start; /* Align to top */
    min-height: 100vh;
    margin: 0;
    padding: 30px 20px;
    box-sizing: border-box;
}

.container {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    width: 100%;
    max-width: 600px;
    text-align: center;
    border: 1px solid #cce7e4;
}

h1 {
    color: #00796b; /* Dark cyan */
    margin-bottom: 30px;
    font-size: 2.2em;
    font-weight: 600;
}

.form-group {
    margin-bottom: 25px;
    text-align: left;
}

label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    color: #333;
    font-size: 1.1em;
}

select,
textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #b2dfdb; /* Light teal border */
    border-radius: 8px;
    font-size: 1em;
    box-sizing: border-box;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

select:focus,
textarea:focus {
    border-color: #00796b;
    box-shadow: 0 0 0 3px rgba(0, 121, 107, 0.2);
    outline: none;
}

textarea {
    resize: vertical;
    min-height: 120px;
    max-height: 300px;
}

button {
    background-color: #00796b; /* Dark cyan */
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.2s ease;
    width: 100%;
    margin-top: 15px;
    box-shadow: 0 4px 10px rgba(0, 121, 107, 0.2);
}

button:hover {
    background-color: #004d40; /* Darker cyan */
    transform: translateY(-2px);
}

button:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(0, 121, 107, 0.3);
}

.translated-section {
    margin-top: 35px;
    padding-top: 25px;
    border-top: 1px dashed #b2dfdb; /* Dashed light teal border */
    text-align: left;
}

.translated-section h3 {
    color: #00796b;
    margin-bottom: 15px;
    font-size: 1.5em;
}

.translated-section p {
    background-color: #e0f2f7; /* Lighter blue */
    padding: 20px;
    border-radius: 8px;
    font-size: 1.1em;
    color: #263238; /* Darker text for readability */
    min-height: 80px; /* Ensure space for translation */
    word-wrap: break-word; /* Prevents long words from overflowing */
    line-height: 1.6;
    border: 1px solid #b3e5fc; /* Light blue border */
}




   <h2>Exercise 39 JavaScript</h2>
 
//Exercise 39
  document.addEventListener('DOMContentLoaded', () => {
    const fromLanguageSelect = document.getElementById('fromLanguage');
    const toLanguageSelect = document.getElementById('toLanguage');
    const textToTranslateInput = document.getElementById('textToTranslate');
    const translateBtn = document.getElementById('translateBtn');
    const translatedTextOutput = document.getElementById('translatedText');

    // RapidAPI key iyo host
    // MUHIIM: Furihii API-ga waa mid furan. Ha u isticmaalin codsi rasmi ah!
    const RAPIDAPI_KEY = '1dfe0cf2afmsh8dd581ff6cbb2e2p1f22dejsn557b3c87ddcd';
    const RAPIDAPI_HOST = 'microsoft-translator-text-api3.p.rapidapi.com';

    // Funtion-kan wuxuu soo shubayaa luqadaha la heli karo isagoo isticmaalaya "Get Languages" API
    // Tan waxay ku dhex jiri doontaa function async ah si loo waco fetch.
    async function fetchAndPopulateLanguages() {
        const languagesUrl = `https://${RAPIDAPI_HOST}/languages`;
        const languagesOptions = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': RAPIDAPI_KEY,
                'x-rapidapi-host': RAPIDAPI_HOST
            }
        };

        try {
            const response = await fetch(languagesUrl, languagesOptions);
            if (!response.ok) {
                let errorDetails = await response.text();
                try {
                    const errorJson = JSON.parse(errorDetails);
                    errorDetails = errorJson.message || JSON.stringify(errorJson);
                } catch (e) {
                    // It's plain text, not JSON
                }
                throw new Error(`Failed to fetch languages: ${response.status} - ${errorDetails}`);
            }
            const result = await response.json();

            const languages = Object.entries(result.translation).map(([code, details]) => ({
                code: code,
                name: details.name
            })).sort((a, b) => a.name.localeCompare(b.name));

            fromLanguageSelect.innerHTML = '';
            toLanguageSelect.innerHTML = '';

            languages.forEach(lang => {
                const optionFrom = document.createElement('option');
                optionFrom.value = lang.code;
                optionFrom.textContent = lang.name;
                fromLanguageSelect.appendChild(optionFrom);

                const optionTo = document.createElement('option');
                optionTo.value = lang.code;
                optionTo.textContent = lang.name;
                toLanguageSelect.appendChild(optionTo);
            });

            fromLanguageSelect.value = 'en'; // Default to English
            toLanguageSelect.value = 'so';   // Default to Somali
            if (!toLanguageSelect.value) { // Fallback if Somali is not found
                toLanguageSelect.selectedIndex = 0;
            }

        } catch (error) {
            console.error('Error fetching languages:', error);
            fromLanguageSelect.innerHTML = '<option value="">Error loading languages</option>';
            toLanguageSelect.innerHTML = '<option value="">Error loading languages</option>';
            translatedTextOutput.textContent = 'Could not load languages. Please check your API key, internet connection, or RapidAPI quota.';
            alert('Waxa dhacday cilad markii la soo shubayay luqadaha. Fadlan hubi API Key-gaaga ama isku xirkaaga internetka.');
        }
    }

    // Call the function to load languages when the page loads
    fetchAndPopulateLanguages();

    // Event listener for the Translate button
    translateBtn.addEventListener('click', async () => {
        const fromLang = fromLanguageSelect.value;
        const toLang = toLanguageSelect.value;
        const text = textToTranslateInput.value.trim();

        if (text === '') {
            translatedTextOutput.textContent = 'Fadlan geli qoraal aad rabto inaad tarjumto.';
            return;
        }
        if (!fromLang || !toLang) {
            translatedTextOutput.textContent = 'Fadlan dooro labada luqadood ee aad rabto inaad u kala tarjumto.';
            return;
        }

        translatedTextOutput.textContent = 'Tarjumaya...'; // Display a loading message

        // Using the "Large Text Translation" API endpoint
        const translateUrl = `https://${RAPIDAPI_HOST}/largetranslate?to=${toLang}&from=${fromLang}`;
        const translateOptions = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': RAPIDAPI_KEY,
                'x-rapidapi-host': RAPIDAPI_HOST,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sep: '|', // Required by the API, even for single text.
                text: text // The text to be translated
            })
        };

        try {
            const response = await fetch(translateUrl, translateOptions);

            if (!response.ok) {
                let errorDetails = await response.text();
                try {
                    const errorJson = JSON.parse(errorDetails);
                    errorDetails = errorJson.message || JSON.stringify(errorJson);
                } catch (e) {
                    // It's plain text, not JSON
                }
                throw new Error(`Translation API Error: ${response.status} - ${errorDetails}`);
            }

            const translatedResult = await response.text(); // The result is plain text
            translatedTextOutput.textContent = translatedResult;

        } catch (error) {
            console.error('Error during translation:', error);
            translatedTextOutput.textContent = `Waxa dhacday cilad: ${error.message}. Fadlan isku day mar kale.`;
            alert(`Waxa dhacday cilad: ${error.message}. Hubi consol-ka wixii faahfaahin ah.`);
        }
    });
});
 ~~~
 
 
  
 
 ## Output
 
 ***
 ## Home
 ![Output The Code](../39-Exercise/Assets/Capture39.PNG)

 
 
 
 
 
 
 ***
 
  
 
 ## Programming language used
 
 ***
 
 |Programming Language |Framworke | Database
 |:-------------------|:----------|:--------
 |Html                |0          |0
 |Css                  |0          |0
 |JavaScript          |0          |0
 
 ***
 
 ## Task
 
 - [x] Done
 