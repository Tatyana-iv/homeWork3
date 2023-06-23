function season_by_month(month) {
    if (month === 12 || month <= 2) {
      alert("Зима");
    } else if (month >= 3 && month <= 5) {
      alert("Весна");
    } else if (month >= 6 && month <= 8) {
      alert("Лето");
    } else if (month >= 9 && month <= 11) {
      alert("Осень");
    } else {
      alert("Неправильный номер месяца");
    }
  }
  
  season_by_month(3); // Весна
  season_by_month(6); // Лето
  season_by_month(9); // Осень
  season_by_month(13); // Неправильный номер месяца
