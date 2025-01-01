function loadCompaniesData() {
    fetch('companies.json') // Ładowanie pliku JSON
        .then(response => response.json()) // Parsowanie danych JSON
        .then(data => {
            displayCompanies(data); // Wywołanie funkcji wyświetlającej dane
        })
        .catch(error => {
            console.error('Błąd ładowania danych:', error); // Obsługa błędów
        });
}

function displayCompanies(companies) {
    const tableBody = document.getElementById("company-data");
    tableBody.innerHTML = ""; // Czyścimy tabelę przed wstawieniem nowych danych

    companies.forEach(company => {
        const row = document.createElement("tr");

        // Kolumna: Nazwa firmy
        const nameCell = document.createElement("td");
        nameCell.textContent = company.name;
        row.appendChild(nameCell);

        // Kolumna: Dochód
        const incomeCell = document.createElement("td");
        incomeCell.textContent = `${company.income} Nt`;
        row.appendChild(incomeCell);

        // Kolumna: Sprzęt
        const equipmentCell = document.createElement("td");
        equipmentCell.textContent = company.equipment.join(", ");
        row.appendChild(equipmentCell);

        // Dodajemy wiersz do tabeli
        tableBody.appendChild(row);
    });
}

// Wywołanie funkcji po załadowaniu strony
document.addEventListener("DOMContentLoaded", loadCompaniesData);