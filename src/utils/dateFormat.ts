//! formating date
export const formatDate = (date: any) => {
  let now = Date.now();
  let different = Math.floor((now - date) / 1000);

  if (different < 1) {
    return "indicə";
  } else if (different < 60) {
    return `${different} san. əvvəl`;
  } else if (different < 3600) {
    return `${Math.floor(different / 60)} dəqiqə əvvəl`;
  } else {
    return `${("0" + date.getDate()).slice(-2)}.${(
      "0" +
      (date.getMonth() + 1)
    ).slice(-2)}.${date.getFullYear()} ${date.getHours()}:${(
      "0" + date.getMinutes()
    ).slice(-2)}`;
  }
};
