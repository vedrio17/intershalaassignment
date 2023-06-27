  function showContent(component) {
    var contentElement = document.getElementById('content');
    var content = '';
    if (component === 'home') {
      content = '<h1>Home</h1><p>This is the home page content.</p>';
    } else if (component === 'contact') {
      content = '<h1>Contact</h1><p>This is the contact information.</p>';
    } else if (component === 'information') {
      content = '<h1>Information</h1><p>This is some information.</p>';
    } else if (component === 'guide') {
      content = '<h1>Guide</h1><p>This is a guide.</p>';
    }
    contentElement.innerHTML = content;
  }


