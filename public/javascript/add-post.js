const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_url = document.querySelector('textarea[name="post-body"]').value;
  
    const token = localStorage.getItem("token"); 
    await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_url
      }),
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
      }
    }); document.location.replace('/dashboard');
  };
  
  document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);
  