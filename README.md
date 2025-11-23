#🌍 Currency Converter Web App

A simple and interactive **Currency Converter** built using **HTML, CSS, and JavaScript**.  
It uses **live currency exchange APIs** to fetch real-time conversion rates and supports displaying:

💱 Currency names  
🔄 Real-time conversion values  
🚩 Country flags ( https://github.com/lineofflight/frankfurter)
🌐 Currency codes (https://hatscripts.github.io/circle-flags/)

This project is perfect for understanding **API integration, DOM manipulation, and UI scripting**.

🚀 Features
- Convert any amount between **two different currencies**
- Fetch **live exchange rates** using *ExchangeRate-API*
- Auto-populate currency dropdown list (no hardcoding)
- Show **currency full name** + **country flag**
- Responsive & minimal design
- Error handling for API failures

🧠 Technology Stack
1. Frontend: HTML, CSS, JavaScript
2. API Services: ExchangeRate API, Frankfurter Currency List, Country Flags API
3. Editor: VS Code
4. Version Control: Git, GitHub

⚙️ **How the API Flow Works**

Mapping is done using internal `currency → country code` mapping.
Step 1 — Load Currency List
- Fetch currency rates from **ExchangeRate-API**
- Extract all currency codes (e.g., USD, INR, EUR)
- Fetch currency full names from Frankfurter list
- Combine both & populate dropdowns

Step 2 — Show Flags
- For each currency selected:
  - Convert currency code → Country code (US → USD, IN → INR)
  - Fetch flag using `flagsapi.com`

Step 3 — Convert Currency
- When user enters amount & selects currencies:
- API call:

