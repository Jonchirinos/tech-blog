const newCommentHandler = async (event) => {
  event.preventDefault();
  alert('you made it here');

  const title = document.querySelector('#comment-desc').value.trim();
  const post_id = document.querySelector('input[name="post_id"]').value.trim();

  if (title) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ post_id, title }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      location.reload();
    } else {
      alert('Failed to create post');
    }
    console.log(response);
  }
};

const updateButtonHandler = async (event) => {
  event.preventDefault();
  const id = document.querySelector('input[name="post_id"]').value.trim();
  const title = document.querySelector('#update-title').value.trim();
  const description = document.querySelector('#update-desc').value.trim();

  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ title, description }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    document.location.replace(`/post/${id}`);
  } else {
    alert('Failed to update post');
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);

document
  .querySelector('.update-post-form')
  .addEventListener('submit', updateButtonHandler);
