const Id = document.querySelector('input[name="post-id"]').value;
const editFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const postBody = document.querySelector('textarea[name="post-body"]').value;
    await fetch(`/api/posts/${Id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title, 
        postBody
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
      document.location.replace('/dashboard');
    };
    const deleteClickHandler = async function() {
        await fetch(`/api/post/${Id}`, {
          method: 'DELETE'
        });
      
        document.location.replace('/dashboard');
      };
    
  document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);
  document.querySelector('#delete-btn').addEventListener('click', deleteClickHandler);