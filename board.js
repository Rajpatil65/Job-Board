function findJob() {
    const keyword = document.getElementById('keyword').value;
    const location = document.getElementById('location').value;
    const category = document.getElementById('category').value;
    
    alert(`Searching for jobs with keyword: ${keyword}, location: ${location}, category: ${category}`);
}
