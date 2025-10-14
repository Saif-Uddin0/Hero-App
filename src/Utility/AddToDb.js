export const getStoreApp = () => {
    const storeAppSTR = localStorage.getItem("installlist");
    if(storeAppSTR){
        const storedBook = JSON.parse(storeAppSTR);
        return storedBook;
    }
    else{
        return[];
    }
}

export const addToDb = (id) =>{
   const storedApps = getStoreApp();
   if(storedApps.includes(id)){
    alert('this is already include')
   }
   else{
    storedApps.push(id);
    const data = JSON.stringify(storedApps);
    localStorage.setItem("installlist" ,data)
   }
}

export const removeAppFromDb = (id) => {
    const storedApps = getStoreApp(); 
    const updatedStoredApps = storedApps.filter(appid => appid !== id); 
    localStorage.setItem("installlist", JSON.stringify(updatedStoredApps)); 
};