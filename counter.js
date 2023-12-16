fetch('https://mygateway-6blow143.wl.gateway.dev/')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const visitorCount = data['Visitor Count'];
    const dataContainer = document.getElementById('visitor-count');
    dataContainer.innerHTML = `${visitorCount}`;
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });
