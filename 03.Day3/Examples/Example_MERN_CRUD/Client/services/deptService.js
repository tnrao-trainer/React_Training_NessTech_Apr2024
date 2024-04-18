import axios from 'axios';

const baseUrl = `http://localhost:3002/Depts/`;

export const deptService = {
    getAllDepts,     
    getDeptById,    
    createDept,
    updateDept,
    deleteDept     
};


// 1. Read All 
function getAllDepts() {
    return  axios.get(baseUrl);
}

// 2. Read Single
function getDeptById(dno) {
    return  axios.get(baseUrl + dno);
}

 // 3. Create
function createDept(deptObj) {
    return axios.post(baseUrl, deptObj);
}

// 4. Update
function updateDept(deptObj) {    
    // return axios.put(baseUrl + deptObj.deptno,deptObj);
    return axios.put(baseUrl,deptObj);
}

// 5. Delete
function deleteDept(id) {
    return axios.delete(baseUrl + id);
   // return axios.delete(`${baseUrl}${id}`);
} 


