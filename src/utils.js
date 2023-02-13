const cleanUpLocalStorage = () => {
    localStorage.removeItem("generalData");
    localStorage.removeItem("experienceData");
    localStorage.removeItem("educationData");
    localStorage.removeItem("stageData");
}

export default cleanUpLocalStorage;