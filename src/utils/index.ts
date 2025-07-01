export const getAge = (birthDate: Date) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

export const getReactPeriod = () => {
    const start = new Date(2025, 3);
    const now = new Date();
    let m = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    m = Math.max(m, 0);
    return m >= 12 ? `${Math.floor(m/12)}年${m%12 ? m%12 + 'か月' : ''}` : `${m}か月`;
};
