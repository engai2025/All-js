 // Select the language dropdown elements from the DOM
const fromLang = document.querySelector("#from-lang");
const ToLang = document.querySelector("#to-lang");

document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});


 
const fetchData = async () => {
  const url = "https://microsoft-translator-text-api3.p.rapidapi.com/languages";
    const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "33928d43a1mshfc0bcb94acfafbdp1081e7jsn9010971be2cd", 
          "x-rapidapi-host": "microsoft-translator-text-api3.p.rapidapi.com",
            
        },
    };

    try {
        
        const response = await fetch(url, options);
        const result = await response.json();  
        console.log(result);  
        const lang = result.translation;
        
        
        addToDomLang(lang);
    } catch (error) {
        console.error(error);  
    }
};

 
const addToDomLang = (languages) => {

   
    for (let lang in languages) {
        const option = document.createElement("option");
        option.textContent = languages[lang].name;    
        option.value = lang;  
        fromLang.appendChild(option);
        // console.log(lang); 
    }
 
    for (let lang in languages) {
        const option = document.createElement("option");
        option.textContent = languages[lang].name;  
        option.value = lang;  
        ToLang.appendChild(option);
        // console.log(lang); 
    }
   
};

 
document.querySelector("#translate-form").addEventListener("submit", async (e) => {
    e.preventDefault();  
    const translateText = document.querySelector("#transale-text");
    const translateResult = document.querySelector("#translate-result");

 
    const url = `https://microsoft-translator-text-api3.p.rapidapi.com/translate?to=${ToLang.value}&from=${fromLang.value}`;
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json", 
            "x-rapidapi-key": "33928d43a1mshfc0bcb94acfafbdp1081e7jsn9010971be2cd",  
            "x-rapidapi-host": "microsoft-translator-text-api3.p.rapidapi.com",
      
        },
        body: JSON.stringify([{ text: translateText.value }]),  
    };

    try {
        // Send the translation request
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
         

        
        if (translateText.value.trim() === "") {
            alert("Enter text to translate");
        } else {
            
            result.forEach((el) => {
                translateResult.textContent = el.translations[0].text;
            });
        }
    } catch (error) {
        console.error(error); 
    }
});