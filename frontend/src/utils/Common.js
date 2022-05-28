export const getUser = () => {
    const userStr = localStorage.getItem("user");
    if(userStr) return JSON.parse(userStr);
    else return null;
  }
  
  export const getToken = () => {
     return localStorage.getItem("token") || null;
  
  }
  
  export const getName= () => {
    return localStorage.getItem("name") || null;
  
  }
  
  export const getDocId= () => {
    return localStorage.getItem("docId") || null;
  
  }
  
  export const setData = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
   }
   
  
  export const setUserSession = (token) => {
    localStorage.setItem("token", token);
  
  //  sessionStorage.setItem("user", JSON.stringify(user));
  }
  
  export const setUserSession1 = ( name) => {
  
    localStorage.setItem("name", name);
  
  //  sessionStorage.setItem("user", JSON.stringify(user));
  }
  
  export const setDocId = ( doc_id) => {
  
    localStorage.setItem("docId", doc_id);
  
  //  sessionStorage.setItem("user", JSON.stringify(user));
  }
  
  export const removeUserSession = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }