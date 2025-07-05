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