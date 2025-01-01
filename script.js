// Przykładowe dane firm
const companies = [
    { name: "Transportex", income: 500, equipment: ["Ciężarówka"] },
    { name: "BudMat", income: 800, equipment: ["Koparka", "Betoniarka"] },
    { name: "AgroPlus", income: 300, equipment: ["Traktor"] },
];

// Funkcja do wyświetlania danych firm w tabeli
function displayCompanies() {
    const tableBody = document.getElementById("company-data");
    tableBody.innerHTML = ""; // Czyścimy tabelę    

    companies.forEach((company) => {
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
document.addEventListener("DOMContentLoaded", displayCompanies);